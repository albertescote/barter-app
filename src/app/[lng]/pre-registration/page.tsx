import PreRegistrationCard from '@/components/preRegistrationCard';

interface PageParams {
  params: {
    lng: string;
  };
}

export default function Page({ params: { lng } }: PageParams) {
  return (
    <div className="flex h-[75vh] items-center justify-center bg-gradient-to-r from-[#e6f0ff] to-[#e6f8ff]">
      <PreRegistrationCard language={lng}></PreRegistrationCard>
    </div>
  );
}
