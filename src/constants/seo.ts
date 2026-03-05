// shared/constants/seo.constants.ts
import type { Metadata } from "next";

export const SITE_NAME = "Projects JDU";
export const SITE_URL = "https://resumelens.one.vercel.app";
export const SITE_DESCRIPTION = "AI-powered resume analyzer that evaluates your CV, highlights weaknesses, optimizes keywords for ATS systems, and helps you land interviews faster.";

export const OG_IMAGE = "../../public/logos/vercel.svg";

export const SEO_DEFAULT: Metadata = {
    metadataBase: new URL(SITE_URL),

    title: {
        default: SITE_NAME,
        template: `%s | ${SITE_NAME}`,
    },

    description: SITE_DESCRIPTION,

    keywords: [
        "nextjs",
        "react",
        "typescript",
        "web development",
        "frontend",
    ],

    authors: [
        {
            name: "Your Name",
            url: SITE_URL,
        },
    ],

    creator: "Your Name",
    publisher: SITE_NAME,
    category: "technology",

    alternates: {
        canonical: "/",
    },

    openGraph: {
        type: "website",
        locale: "en_US",
        url: SITE_URL,
        siteName: SITE_NAME,
        title: SITE_NAME,
        description: SITE_DESCRIPTION,
        images: [
            {
                url: OG_IMAGE,
                width: 1200,
                height: 630,
                alt: SITE_NAME,
            },
        ],
    },

    twitter: {
        card: "summary_large_image",
        title: SITE_NAME,
        description: SITE_DESCRIPTION,
        images: [OG_IMAGE],
    },

    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },

    verification: {
        // Добавишь когда подключишь Google Search Console
        // google: "your-google-verification-code",
    },
};
