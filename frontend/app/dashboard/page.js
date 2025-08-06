'use client';
import BinMap from '@/components/BinMap';
import BinAlert from '@/components/BinAlert';

const sampleBins = [
    { id: 1, name: "Bin A", lat: 28.6139, lng: 77.2090, fill: 92 },
    { id: 2, name: "Bin B", lat: 28.7041, lng: 77.1025, fill: 40 },
    { id: 3, name: "Bin C", lat: 28.5355, lng: 77.3910, fill: 85 },
];

export default function Dashboard() {
    return (
        <main className="p-6 max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold mb-4">Bin Dashboard</h1>
            <BinAlert bins={sampleBins} />
            <BinMap bins={sampleBins} />
        </main>
    );
}
