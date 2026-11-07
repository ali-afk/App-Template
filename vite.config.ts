import { defineConfig } from "vite-plus";

import { TestConfig, BaseConfig } from "@app-template/shared/vite";

export default defineConfig({
	...BaseConfig,
	...TestConfig,
	run: { cache: true },
});
