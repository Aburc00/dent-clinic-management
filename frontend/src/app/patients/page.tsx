export default function PatientsPage() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between gap-2">
        <h1 className="text-xl font-semibold tracking-tight">Hastalar</h1>
        <button className="rounded-md bg-sky-500 px-3 py-1.5 text-sm font-medium text-white hover:bg-sky-400">
          Yeni hasta
        </button>
      </div>
      <div className="flex flex-col gap-3">
        <input
          className="max-w-sm rounded-md border border-slate-800 bg-slate-900 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-sky-500"
          placeholder="İsim, telefon veya TCKN ile ara"
        />
        <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-4 text-sm text-slate-400">
          Henüz hasta kaydı yok. İlk hastayı eklemek için &quot;Yeni hasta&quot;ya tıklayın.
        </div>
      </div>
    </div>
  );
}

