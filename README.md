# Laboratorio público DevSecOps

> **Aplicación sintética y educativa.** No contiene código, datos, secretos ni
> infraestructura de SaleADS. Su propósito es validar PR → CI → build único →
> Trivy pre-publish mediante reusable workflows fijados por SHA.

# DevSecOps PoC — Next.js

Frontend privado y desechable para validar controles CI/CD sobre Next.js 15, React 19 y TypeScript estricto sin tocar entornos corporativos.

## Arquitectura

- App Router con Server Components por defecto.
- Route Handler `GET /api/health`.
- Build standalone para una imagen runtime mínima.
- Jest para unidad e integración del contrato HTTP.
- Baseline/delta compatible con Shape Up.

## Seguridad

- No desplegar en producción.
- No conectar identidades, secretos, datos, redes ni registros corporativos.
- No hacerlo público durante los escenarios vulnerables.
- Nunca mergear Pull Requests negativos.
- Ejecutar builds, tests, Docker y scanners exclusivamente en GitHub Actions.

## Ciclo de vida

Repositorio temporal. Se elimina junto con sus artifacts al finalizar el PoC y documentar la decisión go/no-go.
