import React from 'react'
import ProtectedRoute from "@/components/ProtectedRoute";

export default function page() {
    return (
        <div className="overflow-auto"><ProtectedRoute>
            <div className="mt-14 text-white">
                
                home page
            </div></ProtectedRoute>
        </div>
    )
}
