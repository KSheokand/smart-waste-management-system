import '../styles/global.css';
import 'leaflet/dist/leaflet.css';

export const metadata = {
    title: 'Smart Waste Management',
    description: 'Track and manage smart bins efficiently.',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className="bg-gray-100 font-sans">{children}</body>
        </html>
    );
}
