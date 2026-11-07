import { defineConfig } from "vite-plus";

import { BaseConfig, TestConfig } from "#vite/index";

export default defineConfig({
	...BaseConfig,
	...TestConfig,
});
