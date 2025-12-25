
import React from "react";
import Link from "next/link";

export default function DocsPage() {
    return (
        <main className="min-h-screen bg-black text-white selection:bg-purple-500/30 pt-24 pb-20 px-4 md:px-6">
            <div className="max-w-4xl mx-auto space-y-16 md:space-y-20">

                {/* Header Section */}
                <section className="text-center space-y-6">
                    <div className="relative inline-block">
                        <div className="absolute inset-0 bg-blue-600 blur-[60px] opacity-20" />
                        <h1 className="relative text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
                            Documentation
                        </h1>
                    </div>
                    <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto px-2">
                        Everything you need to know about data serialization and how to use DataMorph efficiently.
                    </p>
                </section>

                {/* What is Data Serialization? */}
                <section className="space-y-8">
                    <div className="border-l-4 border-blue-500 pl-4 md:pl-6">
                        <h2 className="text-2xl md:text-3xl font-bold mb-4">What is Data Serialization?</h2>
                        <p className="text-base md:text-lg text-gray-300 leading-relaxed">
                            Data serialization is the process of converting complex data structures—like objects, arrays, and lists in memory—into a format that can be easily stored or transmitted. Think of it as "packaging" your data so it can be sent over a network (like a JSON API response) or saved to a file (like a config file) and then reconstructed ("deserialized") later.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                        <div className="p-5 md:p-6 rounded-2xl bg-gray-900/50 border border-white/10 hover:border-blue-500/30 transition-colors">
                            <h3 className="text-lg md:text-xl font-semibold mb-3 text-blue-400">Why it matters</h3>
                            <ul className="space-y-2 text-gray-400 text-sm md:text-base">
                                <li className="flex gap-2">
                                    <span className="text-blue-500">•</span>
                                    <span>Enables communication between different systems (e.g., Python backend to React frontend)</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-blue-500">•</span>
                                    <span>Standardizes how configurations are stored (e.g., in DevOps tools)</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-blue-500">•</span>
                                    <span>Allows caching and persistence of application state</span>
                                </li>
                            </ul>
                        </div>
                        <div className="p-5 md:p-6 rounded-2xl bg-gray-900/50 border border-white/10 hover:border-pink-500/30 transition-colors">
                            <h3 className="text-lg md:text-xl font-semibold mb-3 text-pink-400">Common Formats</h3>
                            <ul className="space-y-2 text-gray-400 text-sm md:text-base">
                                <li className="flex gap-2">
                                    <span className="text-pink-500">JSON</span>
                                    <span>(JavaScript Object Notation) - The web standard.</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-pink-500">YAML</span>
                                    <span>(YAML Ain't Markup Language) - Clean, no brackets. Great for configs.</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-pink-500">XML</span>
                                    <span>(Extensible Markup Language) - Verbose but powerful, used in enterprise.</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-pink-500">TOML</span>
                                    <span>(Tom's Obvious, Minimal Language) - Explicit and easy for configs.</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Examples Code Block */}
                    <div className="bg-[#1e1e1e] rounded-xl overflow-hidden border border-white/10 shadow-2xl">
                        <div className="flex border-b border-white/10">
                            <div className="px-4 md:px-6 py-3 text-xs md:text-sm font-medium text-gray-400 border-b-2 border-blue-500 bg-white/5">Example: User Object</div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 divide-y md:divide-y-0 md:divide-x border-white/10">
                            <div className="p-4 overflow-x-auto">
                                <div className="text-xs text-gray-500 mb-2 font-mono uppercase tracking-wider">JSON</div>
                                <pre className="text-xs md:text-sm font-mono text-green-400">
                                    {`{
  "name": "Alice",
  "role": "admin",
  "active": true
}`}
                                </pre>
                            </div>
                            <div className="p-4 overflow-x-auto">
                                <div className="text-xs text-gray-500 mb-2 font-mono uppercase tracking-wider">YAML</div>
                                <pre className="text-xs md:text-sm font-mono text-pink-400">
                                    {`name: Alice
role: admin
active: true`}
                                </pre>
                            </div>
                            <div className="p-4 overflow-x-auto">
                                <div className="text-xs text-gray-500 mb-2 font-mono uppercase tracking-wider">XML</div>
                                <pre className="text-xs md:text-sm font-mono text-blue-400">
                                    {`<user>
  <name>Alice</name>
  <role>admin</role>
  <active>true</active>
</user>`}
                                </pre>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Divider */}
                <hr className="border-white/10" />

                {/* How to use App */}
                <section className="space-y-12">
                    <div>
                        <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">How to use DataMorph</h2>
                        <p className="text-base md:text-lg text-gray-400">
                            DataMorph provides two main tools: the <span className="text-blue-400">Converter</span> and the <span className="text-purple-400">Validator</span>. Both happen entirely in your browser for maximum privacy.
                        </p>
                    </div>

                    {/* Converter Guide */}
                    <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start">
                        <div className="flex-1 space-y-4">
                            <div className="inline-flex items-center gap-3">
                                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 font-bold text-sm md:text-base">1</div>
                                <h3 className="text-xl md:text-2xl font-bold">The Converter</h3>
                            </div>
                            <p className="text-sm md:text-base text-gray-300">
                                Use the converter when you need to transform data from one format to another (e.g., converting a JSON API response to YAML for a config file).
                            </p>
                            <ol className="list-decimal list-inside space-y-3 text-gray-400 ml-2 text-sm md:text-base">
                                <li>Navigate to the <Link href="/convert" className="text-blue-400 hover:underline">/convert</Link> page.</li>
                                <li>Paste your source code on the left editor.</li>
                                <li>Select your <strong>Input Format</strong> and <strong>Output Format</strong>.</li>
                                <li>The converted code appears instantly on the right.</li>
                            </ol>
                        </div>
                        <div className="flex-1 bg-gradient-to-br from-blue-900/20 to-purple-900/20 p-4 md:p-6 rounded-2xl border border-white/10 w-full">
                            {/* Abstract Visual Rep of Converter */}
                            <div className="flex items-center justify-between gap-4 font-mono text-xs md:text-sm">
                                <div className="bg-black/50 p-3 md:p-4 rounded-lg border border-white/10 text-gray-400 w-full text-center">JSON</div>
                                <div className="text-gray-500">→</div>
                                <div className="bg-black/50 p-3 md:p-4 rounded-lg border border-white/10 text-blue-400 w-full text-center">YAML</div>
                            </div>
                        </div>
                    </div>

                    {/* Validator Guide */}
                    <div className="flex flex-col md:flex-row-reverse gap-6 md:gap-8 items-start">
                        <div className="flex-1 space-y-4">
                            <div className="inline-flex items-center gap-3">
                                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400 font-bold text-sm md:text-base">2</div>
                                <h3 className="text-xl md:text-2xl font-bold">The Validator</h3>
                            </div>
                            <p className="text-sm md:text-base text-gray-300">
                                Use the validator to check if your code syntax is correct. It helps catch missed brackets, indentation errors in YAML, or unclosed tags in XML.
                            </p>
                            <ol className="list-decimal list-inside space-y-3 text-gray-400 ml-2 text-sm md:text-base">
                                <li>Navigate to the <Link href="/validate" className="text-purple-400 hover:underline">/validate</Link> page.</li>
                                <li>Select the format you want to validate.</li>
                                <li>Paste your code.</li>
                                <li>See instant feedback: <span className="text-green-400">Valid</span> or <span className="text-red-400">Error Message</span>.</li>
                            </ol>
                        </div>
                        <div className="flex-1 bg-gradient-to-br from-purple-900/20 to-pink-900/20 p-4 md:p-6 rounded-2xl border border-white/10 w-full">
                            {/* Abstract Visual Rep of Validator */}
                            <div className="space-y-3 text-xs md:text-sm">
                                <div className="flex items-center gap-2 text-green-400 bg-green-400/10 p-3 rounded border border-green-400/20">
                                    <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                    <span>Valid JSON</span>
                                </div>
                                <div className="flex items-center gap-2 text-red-400 bg-red-400/10 p-3 rounded border border-red-400/20">
                                    <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                                    <span>Invalid YAML: indent error</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="text-center pt-8 md:pt-10">
                    <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8">Ready to transform your data?</h2>
                    <div className="flex justify-center gap-4">
                        <Link
                            href="/convert"
                            className="px-6 md:px-8 py-3 rounded-full bg-white text-black font-bold text-sm md:text-base hover:scale-105 transition-transform"
                        >
                            Start Converting
                        </Link>
                    </div>
                </section>

            </div>
        </main>
    );
}
