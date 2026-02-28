import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const poppins = localFont({
  src: [
    { path: "../public/fonts/poppins-regular.woff2", weight: "400" },
    { path: "../public/fonts/poppins-semibold.woff2", weight: "600" },
    { path: "../public/fonts/poppins-bold.woff2", weight: "700" },
  ],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    template: "%s | DayBeforeEnd",
    default: "DayBeforeEnd | Survival Protocols",
  },
  description: "Community-sourced intel for any apocalypse scenario.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={poppins.variable} suppressHydrationWarning>
      <body className="antialiased font-sans bg-background text-foreground min-h-screen">
        <header className="border-b border-border-subtle p-4 bg-background/80 backdrop-blur-md sticky top-0 z-50">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <h1 className="text-sm font-bold tracking-[0.3em] uppercase text-brand">
              DayBeforeEnd
            </h1>
          </div>
        </header>

        {children}
      </body>
    </html>
  );
}