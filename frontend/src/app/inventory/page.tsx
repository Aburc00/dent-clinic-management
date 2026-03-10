export default function InventoryPage() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between gap-2">
        <h1 className="text-xl font-semibold tracking-tight">Stok</h1>
        <button className="rounded-md bg-sky-500 px-3 py-1.5 text-sm font-medium text-white hover:bg-sky-400">
          Yeni ürün
        </button>
      </div>
      <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-4 text-sm text-slate-400">
        Ürün listesi ve kritik stok uyarıları burada gösterilecek.
      </div>
    </div>
  );
}

