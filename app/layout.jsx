import "./globals.css";

export const metadata = {
  title: "AfriRise",
  description: "Empowering Africa's youth through AI, skills, and opportunity."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
