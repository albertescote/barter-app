'use client';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { useRouter } from 'next/navigation';
import { FormEvent, useState } from 'react';
import PopUp from '@/components/popUp';
import { sendPreRegistrationRequest } from '@/service/backend';
import { useTranslation } from '@/app/i18n/client';

export default function PreRegistrationCard({
  language,
}: {
  language: string;
}) {
  const [showPopup, setShowPopup] = useState(false);
  const router = useRouter();
  const { t } = useTranslation(language, 'pre-registration');
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = formData.get('name')?.toString();
    const email = formData.get('email')?.toString();
    const comments = formData.get('comments')?.toString();
    sendPreRegistrationRequest(name, email, comments).then(() => {
      setShowPopup(true);
    });
  };
  const handleClosePopup = () => {
    setShowPopup(false);
    router.push('/');
  };

  return (
    <div className="mx-auto max-w-md space-y-6 overflow-hidden rounded-xl bg-white p-8 shadow-md md:max-w-2xl">
      <div className="space-y-4 text-center">
        <h1 className="text-3xl font-bold">{t('form-title')}</h1>
        <p>{t('form-description')}</p>
      </div>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div className="space-y-2">
          <Label htmlFor="name">{t('name')}</Label>
          <Input
            className="w-full rounded-md border-gray-300 shadow-sm transition focus:border-[#0077b6] focus:ring focus:ring-[#0077b6] focus:ring-opacity-50"
            id="name"
            name="name"
            placeholder={t('name-placeholder')}
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">{t('email')}</Label>
          <Input
            className="w-full rounded-md border-gray-300 shadow-sm transition focus:border-[#0077b6] focus:ring focus:ring-[#0077b6] focus:ring-opacity-50"
            id="email"
            name="email"
            placeholder={t('email-placeholder')}
            required
            type="email"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="textInput">
            {t('comments-questions-suggestions')}
          </Label>
          <Input
            className="w-full rounded-md border-gray-300 shadow-sm transition focus:border-[#0077b6] focus:ring focus:ring-[#0077b6] focus:ring-opacity-50"
            id="comments"
            name="comments"
            placeholder={t('comments-placeholder')}
            type="text"
          />
        </div>
        <div className="flex justify-center pt-4">
          <button
            className="inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-[#3b82f6] to-[#06b6d4] px-4 py-2 font-bold text-white transition hover:from-[#b4c6ff] hover:to-[#b4e6ff]"
            type="submit"
          >
            {t('sign-up-button')}
          </button>
        </div>
      </form>
      {showPopup && (
        <PopUp
          title={t('pop-up-title')}
          description={t('pop-up-description')}
          language={language}
          onClose={handleClosePopup}
        />
      )}
    </div>
  );
}
