import localFont from "next/font/local";
import "./globals.css";

export const metadata = {
  title: "Planning",
  description: "add task and note ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa">
      <body
         dir="rtl"
        className="dark:bg-background-dark"
      >
        {children}
      </body>
    </html>
  );
}
