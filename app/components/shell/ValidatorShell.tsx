'use client';

import { useEffect, useState } from "react";
import Header from "../ui/Header";
import CodeEditor from "../editor/CodeEditor";
import { convertData, Format } from "../../lib/converters";
import FormatSelector from "../FormatSelector";

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

    return (
        <div className="flex flex-col h-screen bg-gray-900 text-white font-sans p-4 gap-4">
            <Header />

            <div className="flex flex-wrap gap-4 items-center justify-between bg-gray-800 p-3 rounded-lg">
                <FormatSelector
                    value={inputFormat}
                    onChange={setInputFormat}
                    formats={formats}
                />

                <button className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg cursor-pointer"
                    onClick={() => { setIsValid(validateData(inputContent, inputFormat)) }}
                >Validate</button>

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

                {isValid === false && inputContent && (
                    <div className="absolute bottom-4 left-4 right-4 bg-red-900/90 border border-red-700 text-red-100 p-3 rounded shadow-lg z-10 backdrop-blur-sm">
                        <div className="font-bold text-xs mb-1 uppercase tracking-wide">Syntax Error</div>
                        <pre className="text-sm whitespace-pre-wrap break-words font-mono">
                            {validationError}
                        </pre>
                    </div>
                )}

                {isValid && inputContent && (
                    <div className="w-[30%] h-[50px] absolute bottom-4 left-4 right-4 bg-green-900/90 border border-green-700 text-green-100 p-3 rounded shadow-lg z-10 backdrop-blur-sm">
                        <div className="font-bold text-xs mb-1 uppercase tracking-wide">Valid</div>
                    </div>
                )}


            </div>
        </div>
    );
}