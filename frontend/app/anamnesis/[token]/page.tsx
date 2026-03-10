interface AnamnesisPageProps {
  params: { token: string };
}

export default function AnamnesisPage({ params }: AnamnesisPageProps) {
  return (
    <main>
      <h1>Anamnez Formu</h1>
      <p>Token: {params.token}</p>
    </main>
  );
}

