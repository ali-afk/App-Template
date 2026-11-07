import { BaseConfig, TestConfig } from "@app-template/shared/vite";
import { defineConfig } from "vite-plus";

export default defineConfig({
	...BaseConfig,
	...TestConfig,
});
