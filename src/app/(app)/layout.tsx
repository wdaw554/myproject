import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

export default function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container py-6 md:py-10 px-4 md:px-6 mb-16 md:mb-0">
        {children}
      </main>
      <Footer />
    </div>
  );
}
