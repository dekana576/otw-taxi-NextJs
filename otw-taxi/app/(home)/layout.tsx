
import "../globals.css";
import HomeNavbar from "./components/HomeNavbar";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="max-w-4xl mx-auto">
    <HomeNavbar />
      {children}
    </div>
  );
}
