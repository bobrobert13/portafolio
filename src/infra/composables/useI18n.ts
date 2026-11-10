import { computed, toValue, type MaybeRefOrGetter } from 'vue';
import type { Locale } from '@/config';
import { t, type UIKey } from '@/i18n/ui';

/**
 * Translation helper for Vue islands. Accepts a plain locale or a getter so it
 * stays usable if the locale ever becomes reactive.
 */
export function useI18n(locale: MaybeRefOrGetter<Locale>) {
	const current = computed(() => toValue(locale));

	return {
		locale: current,
		t: (key: UIKey) => t(current.value, key),
	};
}
