 
import "./globals.css";
import {StateContext} from '@/context/StageContext'




import {  lora } from './font';
 

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
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
