'use client';
import { useTranslation } from '@/app/i18n/client';
import { MutableRefObject, useEffect, useRef, useState } from 'react';
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
  const dropdownRef: MutableRefObject<any> = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event: { target: any }) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    if (dropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownOpen]);

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
          ref={dropdownRef}
          id="dropdown"
          className="mt-54 absolute right-0 divide-y divide-gray-100 rounded-b-lg bg-[#b4e6ff]"
        >
          <ul className="py-2 text-sm" aria-labelledby="dropdownDefaultButton">
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
