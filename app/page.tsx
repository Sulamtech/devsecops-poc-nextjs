const controls = ["Gitleaks", "Semgrep", "Trivy SCA", "Trivy image"];

type HomePageProps = {
  searchParams?: Promise<{ preview?: string | string[] }>;
};

export default async function HomePage({ searchParams }: HomePageProps = {}) {
  const params = await searchParams;
  const preview = Array.isArray(params?.preview)
    ? params.preview[0]
    : (params?.preview ?? "");

  return (
    <main>
      <p className="eyebrow">SALEADS · LABORATORIO AISLADO</p>
      <h1>DevSecOps PoC</h1>
      <p>
        Frontend Next.js utilizado para validar el mismo contrato de seguridad
        aplicado a los microservicios.
      </p>
      <ul>
        {controls.map((control) => (
          <li key={control}>{control}</li>
        ))}
      </ul>
      <section
        aria-label="Vista previa no confiable"
        dangerouslySetInnerHTML={{ __html: preview }}
      />
    </main>
  );
}
