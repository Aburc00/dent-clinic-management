import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dental Clinic Management",
  description: "Diş kliniği yönetim paneli",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body className="antialiased bg-slate-950 text-slate-100">
        <div className="min-h-screen flex">
          <aside className="w-64 bg-slate-900 border-r border-slate-800 px-4 py-6 hidden md:flex flex-col gap-4">
            <div className="text-lg font-semibold tracking-tight">
              Diş Klinik Paneli
            </div>
            <nav className="flex flex-col gap-1 text-sm">
              <a href="/dashboard" className="px-3 py-2 rounded-md hover:bg-slate-800">
                Dashboard
              </a>
              <a href="/patients" className="px-3 py-2 rounded-md hover:bg-slate-800">
                Hastalar
              </a>
              <a href="/appointments" className="px-3 py-2 rounded-md hover:bg-slate-800">
                Randevular
              </a>
              <a href="/billing" className="px-3 py-2 rounded-md hover:bg-slate-800">
                Finans
              </a>
              <a href="/inventory" className="px-3 py-2 rounded-md hover:bg-slate-800">
                Stok
              </a>
              <a href="/reports" className="px-3 py-2 rounded-md hover:bg-slate-800">
                Raporlar
              </a>
              <a href="/settings/users" className="px-3 py-2 rounded-md hover:bg-slate-800">
                Kullanıcılar
              </a>
            </nav>
          </aside>
          <div className="flex-1 flex flex-col min-w-0">
            <header className="h-14 border-b border-slate-800 px-4 flex items-center justify-between bg-slate-950/80 backdrop-blur">
              <div className="font-medium text-sm">Dental Clinic Management</div>
              <div className="text-xs text-slate-400">Demo ortamı</div>
            </header>
            <main className="flex-1 px-4 py-4 md:px-8 md:py-6 bg-slate-950">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
