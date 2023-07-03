import "./globals.css";

export const metadata = {
  title: "Copy Feather | Sign in to become an exclusive member",
  description: "An Opt-In Form to join an exclusive member list",
  icons: {
    icon: "/public/logo.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className>{children}</body>
    </html>
  );
}
