interface PatientDetailPageProps {
  params: { id: string };
}

export default function PatientDetailPage({ params }: PatientDetailPageProps) {
  const { id } = params;

  return (
    <div className="space-y-4">
      <h1 className="text-xl font-semibold tracking-tight">
        Hasta Detayı #{id}
      </h1>
      <div className="grid gap-4 md:grid-cols-3">
        <div className="md:col-span-1 space-y-2 rounded-xl border border-slate-800 bg-slate-900/40 p-4 text-sm">
          <div className="font-medium">Genel Bilgiler</div>
          <div className="text-slate-400 text-xs">
            Burada hastanın temel bilgileri (isim, iletişim, tıbbi geçmiş özeti) yer alacak.
          </div>
        </div>
        <div className="md:col-span-2 space-y-2 rounded-xl border border-slate-800 bg-slate-900/40 p-4 text-sm">
          <div className="font-medium">Odontogram / Tedavi Planı</div>
          <div className="text-slate-400 text-xs">
            Bu alanda interaktif odontogram bileşeni ve aktif tedavi planı listesi görüntülenecek.
          </div>
        </div>
      </div>
    </div>
  );
}

