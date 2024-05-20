'use client';
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import {useRouter} from "next/navigation";
import {FormEvent, useState} from "react";
import PopUp from "@/components/popUp";

export default function PreRegistrationCard(){
    const [showPopup, setShowPopup] = useState(false);
    const router = useRouter();
    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget)
        console.log('name: '+ formData.get('name'));
        console.log('email: '+formData.get('email'));
        setShowPopup(true);
    };
    const handleClosePopup = () => {
        setShowPopup(false);
        router.push('/');
    };

    return (
        <div className="h-[75vh] bg-gradient-to-r from-[#e6f0ff] to-[#e6f8ff] flex items-center justify-center">
            <div className="mx-auto max-w-md bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl p-8 space-y-6">
                <div className="space-y-4 text-center">
                    <h1 className="text-3xl font-bold gradient-text">Pre-Registration</h1>
                    <p>
                        Sign up now to reserve your spot and be the first to access our new platform.
                    </p>
                </div>
                <form className="space-y-4" onSubmit={handleSubmit}>
                    <div className="space-y-2">
                        <Label htmlFor="name">
                            Name
                        </Label>
                        <Input
                            className="w-full border-gray-300 rounded-md shadow-sm focus:border-[#0077b6] focus:ring focus:ring-[#0077b6] focus:ring-opacity-50 transition"
                            id="name"
                            name="name"
                            placeholder="Enter your name"
                            required
                        />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="email">
                            Email
                        </Label>
                        <Input
                            className="w-full border-gray-300 rounded-md shadow-sm focus:border-[#0077b6] focus:ring focus:ring-[#0077b6] focus:ring-opacity-50 transition"
                            id="email"
                            name="email"
                            placeholder="Enter your email"
                            required
                            type="email"
                        />
                    </div>
                    <div className="flex justify-center pt-4">
                        <button
                            className="w-full inline-flex items-center justify-center bg-gradient-to-r from-[#3b82f6] to-[#06b6d4] hover:from-[#b4c6ff] hover:to-[#b4e6ff] text-white font-bold py-2 px-4 rounded-full transition"
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