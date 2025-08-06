'use client'
import { useForm } from "react-hook-form";
import API from "@/lib/api";
import { useRouter } from "next/navigation";

export default function AddBinPage() {
    const { register, handleSubmit } = useForm();
    const router = useRouter();

    const onSubmit = async (data) => {
        await API.post("/bins", data);
        router.push("/dashboard");
    };

    return (
        <div className="p-8 max-w-md mx-auto">
            <h1 className="text-2xl mb-4 font-semibold">Add Smart Bin</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <input {...register("location")} placeholder="Location" className="w-full border px-3 py-2 rounded" />
                <input {...register("fillLevel")} type="number" placeholder="Fill Level" className="w-full border px-3 py-2 rounded" />
                <select {...register("status")} className="w-full border px-3 py-2 rounded">
                    <option value="active">Active</option>
                    <option value="inactive">Inactive</option>
                </select>
                <input {...register("coordinates.lat")} placeholder="Latitude" className="w-full border px-3 py-2 rounded" />
                <input {...register("coordinates.lng")} placeholder="Longitude" className="w-full border px-3 py-2 rounded" />
                <button className="w-full bg-blue-600 text-white py-2 rounded">Add Bin</button>
            </form>
        </div>
    );
}
