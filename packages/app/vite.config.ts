import { defineConfig } from "vite-plus";

import { BaseConfig, TestConfig } from "@app-template/shared/vite";

export default defineConfig({
	...BaseConfig,
	...TestConfig,
});
