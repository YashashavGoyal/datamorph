import Link from "next/link";
import Image from "next/image";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="w-full border-t border-white/10 bg-black/50 backdrop-blur-xl mt-auto">
            <div className="max-w-7xl mx-auto px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
                    {/* Brand Column */}
                    <div className="col-span-1 md:col-span-2 space-y-4">
                        <Link href="/" className="flex items-center gap-2 group w-fit">
                            <div className="w-10 h-10 rounded-lg shadow-lg shadow-blue-500/20 group-hover:scale-110 transition-transform duration-200 relative">
                                <Image
                                    src="/logo-bg.png"
                                    alt="DataMorph Logo"
                                    fill
                                    sizes="any"
                                    className="object-contain rounded-lg"
                                />
                            </div>
                            <span className="font-bold text-xl tracking-tight text-white group-hover:text-blue-200 transition-colors">
                                DataMorph
                            </span>
                        </Link>
                        <p className="text-gray-400 text-sm max-w-sm leading-relaxed">
                            The ultimate developer tool for converting, validating, and visualizing data formats.
                            Privately processing your data entirely in the browser.
                        </p>
                    </div>

                    {/* Tools Column */}
                    <div>
                        <h3 className="font-semibold text-white mb-4">Tools</h3>
                        <ul className="space-y-2">
                            <FooterLink href="/convert">Converter</FooterLink>
                            <FooterLink href="/validate">Validator</FooterLink>
                        </ul>
                    </div>

                    {/* Community Column */}
                    <div>
                        <h3 className="font-semibold text-white mb-4">Author</h3>
                        <ul className="space-y-2">
                            <li>
                                <a
                                    href="https://github.com/YashashavGoyal/datamorph"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-sm text-gray-400 hover:text-white transition-colors duration-200 flex items-center gap-2"
                                >
                                    GitHub
                                    {/* <span className="text-[10px] bg-white/10 px-1.5 py-0.5 rounded border border-white/10">v2.0</span> */}
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://twitter.com/YashashavGoyal"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-sm text-gray-400 hover:text-white transition-colors duration-200 flex items-center gap-2"
                                >
                                    Twitter
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://linkedin.com/in/yashashavgoyal"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-sm text-gray-400 hover:text-white transition-colors duration-200 flex items-center gap-2"
                                >
                                    LinkedIn
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-gray-500 text-sm">
                        © {currentYear} DataMorph. All rights reserved.
                    </p>
                    <div className="flex items-center gap-6">
                        <span className="text-gray-500 text-sm">
                            Created by <a href="https://github.com/YashashavGoyal" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Yashashav Goyal</a>
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
    return (
        <li>
            <Link
                href={href}
                className="text-sm text-gray-400 hover:text-white transition-colors duration-200 block"
            >
                {children}
            </Link>
        </li>
    );
}
