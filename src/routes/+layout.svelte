<script lang="ts">
  import log from "$lib/utils/log";
  import { onMount } from "svelte";
  import "../app.css";

  onMount(() => {
    log.layoutEnter("MOUNTING :: +layout.svelte");
  });
  log.layoutEnter("ENTERING :: +layout.svelte");

  export let data;

  log.bold(
    `===📣 [+layout.svelte :: load()] RECEVING data: ${JSON.stringify(data)}`
  );
</script>

<nav>
  <a href="/">Home</a>
  <a href="/nested/route">Nested route</a>
  <a href="/actions">Form actions</a>
  <a href="/error">Errors</a>
  <a href="/stores">Stores</a>
  <a href="/locals">Locals</a>
</nav>

<slot />

<style>
  nav {
    display: flex;
    gap: var(--size-7);
  }
</style>
