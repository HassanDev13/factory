import {useLocale} from 'next-intl';
import {isRtlLang} from 'rtl-detect';



export default function useTextDirection(locale: string) {
  const defaultLocale = useLocale();
  if (!locale) locale = defaultLocale;
  return isRtlLang(locale) ? 'rtl' : 'ltr';
}