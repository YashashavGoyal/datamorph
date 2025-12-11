import type { Metadata } from "next";


export const metadata: Metadata = {
    title: "Data Validator - DataMorph",
    description: "Real-time data validator",
};

export default function ValidatorLayout({
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