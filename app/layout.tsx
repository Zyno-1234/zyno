import "./globals.css";

export const metadata = {
  title: "ZYNO PG",
  description: "Premium PG Accommodation",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}