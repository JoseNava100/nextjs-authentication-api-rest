import "./globals.css";

export const metadata = {
  title: "Api Rest With Laravel",
  description: "Api Rest With Laravel",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
