export default function BinAlert({ bins }) {
    const criticalBins = bins.filter((bin) => bin.fill >= 80);
    if (criticalBins.length === 0) return null;

    return (
        <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-4 rounded">
            <h3 className="font-bold mb-1">Alert: Full Bins</h3>
            <ul>
                {criticalBins.map(bin => (
                    <li key={bin.id}>{bin.name} is {bin.fill}% full</li>
                ))}
            </ul>
        </div>
    );
}
