export default function BillingPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-xl font-semibold tracking-tight">Finans</h1>
      <div className="grid gap-4 md:grid-cols-3">
        <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-4 text-sm">
          <div className="text-xs text-slate-400">Bugünkü tahsilat</div>
          <div className="mt-2 text-2xl font-semibold">₺0</div>
        </div>
        <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-4 text-sm">
          <div className="text-xs text-slate-400">Aylık ciro</div>
          <div className="mt-2 text-2xl font-semibold">₺0</div>
        </div>
        <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-4 text-sm">
          <div className="text-xs text-slate-400">Açık fatura sayısı</div>
          <div className="mt-2 text-2xl font-semibold">0</div>
        </div>
      </div>
    </div>
  );
}

