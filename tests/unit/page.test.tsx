import { render, screen } from "@testing-library/react";
import HomePage from "@/app/page";

describe("HomePage", () => {
  it("renders the DevSecOps controls", async () => {
    const page = await HomePage({ searchParams: Promise.resolve({}) });
    render(page);

    expect(
      screen.getByRole("heading", { name: "DevSecOps PoC" }),
    ).toBeInTheDocument();
    expect(screen.getByText("Gitleaks")).toBeInTheDocument();
    expect(screen.getByText("Semgrep")).toBeInTheDocument();
  });
});
