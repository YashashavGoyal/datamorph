import { Format } from "../../lib/converters";

export default function FormatSelector({
    value,
    onChange,
    formats,
}: {
    value: Format;
    onChange: (value: Format) => void;
    formats: Format[];
}) {

    return (
        <div className="flex items-center gap-2">
            <label className="text-sm font-medium text-gray-300">Input:</label>
            <select
                value={value}
                onChange={(e) => onChange(e.target.value as Format)}
                className="bg-gray-700 text-white rounded px-3 py-1 border border-gray-600 focus:outline-none focus:border-blue-500"
            >
                {formats.map(f => <option key={f} value={f}>{f}</option>)}
            </select>
        </div>
    );
}
