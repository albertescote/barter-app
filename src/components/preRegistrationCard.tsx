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
    <div className="flex h-[75vh] items-center justify-center bg-gradient-to-r from-[#e6f0ff] to-[#e6f8ff]">
      <div className="mx-auto max-w-md space-y-6 overflow-hidden rounded-xl bg-white p-8 shadow-md md:max-w-2xl">
        <div className="space-y-4 text-center">
          <h1 className="text-3xl font-bold">{t('title')}</h1>
          <p>
            Sign up now to reserve your spot and be the first to access our new
            platform.
          </p>
        </div>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input
              className="w-full rounded-md border-gray-300 shadow-sm transition focus:border-[#0077b6] focus:ring focus:ring-[#0077b6] focus:ring-opacity-50"
              id="name"
              name="name"
              placeholder="Enter your name"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              className="w-full rounded-md border-gray-300 shadow-sm transition focus:border-[#0077b6] focus:ring focus:ring-[#0077b6] focus:ring-opacity-50"
              id="email"
              name="email"
              placeholder="Enter your email"
              required
              type="email"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="textInput">
              Comments, questions, suggestions...
            </Label>
            <Input
              className="w-full rounded-md border-gray-300 shadow-sm transition focus:border-[#0077b6] focus:ring focus:ring-[#0077b6] focus:ring-opacity-50"
              id="comments"
              name="comments"
              placeholder="Enter any comment, question or suggestion you may have"
              type="text"
            />
          </div>
          <div className="flex justify-center pt-4">
            <button
              className="inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-[#3b82f6] to-[#06b6d4] px-4 py-2 font-bold text-white transition hover:from-[#b4c6ff] hover:to-[#b4e6ff]"
              type="submit"
            >
              Register
            </button>
          </div>
        </form>
        {showPopup && (
          <PopUp
            title="Thank you!"
            description="We appreciate your submission. We'll be in touch soon."
            onClose={handleClosePopup}
          />
        )}
      </div>
    </div>
  );
}
