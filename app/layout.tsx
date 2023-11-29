import { GeistSans } from "geist/font/sans";
import SupabaseProvider from "@/components/SupabaseProvider";
import Sidebar from "@/components/Sidebar";
import PageContent from "@/components/PageContent";
import "./globals.css";
import AuthModal from "@/components/AuthModal";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Interactive Task List",
  description: "The fastest way to get things done.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={GeistSans.className}>
      <body>
        <SupabaseProvider>
          <AuthModal />
          <main className="min-h-screen flex">
            <Sidebar />
            <PageContent>{children}</PageContent>
          </main>
        </SupabaseProvider>
      </body>
    </html>
  );
}
