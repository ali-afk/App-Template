import { isTest } from "@app-template/shared/utils/build";
import { BuildConfig, TestConfig, BaseConfig, SveltekitConfig } from "@app-template/shared/vite";
import { sveltekit } from "@sveltejs/kit/vite";
import { svelteTesting } from "@testing-library/svelte/vite";
import { defineConfig } from "vite-plus";

export default defineConfig({
	...BuildConfig,
	...TestConfig,
	...BaseConfig,
	plugins: [sveltekit(SveltekitConfig), ...(isTest ? [svelteTesting()] : [])],
	run: {
		tasks: {
			build: {
				command: "vp build",
				cache: { input: ["./src/**"] },
			},
		},
	},
});
