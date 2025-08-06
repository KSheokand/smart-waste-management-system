import Link from 'next/link';

export default function Landing() {
    return (
        <main className="flex flex-col items-center justify-center h-screen text-center bg-gradient-to-br from-green-100 to-green-300">
            <h1 className="text-4xl font-bold mb-4">Smart Waste Management System</h1>
            <p className="text-lg mb-6">Track bins. Optimize routes. Clean cities.</p>
            <div className="space-x-4">
                <Link href="/login" className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">Login</Link>
                <Link href="/register" className="bg-white text-green-700 px-4 py-2 rounded border border-green-700 hover:bg-green-100">Register</Link>
            </div>
        </main>
    );
}
