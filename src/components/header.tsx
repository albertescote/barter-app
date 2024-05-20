import Image from 'next/image';
import Link from 'next/link';
import CustomButton from '@/components/ui/customButton';

export default function Header() {
  return (
    <header className="relative flex items-center justify-between bg-gradient-to-r from-[#b4c6ff] to-[#b4e6ff] px-6 py-4 text-gray-900">
      <Link className="text-xl font-bold" href="/">
        <div className="relative flex items-center space-x-4 text-[#220c10]">
          <Image src="/icon.png" alt="icon" height="60" width="60"></Image>
          <span className="title-text">Trisbar</span>
        </div>
      </Link>
      <CustomButton
        text="Pre Register"
        navTo="/pre-registration"
      ></CustomButton>
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <Image
          alt="Background Image"
          className="h-full w-full object-cover opacity-30"
          height="800"
          src="/main-barter.jpg"
          style={{
            aspectRatio: '1200/800',
            objectFit: 'cover',
          }}
          width="1200"
        />
      </div>
    </header>
  );
}
