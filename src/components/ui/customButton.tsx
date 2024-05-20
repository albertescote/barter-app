'use client';
import { useRouter } from 'next/navigation';

const CustomButton = ({ text, navTo }: { text: string; navTo: string }) => {
  const router = useRouter();
  const navigate = () => {
    router.push(navTo);
  };
  return (
    <button onClick={navigate}>
      <div className="rounded-full border border-gray-100 px-4 py-2 font-bold text-[#23395b] hover:bg-gray-100">
        {text}
      </div>
    </button>
  );
};

export default CustomButton;
