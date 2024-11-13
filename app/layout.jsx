import "./global.css";


export const metadata = {
  title: "Enforca",
  description: "Apply for your next role",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
