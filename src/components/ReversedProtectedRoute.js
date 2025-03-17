"use client";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";

const GuestRoute = ({ children }) => {
    const router = useRouter();
    const token = useSelector((state) => state.authReducer.token);
    const [showLoginPrompt, setShowLoginPrompt] = useState(false);

    useEffect(() => {
        if (token) { setShowLoginPrompt(true);
            router.push("/homePage");
        }
    }, [token, router]);
    if (showLoginPrompt) {
        return (
            <div className="flex flex-col items-center justify-center h-screen">
                <h2 className="text-2xl text-white font-bold mb-4">يجب تسجيل الخروج للوصول إلى هذه الصفحة</h2>
            </div>
        );
    }
    return children;
};

export default GuestRoute;
