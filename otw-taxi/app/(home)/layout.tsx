
import "../globals.css";
import HomeNavbar from "./components/HomeNavbar";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
    <HomeNavbar />
      {children}
    </>
  );
}
