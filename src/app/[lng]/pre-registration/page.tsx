import PreRegistrationCard from '@/components/preRegistrationCard';

interface PageParams {
  params: {
    lng: string;
  };
}

export default function Page({ params: { lng } }: PageParams) {
  return <PreRegistrationCard language={lng}></PreRegistrationCard>;
}
