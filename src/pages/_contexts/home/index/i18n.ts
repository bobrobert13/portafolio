import type { Locale } from '@/config';

/**
 * Home copy. Every user-visible string lives here, in both locales.
 * Laid out to mirror the reference composition in `docs/visual-reference.md`.
 */
const es = {
	meta: {
		title: 'Inicio',
		description:
			'Portafolio de Trebor: sitios estáticos, bilingües y accesibles construidos con Astro y Vue.',
	},
	hero: {
		eyebrow: 'Desarrollo web · Sitios estáticos',
		title: ['Sitios rápidos.', 'Sin ruido.', 'Para durar.'],
		lead: 'Diseño y construyo sitios que se generan en el build y se sirven como HTML. Sin dependencias innecesarias, con el foco en la velocidad y el contenido.',
		primaryCta: 'Hablemos',
		secondaryCta: 'Ver servicios',
		scrollHint: 'Desplaza',
		portraitAlt: 'Retrato provisional del autor',
		stats: [
			{ label: 'Una persona', value: '1' },
			{ label: 'Estático', value: '100%' },
			{ label: 'De idea a sitio', value: '0 → 1' },
		],
	},
	manifesto: {
		title: 'La velocidad empieza en el diseño.',
		paragraphs: [
			'Trabajo con sitios que se generan en el build y se sirven como HTML. No hay servidor que mantener ni JavaScript que hidrate cada bloque.',
			'Antes de escribir componentes defino la jerarquía, la tipografía y los tokens de color. Así el sistema aguanta páginas nuevas sin inventar estilos por el camino.',
			'El resultado es un sitio que carga rápido, se navega con teclado y se puede mantener seis meses después sin recordar cómo funcionaba.',
		],
	},
	services: {
		title: 'Qué construyo y cómo puedo ayudarte.',
		description:
			'Servicios de desarrollo web para proyectos que necesitan una base ligera, bilingüe y fácil de mantener.',
		cta: 'Ver proceso',
		items: [
			{
				number: '01',
				title: 'Sitios estáticos',
				description:
					'Astro genera el HTML en el build. El despliegue es un directorio de archivos, sin servidor.',
				tags: ['Astro', 'SSG'],
			},
			{
				number: '02',
				title: 'Diseño de interfaz',
				description:
					'Jerarquía, tipografía y tokens antes de escribir componentes.',
				tags: ['Sistema visual', 'Tokens'],
			},
			{
				number: '03',
				title: 'Accesibilidad',
				description:
					'HTML semántico, navegación por teclado y contraste comprobado.',
				tags: ['WCAG', 'Teclado'],
			},
			{
				number: '04',
				title: 'Rendimiento',
				description:
					'Presupuesto de carga, imágenes dimensionadas y cero JavaScript por defecto.',
				tags: ['Core Web Vitals', 'Imágenes'],
			},
			{
				number: '05',
				title: 'SEO técnico',
				description:
					'Canonical, hreflang y metadatos por idioma en cada ruta.',
				tags: ['i18n', 'Metadatos'],
			},
			{
				number: '06',
				title: 'Mantenimiento',
				description:
					'Dependencias mínimas y documentación para que el sitio siga en pie.',
				tags: ['Docs', 'Refactor'],
			},
		],
	},
	process: {
		title: '¿Cómo trabajamos?',
		description:
			'Cuatro fases cortas. Cada una deja algo que se puede revisar.',
		cta: 'Empezar una conversación',
		linkLabel: 'Hablemos de esta fase',
		rows: [
			{
				eyebrow: 'Fase 01',
				title: 'Diagnóstico',
				items: [
					{ kind: 'Alcance', label: 'Objetivo y límites' },
					{ kind: 'Contenido', label: 'Textos e idiomas' },
					{ kind: 'Referencias', label: 'Sitios que te gustan' },
				],
			},
			{
				eyebrow: 'Fase 02',
				title: 'Diseño',
				items: [
					{ kind: 'Jerarquía', label: 'Navegación y secciones' },
					{ kind: 'Tipografía', label: 'Escala y ritmo' },
					{ kind: 'Tokens', label: 'Color, radios y bordes' },
				],
			},
			{
				eyebrow: 'Fase 03',
				title: 'Construcción',
				items: [
					{ kind: 'Astro', label: 'Rutas estáticas' },
					{ kind: 'Componentes', label: 'Vue sin hidratación' },
					{ kind: 'i18n', label: 'ES y EN desde el inicio' },
				],
			},
			{
				eyebrow: 'Fase 04',
				title: 'Entrega',
				items: [
					{ kind: 'Build', label: 'Salida estática' },
					{ kind: 'Despliegue', label: 'CDN y dominio' },
					{ kind: 'Documentación', label: 'Cómo editar el sitio' },
				],
			},
		],
	},
	contact: {
		eyebrow: 'Trabajemos juntos',
		title: 'Tu próximo sitio empieza con una conversación.',
		description:
			'De una primera versión a una base que pueda crecer. Trabajo con negocios y personas que necesitan claridad sobre el problema antes de elegir la tecnología.',
		badge: 'Disponibilidad',
		subheading: 'Haz sitio al siguiente paso.',
		detail:
			'Cuéntame qué estás construyendo y dónde necesitas una mano. Respondo por correo.',
		meta: [
			{ label: 'Enfoque', value: 'Sitios estáticos y bilingües' },
			{ label: 'Método', value: 'Diseño y código en el mismo proceso' },
		],
		panel: {
			eyebrow: 'De 0 a 1',
			from: '0',
			to: '1',
			lines: 'Una idea. Una primera versión. Un sitio propio.',
			cta: 'Escríbeme',
		},
	},
	testimonials: {
		eyebrow: 'Experiencias · Espacio por llenar',
		items: [
			{
				label: 'Testimonio pendiente · 01',
				quote: 'El primer proyecto tendrá aquí su historia.',
				author: 'Nombre y proyecto',
			},
			{
				label: 'Testimonio pendiente · 02',
				quote: 'El segundo contará cómo fue el proceso.',
				author: 'Nombre y proyecto',
			},
			{
				label: 'Testimonio pendiente · 03',
				quote: 'El tercero puede venir de alguien que leyó una guía.',
				author: 'Nombre y proyecto',
			},
		],
		stackLabel: 'Stack que uso',
		stack: ['Astro', 'Vue', 'Tailwind CSS', 'TypeScript', 'Node.js'],
	},
	about: {
		greeting: 'Hola, soy',
		paragraphs: [
			'Construyo sitios estáticos con Astro y Vue. Me interesa el punto donde el diseño y el rendimiento se tocan: tipografía, tokens y HTML que carga rápido.',
			'Este espacio reúne el trabajo, las decisiones técnicas y las cosas que aprendo mientras construyo. Si tienes un proyecto en marcha, escríbeme.',
		],
		cta: 'Escríbeme',
	},
};

