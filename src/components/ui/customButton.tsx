'use client';
import {Button} from "@/components/ui/button";
import {useRouter} from "next/navigation";

const CustomButton = ({text, navTo}: {text: string, navTo: string}) => {
    const router = useRouter();
    const navigate = () => {
        router.push(navTo);
    }
    return (
        <Button onClick={navigate}>
            {text}
        </Button>
    );
};

export default CustomButton;
