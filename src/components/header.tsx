import Image from 'next/image';
import Link from 'next/link';
import CustomButton from '@/components/ui/customButton';
import LanguageSwitcher from '@/components/languageSwitcher';
import { useTranslation } from '@/app/i18n';

export default async function Header({ language }: { language: string }) {
  const { t } = await useTranslation(language, 'home');
  return (
    <header className="relative flex items-center justify-between bg-gradient-to-r from-[#b4c6ff] to-[#b4e6ff] px-6 py-4 text-gray-900">
      <Link className="text-xl font-bold" href="/">
        <div className="relative flex items-center space-x-4 text-[#220c10]">
          <Image
            src="/assets/icon.png"
            alt="icon"
            height="60"
            width="60"
          ></Image>
          <span className="title-text">Trisbar</span>
        </div>
      </Link>
      <div className="relative flex items-center space-x-6">
        <CustomButton
          text={t('preRegister')}
          navTo={language + '/pre-registration'}
        ></CustomButton>
        <LanguageSwitcher language={language} />
      </div>
    </header>
  );
}
