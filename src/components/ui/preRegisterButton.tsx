'use client';
import { useRouter } from 'next/navigation';
import { useTranslation } from '@/app/i18n/client';

const PreRegisterButton = ({ language }: { language: string }) => {
  const { t } = useTranslation(language, 'home');
  const router = useRouter();
  const navigate = () => {
    router.push(language + '/pre-registration');
  };
  return (
    <button onClick={navigate}>
      <div className="rounded-full border border-gray-100 px-4 py-2 font-bold text-[#23395b] hover:bg-gray-100">
        {t('pre-register')}
      </div>
    </button>
  );
};

export default PreRegisterButton;
