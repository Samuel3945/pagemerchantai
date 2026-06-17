import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  // Lean Node image for the VPS (Docker) deploy.
  output: "standalone",

  // Pin the workspace root so Turbopack ignores stray lockfiles outside the project.
  turbopack: {
    root: path.resolve(__dirname),
  },

  // Keep the old static `.html` URLs alive on the new site (they 301 to clean URLs),
  // so any link already submitted to the payment gateway doesn't 404.
  async redirects() {
    return [
      { source: "/terminos.html", destination: "/terminos", permanent: true },
      { source: "/privacidad.html", destination: "/privacidad", permanent: true },
      { source: "/reembolsos.html", destination: "/reembolsos", permanent: true },
      { source: "/precios.html", destination: "/precios", permanent: true },
      { source: "/index.html", destination: "/", permanent: true },
      {
        source: "/industria.html",
        has: [{ type: "query", key: "sector", value: "(?<sector>.*)" }],
        destination: "/industria/:sector",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
