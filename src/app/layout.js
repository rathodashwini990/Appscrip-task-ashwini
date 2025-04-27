import "./globals.css";

export const metadata = {
  title: "Discover Products | Appscrip Task",
  description: "Discover a wide range of customizable products ideal for all occasions.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}