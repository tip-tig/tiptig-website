import { ui } from './ui';

export type Locale = 'en' | 'de';
export const defaultLocale: Locale = 'en';
export const locales: Locale[] = ['en', 'de'];

/** Extract locale from URL pathname */
export function getLangFromUrl(url: URL): Locale {
  const [, lang] = url.pathname.split('/');
  if (lang === 'de') return 'de';
  return 'en';
}

/** Returns a t() function for the given locale */
export function useTranslations(lang: Locale) {
  return function t(key: string): string {
    return (ui[lang] as Record<string, string>)[key]
      ?? (ui[defaultLocale] as Record<string, string>)[key]
      ?? key;
  };
}

/** Prefix a path with the locale (skip for default locale) */
export function localizedPath(path: string, lang: Locale): string {
  if (lang === defaultLocale) return path;
  return `/${lang}${path}`;
}

/** Get the alternate-language version of a path */
export function getAlternatePath(currentPath: string): { lang: Locale; path: string }[] {
  const isDE = currentPath.startsWith('/de/') || currentPath === '/de';
  const cleanPath = isDE ? currentPath.replace(/^\/de/, '') || '/' : currentPath;

  return [
    { lang: 'en', path: cleanPath },
    { lang: 'de', path: `/de${cleanPath === '/' ? '' : cleanPath}` || '/de' },
  ];
}
