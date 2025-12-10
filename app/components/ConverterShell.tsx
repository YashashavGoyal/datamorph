'use client';

import React, { useState, useEffect } from 'react';
import CodeEditor from './CodeEditor';
import { convertData, Format } from '../lib/converters';

const formats: Format[] = ['JSON', 'YAML', 'XML', 'TOML'];

const languageMap: Record<Format, string> = {
    JSON: 'json',
    YAML: 'yaml',
    XML: 'xml',
    TOML: 'ini',
};

const ConverterShell: React.FC = () => {
    const [inputContent, setInputContent] = useState<string>('{\n  "name": "DataMorph",\n  "version": 1,\n  "features": ["convert", "parse"]\n}');
    const [inputFormat, setInputFormat] = useState<Format>('JSON');
    const [outputFormat, setOutputFormat] = useState<Format>('YAML');

    const [outputContent, setOutputContent] = useState<string>('');
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const debouncer = setTimeout(() => {
            try {
                const result = convertData(inputContent, inputFormat, outputFormat);
                setOutputContent(result);
                setError(null);
            } catch (err: any) {
                setError(err.message);
            }
        }, 500);

        return () => clearTimeout(debouncer);

    }, [inputContent, inputFormat, outputFormat]);

    return (
        <div className="flex flex-col h-screen bg-gray-900 text-white font-sans p-4 gap-4">
            <header className="flex items-center justify-between pb-4 border-b border-gray-800">
                <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                    DataMorph
                </h1>
                <div className="text-sm text-gray-400">
                    Data Serialization Converter
                </div>
            </header>

            <div className="flex flex-wrap gap-4 items-center justify-between bg-gray-800 p-3 rounded-lg">
                <div className="flex items-center gap-2">
                    <label className="text-sm font-medium text-gray-300">Input:</label>
                    <select
                        value={inputFormat}
                        onChange={(e) => setInputFormat(e.target.value as Format)}
                        className="bg-gray-700 text-white rounded px-3 py-1 border border-gray-600 focus:outline-none focus:border-blue-500"
                    >
                        {formats.map(f => <option key={f} value={f}>{f}</option>)}
                    </select>
                </div>

                <div className="flex items-center gap-2">
                    <label className="text-sm font-medium text-gray-300">Output:</label>
                    <select
                        value={outputFormat}
                        onChange={(e) => setOutputFormat(e.target.value as Format)}
                        className="bg-gray-700 text-white rounded px-3 py-1 border border-gray-600 focus:outline-none focus:border-blue-500"
                    >
                        {formats.map(f => <option key={f} value={f}>{f}</option>)}
                    </select>
                </div>
            </div>


            <div className="flex flex-1 gap-4 min-h-0">
                <div className="flex flex-col flex-1 gap-2 min-w-0">
                    <div className="text-sm font-semibold text-gray-400">Input ({inputFormat})</div>
                    <CodeEditor
                        value={inputContent}
                        language={languageMap[inputFormat]}
                        onChange={(val) => setInputContent(val || '')}
                    />
                </div>

                <div className="flex flex-col flex-1 gap-2 min-w-0 relative">
                    <div className="text-sm font-semibold text-gray-400">Output ({outputFormat})</div>
                    <CodeEditor
                        value={outputContent}
                        language={languageMap[outputFormat]}
                        readOnly={true}
                    />

                    {error && (
                        <div className="absolute bottom-4 left-4 right-4 bg-red-900/90 border border-red-700 text-red-100 p-3 rounded shadow-lg z-10 backdrop-blur-sm">
                            <div className="font-bold text-xs mb-1 uppercase tracking-wide">Syntax Error</div>
                            <pre className="text-sm whitespace-pre-wrap break-words font-mono">
                                {error}
                            </pre>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ConverterShell;