export type HomeCopy = typeof es;

const en: HomeCopy = {
	meta: {
		title: 'Home',
		description:
			"Trebor's portfolio: static, bilingual, accessible sites built with Astro and Vue.",
	},
	hero: {
		eyebrow: 'Web development · Static sites',
		title: ['Fast sites.', 'No noise.', 'Built to last.'],
		lead: 'I design and build sites that render at build time and ship as HTML. No unnecessary dependencies, with speed and content as the focus.',
		primaryCta: "Let's talk",
		secondaryCta: 'See services',
		scrollHint: 'Scroll',
		portraitAlt: 'Temporary author portrait',
		stats: [
			{ label: 'One person', value: '1' },
			{ label: 'Static', value: '100%' },
			{ label: 'Idea to site', value: '0 → 1' },
		],
	},
	manifesto: {
		title: 'Speed starts in the design.',
		paragraphs: [
			'I work with sites that are generated at build time and served as HTML. There is no server to maintain and no JavaScript hydrating every block.',
			'Before writing components I define hierarchy, typography and color tokens. That keeps the system usable for new pages without inventing one-off styles.',
			'The result is a site that loads fast, works with a keyboard and can be maintained six months later without remembering how it worked.',
		],
	},
	services: {
		title: 'What I build and how I can help.',
		description:
			'Web development services for projects that need a light, bilingual and maintainable foundation.',
		cta: 'See process',
		items: [
			{
				number: '01',
				title: 'Static sites',
				description:
					'Astro generates the HTML at build time. Deployment is a directory of files, no server.',
				tags: ['Astro', 'SSG'],
			},
			{
				number: '02',
				title: 'Interface design',
				description:
					'Hierarchy, typography and tokens before writing components.',
				tags: ['Visual system', 'Tokens'],
			},
			{
				number: '03',
				title: 'Accessibility',
				description:
					'Semantic HTML, keyboard navigation and checked contrast.',
				tags: ['WCAG', 'Keyboard'],
			},
			{
				number: '04',
				title: 'Performance',
				description:
					'Load budget, sized images and zero JavaScript by default.',
				tags: ['Core Web Vitals', 'Images'],
			},
			{
				number: '05',
				title: 'Technical SEO',
				description:
					'Canonical, hreflang and per-language metadata on every route.',
				tags: ['i18n', 'Metadata'],
			},
			{
				number: '06',
				title: 'Maintenance',
				description:
					'Minimal dependencies and documentation so the site keeps standing.',
				tags: ['Docs', 'Refactor'],
			},
		],
	},
	process: {
		title: 'How do we work?',
		description: 'Four short phases. Each one leaves something to review.',
		cta: 'Start a conversation',
		linkLabel: "Let's talk about this phase",
		rows: [
			{
				eyebrow: 'Phase 01',
				title: 'Discovery',
				items: [
					{ kind: 'Scope', label: 'Goal and limits' },
					{ kind: 'Content', label: 'Copy and languages' },
					{ kind: 'References', label: 'Sites you like' },
				],
			},
			{
				eyebrow: 'Phase 02',
				title: 'Design',
				items: [
					{ kind: 'Hierarchy', label: 'Navigation and sections' },
					{ kind: 'Typography', label: 'Scale and rhythm' },
					{ kind: 'Tokens', label: 'Color, radii and borders' },
				],
			},
			{
				eyebrow: 'Phase 03',
				title: 'Build',
				items: [
					{ kind: 'Astro', label: 'Static routes' },
					{ kind: 'Components', label: 'Vue without hydration' },
					{ kind: 'i18n', label: 'ES and EN from day one' },
				],
			},
			{
				eyebrow: 'Phase 04',
				title: 'Delivery',
				items: [
					{ kind: 'Build', label: 'Static output' },
					{ kind: 'Deploy', label: 'CDN and domain' },
					{ kind: 'Docs', label: 'How to edit the site' },
				],
			},
		],
	},
	contact: {
		eyebrow: "Let's build together",
		title: 'Your next site starts with a conversation.',
		description:
			'From a first version to a foundation that can grow. I work with businesses and people who need clarity on the problem before choosing the technology.',
		badge: 'Availability',
		subheading: 'Make room for the next step.',
		detail:
			"Tell me what you're building and where you need a hand. I reply by email.",
		meta: [
			{ label: 'Focus', value: 'Static and bilingual sites' },
			{ label: 'Method', value: 'Design and code in the same process' },
		],
		panel: {
			eyebrow: 'From 0 to 1',
			from: '0',
			to: '1',
			lines: 'An idea. A first version. A site of your own.',
			cta: 'Email me',
		},
	},
	testimonials: {
		eyebrow: 'Experiences · Space to fill',
		items: [
			{
				label: 'Testimonial pending · 01',
				quote: 'The first project will tell its story here.',
				author: 'Name and project',
			},
			{
				label: 'Testimonial pending · 02',
				quote: 'The second one will describe how the process went.',
				author: 'Name and project',
			},
			{
				label: 'Testimonial pending · 03',
				quote: 'The third may come from someone who read a guide.',
				author: 'Name and project',
			},
		],
		stackLabel: 'Stack I use',
		stack: ['Astro', 'Vue', 'Tailwind CSS', 'TypeScript', 'Node.js'],
	},
	about: {
		greeting: "Hi, I'm",
		paragraphs: [
			'I build static sites with Astro and Vue. I care about the point where design and performance meet: typography, tokens and HTML that loads fast.',
			'This space collects the work, the technical decisions and what I learn while building. If you have a project in motion, write to me.',
		],
		cta: 'Email me',
	},
};

export const homeCopy: Record<Locale, HomeCopy> = { es, en };
