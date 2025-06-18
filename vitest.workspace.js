import { defineWorkspace } from "vitest/config";

export default defineWorkspace([
  // Modules
  "./modules/git-advanced/vitest.config.ts",
  "./modules/typescript-core/vitest.config.ts",
  "./modules/tdd-service/vitest.config.ts",
  "./modules/clean-code/vitest.config.ts",
  "./modules/clean-arch/vitest.config.ts",
  "./modules/docker/vitest.config.ts",
  // Labs
  "./labs/projects-example/vitest.config.ts",
]);
