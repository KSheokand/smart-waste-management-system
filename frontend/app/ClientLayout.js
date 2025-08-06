'use client';

import '../styles/global.css';
import 'leaflet/dist/leaflet.css';
import dynamic from 'next/dynamic';

const MapContainer = dynamic(() => import('@/components/BinMap'), {
    ssr: false,
});

export default function ClientLayout({ children }) {
    // You can optionally use <MapContainer /> here if it's common across pages.
    return (
        <div className="bg-gray-100 font-sans min-h-screen">
            {/* Example: <MapContainer bins={[]} /> */}
            {children}
        </div>
    );
}
