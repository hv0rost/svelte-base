<script lang="ts">
	import CatalogItem from './CatalogItem.svelte'
	import { restaurants } from './restaurantsData'

	import { currentFilter, searchValue } from '../../../../store'

	let activeFilter = 'Cafe'
	const unsubscribe = currentFilter.subscribe(value => {
		activeFilter = value
	})
	let searchFilter = ''
	const storeSearchValue = searchValue.subscribe(value => {
		searchFilter = value
	})

	$: filteredRestaurants = restaurants
		.filter(item => item.tag === activeFilter)
		.filter(i =>
			i.name.toLocaleLowerCase().includes(searchFilter.toLocaleLowerCase())
		)
</script>

<div class="catalog">
	{#each filteredRestaurants as restaurant}
		<CatalogItem {restaurant} />
	{/each}

	{#if filteredRestaurants.length === 0}
		<div class="not-found">Nothing found</div>
	{/if}
</div>

<style lang="scss">
	.catalog {
		@apply mt-5 flex flex-col gap-4;
	}
	.not-found {
		@apply sm:text-6xl text-2xl text-gray-400 absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%, 0);
	}
</style>
