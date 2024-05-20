'use client';
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {useRouter} from "next/navigation";

export default function PreRegistrationCard(){
    const router = useRouter();
    const storePreRegistration = (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        console.log('pre-registered!');
        router.push('/');
    }
    return (
        <div className="min-h-screen bg-gradient-to-r from-[#e6f0ff] to-[#e6f8ff] flex items-center justify-center">
            <div className="mx-auto max-w-md bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl p-8 space-y-6">
                <div className="space-y-2 text-center">
                    <h1 className="text-3xl font-bold text-[#0077b6]">Pre-Registration</h1>
                    <p className="text-gray-600">
                        Sign up now to reserve your spot and be the first to access our new platform.
                    </p>
                </div>
                <form className="space-y-4" onSubmit={storePreRegistration}>
                    <div className="space-y-2">
                        <Label className="text-[#0077b6]" htmlFor="name">
                            Name
                        </Label>
                        <Input
                            className="w-full border-gray-300 rounded-md shadow-sm focus:border-[#0077b6] focus:ring focus:ring-[#0077b6] focus:ring-opacity-50 transition"
                            id="name"
                            placeholder="Enter your name"
                            required
                        />
                    </div>
                    <div className="space-y-2">
                        <Label className="text-[#0077b6]" htmlFor="email">
                            Email
                        </Label>
                        <Input
                            className="w-full border-gray-300 rounded-md shadow-sm focus:border-[#0077b6] focus:ring focus:ring-[#0077b6] focus:ring-opacity-50 transition"
                            id="email"
                            placeholder="Enter your email"
                            required
                            type="email"
                        />
                    </div>
                    <Button
                        className="w-full bg-[#0077b6] hover:bg-[#005a8f] text-white font-semibold py-2 px-4 rounded-md shadow-md transition duration-300 ease-in-out transform hover:scale-105"
                        type="submit"
                    >
                        Register
                    </Button>
                </form>
            </div>
        </div>
    );
}