const controls = [
  "Gitleaks",
  "Semgrep",
  "Trivy SCA",
  "Triage determinista PASS / WARN / BLOCK",
  "Trivy de la imagen real después del merge",
];

export default function HomePage() {
  return (
    <main>
      <p className="eyebrow">SALEADS · LABORATORIO AISLADO</p>
      <h1>DevSecOps PoC</h1>
      <p>
        Frontend Next.js utilizado para validar el mismo contrato de seguridad
        aplicado a los microservicios. El PR se evalúa sin crear una imagen temporal.
      </p>
      <ul>
        {controls.map((control) => (
          <li key={control}>{control}</li>
        ))}
      </ul>
    </main>
  );
}
