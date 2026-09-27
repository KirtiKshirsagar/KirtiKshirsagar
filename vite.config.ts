// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
    // Pre-render "/" to static HTML at build time so the GitHub Pages build
    // produces a fully servable site (see .github/workflows/deploy.yml).
    prerender: { enabled: true, crawlLinks: true },
  },
  // Static preset is only used outside Lovable builds (local/CI); Lovable's
  // own publish keeps its pinned Cloudflare preset.
  nitro: { preset: "static" },
});
