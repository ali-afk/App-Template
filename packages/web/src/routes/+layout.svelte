<script lang="ts">
import { AppMetadata } from "@app-template/ui/data/stores/config";
import "@app-template/ui/styles/index.css";
import { onMount } from "svelte";
import { getMetadataService } from "@app-template/infrastructure";
import { handleResult } from "@app-template/ui/tauri/utils";

// Guards child rendering — shows loading screen until IPC resolves
let isInitialized = $state(false);
async function initialiseAppMetadata() {
	const metadata = handleResult(await getMetadataService().appMetadata());
	AppMetadata.set(metadata);
	isInitialized = true;
}
onMount(initialiseAppMetadata);

let { children } = $props();
</script>

{#if isInitialized}
	{@render children()}
{:else}
	<section class="loading-item"></section>
{/if}
