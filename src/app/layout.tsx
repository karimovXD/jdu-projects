//@ts-ignore
import "@/styles/globals.css";
import { publicSans } from "@/constants/fonts";
import { ThemeProvider } from "./providers/theme.provider";
import { SEO_DEFAULT } from "@/constants/seo";

export const metadata = SEO_DEFAULT;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${publicSans.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
