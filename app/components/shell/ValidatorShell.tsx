'use client';

import { useEffect, useState, useRef } from "react";
import CodeEditor from "../editor/CodeEditor";
import { convertData, Format } from "../../lib/converters";
import FormatSelector from "../FormatSelector";
import usePrevious from "@/app/lib/hooks/previous";

const formats = ['JSON', 'YAML', 'XML', 'TOML'] as Format[];


export default function Validator() {

    const languageMap: Record<Format, string> = {
        JSON: 'json',
        YAML: 'yaml',
        XML: 'xml',
        TOML: 'ini',
    };

    const validateData = (data: string, format: Format, shouldFormat = true) => {
        try {
            const formatted = convertData(data, format, format);
            if (shouldFormat) {
                setInputContent(formatted);
            }
            return true;
        } catch (err: any) {
            setValidationError(err.message);
            return false;
        }
    }

    const [inputFormat, setInputFormat] = useState<Format>('JSON');
    const [inputContent, setInputContent] = useState('{\n  "name": "DataMorph",\n  "version": 1,\n  "features": ["convert", "parse"]\n}');

    const [isValid, setIsValid] = useState<boolean | null>(null);
    const [validationError, setValidationError] = useState('');

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setIsValid(validateData(inputContent, inputFormat, false));
        }, 1000);

        return () => clearTimeout(timeoutId);
    }, [inputContent, inputFormat]);

    const prevFormat = usePrevious<Format>(inputFormat);

    useEffect(() => {
        if (prevFormat !== null) {
            try {
                const result = convertData(inputContent, prevFormat, inputFormat);
                setInputContent(result);
            } catch (error) {
                setInputContent(inputContent)
            }
        }
    }, [inputFormat]);



    return (
        <div className="flex flex-col h-[calc(100vh-8rem)] text-white font-sans gap-6 max-w-7xl mx-auto">

            <div className="flex flex-wrap gap-4 items-center justify-between bg-gray-900/50 backdrop-blur-sm border border-white/5 p-4 rounded-2xl shadow-xl">
                <FormatSelector
                    value={inputFormat}
                    onChange={setInputFormat}
                    formats={formats}
                />

                <button className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-400 hover:to-emerald-500 text-white px-6 py-2 rounded-lg cursor-pointer font-medium shadow-lg shadow-green-500/20 transition-all duration-200"
                    onClick={() => { setIsValid(validateData(inputContent, inputFormat)) }}
                >Validate Data</button>

            </div>

            <div className="flex flex-1 gap-4 min-h-0">
                <div className="flex flex-col flex-1 gap-2 min-w-0 bg-gray-900/30 p-1 rounded-xl border border-white/5">
                    <div className="px-4 py-2 text-sm font-semibold text-gray-400 border-b border-white/5 bg-gray-900/50 rounded-t-lg">Input ({inputFormat})</div>
                    <CodeEditor
                        value={inputContent}
                        language={languageMap[inputFormat]}
                        onChange={(val) => setInputContent(val || '')}
                    />
                </div>

                {isValid === false && inputContent && (
                    <div className="absolute bottom-4 left-4 right-4 bg-red-500/10 border border-red-500/50 text-red-200 p-4 rounded-xl shadow-2xl z-10 backdrop-blur-xl">
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center shrink-0">
                                <span className="text-red-400 font-bold">!</span>
                            </div>
                            <div className="overflow-hidden">
                                <div className="font-bold text-xs mb-1 uppercase tracking-wide text-red-400">Syntax Error</div>
                                <pre className="text-sm whitespace-pre-wrap break-words font-mono opacity-90 overflow-auto max-h-32">
                                    {validationError}
                                </pre>
                            </div>
                        </div>
                    </div>
                )}

                {isValid && inputContent && (
                    <div className="absolute bottom-8 right-8 z-10 animate-bounce">
                        <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-6 py-3 rounded-full shadow-lg shadow-green-500/30 font-bold flex items-center gap-2">
                            <span>✓</span> Valid {inputFormat}
                        </div>
                    </div>
                )}


            </div>
        </div>
    );
}