/*
 * Wheel smoothing for fine pointers.
 *
 * The page keeps a real scroll position — this only eases it towards a target,
 * so the sticky sheets, their scroll-linked locals and native anchors keep
 * working. Touch devices (native momentum) and `prefers-reduced-motion` keep
 * the browser's own scrolling untouched.
 */

const FINE_POINTER = '(hover: hover) and (pointer: fine)';
const REDUCED = '(prefers-reduced-motion: reduce)';

/** Approach rate in 1/s. Lower = longer, heavier glide. */
const STIFFNESS = 8;
const KEY_STEP = 96;

let enabled = false;
let listening = false;
let target = 0;
let current = 0;
let frame = 0;
let lastTime = 0;
let written = Number.NaN;

const maxScroll = () => Math.max(0, document.documentElement.scrollHeight - window.innerHeight);
const clamp = (value: number) => Math.min(maxScroll(), Math.max(0, value));

const write = (value: number) => {
	written = value;
	window.scrollTo({ top: value, behavior: 'instant' });
};

const step = (now: number) => {
	const elapsed = lastTime ? Math.min(0.064, (now - lastTime) / 1000) : 1 / 60;
	lastTime = now;

	const goal = clamp(target);
	current += (goal - current) * (1 - Math.exp(-elapsed * STIFFNESS));

	if (Math.abs(goal - current) < 0.4) {
		current = goal;
		frame = 0;
		lastTime = 0;
		write(current);
		return;
	}

	write(current);
	frame = requestAnimationFrame(step);
};

const run = () => {
	if (frame) return;
	lastTime = 0;
	frame = requestAnimationFrame(step);
};

/** Scroll to a position; `immediate` lands it in one frame. */
export const scrollToY = (top: number, immediate = false) => {
	if (!enabled) {
		window.scrollTo({ top, behavior: immediate ? 'instant' : 'smooth' });
		return;
	}

	target = clamp(top);

	if (!immediate) {
		run();
		return;
	}

	if (frame) cancelAnimationFrame(frame);
	frame = 0;
	lastTime = 0;
	current = target;
	write(current);
};

const syncScroll = () => {
	current = target = window.scrollY;
	written = current;
};

/* A panel that scrolls itself (the project dialog body) keeps the wheel. */
const scrollableUnder = (node: EventTarget | null) => {
	for (let el = node instanceof Element ? node : null; el; el = el.parentElement) {
		if (el === document.body || el === document.documentElement) return false;
		if (el.closest('dialog[open]')) return true;
		if (el.scrollHeight > el.clientHeight + 1) {
			const overflowY = getComputedStyle(el).overflowY;
			if (overflowY === 'auto' || overflowY === 'scroll') return true;
		}
	}
	return false;
};

const editableUnder = (node: EventTarget | null) =>
	node instanceof Element &&
	!!node.closest('input, textarea, select, [contenteditable]:not([contenteditable="false"])');

/* Space activates a focused control; it only scrolls when nothing owns it. */
const activatableUnder = (node: EventTarget | null) =>
	node instanceof Element && !!node.closest('button, a[href], summary, [role="button"]');

const onWheel = (event: WheelEvent) => {
	/* Pinch zoom, browser gestures and horizontal panning stay native. */
	if (event.ctrlKey || event.metaKey || event.altKey || event.shiftKey) return;
	if (Math.abs(event.deltaX) >= Math.abs(event.deltaY)) return;
	if (scrollableUnder(event.target)) return;

	const unit = event.deltaMode === 1 ? 16 : event.deltaMode === 2 ? window.innerHeight : 1;
	event.preventDefault();
	target = clamp(target + event.deltaY * unit);
	run();
};

const onKey = (event: KeyboardEvent) => {
	if (event.defaultPrevented || event.altKey || event.ctrlKey || event.metaKey) return;
	if (editableUnder(event.target) || scrollableUnder(event.target)) return;
	if ((event.key === ' ' || event.key === 'Spacebar') && activatableUnder(event.target)) return;

	const page = window.innerHeight * 0.85;
	let delta: number | null = null;

	switch (event.key) {
		case 'ArrowDown':
			delta = KEY_STEP;
			break;
		case 'ArrowUp':
			delta = -KEY_STEP;
			break;
		case 'PageDown':
			delta = page;
			break;
		case 'PageUp':
			delta = -page;
			break;
		case ' ':
			delta = event.shiftKey ? -page : page;
			break;
		case 'Home':
		case 'End':
			event.preventDefault();
			target = event.key === 'Home' ? 0 : maxScroll();
			run();
			return;
		default:
			return;
	}

	event.preventDefault();
	target = clamp(target + delta);
	run();
};

/* Anything that moved the page outside this module (scrollbar, find-in-page,
   focus) takes over: the easing stops and adopts the real position. */
const onScroll = () => {
	if (frame || Math.abs(window.scrollY - written) < 1.5) return;
	syncScroll();
};

const onResize = () => {
	current = clamp(current);
	target = clamp(target);
};

const enable = () => {
	if (enabled) return;
	enabled = true;
	syncScroll();

	if (listening) return;
	window.addEventListener('wheel', onWheel, { passive: false });
	window.addEventListener('keydown', onKey);
	window.addEventListener('scroll', onScroll, { passive: true });
	window.addEventListener('resize', onResize);
	listening = true;
};

const disable = () => {
	if (!enabled) return;
	enabled = false;

	if (frame) cancelAnimationFrame(frame);
	frame = 0;
	lastTime = 0;

	window.removeEventListener('wheel', onWheel);
	window.removeEventListener('keydown', onKey);
	window.removeEventListener('scroll', onScroll);
	window.removeEventListener('resize', onResize);
	listening = false;
};

/** Follows the pointer and motion preferences for the life of the page. */
export const initSmoothScroll = () => {
	const fine = window.matchMedia(FINE_POINTER);
	const reduced = window.matchMedia(REDUCED);
	const update = () => (fine.matches && !reduced.matches ? enable() : disable());

	fine.addEventListener('change', update);
	reduced.addEventListener('change', update);
	update();
};
