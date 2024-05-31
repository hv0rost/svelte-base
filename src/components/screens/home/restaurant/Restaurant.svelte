<script lang="ts">
	import { pop } from 'svelte-spa-router'

	export let params
</script>

<div>
	<h1>{params.name}</h1>
	<br />
	<button on:click="{() => pop()}">Go back</button>
</div>
