import { GET } from "@/app/api/health/route";

describe("GET /api/health", () => {
  it("returns the frontend health contract", async () => {
    const response = GET();

    expect(response.status).toBe(200);
    await expect(response.json()).resolves.toEqual({
      status: "ok",
      service: "devsecops-poc-nextjs",
    });
  });
});
