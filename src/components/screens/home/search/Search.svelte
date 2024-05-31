<script lang="ts">
	// @ts-ignore:next-line
	import IoIosSearch from 'svelte-icons/io/IoIosSearch.svelte'
	
	import { searchValue } from '../../../../store'
</script>

<div class="search">
	<div class="icon">
		<IoIosSearch />
	</div>
	<input type="text" placeholder="Search..." bind:value="{$searchValue}" />
</div>

<style lang="scss">
	.search {
		@apply overflow-hidden bg-[#97888833] rounded-2xl py-2 px-3.5 flex flex-row;

		.icon {
			@apply w-6 mr-2 text-[#8f8b8b];
		}

		input {
			@apply bg-transparent text-[#111] w-full;
			outline: none;
			border: none;
			&::placeholder {
				@apply font-light;
			}
		}
	}
</style>
