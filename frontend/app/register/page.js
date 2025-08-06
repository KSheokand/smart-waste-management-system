'use client';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';

export default function RegisterPage() {
    const { register, handleSubmit } = useForm();
    const router = useRouter();

    const onSubmit = () => {
        alert('Registered Successfully');
        router.push('/login');
    };

    return (
        <main className="min-h-screen flex items-center justify-center bg-white px-4">
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="w-full max-w-sm p-6 bg-gray-100 rounded-lg shadow-md space-y-6"
            >
                <h2 className="text-3xl font-bold text-center">Register</h2>
                <input
                    {...register('username')}
                    placeholder="Username"
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-400"
                />
                <input
                    {...register('password')}
                    type="password"
                    placeholder="Password"
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-400"
                />
                <button
                    type="submit"
                    className="w-full py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
                >
                    Register
                </button>
            </form>
        </main>
    );
}
