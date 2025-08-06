'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        // For MVP: Assume successful login
        router.push('/dashboard');
    };

    return (
        <main className="flex items-center justify-center h-screen bg-gray-100">
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow-md w-80 space-y-4">
                <h2 className="text-2xl font-bold text-center">Login</h2>
                <input type="email" placeholder="Email" className="w-full border p-2 rounded" onChange={(e) => setEmail(e.target.value)} />
                <input type="password" placeholder="Password" className="w-full border p-2 rounded" onChange={(e) => setPassword(e.target.value)} />
                <button className="w-full bg-green-600 text-white p-2 rounded hover:bg-green-700">Login</button>
            </form>
        </main>
    );
}
