import type { Locale } from '@/config';

/**
 * Home copy. Every user-visible string lives here, in both locales.
 * Laid out to mirror the reference composition in `docs/visual-reference.md`.
 */
const es = {
	meta: {
		title: 'Sitios estáticos, bilingües y accesibles',
		description:
			'Portafolio de Trebor: sitios estáticos, bilingües y accesibles con Astro y Vue. Diseño, rendimiento y HTML semántico sin dependencias innecesarias.',
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
		eyebrow: 'Manifiesto',
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
		tabsLabel: 'Servicios',
		specimens: {
			build: {
				label: 'Salida del build',
				lines: [
					'$ npm run build',
					'├─ /en/index.html',
					'├─ /es/index.html',
					'└─ /index.html',
					'',
					'3 páginas · 0 scripts de hidratación',
				],
				note: 'El artefacto es dist/. No hay proceso en ejecución.',
			},
			scale: {
				label: 'Escala real del sitio',
				rows: [
					{ meta: 'Display · 112 / 1.00 / −0.04', sample: 'Sitios rápidos.' },
					{ meta: 'Headline · 56 / 1.05 / −0.032', sample: 'Experiencia y soluciones.' },
					{ meta: 'Label · 11 / 0.10 em', sample: 'Proyectos · Soluciones' },
				],
				note: 'Muestras reducidas; los valores son los reales.',
			},
			focus: {
				label: 'Pruébalo: pulsa Tab',
				action: 'Hablemos',
				hint: 'El anillo es el foco real del sistema.',
				swatches: [
					{ tone: 'accent', label: 'acento vivo · solo relleno' },
					{ tone: 'accent-text', label: 'acento profundo · texto pequeño' },
				],
			},
			payload: {
				label: 'Lo que envía esta página',
				stats: [
					{ value: '03', label: 'rutas de HTML escritas en el build' },
					{ value: '01', label: 'script de página: scroll y pantallas' },
					{ value: '00', label: 'fuentes o peticiones a terceros' },
				],
				note: 'Sin imágenes en esta sección. El CSS es una sola hoja.',
			},
			seo: {
				label: 'Cabecera real, sin resumir',
				lines: [
					'<link rel="canonical"',
					'      href="https://trebor.dev/es/">',
					'<link rel="alternate" hreflang="en"',
					'      href="https://trebor.dev/en/">',
					'<link rel="alternate" hreflang="es"',
					'      href="https://trebor.dev/es/">',
					'<link rel="alternate" hreflang="x-default"',
					'      href="https://trebor.dev/es/">',
				],
			},
			docs: {
				label: 'Lo que queda al entregar',
				files: [
					{ name: 'AGENTS.md', role: 'reglas y límites' },
					{ name: 'DESIGN.md', role: 'tokens y componentes' },
					{ name: 'docs/system-design.md', role: 'cómo está construido' },
					{ name: 'docs/decisions/', role: 'por qué se decidió así' },
				],
			},
		},
		items: [
			{
				number: '01',
				slug: 'static',
				specimen: 'build',
				title: 'Sitios estáticos',
				description:
					'Astro genera el HTML en el build. El despliegue es un directorio de archivos, sin servidor.',
				tags: ['Astro', 'SSG'],
			},
			{
				number: '02',
				slug: 'interface',
				specimen: 'scale',
				title: 'Diseño de interfaz',
				description:
					'Jerarquía, tipografía y tokens antes de escribir componentes.',
				tags: ['Sistema visual', 'Tokens'],
			},
			{
				number: '03',
				slug: 'a11y',
				specimen: 'focus',
				title: 'Accesibilidad',
				description:
					'HTML semántico, navegación por teclado y contraste comprobado.',
				tags: ['WCAG', 'Teclado'],
			},
			{
				number: '04',
				slug: 'performance',
				specimen: 'payload',
				title: 'Rendimiento',
				description:
					'Presupuesto de carga, imágenes dimensionadas y cero JavaScript por defecto.',
				tags: ['Core Web Vitals', 'Imágenes'],
			},
			{
				number: '05',
				slug: 'seo',
				specimen: 'seo',
				title: 'SEO técnico',
				description:
					'Canonical, hreflang y metadatos por idioma en cada ruta.',
				tags: ['i18n', 'Metadatos'],
			},
			{
				number: '06',
				slug: 'maintenance',
				specimen: 'docs',
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
			'Cuatro conversaciones, no cuatro entregas. En cada una revisamos algo concreto: tú decides lo que te toca y yo te devuelvo una pieza para mirar juntos.',
		cta: 'Cuéntame tu proyecto',
		youLabel: 'Tú',
		meLabel: 'Yo',
		closing: {
			lead: 'Escucho antes de proponer.',
			tail: 'Todo lo demás sale de ahí.',
		},
		rows: [
			{
				title: 'Escucho y ordeno',
				give: 'Te llevas: un alcance claro',
				you: 'Me cuentas qué necesitas, qué no y con qué cuentas.',
				me: 'Te devuelvo qué entra en la primera versión y qué espera.',
			},
			{
				title: 'Diseño contigo',
				give: 'Te llevas: una primera versión',
				you: 'Decides jerarquía, tono y referencias.',
				me: 'Pongo la estructura, la tipografía y el sistema en una versión navegable.',
			},
			{
				title: 'Construyo y reviso',
				give: 'Te llevas: el sitio funcionando',
				you: 'Revisas lo que ves y lo que falta.',
				me: 'Construyo, corrijo y dejo el sitio en los dos idiomas.',
			},
			{
				title: 'Entrego y te dejo listo',
				give: 'Te llevas: el traspaso',
				you: 'Recibes el sitio y sabes cómo editarlo.',
				me: 'Despliego, reviso y te dejo la documentación.',
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
		form: {
			eyebrow: 'Escríbeme',
			lead: 'Una idea. Una primera versión. Un sitio propio.',
			nameLabel: 'Nombre',
			namePlaceholder: 'Tu nombre',
			emailLabel: 'Correo',
			emailPlaceholder: 'tu@correo.com',
			messageLabel: 'Mensaje',
			messagePlaceholder: 'Qué necesitas y para cuándo',
			submit: 'Enviar mensaje',
			errors: {
				name: 'Escribe tu nombre.',
				email: 'Escribe un correo válido.',
				message: 'Escribe un mensaje.',
			},
			status:
				'Se abrió tu cliente de correo con el mensaje. Si no, usa el enlace de abajo.',
			unconfigured: 'El envío no está configurado todavía.',
			fallbackPrefix: 'O escríbeme a',
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
			'Cinco empresas y diez proyectos. Qué construí en cada uno y qué soluciones quedaron.',
		experienceLabel: 'Empresas',
		projectsLabel: 'Proyectos',
		participationLabel: 'Mi participación',
		solutionsLabel: 'Soluciones',
		stackLabel: 'Tecnologías',
		keyboardHint: '← → para cambiar',
		groupLabel: 'Empresas',
		cta: 'Hablemos',
		items: [
			{
				slug: 'cuantia',
				name: 'Cuantia',
				meta: 'Fintech · Frontend',
				period: '2024 — 2025',
				mark: 'CU',
				logo: '',
				context:
					'Plataforma financiera donde el equipo gestiona cuentas, movimientos y conciliación, y los clientes consultan saldos y documentos desde su propio acceso.',
				tags: ['Vue 3', 'TypeScript', 'Vite'],
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
								title: 'Componentes de tabla',
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
								title: 'Acceso y recuperación',
								detail: 'Sesiones, recuperación y mensajes de error claros.',
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
				mark: 'OD',
				logo: '',
				context:
					'Estudio de desarrollo que construye sitios y productos para sus clientes; el trabajo iba desde la web pública hasta los bloques de interfaz reutilizados en proyectos nuevos.',
				tags: ['Astro', 'Vue 3', 'Node.js'],
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
								title: 'Sistema de componentes',
								detail: 'Componentes y tokens para productos nuevos.',
							},
							{
								title: 'Reglas de uso',
								detail: 'Ejemplos y reglas junto al componente.',
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
				mark: 'GL',
				logo: '',
				context:
					'Empresa de transporte y carga que coordina viajes y transportistas; operaciones necesitaba seguir la carga, validar evidencias y actuar sobre las incidencias del día.',
				tags: ['Vue 3', 'Node.js', 'PostgreSQL'],
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
								title: 'Seguimiento en vivo',
								detail: 'Vue + APIs para carga y transportistas.',
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
								title: 'Viajes y evidencias',
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
				mark: 'CS',
				logo: '',
				context:
					'Institución educativa que presenta su propuesta y vida escolar, y abre cada año un proceso de admisiones en línea para nuevas familias.',
				tags: ['Astro', 'i18n'],
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
								title: 'Rutas y metadatos',
								detail: 'Canonical, hreflang y contenido por idioma.',
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
				mark: 'OI',
				logo: '',
				context:
					'Equipo de producto que trabaja con herramientas internas; el objetivo era automatizar la clasificación de solicitudes y ordenar los accesos por rol.',
				tags: ['Node.js', 'Vue 3', 'PostgreSQL'],
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
								title: 'Vista de operaciones',
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
								title: 'Clasificación asistida',
								detail: 'Solicitudes clasificadas con reglas y modelo.',
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
		countLabel: 'herramientas',
		detailLabel: 'Para qué la uso',
		tabsLabel: 'Grupos de herramientas',
		groups: [
			{
				slug: 'frontend',
				title: 'Frontend',
				note: 'Interfaces, componentes y sistemas de diseño.',
				items: [
					{ name: 'Astro', use: 'Rutas, layout y contenido generados en el build.' },
					{ name: 'Vue 3', use: 'Componentes con estado; aquí se renderizan en el servidor.' },
					{ name: 'TypeScript', use: 'Tipos estrictos en componentes, copy y configuración.' },
					{ name: 'Tailwind CSS', use: 'Utilidades en el markup; los tokens viven en CSS.' },
					{ name: 'HTML y CSS', use: 'La base: semántica, capas y estilos sin framework.' },
					{ name: 'Vite', use: 'Build y recarga del proyecto mientras se edita.' },
				],
			},
			{
				slug: 'backend',
				title: 'Backend',
				note: 'APIs, lógica de servidor e integraciones.',
				items: [
					{ name: 'Node.js', use: 'Scripts de build y utilidades del proyecto.' },
					{ name: 'APIs REST', use: 'Integración con servicios en los proyectos que las pedían.' },
					{ name: 'Webhooks', use: 'Avisos entre servicios para estados y alertas.' },
					{ name: 'Autenticación', use: 'Acceso, sesiones y recuperación en portales de cliente.' },
				],
			},
			{
				slug: 'data',
				title: 'Datos',
				note: 'Modelado, almacenamiento y consultas.',
				items: [
					{ name: 'PostgreSQL', use: 'Datos relacionales en los proyectos con backend.' },
					{ name: 'Prisma', use: 'Modelo y consultas tipadas sobre la base de datos.' },
					{ name: 'Redis', use: 'Caché y datos efímeros cuando el proyecto lo necesita.' },
					{ name: 'SQL', use: 'Consultas directas para leer y ajustar datos.' },
				],
			},
			{
				slug: 'ai',
				title: 'IA',
				note: 'Agentes, contexto y flujos asistidos.',
				items: [
					{ name: 'Agent skills', use: 'Instrucciones reutilizables para tareas del proyecto.' },
					{ name: 'Context engineering', use: 'Preparar el contexto que el modelo necesita para acertar.' },
					{ name: 'Firecrawl', use: 'Extraer contenido de la web para investigación y referencias.' },
					{ name: 'Graphify', use: 'Convertir código y documentación en grafos consultables.' },
					{ name: 'LLM APIs', use: 'Clasificación y respuestas asistidas con reglas de negocio.' },
				],
			},
			{
				slug: 'devops',
				title: 'DevOps',
				note: 'Entrega, entornos y automatización.',
				items: [
					{ name: 'Git y GitHub', use: 'Historial, ramas y revisión de cambios.' },
					{ name: 'Docker', use: 'Entornos reproducibles para probar y desplegar.' },
					{ name: 'CI/CD', use: 'Build y verificación automáticos antes de publicar.' },
					{ name: 'Linux', use: 'Servidores y terminal donde corren los despliegues.' },
					{ name: 'Vercel', use: 'Publicación del build estático con dominio y CDN.' },
				],
			},
			{
				slug: 'design',
				title: 'Diseño',
				note: 'Tipografía, tokens y accesibilidad.',
				items: [
					{ name: 'Figma', use: 'Composición y revisión visual antes del código.' },
					{ name: 'Design tokens', use: 'Color, tipografía y radios en un solo lugar.' },
					{ name: 'Accesibilidad', use: 'Teclado, foco, contraste y HTML semántico.' },
					{ name: 'Tipografía', use: 'Escala, ritmo y tracking del sistema.' },
				],
			},
		],
	},
};

export type HomeCopy = typeof es;

const en: HomeCopy = {
	meta: {
		title: 'Fast, bilingual, accessible static sites',
		description:
			"Trebor's portfolio: static, bilingual, accessible sites built with Astro and Vue. Design, performance and semantic HTML without unnecessary dependencies.",
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
		eyebrow: 'Manifesto',
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
		tabsLabel: 'Services',
		specimens: {
			build: {
				label: 'Build output',
				lines: [
					'$ npm run build',
					'├─ /en/index.html',
					'├─ /es/index.html',
					'└─ /index.html',
					'',
					'3 pages · 0 hydration scripts',
				],
				note: 'The artifact is dist/. No process keeps running.',
			},
			scale: {
				label: 'The site’s real scale',
				rows: [
					{ meta: 'Display · 112 / 1.00 / −0.04', sample: 'Fast sites.' },
					{ meta: 'Headline · 56 / 1.05 / −0.032', sample: 'Experience and solutions.' },
					{ meta: 'Label · 11 / 0.10 em', sample: 'Projects · Solutions' },
				],
				note: 'Reduced samples; the values are the real ones.',
			},
			focus: {
				label: 'Try it: press Tab',
				action: "Let's talk",
				hint: 'The ring is the system’s real focus state.',
				swatches: [
					{ tone: 'accent', label: 'live accent · fill only' },
					{ tone: 'accent-text', label: 'deep accent · small text' },
				],
			},
			payload: {
				label: 'What this page ships',
				stats: [
					{ value: '03', label: 'routes of HTML written at build' },
					{ value: '01', label: 'page script: scroll and sheets' },
					{ value: '00', label: 'remote fonts or third-party requests' },
				],
				note: 'No images in this section. The CSS is a single sheet.',
			},
			seo: {
				label: 'The real head, not a summary',
				lines: [
					'<link rel="canonical"',
					'      href="https://trebor.dev/en/">',
					'<link rel="alternate" hreflang="en"',
					'      href="https://trebor.dev/en/">',
					'<link rel="alternate" hreflang="es"',
					'      href="https://trebor.dev/es/">',
					'<link rel="alternate" hreflang="x-default"',
					'      href="https://trebor.dev/es/">',
				],
			},
			docs: {
				label: 'What you get at handover',
				files: [
					{ name: 'AGENTS.md', role: 'rules and limits' },
					{ name: 'DESIGN.md', role: 'tokens and components' },
					{ name: 'docs/system-design.md', role: 'how it is built' },
					{ name: 'docs/decisions/', role: 'why it was decided that way' },
				],
			},
		},
		items: [
			{
				number: '01',
				slug: 'static',
				specimen: 'build',
				title: 'Static sites',
				description:
					'Astro generates the HTML at build time. Deployment is a directory of files, no server.',
				tags: ['Astro', 'SSG'],
			},
			{
				number: '02',
				slug: 'interface',
				specimen: 'scale',
				title: 'Interface design',
				description: 'Hierarchy, typography and tokens before writing components.',
				tags: ['Visual system', 'Tokens'],
			},
			{
				number: '03',
				slug: 'a11y',
				specimen: 'focus',
				title: 'Accessibility',
				description: 'Semantic HTML, keyboard navigation and checked contrast.',
				tags: ['WCAG', 'Keyboard'],
			},
			{
				number: '04',
				slug: 'performance',
				specimen: 'payload',
				title: 'Performance',
				description: 'Load budget, sized images and zero JavaScript by default.',
				tags: ['Core Web Vitals', 'Images'],
			},
			{
				number: '05',
				slug: 'seo',
				specimen: 'seo',
				title: 'Technical SEO',
				description: 'Canonical, hreflang and per-language metadata on every route.',
				tags: ['i18n', 'Metadata'],
			},
			{
				number: '06',
				slug: 'maintenance',
				specimen: 'docs',
				title: 'Maintenance',
				description: 'Minimal dependencies and documentation so the site keeps standing.',
				tags: ['Docs', 'Refactor'],
			},
		],
	},

	process: {
		title: 'How do I work?',
		description:
			'Four conversations, not four handovers. In each one we review something concrete: you decide your part and I hand back a piece to look at together.',
		cta: 'Tell me about your project',
		youLabel: 'You',
		meLabel: 'Me',
		closing: {
			lead: 'I listen before I propose.',
			tail: 'Everything else follows from there.',
		},
		rows: [
			{
				title: 'I listen and organize',
				give: 'You get: a clear scope',
				you: 'You tell me what you need, what you don’t and what you have.',
				me: 'I hand back what ships in the first version and what waits.',
			},
			{
				title: 'I design with you',
				give: 'You get: a first version',
				you: 'You decide hierarchy, tone and references.',
				me: 'I put structure, typography and the system into a navigable version.',
			},
			{
				title: 'I build and review',
				give: 'You get: the site working',
				you: 'You review what you see and what is missing.',
				me: 'I build, fix and leave the site in both languages.',
			},
			{
				title: 'I deliver and leave you ready',
				give: 'You get: the handover',
				you: 'You receive the site and know how to edit it.',
				me: 'I deploy, review and leave the documentation.',
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
		form: {
			eyebrow: 'Email me',
			lead: 'An idea. A first version. A site of your own.',
			nameLabel: 'Name',
			namePlaceholder: 'Your name',
			emailLabel: 'Email',
			emailPlaceholder: 'you@email.com',
			messageLabel: 'Message',
			messagePlaceholder: 'What you need and for when',
			submit: 'Send message',
			errors: {
				name: 'Enter your name.',
				email: 'Enter a valid email address.',
				message: 'Write a message.',
			},
			status:
				'Your email client opened with the message. If it didn’t, use the link below.',
			unconfigured: 'Sending is not configured yet.',
			fallbackPrefix: 'Or email me at',
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
			'Five companies and ten projects. What I built in each and what stayed.',
		experienceLabel: 'Companies',
		projectsLabel: 'Projects',
		participationLabel: 'My participation',
		solutionsLabel: 'Solutions',
		stackLabel: 'Technologies',
		keyboardHint: '← → to switch',
		groupLabel: 'Companies',
		cta: "Let's talk",
		items: [
			{
				slug: 'cuantia',
				name: 'Cuantia',
				meta: 'Fintech · Frontend',
				period: '2024 — 2025',
				mark: 'CU',
				logo: '',
				context:
					'A financial platform where the team manages accounts, movements and reconciliation, and clients check balances and documents from their own login.',
				tags: ['Vue 3', 'TypeScript', 'Vite'],
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
								title: 'Table components',
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
								title: 'Access and recovery',
								detail: 'Sessions, recovery and clear error messages.',
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
				mark: 'OD',
				logo: '',
				context:
					'A development studio that builds sites and products for its clients; the work ran from the public site to the interface blocks reused in new projects.',
				tags: ['Astro', 'Vue 3', 'Node.js'],
				projects: [
					{
						name: 'Studio site',
						detail: 'Bilingual site with case studies and services.',
						participation: [
							'I defined static routes and bilingual content.',
							'I built reusable sections and components.',
							'I handed over deployment and docs so the site could be edited without me.',
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
								title: 'Component system',
								detail: 'Components and tokens for new products.',
							},
							{
								title: 'Usage rules',
								detail: 'Examples and rules next to the component.',
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
				mark: 'GL',
				logo: '',
				context:
					'A freight and transport company coordinating trips and carriers; operations needed to track loads, validate evidence and act on the day’s incidents.',
				tags: ['Vue 3', 'Node.js', 'PostgreSQL'],
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
								title: 'Live tracking',
								detail: 'Vue + APIs for loads and carriers.',
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
								title: 'Trips and evidence',
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
				mark: 'CS',
				logo: '',
				context:
					'A school that presents its programme and school life, and opens an online admissions process every year.',
				tags: ['Astro', 'i18n'],
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
								title: 'Routes and metadata',
								detail: 'Canonical, hreflang and per-language content.',
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
				mark: 'OI',
				logo: '',
				context:
					'A product team working with internal tools; the goal was to automate request classification and organize access by role.',
				tags: ['Node.js', 'Vue 3', 'PostgreSQL'],
				projects: [
					{
						name: 'Internal console',
						detail: 'Internal tools for operations and support.',
						participation: [
							'I built the console and its user flows.',
							'I modeled APIs and permissions.',
							'I documented tests and deployment so the team could keep iterating.',
						],
						solutions: [
							{
								title: 'Operations view',
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
								title: 'Assisted classification',
								detail: 'Requests classified with rules and a model.',
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
		countLabel: 'tools',
		detailLabel: 'What I use it for',
		tabsLabel: 'Tool groups',
		groups: [
			{
				slug: 'frontend',
				title: 'Frontend',
				note: 'Interfaces, components and design systems.',
				items: [
					{ name: 'Astro', use: 'Routes, layout and content generated at build time.' },
					{ name: 'Vue 3', use: 'Components with state; here they render on the server.' },
					{ name: 'TypeScript', use: 'Strict types across components, copy and config.' },
					{ name: 'Tailwind CSS', use: 'Utilities in the markup; tokens live in CSS.' },
					{ name: 'HTML and CSS', use: 'The base: semantics, layers and styles without a framework.' },
					{ name: 'Vite', use: 'Build and reload while the project is edited.' },
				],
			},
			{
				slug: 'backend',
				title: 'Backend',
				note: 'APIs, server logic and integrations.',
				items: [
					{ name: 'Node.js', use: 'Build scripts and project utilities.' },
					{ name: 'REST APIs', use: 'Integration with services in projects that needed them.' },
					{ name: 'Webhooks', use: 'Service-to-service events for states and alerts.' },
					{ name: 'Authentication', use: 'Access, sessions and recovery in client portals.' },
				],
			},
			{
				slug: 'data',
				title: 'Data',
				note: 'Modeling, storage and queries.',
				items: [
					{ name: 'PostgreSQL', use: 'Relational data in projects with a backend.' },
					{ name: 'Prisma', use: 'Model and typed queries over the database.' },
					{ name: 'Redis', use: 'Cache and ephemeral data when the project needs it.' },
					{ name: 'SQL', use: 'Direct queries to read and adjust data.' },
				],
			},
			{
				slug: 'ai',
				title: 'AI',
				note: 'Agents, context and assisted workflows.',
				items: [
					{ name: 'Agent skills', use: 'Reusable instructions for project tasks.' },
					{ name: 'Context engineering', use: 'Preparing the context a model needs to get it right.' },
					{ name: 'Firecrawl', use: 'Extracting web content for research and references.' },
					{ name: 'Graphify', use: 'Turning code and docs into queryable graphs.' },
					{ name: 'LLM APIs', use: 'Assisted classification and replies with business rules.' },
				],
			},
			{
				slug: 'devops',
				title: 'DevOps',
				note: 'Delivery, environments and automation.',
				items: [
					{ name: 'Git and GitHub', use: 'History, branches and change review.' },
					{ name: 'Docker', use: 'Reproducible environments to test and deploy.' },
					{ name: 'CI/CD', use: 'Automated build and checks before publishing.' },
					{ name: 'Linux', use: 'Servers and terminal where deployments run.' },
					{ name: 'Vercel', use: 'Publishing the static build with domain and CDN.' },
				],
			},
			{
				slug: 'design',
				title: 'Design',
				note: 'Typography, tokens and accessibility.',
				items: [
					{ name: 'Figma', use: 'Composition and visual review before code.' },
					{ name: 'Design tokens', use: 'Color, type and radii in one place.' },
					{ name: 'Accessibility', use: 'Keyboard, focus, contrast and semantic HTML.' },
					{ name: 'Typography', use: 'Scale, rhythm and tracking for the system.' },
				],
			},
		],
	},
};

export const homeCopy: Record<Locale, HomeCopy> = { es, en };
