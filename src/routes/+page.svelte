<script lang="ts">
  import { page } from "$app/stores";
  import Pre from "$lib/pre.svelte";
  import log from "$lib/utils/log";
  import { onMount } from "svelte";

  log.pageEnter("ENTERING :: +page.svelte");

  export let data;

  onMount(() => {
    log.layoutEnter("MOUNTING :: +page.svelte");
  });

  log.bold(
    `===📣 [+page.svelte :: load()] RECEVING data: ${JSON.stringify(data)}`
  );
</script>

<h1>Home</h1>

<Pre name="export let data" value={data} />
<Pre name="$page.data" value={$page.data} />
