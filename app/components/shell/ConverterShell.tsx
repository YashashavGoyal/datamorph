'use client';

import React, { useState, useEffect } from 'react';
import CodeEditor from '../editor/CodeEditor';
import { convertData, Format } from '../../lib/converters';
import FormatSelector from '../FormatSelector';


const formats = ['JSON', 'YAML', 'XML', 'TOML'] as Format[];

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
        <div className="flex flex-col h-[100vh] text-white font-sans gap-6 max-w-7xl mx-auto">

            <div className="flex flex-wrap gap-4 items-center justify-between bg-gray-900/50 backdrop-blur-sm border border-white/5 p-4 rounded-2xl shadow-xl">

                <FormatSelector
                    value={inputFormat}
                    onChange={setInputFormat}
                    formats={formats}
                />

                <FormatSelector
                    value={outputFormat}
                    onChange={setOutputFormat}
                    formats={formats}
                />

            </div>

            <div className="flex flex-col md:flex-row flex-1 gap-4 min-h-0">
                <div className="flex flex-col flex-1 gap-2 min-w-0 min-h-[40vh] md:min-h-0">
                    <div className="text-sm font-semibold text-gray-400">Input ({inputFormat})</div>
                    <CodeEditor
                        value={inputContent}
                        language={languageMap[inputFormat]}
                        onChange={(val) => setInputContent(val || '')}
                    />
                </div>

                <div className="flex flex-col flex-1 gap-2 min-w-0 relative min-h-[40vh] md:min-h-0">
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
