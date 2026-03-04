
import "../globals.css";
import HomeNavbar from "./components/HomeNavbar";
import "leaflet/dist/leaflet.css"

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
