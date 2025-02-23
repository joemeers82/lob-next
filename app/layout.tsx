import "@/app/globals.css";
import { messinaSans, messinaSerif } from "@/app/lib/fonts";
import Navbar from "./components/layout/Navbar";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${messinaSans.variable} ${messinaSerif.variable}`}
    >
      <body className="text-foreground bg-background antialiased font-sans">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
