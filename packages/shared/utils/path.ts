import { findPackageJSON } from "node:module";
import path from "node:path";

export const RepoRoot = path.resolve(import.meta.dirname, "../../..");

export function getPackageRoot(callerMetaUrl: string | URL): string {
	const pkgJsonPath = findPackageJSON(".", callerMetaUrl);

	if (!pkgJsonPath) {
		throw new Error(`Could not resolve packageRoot from ${callerMetaUrl}`);
	}

	const root = path.dirname(pkgJsonPath);
	if (root === RepoRoot) {
		throw new Error(
			`Resolved repo root (${RepoRoot}) for package-only resolution from ${callerMetaUrl}`,
		);
	}

	return root;
}

// Debug binary built with the `e2e` feature, via
// `bunx tauri build --no-bundle --debug --features e2e` in packages/shell.
// CARGO_TARGET_DIR is packages/shell/.out/build — see packages/shell/.cargo/config.toml.
export const AppBinaryPath = path.join(
	RepoRoot,
	"packages/shell/.out/build/debug",
	process.platform === "win32" ? "shell.exe" : "shell",
);
