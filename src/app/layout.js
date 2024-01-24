import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Mr. Sabueso | Tienda de mascotas",
  description: "Venta online de alimento, accesorios, higiene y cuidado general para perros, gatos y otras mascotas. Máxima calidad y garantía ¡Encuentra nuestras ofertas!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
          {children}
      </body>
    </html>
  );
}
