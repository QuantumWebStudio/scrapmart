import "./globals.css";
import Header from "@components/Header";
import Footer from "@components/Footer";
export const metadata = {
  title: "Scrap Mart",
  description: "sell your unwanted items",
};

//THE MAIN LANDING PAGE
export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
