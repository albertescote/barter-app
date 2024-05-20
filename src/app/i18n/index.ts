import { createInstance } from 'i18next';
import resourcesToBackend from 'i18next-resources-to-backend';
import { initReactI18next } from 'react-i18next/initReactI18next';
import { getOptions } from './settings';

const initI18next = async (lng: string, ns?: string | string[]) => {
  const i18nInstance = createInstance();
  await i18nInstance
    .use(initReactI18next)
    .use(
      resourcesToBackend(async (language: any, namespace: any) => {
        const { default: data } = await import(
          `./locales/${language}/${namespace}.json`
        );
        return { [namespace]: data };
      }),
    )
    .init(getOptions(lng, Array.isArray(ns) ? ns[0] : ns));
  return i18nInstance;
};

export async function useTranslation(
  lng: string,
  ns?: string | string[],
  options: { keyPrefix?: string } = {},
) {
  const i18nextInstance = await initI18next(lng, ns);
  return {
    t: i18nextInstance.getFixedT(
      lng,
      Array.isArray(ns) ? ns[0] : ns,
      options.keyPrefix,
    ),
    i18n: i18nextInstance,
  };
}
