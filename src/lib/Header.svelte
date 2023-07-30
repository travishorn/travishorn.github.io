<script>
	import { Bars3Icon } from 'heroicons-svelte/24/outline';
	import { XMarkIcon } from 'heroicons-svelte/24/outline';

	let navExpanded = false;

	function toggleNav() {
		navExpanded = !navExpanded;
	}

	function collapseNav() {
		navExpanded = false;
	}
</script>

<header class="fixed bg-rosa-gray-800 p-3 lg:py-6 w-full shadow-lg">
	<div class="container mx-auto px-3">
		<button class="lg:hidden hover:text-rosa-red-400" on:click={toggleNav}>
			{#if navExpanded}
				<XMarkIcon class="w-6 h-6" />
			{:else}
				<Bars3Icon class="w-6 h-6" />
			{/if}
		</button>
		<nav
			class={`text-sm flex-col lg:flex-row gap-5 lg:gap-16 font-medium ${
				navExpanded ? 'flex' : 'hidden lg:flex'
			}`}
		>
			<a on:click={collapseNav} href="/" class="hover:text-rosa-red-400">Home</a>
			<a on:click={collapseNav} href="#about-me" class="hover:text-rosa-red-400">About me</a>
			<a on:click={collapseNav} href="#portfolio" class="hover:text-rosa-red-400">Portfolio</a>
			<a on:click={collapseNav} href="#contact" class="hover:text-rosa-red-400">Contact</a>
		</nav>
	</div>
</header>
