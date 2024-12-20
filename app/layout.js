 
import "./globals.css";
import {StateContext} from '@/context/StageContext'




import {  lora } from './font';
 

export const metadata = {
  title: {
    default: "Brenda Nunes - Semijoias Exclusivas",
    template: "%s | Brenda Nunes",
  },
  description:
    "Brenda Nunes: semijoias únicas e exclusivas, exportamos para todo o mundo. Explore nossa coleção de designs elegantes e modernos.",
  keywords: [
    "semijoias",
    "joias de luxo",
    "acessórios elegantes",
    "presentes sofisticados",
    "joias brasileiras",
    "luxo acessível",
    "joias femininas",
    "joias masculinas",
    "frete internacional",
    "bijuterias finas",
    "ouro folheado",
    "prata esterlina",
    "pedras preciosas",
    "brincos",
    "colares",
    "pulseiras",
    "anéis",
  ],
  openGraph: {
    title: "Brenda Nunes - Semijoias Exclusivas",
    description:
      "Descubra as semijoias exclusivas da Brenda Nunes. Designs modernos para clientes no Brasil e no mundo.",
    url: "https://brendanunes.online",
    siteName: "Brenda Nunes",
    images: [
      {
        url: "https://brendanunes.online/images/semijoias-hero.jpg", // Substitua pelo caminho real
        width: 1200,
        height: 630,
        alt: "Semijoias elegantes da Brenda Nunes",
      },
    ],
    locale: "pt-BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@BrendaNunesOfficial", // Ajuste conforme necessário
    title: "Brenda Nunes - Semijoias Exclusivas",
    description:
      "Semijoias únicas e elegantes. Explore os designs modernos de Brenda Nunes para o Brasil e o mundo.",
    images: [
      "https://brendanunes.online/images/semijoias-twitter.jpg", // Substitua pelo caminho real
    ],
  },
  alternates: {
    canonical: "https://brendanunes.online",
  },
};



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={lora.className}>
      <StateContext  >
        {children}
        </StateContext>
        </body>
    </html>
  );
}
