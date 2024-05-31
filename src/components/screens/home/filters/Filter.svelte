<script lang="ts">
	import FilterItem from './FilterItem.svelte'
	import type { IFilter } from './filter.interface'

	const filters: IFilter[] = [
		{
			name: 'Cafe',
			icon: 'hamburger',
			color: '#e9edfc'
		},
		{
			name: 'Cinema',
			icon: 'cinema',
			color: '#e1f5e9'
		},
		{
			name: 'Stand-up',
			icon: 'microphone',
			color: '#f9eee7'
		},
		{
			name: 'Ice cream',
			icon: 'icecream',
			color: '#f9f9df'
		}
	]
</script>

<div class="filter">
	{#each filters as filter}
		<FilterItem {filter} />
	{/each}
</div>

<style lang="scss">
	.filter {
		@apply mt-5 flex items-center justify-around;
	}
</style>
