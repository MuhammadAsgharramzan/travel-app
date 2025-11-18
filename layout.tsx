import "./globals.css";
import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Travel App",
  description: "Find and book flights easily",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-100 text-gray-900">
        {/* Load Skyscanner widget JS */}
        <Script
          src="https://widgets.skyscanner.net/widget-server/js/loader.js"
          strategy="afterInteractive"
        />

        {/* Navbar */}
        <nav className="w-full bg-white shadow p-4">
          <div className="container mx-auto flex gap-6 text-lg font-medium">
            <a href="/">Home</a>
            <a href="/flights">Flights</a>
          </div>
        </nav>

        <main className="container mx-auto py-10">{children}</main>

        <footer className="text-center py-4 mt-10 bg-gray-200">
          © {new Date().getFullYear()} Travel App
        </footer>
      </body>
    </html>
  );
}
