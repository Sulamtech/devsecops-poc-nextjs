const controls = ["Gitleaks", "Semgrep", "Trivy SCA", "Trivy image"];

export default function HomePage() {
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
    </main>
  );
}
