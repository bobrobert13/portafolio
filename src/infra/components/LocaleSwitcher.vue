<script setup lang="ts">
import { computed } from 'vue';
import type { Locale } from '@/config';
import { locales } from '@/config';
import { useI18n } from '@/infra/composables/useI18n';
import { localePath } from '@/i18n/utils';

const props = defineProps<{ current: Locale; path?: string }>();

const { t } = useI18n(() => props.current);

const items = computed(() =>
	locales.map((locale) => ({
		locale,
		href: localePath(locale, props.path ?? ''),
		label: t(`locale.${locale}`),
		short: locale.toUpperCase(),
		isCurrent: locale === props.current,
	})),
);
</script>

<template>
	<nav
		class="flex items-center gap-1.5 font-mono text-[11px] leading-none"
		:aria-label="t('locale.switcher')"
	>
		<template v-for="(item, index) in items" :key="item.locale">
			<span v-if="index > 0" class="text-subtle" aria-hidden="true">/</span>
			<a
				:href="item.href"
				:lang="item.locale"
				:aria-label="item.label"
				:aria-current="item.isCurrent ? 'page' : undefined"
				class="text-subtle transition-colors hover:text-accent aria-[current=page]:text-ink"
			>
				{{ item.short }}
			</a>
		</template>
	</nav>
</template>
