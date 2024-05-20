'use client';
import {useRouter} from "next/navigation";

const CustomButton = ({text, navTo}: {text: string, navTo: string}) => {
    const router = useRouter();
    const navigate = () => {
        router.push(navTo);
    }
    return (
        <button onClick={navigate}>
            <div className="hover:bg-gray-100 border border-gray-100 font-bold py-2 px-4 rounded-full text-[#23395b]">
                {text}
            </div>
        </button>
    );
};

export default CustomButton;
