'use client';

import React from 'react';
import Editor, { OnChange } from '@monaco-editor/react';

interface CodeEditorProps {
    value: string;
    language: string;
    onChange?: (value: string | undefined) => void;
    readOnly?: boolean;
}

const CodeEditor: React.FC<CodeEditorProps> = ({
    value,
    language,
    onChange,
    readOnly = false
}) => {


    const handleEditorChange: OnChange = (value) => {
        if (onChange) {
            onChange(value);
        }
    };

    return (
        <div className="h-full w-full rounded-md overflow-hidden border border-gray-700">
            <Editor
                height="100%"
                theme="vs-dark"
                language={language.toLowerCase()}
                value={value}
                onChange={handleEditorChange}
                options={{
                    readOnly: readOnly,
                    minimap: { enabled: false },
                    fontSize: 14,
                    scrollBeyondLastLine: false,
                    automaticLayout: true,
                    wordWrap: 'on',
                }}
            />
        </div>
    );
};

export default CodeEditor;
