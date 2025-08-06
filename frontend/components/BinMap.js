'use client';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

export default function BinMap({ bins }) {
    return (
        <MapContainer center={[28.6139, 77.2090]} zoom={11} className="h-96 w-full rounded shadow">
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            {bins.map((bin) => (
                <Marker key={bin.id} position={[bin.lat, bin.lng]}>
                    <Popup>
                        {bin.name} - {bin.fill}% full
                    </Popup>
                </Marker>
            ))}
        </MapContainer>
    );
}
