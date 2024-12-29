import "./globals.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import { HeaderProvider } from "@/context/HeaderContext";

export const metadata = {
  title: "roderickdsweb",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <HeaderProvider>{children}</HeaderProvider>
      </body>
    </html>
  );
}
