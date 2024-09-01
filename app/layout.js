import "./globals.css";


export const metadata = {
  title: "Cincinnati Excavation - Rock Solid Excavation",
  description: "Cincinnati Excavation Services, High quality and fast excavation quotes. Cincinnati's best excavation Services ready to help you with your excavation needs",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
