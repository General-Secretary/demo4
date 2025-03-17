import Describe from '@/components/Home Comp/Describe'
import React from 'react'
import GuestRoute from "@/components/ReversedProtectedRoute";

export default function page() {
    return (
        <div><GuestRoute></GuestRoute>
            <Describe marginTop={"mt-32"} />
        </div>
    )
}
