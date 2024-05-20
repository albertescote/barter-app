'use client';

import { useTranslation } from '@/app/i18n/client';
import { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const SupportedLanguages = [
  { id: 'en', value: 'english' },
  { id: 'ca', value: 'catalan' },
  { id: 'es', value: 'spanish' },
];

export default function LanguageSwitcher({ language }: { language: string }) {
  const { t } = useTranslation(language, 'home');
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const router = useRouter();

  const changeLanguage = async (newLanguage: string) => {
    if (newLanguage === language) {
      setDropdownOpen(false);
      return;
    }
    const oldUrl = window.location.href;
    const newUrl = oldUrl.replace('/' + language, '/' + newLanguage);
    router.push(newUrl);
    setDropdownOpen(false);
  };

  return (
    <div className="relative flex items-center">
      <button
        id="dropdownDefaultButton"
        onClick={() => setDropdownOpen(!dropdownOpen)} // Toggle dropdown visibility
        type="button"
        className="rounded-full hover:bg-gray-100"
      >
        <Image
          src="/assets/language.png"
          alt="language"
          height="30"
          width="30"
        ></Image>
      </button>
      {dropdownOpen && (
        <div
          id="dropdown"
          className="absolute z-10 mt-1 w-44 divide-y divide-gray-100 rounded-lg bg-white shadow dark:bg-gray-700"
        >
          <ul
            className="py-2 text-sm text-gray-700 dark:text-gray-200"
            aria-labelledby="dropdownDefaultButton"
          >
            {SupportedLanguages.map((lang) => (
              <li key={lang.id}>
                <a
                  onClick={() => changeLanguage(lang.id)}
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  {t(lang.value)}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
