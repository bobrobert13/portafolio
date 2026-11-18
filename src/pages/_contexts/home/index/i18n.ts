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
		secondaryCta: 'Ver proyectos',
		portraitAlt: 'Retrato provisional del autor',
		stats: [
			{ label: 'Una persona', value: '1' },
			{ label: 'Estático', value: '100%' },
			{ label: 'De idea a sitio', value: '0 → 1' },
		],
	},
	manifesto: {
		title: 'La velocidad empieza en el diseño.',
		lead: 'Arquitectura, tolerancia, trazabilidad, servidores, sostenibilidad y costo. Decisiones que se toman antes de la primera línea y se notan en el coste de cada cambio.',
		cards: [
			{
				title: 'Arquitectura',
				detail: 'Límites, módulos y contratos antes del primer componente.',
			},
			{
				title: 'Tolerancia',
				detail: 'Fallos previstos, reintentos y degradación controlada.',
			},
			{
				title: 'Trazabilidad',
				detail: 'Logs, métricas y decisiones que se pueden reconstruir.',
			},
			{
				title: 'Servidores',
				detail: 'Entornos, despliegue y capacidad con margen.',
			},
			{
				title: 'Sostenibilidad',
				detail: 'Documentación y deuda bajo control para seguir cambiando.',
			},
			{
				title: 'Costos',
				detail: 'Menos fricción y un coste por cambio que se puede defender.',
			},
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
		title: '¿Cómo trabajo?',
		description:
			'Cuatro fases cortas. En cada una te muestro algo concreto para revisar juntos.',
		cta: 'Cuéntame tu proyecto',
		rows: [
			{
				eyebrow: 'Fase 01',
				title: 'Escucho y ordeno',
				items: [
					{ kind: 'Objetivo', label: 'Qué necesitas y qué no' },
					{ kind: 'Contenido', label: 'Textos, idiomas y referencias' },
					{ kind: 'Alcance', label: 'Qué entra en la primera versión' },
				],
			},
			{
				eyebrow: 'Fase 02',
				title: 'Diseño contigo',
				items: [
					{ kind: 'Jerarquía', label: 'Navegación y secciones' },
					{ kind: 'Tipografía', label: 'Escala, ritmo y tono' },
					{ kind: 'Sistema', label: 'Tokens, color y componentes' },
				],
			},
			{
				eyebrow: 'Fase 03',
				title: 'Construyo y reviso',
				items: [
					{ kind: 'Astro', label: 'Rutas estáticas y contenido' },
					{ kind: 'Vue', label: 'Interacción sin ruido' },
					{ kind: 'i18n', label: 'ES y EN desde el inicio' },
				],
			},
			{
				eyebrow: 'Fase 04',
				title: 'Entrego y te dejo listo',
				items: [
					{ kind: 'Build', label: 'Salida estática verificada' },
					{ kind: 'Despliegue', label: 'Dominio, CDN y analítica' },
					{ kind: 'Traspaso', label: 'Documentación y cómo editar' },
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
	about: {
		greeting: 'Hola, soy',
		paragraphs: [
			'Construyo sitios estáticos con Astro y Vue. Me interesa el punto donde el diseño y el rendimiento se tocan: tipografía, tokens y HTML que carga rápido.',
			'Este espacio reúne el trabajo, las decisiones técnicas y las cosas que aprendo mientras construyo. Si tienes un proyecto en marcha, escríbeme.',
		],
		cta: 'Escríbeme',
	},
	profile: {
		contactEyebrow: 'Contacto',
		contactLead: '¿Tienes un proyecto en mente? Hablemos por las redes.',
		emailLabel: 'Escríbeme',
		linkedin: 'LinkedIn',
		github: 'GitHub',
	},
	projects: {
		eyebrow: 'Proyectos · Soluciones',
		title: 'Experiencia y soluciones.',
		description:
			'Una selección de empresas en las que trabajé, con sus proyectos, mi participación y las soluciones que apliqué en cada uno.',
		experienceLabel: 'Empresas',
		projectsLabel: 'Proyectos',
		participationLabel: 'Mi participación',
		solutionsLabel: 'Soluciones estrella',
		stackLabel: 'Tecnologías',
		openLabel: 'Abrir carta',
		closeLabel: 'Cerrar carta',
		cardEyebrow: 'Carta de experiencia',
		cta: 'Hablemos',
		items: [
			{
				slug: 'cuantia',
				name: 'Cuantia',
				meta: 'Fintech · Frontend',
				period: '2024 — 2025',
				detail: 'Interfaces y componentes para una plataforma financiera.',
				tags: ['Vue 3', 'TypeScript', 'Vite'],
				participation: [
					'Construí la interfaz del panel financiero y sus estados de carga, error y vacío.',
					'Definí componentes reutilizables y el flujo de datos entre filtros y tablas.',
					'Revisé teclado, foco y contraste con el equipo de producto.',
				],
				projects: [
					{
						name: 'Panel de tesorería',
						detail: 'Vista operativa para cuentas, movimientos y conciliación.',
						participation: [
							'Modelé los estados de carga y error del panel.',
							'Implementé filtros y tablas con columnas configurables.',
							'Ajusté el flujo de conciliación con el equipo financiero.',
						],
						solutions: [
							{
								title: 'Tabla operativa',
								detail: 'Filtros, paginación y estados sin recargas.',
							},
							{
								title: 'Sistema de componentes',
								detail: 'Vue + TypeScript para vistas densas.',
							},
						],
						stack: ['Vue 3', 'TypeScript', 'Vite', 'REST APIs'],
					},
					{
						name: 'Portal de clientes',
						detail: 'Acceso de clientes a saldos, documentos y soporte.',
						participation: [
							'Construí el flujo de acceso y recuperación.',
							'Integré documentos y descargas firmadas.',
							'Revisé accesibilidad y mensajes de error.',
						],
						solutions: [
							{
								title: 'Acceso seguro',
								detail: 'Sesiones y recuperación con mensajes claros.',
							},
							{
								title: 'Documentos',
								detail: 'Descargas y estados de disponibilidad.',
							},
						],
						stack: ['Vue 3', 'TypeScript', 'REST APIs', 'Tailwind CSS'],
					},
				],
			},
			{
				slug: 'orinocodev',
				name: 'OrinocoDev',
				meta: 'Estudio digital · Full stack',
				period: '2023 — 2024',
				detail: 'Sitios y productos para un estudio de desarrollo.',
				tags: ['Astro', 'Vue 3', 'Node.js'],
				participation: [
					'Diseñé la arquitectura de sitios y rutas estáticas del estudio.',
					'Construí secciones y componentes reutilizables en Vue.',
					'Dejé el despliegue y la documentación para editar sin depender de mí.',
				],
				projects: [
					{
						name: 'Sitio del estudio',
						detail: 'Sitio bilingüe con casos y servicios.',
						participation: [
							'Definí rutas estáticas y contenido bilingüe.',
							'Construí secciones y componentes reutilizables.',
							'Dejé el despliegue documentado.',
						],
						solutions: [
							{
								title: 'Sitio bilingüe',
								detail: 'Astro + i18n con rutas y metadatos por idioma.',
							},
							{
								title: 'Kit editorial',
								detail: 'Bloques de contenido listos para nuevas páginas.',
							},
						],
						stack: ['Astro', 'TypeScript', 'Tailwind CSS', 'i18n'],
					},
					{
						name: 'Kit de producto',
						detail: 'Bloques de interfaz para nuevos productos del estudio.',
						participation: [
							'Extraje patrones de los sitios existentes.',
							'Construí componentes Vue con estados y variantes.',
							'Documenté el uso y los tokens.',
						],
						solutions: [
							{
								title: 'Design system',
								detail: 'Componentes y tokens para productos nuevos.',
							},
							{
								title: 'Documentación viva',
								detail: 'Ejemplos y reglas de uso junto al código.',
							},
						],
						stack: ['Vue 3', 'TypeScript', 'Tailwind CSS', 'Vite'],
					},
				],
			},
			{
				slug: 'glgfreight',
				name: 'glgfreight',
				meta: 'Logística · Web app',
				period: '2023 — 2024',
				detail: 'Panel operativo para una empresa de transporte y carga.',
				tags: ['Vue 3', 'Node.js', 'PostgreSQL'],
				participation: [
					'Desarrollé el panel operativo para seguimiento de carga y transportistas.',
					'Integré APIs internas y normalicé filtros, tablas y estados.',
					'Añadí alertas y vistas de detalle para el equipo de operaciones.',
				],
				projects: [
					{
						name: 'Torre de control',
						detail: 'Seguimiento de carga y estado de transportistas.',
						participation: [
							'Construí la vista de seguimiento en tiempo real.',
							'Integré APIs internas y normalicé estados.',
							'Añadí filtros y alertas para operaciones.',
						],
						solutions: [
							{
								title: 'Panel operativo',
								detail: 'Vue + APIs para seguimiento y gestión diaria.',
							},
							{
								title: 'Alertas de incidencias',
								detail: 'Webhooks y estados para el equipo de operaciones.',
							},
						],
						stack: ['Vue 3', 'TypeScript', 'REST APIs', 'Webhooks'],
					},
					{
						name: 'Portal de transportistas',
						detail: 'Acceso de transportistas a viajes y documentos.',
						participation: [
							'Diseñé el flujo de viajes y evidencias.',
							'Implementé cargas y validaciones.',
							'Revisé el estado vacío y los errores.',
						],
						solutions: [
							{
								title: 'Portal de viajes',
								detail: 'Vista de viajes, documentos y evidencias.',
							},
							{
								title: 'Cargas validadas',
								detail: 'Formularios y reglas para documentación.',
							},
						],
						stack: ['Vue 3', 'Node.js', 'PostgreSQL', 'Tailwind CSS'],
					},
				],
			},
			{
				slug: 'colegio-simon-bolivar',
				name: 'Colegio Simón Bolívar',
				meta: 'Educación · Sitio institucional',
				period: '2023',
				detail: 'Sitio y flujo de admisiones para una institución educativa.',
				tags: ['Astro', 'i18n'],
				participation: [
					'Construí el sitio institucional y el flujo de admisiones.',
					'Organicé el contenido bilingüe y los formularios de contacto.',
					'Revisé accesibilidad, SEO local y metadatos por idioma.',
				],
				projects: [
					{
						name: 'Sitio institucional',
						detail: 'Presentación, noticias y vida escolar.',
						participation: [
							'Organicé la arquitectura de contenido.',
							'Construí las rutas y secciones bilingües.',
							'Revisé SEO local y metadatos.',
						],
						solutions: [
							{
								title: 'Sitio bilingüe',
								detail: 'Astro + i18n con rutas y canonical por idioma.',
							},
							{
								title: 'Contenido institucional',
								detail: 'Secciones y noticias fáciles de editar.',
							},
						],
						stack: ['Astro', 'TypeScript', 'Tailwind CSS', 'i18n'],
					},
					{
						name: 'Admisiones 2025',
						detail: 'Flujo de admisiones y formularios.',
						participation: [
							'Diseñé el flujo de admisiones.',
							'Construí formularios y validaciones.',
							'Revisé accesibilidad y mensajes.',
						],
						solutions: [
							{
								title: 'Admisiones en línea',
								detail: 'Formularios y contenido estático sin servidor.',
							},
							{
								title: 'Formularios accesibles',
								detail: 'Validaciones y mensajes claros.',
							},
						],
						stack: ['Astro', 'TypeScript', 'Formularios', 'Accesibilidad'],
					},
				],
			},
			{
				slug: 'orinocoio',
				name: 'OrinocoIO',
				meta: 'Producto · Full stack',
				period: '2024 — 2025',
				detail: 'Herramientas y servicios web para un equipo de producto.',
				tags: ['Node.js', 'Vue 3', 'PostgreSQL'],
				participation: [
					'Desarrollé herramientas internas y flujos de usuario para el equipo.',
					'Modelé APIs y datos para automatizar tareas repetitivas.',
					'Dejé pruebas y despliegue documentados para seguir iterando.',
				],
				projects: [
					{
						name: 'Consola interna',
						detail: 'Herramientas internas para operaciones y soporte.',
						participation: [
							'Construí la consola y sus flujos de usuario.',
							'Modelé APIs y permisos.',
							'Dejé pruebas y despliegue documentados.',
						],
						solutions: [
							{
								title: 'Consola interna',
								detail: 'Node + Vue para operaciones y soporte.',
							},
							{
								title: 'Permisos por rol',
								detail: 'Flujos y accesos según el equipo.',
							},
						],
						stack: ['Vue 3', 'Node.js', 'PostgreSQL', 'Tailwind CSS'],
					},
					{
						name: 'Automatización de soporte',
						detail: 'Clasificación y respuestas asistidas por IA.',
						participation: [
							'Diseñé el flujo de clasificación.',
							'Integré la API del modelo y reglas de negocio.',
							'Añadí trazas y revisión humana.',
						],
						solutions: [
							{
								title: 'Triage asistido',
								detail: 'Clasificación de solicitudes con reglas y modelo.',
							},
							{
								title: 'Revisión humana',
								detail: 'Trazas y aprobación antes de responder.',
							},
						],
						stack: ['Node.js', 'LLM APIs', 'PostgreSQL', 'Webhooks'],
					},
				],
			},
		],
	},
	tools: {
		eyebrow: 'Herramientas · Tecnología e IA',
		title: 'El kit con el que construyo.',
		description:
			'Tecnologías que uso a diario y habilidades de IA que aplico al desarrollo.',
		groups: [
			{
				title: 'Frontend',
				note: 'Interfaces, componentes y sistemas de diseño.',
				items: ['Astro', 'Vue 3', 'TypeScript', 'Tailwind CSS', 'HTML y CSS', 'Vite'],
			},
			{
				title: 'Backend',
				note: 'APIs, lógica de servidor e integraciones.',
				items: ['Node.js', 'APIs REST', 'Webhooks', 'Autenticación'],
			},
			{
				title: 'Datos',
				note: 'Modelado, almacenamiento y consultas.',
				items: ['PostgreSQL', 'Prisma', 'Redis', 'SQL'],
			},
			{
				title: 'IA',
				note: 'Agentes, contexto y flujos asistidos.',
				items: ['Agent skills', 'Context engineering', 'Firecrawl', 'Graphify', 'LLM APIs'],
			},
			{
				title: 'DevOps',
				note: 'Entrega, entornos y automatización.',
				items: ['Git y GitHub', 'Docker', 'CI/CD', 'Linux', 'Vercel'],
			},
			{
				title: 'Diseño',
				note: 'Tipografía, tokens y accesibilidad.',
				items: ['Figma', 'Design tokens', 'Accesibilidad', 'Tipografía'],
			},
		],
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
		secondaryCta: 'See projects',
		portraitAlt: 'Temporary author portrait',
		stats: [
			{ label: 'One person', value: '1' },
			{ label: 'Static', value: '100%' },
			{ label: 'Idea to site', value: '0 → 1' },
		],
	},
	manifesto: {
		title: 'Speed starts in the design.',
		lead: 'Architecture, tolerance, traceability, servers, sustainability and cost. Decisions made before the first line and felt in the cost of every change.',
		cards: [
			{
				title: 'Architecture',
				detail: 'Boundaries, modules and contracts before the first component.',
			},
			{
				title: 'Tolerance',
				detail: 'Expected failures, retries and controlled degradation.',
			},
			{
				title: 'Traceability',
				detail: 'Logs, metrics and decisions that can be reconstructed.',
			},
			{
				title: 'Servers',
				detail: 'Environments, deployment and capacity with headroom.',
			},
			{
				title: 'Sustainability',
				detail: 'Documentation and debt under control to keep changing.',
			},
			{
				title: 'Costs',
				detail: 'Less friction and a cost per change you can defend.',
			},
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
		title: 'How do I work?',
		description:
			'Four short phases. At each one I show you something concrete to review together.',
		cta: 'Tell me about your project',
		rows: [
			{
				eyebrow: 'Phase 01',
				title: 'I listen and organize',
				items: [
					{ kind: 'Goal', label: "What you need and what you don't" },
					{ kind: 'Content', label: 'Copy, languages and references' },
					{ kind: 'Scope', label: 'What ships in the first version' },
				],
			},
			{
				eyebrow: 'Phase 02',
				title: 'I design with you',
				items: [
					{ kind: 'Hierarchy', label: 'Navigation and sections' },
					{ kind: 'Typography', label: 'Scale, rhythm and tone' },
					{ kind: 'System', label: 'Tokens, color and components' },
				],
			},
			{
				eyebrow: 'Phase 03',
				title: 'I build and review',
				items: [
					{ kind: 'Astro', label: 'Static routes and content' },
					{ kind: 'Vue', label: 'Interaction without noise' },
					{ kind: 'i18n', label: 'ES and EN from day one' },
				],
			},
			{
				eyebrow: 'Phase 04',
				title: 'I deliver and hand over',
				items: [
					{ kind: 'Build', label: 'Verified static output' },
					{ kind: 'Deploy', label: 'Domain, CDN and analytics' },
					{ kind: 'Handover', label: 'Docs and how to edit' },
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
	about: {
		greeting: "Hi, I'm",
		paragraphs: [
			'I build static sites with Astro and Vue. I care about the point where design and performance meet: typography, tokens and HTML that loads fast.',
			'This space collects the work, the technical decisions and what I learn while building. If you have a project in motion, write to me.',
		],
		cta: 'Email me',
	},
	profile: {
		contactEyebrow: 'Contact',
		contactLead: "Have a project in mind? Let's talk on the networks.",
		emailLabel: 'Email me',
		linkedin: 'LinkedIn',
		github: 'GitHub',
	},
	projects: {
		eyebrow: 'Projects · Solutions',
		title: 'Experience and solutions.',
		description:
			'A selection of companies I have worked with, their projects, my participation and the solutions I applied in each one.',
		experienceLabel: 'Companies',
		projectsLabel: 'Projects',
		participationLabel: 'My participation',
		solutionsLabel: 'Star solutions',
		stackLabel: 'Technologies',
		openLabel: 'Open card',
		closeLabel: 'Close card',
		cardEyebrow: 'Experience card',
		cta: "Let's talk",
		items: [
			{
				slug: 'cuantia',
				name: 'Cuantia',
				meta: 'Fintech · Frontend',
				period: '2024 — 2025',
				detail: 'Interfaces and components for a financial platform.',
				tags: ['Vue 3', 'TypeScript', 'Vite'],
				participation: [
					'I built the financial dashboard interface and its loading, error and empty states.',
					'I defined reusable components and the data flow between filters and tables.',
					'I reviewed keyboard, focus and contrast with the product team.',
				],
				projects: [
					{
						name: 'Treasury dashboard',
						detail: 'Operations view for accounts, movements and reconciliation.',
						participation: [
							'I modeled the dashboard loading and error states.',
							'I implemented filters and tables with configurable columns.',
							'I adjusted the reconciliation flow with the finance team.',
						],
						solutions: [
							{
								title: 'Operational table',
								detail: 'Filters, pagination and states without reloads.',
							},
							{
								title: 'Component system',
								detail: 'Vue + TypeScript for dense views.',
							},
						],
						stack: ['Vue 3', 'TypeScript', 'Vite', 'REST APIs'],
					},
					{
						name: 'Client portal',
						detail: 'Client access to balances, documents and support.',
						participation: [
							'I built the access and recovery flow.',
							'I integrated documents and signed downloads.',
							'I reviewed accessibility and error messages.',
						],
						solutions: [
							{
								title: 'Secure access',
								detail: 'Sessions and recovery with clear messages.',
							},
							{
								title: 'Documents',
								detail: 'Downloads and availability states.',
							},
						],
						stack: ['Vue 3', 'TypeScript', 'REST APIs', 'Tailwind CSS'],
					},
				],
			},
			{
				slug: 'orinocodev',
				name: 'OrinocoDev',
				meta: 'Digital studio · Full stack',
				period: '2023 — 2024',
				detail: 'Sites and products for a development studio.',
				tags: ['Astro', 'Vue 3', 'Node.js'],
				participation: [
					'I designed the studio site architecture and static routes.',
					'I built reusable sections and components in Vue.',
					'I left deployment and documentation ready to edit without me.',
				],
				projects: [
					{
						name: 'Studio site',
						detail: 'Bilingual site with case studies and services.',
						participation: [
							'I defined static routes and bilingual content.',
							'I built reusable sections and components.',
							'I left the deployment documented.',
						],
						solutions: [
							{
								title: 'Bilingual site',
								detail: 'Astro + i18n with per-language routes and metadata.',
							},
							{
								title: 'Editorial kit',
								detail: 'Content blocks ready for new pages.',
							},
						],
						stack: ['Astro', 'TypeScript', 'Tailwind CSS', 'i18n'],
					},
					{
						name: 'Product kit',
						detail: 'Interface blocks for the studio’s new products.',
						participation: [
							'I extracted patterns from the existing sites.',
							'I built Vue components with states and variants.',
							'I documented usage and tokens.',
						],
						solutions: [
							{
								title: 'Design system',
								detail: 'Components and tokens for new products.',
							},
							{
								title: 'Living documentation',
								detail: 'Examples and usage rules next to the code.',
							},
						],
						stack: ['Vue 3', 'TypeScript', 'Tailwind CSS', 'Vite'],
					},
				],
			},
			{
				slug: 'glgfreight',
				name: 'glgfreight',
				meta: 'Logistics · Web app',
				period: '2023 — 2024',
				detail: 'Operations dashboard for a freight and transport company.',
				tags: ['Vue 3', 'Node.js', 'PostgreSQL'],
				participation: [
					'I developed the operations dashboard for freight and carrier tracking.',
					'I integrated internal APIs and normalized filters, tables and states.',
					'I added alerts and detail views for the operations team.',
				],
				projects: [
					{
						name: 'Control tower',
						detail: 'Freight tracking and carrier status.',
						participation: [
							'I built the real-time tracking view.',
							'I integrated internal APIs and normalized states.',
							'I added filters and alerts for operations.',
						],
						solutions: [
							{
								title: 'Operations dashboard',
								detail: 'Vue + APIs for daily tracking and management.',
							},
							{
								title: 'Incident alerts',
								detail: 'Webhooks and status views for the operations team.',
							},
						],
						stack: ['Vue 3', 'TypeScript', 'REST APIs', 'Webhooks'],
					},
					{
						name: 'Carrier portal',
						detail: 'Carrier access to trips and documents.',
						participation: [
							'I designed the trip and evidence flow.',
							'I implemented uploads and validations.',
							'I reviewed the empty state and errors.',
						],
						solutions: [
							{
								title: 'Trip portal',
								detail: 'Trips, documents and evidence in one view.',
							},
							{
								title: 'Validated uploads',
								detail: 'Forms and rules for documentation.',
							},
						],
						stack: ['Vue 3', 'Node.js', 'PostgreSQL', 'Tailwind CSS'],
					},
				],
			},
			{
				slug: 'colegio-simon-bolivar',
				name: 'Colegio Simón Bolívar',
				meta: 'Education · Institutional site',
				period: '2023',
				detail: 'Site and admissions flow for a school.',
				tags: ['Astro', 'i18n'],
				participation: [
					'I built the institutional site and the admissions flow.',
					'I organized bilingual content and contact forms.',
					'I reviewed accessibility, local SEO and per-language metadata.',
				],
				projects: [
					{
						name: 'Institutional site',
						detail: 'Presentation, news and school life.',
						participation: [
							'I organized the content architecture.',
							'I built the bilingual routes and sections.',
							'I reviewed local SEO and metadata.',
						],
						solutions: [
							{
								title: 'Bilingual site',
								detail: 'Astro + i18n with per-language routes and canonical.',
							},
							{
								title: 'Institutional content',
								detail: 'Sections and news that are easy to edit.',
							},
						],
						stack: ['Astro', 'TypeScript', 'Tailwind CSS', 'i18n'],
					},
					{
						name: 'Admissions 2025',
						detail: 'Admissions flow and forms.',
						participation: [
							'I designed the admissions flow.',
							'I built forms and validations.',
							'I reviewed accessibility and messages.',
						],
						solutions: [
							{
								title: 'Online admissions',
								detail: 'Forms and static content without a server.',
							},
							{
								title: 'Accessible forms',
								detail: 'Validations and clear messages.',
							},
						],
						stack: ['Astro', 'TypeScript', 'Forms', 'Accessibility'],
					},
				],
			},
			{
				slug: 'orinocoio',
				name: 'OrinocoIO',
				meta: 'Product · Full stack',
				period: '2024 — 2025',
				detail: 'Web tools and services for a product team.',
				tags: ['Node.js', 'Vue 3', 'PostgreSQL'],
				participation: [
					'I developed internal tools and user flows for the team.',
					'I modeled APIs and data to automate repetitive tasks.',
					'I left tests and deployment documented to keep iterating.',
				],
				projects: [
					{
						name: 'Internal console',
						detail: 'Internal tools for operations and support.',
						participation: [
							'I built the console and its user flows.',
							'I modeled APIs and permissions.',
							'I left tests and deployment documented.',
						],
						solutions: [
							{
								title: 'Internal console',
								detail: 'Node + Vue for operations and support.',
							},
							{
								title: 'Role permissions',
								detail: 'Flows and access per team.',
							},
						],
						stack: ['Vue 3', 'Node.js', 'PostgreSQL', 'Tailwind CSS'],
					},
					{
						name: 'Support automation',
						detail: 'AI-assisted classification and replies.',
						participation: [
							'I designed the classification flow.',
							'I integrated the model API and business rules.',
							'I added traces and human review.',
						],
						solutions: [
							{
								title: 'Assisted triage',
								detail: 'Request classification with rules and a model.',
							},
							{
								title: 'Human review',
								detail: 'Traces and approval before replying.',
							},
						],
						stack: ['Node.js', 'LLM APIs', 'PostgreSQL', 'Webhooks'],
					},
				],
			},
		],
	},
	tools: {
		eyebrow: 'Tools · Technology and AI',
		title: 'The kit I build with.',
		description:
			'Technologies I use every day and AI skills I apply to development.',
		groups: [
			{
				title: 'Frontend',
				note: 'Interfaces, components and design systems.',
				items: ['Astro', 'Vue 3', 'TypeScript', 'Tailwind CSS', 'HTML and CSS', 'Vite'],
			},
			{
				title: 'Backend',
				note: 'APIs, server logic and integrations.',
				items: ['Node.js', 'REST APIs', 'Webhooks', 'Authentication'],
			},
			{
				title: 'Data',
				note: 'Modeling, storage and queries.',
				items: ['PostgreSQL', 'Prisma', 'Redis', 'SQL'],
			},
			{
				title: 'AI',
				note: 'Agents, context and assisted workflows.',
				items: ['Agent skills', 'Context engineering', 'Firecrawl', 'Graphify', 'LLM APIs'],
			},
			{
				title: 'DevOps',
				note: 'Delivery, environments and automation.',
				items: ['Git and GitHub', 'Docker', 'CI/CD', 'Linux', 'Vercel'],
			},
			{
				title: 'Design',
				note: 'Typography, tokens and accessibility.',
				items: ['Figma', 'Design tokens', 'Accessibility', 'Typography'],
			},
		],
	},
};

export const homeCopy: Record<Locale, HomeCopy> = { es, en };
