import type { Metadata } from "next";


export const metadata: Metadata = {
    title: "Data Converter - DataMorph",
    description: "Real-time data converter",
};

export default function ConvertLayout({
    children
}:
    {
        children: React.ReactNode;
    }) {
    return (
        <>
            {children}
        </>
    );
}