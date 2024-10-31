import { ChatDialog } from "@/components/ChatDialog";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export default function UserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Header />
      <div className="fixed">
      <ChatDialog/>
      </div>
      
      {children}
      <Footer />
    </div>
  );
}
