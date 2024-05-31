<script lang="ts">
	import { push } from 'svelte-spa-router'
	// @ts-ignore:next-line
	import TiStarFullOutline from 'svelte-icons/ti/TiStarFullOutline.svelte'
	// @ts-ignore:next-line
	import IoMdWallet from 'svelte-icons/io/IoMdWallet.svelte'

	import type { IRestaurant } from './restaurant.interface'

	export let restaurant: IRestaurant
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<div class="relative" on:click="{() => push(`/restaurant/${restaurant.name}`)}">
	<div class="restaurant">
		<img src="{restaurant.imgSrc}" alt="{restaurant.name}" />
		<div class="row mt-6">
			<div class="title">{restaurant.name}</div>
			<div class="rating">
				<div class="w-6 mr-1 text-yellow-500">
					<TiStarFullOutline />
				</div>
				<span>{restaurant.rating}</span>
			</div>
		</div>
		<div class="row mt-3">
			<div class="flex">
				<div class="w-6">
					<IoMdWallet />
				</div>
				<span class="font-semibold ml-1"
					>Average price {restaurant.priceRating}</span
				>
			</div>
			<div class="destination">{restaurant.destination} Km</div>
		</div>
		<div class="mt-2 pb-4">
			{#each restaurant.kitchens as kitchen}
				<span class="ml-4 text-stone-400">{kitchen}</span>
			{/each}
		</div>
	</div>
</div>

<style lang="scss">
	.restaurant {
		@apply rounded-2xl m-4 mt-6 shadow bg-white;
		img {
			@apply rounded-2xl w-full;
		}
		.row {
			@apply flex justify-between mx-4;
			.title {
				@apply font-bold text-4xl;
			}
			.rating {
				@apply flex items-center font-semibold;
			}
			.destination {
				@apply bg-green-500 rounded-md py-0.5 px-1 text-white;
			}
		}
		&:hover {
			@apply cursor-pointer;
		}

		&::before {
			content: '';
			@apply absolute rounded-3xl z-0 bg-green-500 opacity-50 left-5 top-5;
			@media screen and (min-width: 640px) {
				@apply left-16 top-14;
				width: 85%;
				height: 85%;
			}

			width: 81%;
			height: 85%;
			transform: rotate(-10deg);
			z-index: -1;
		}
	}
</style>
