export default function LoginPage() {
  return (
    <div className="min-h-[calc(100vh-3.5rem)] flex items-center justify-center">
      <div className="w-full max-w-sm rounded-xl border border-slate-800 bg-slate-900/60 p-6 space-y-4">
        <h1 className="text-lg font-semibold tracking-tight text-center">
          Kliniğe Giriş
        </h1>
        <form className="space-y-3">
          <div className="space-y-1.5">
            <label className="text-xs text-slate-300" htmlFor="email">
              E-posta
            </label>
            <input
              id="email"
              type="email"
              className="w-full rounded-md border border-slate-700 bg-slate-900 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-sky-500"
              placeholder="ornek@klinik.com"
            />
          </div>
          <div className="space-y-1.5">
            <label className="text-xs text-slate-300" htmlFor="password">
              Şifre
            </label>
            <input
              id="password"
              type="password"
              className="w-full rounded-md border border-slate-700 bg-slate-900 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-sky-500"
              placeholder="••••••••"
            />
          </div>
          <button
            type="submit"
            className="mt-2 w-full rounded-md bg-sky-500 px-3 py-2 text-sm font-medium text-white hover:bg-sky-400 transition-colors"
          >
            Giriş yap
          </button>
        </form>
      </div>
    </div>
  );
}
