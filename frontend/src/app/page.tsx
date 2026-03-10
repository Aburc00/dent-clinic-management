export default function Home() {
  return (
    <div className="space-y-4">
      <h1 className="text-xl font-semibold tracking-tight">Hoş geldiniz</h1>
      <p className="text-sm text-slate-300 max-w-2xl">
        Bu panel, diş kliniğinizde hasta kayıtlarını, randevuları, finansal işlemleri ve stok
        hareketlerini tek bir yerden yönetmeniz için tasarlandı. Soldaki menüden modüllere
        erişebilirsiniz.
      </p>
      <div className="grid gap-4 md:grid-cols-3 mt-4">
        <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-4">
          <div className="text-xs font-medium text-slate-400">Bugünkü randevular</div>
          <div className="mt-2 text-2xl font-semibold">0</div>
        </div>
        <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-4">
          <div className="text-xs font-medium text-slate-400">Açık hasta bakiyesi</div>
          <div className="mt-2 text-2xl font-semibold">₺0</div>
        </div>
        <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-4">
          <div className="text-xs font-medium text-slate-400">Kritik stok kalemi</div>
          <div className="mt-2 text-2xl font-semibold">0</div>
        </div>
      </div>
    </div>
  );
}
