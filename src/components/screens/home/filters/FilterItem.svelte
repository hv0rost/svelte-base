<script lang="ts">
	import { emojis } from './emojis-data'
	import type { IFilter } from './filter.interface'
	import { currentFilter } from '../../../../store'

	export let filter: IFilter
	// export let currentFilter: string

	let isActive = false
	const unsubscribe = currentFilter.subscribe(value => {
		isActive = value === filter.name
	})
</script>

<button
	class="filter"
	class:active="{isActive}"
	on:click="{() => (currentFilter.set(filter.name))}"
>
	<div class="icon" style="background-color: {filter.color}">
		<div class="emoji">
			{emojis[filter.icon]}
		</div>
	</div>
	<span class="name">
		{filter.name}
	</span>
</button>

<style lang="scss">
	.filter {
		@apply text-center bg-white shadow rounded-3xl p-2 w-full mx-2 sm:mx-4 sm:h-44 h-36;

		.icon {
			@apply rounded-full text-4xl sm:text-6xl sm:h-32 h-16 text-center;
			.emoji {
				@apply h-full w-full flex items-center justify-center;
			}
		}
		.name {
			@apply sm:text-base text-xs mt-1 block font-semibold;
		}
	}
	.active {
		background-color: black;
		.name {
			color: white;
		}
	}
</style>
