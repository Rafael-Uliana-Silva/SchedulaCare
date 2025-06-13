import "../styles/globals.css";

export const metadata = {
  title: "SchedulaCare",
  description: "Agendamento para profissionais",
};

<meta name="apple-mobile-web-app-title" content="MyWebSite" />;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
