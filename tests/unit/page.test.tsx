import { render, screen } from "@testing-library/react";
import HomePage from "@/app/page";

describe("HomePage", () => {
  it("renders the DevSecOps controls", () => {
    render(<HomePage />);

    expect(
      screen.getByRole("heading", { name: "DevSecOps PoC" }),
    ).toBeInTheDocument();
    expect(screen.getByText("Gitleaks")).toBeInTheDocument();
    expect(screen.getByText("Semgrep")).toBeInTheDocument();
    expect(screen.getByText("Triage determinista PASS / WARN / BLOCK")).toBeInTheDocument();
    expect(screen.getByText("Trivy de la imagen real después del merge")).toBeInTheDocument();
  });
});
