<script setup lang="ts">
import { computed } from 'vue';

/**
 * Shared button. Renders an <a> when `href` is set, a <button> otherwise.
 * Slots: default (label), `leading` and `trailing` (icons).
 */
interface Props {
	href?: string;
	type?: 'button' | 'submit' | 'reset';
	variant?: 'primary' | 'ghost';
	disabled?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
	type: 'button',
	variant: 'primary',
	disabled: false,
});

const base =
	'inline-flex min-h-11 items-center justify-center gap-2.5 rounded-btn border px-[1.125rem] py-3 text-sm font-medium leading-[1.4] no-underline cursor-pointer transition-colors duration-150 disabled:cursor-not-allowed disabled:opacity-55 aria-disabled:cursor-not-allowed aria-disabled:opacity-55';

const variants: Record<NonNullable<Props['variant']>, string> = {
	primary:
		'border-accent/45 bg-accent font-bold text-accent-ink shadow-btn hover:brightness-105',
	ghost:
		'border-line bg-transparent text-ink hover:border-ink/25 hover:bg-ink/5 aria-[current=page]:border-ink aria-[current=page]:text-ink',
};

const classes = computed(() => [base, variants[props.variant]]);
</script>

<template>
	<a
		v-if="props.href"
		:href="props.href"
		:class="classes"
		:aria-disabled="props.disabled || undefined"
	>
		<slot name="leading" />
		<span><slot /></span>
		<slot name="trailing" />
	</a>
	<button
		v-else
		:type="props.type"
		:disabled="props.disabled"
		:class="classes"
	>
		<slot name="leading" />
		<span><slot /></span>
		<slot name="trailing" />
	</button>
</template>
