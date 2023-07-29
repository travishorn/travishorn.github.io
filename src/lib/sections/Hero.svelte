<script>
	import { EnvelopeIcon } from 'heroicons-svelte/24/outline';
	import DataIcon from '$lib/icons/Data.svelte';
</script>

<section
	class="flex flex-col lg:flex-row container px-3 mx-auto justify-center items-center lg:items-start"
>
	<h1 class="text-4xl lg:text-8xl font-black text-center lg:text-right lg:pt-28">
		Travis<br class="hidden lg:block" />
		Horn
	</h1>

	<div class="flex flex-col gap-4 lg:gap-8 pt-10 lg:pt-32 lg:order-last lg:max-w-sm">
		<div class="hidden lg:flex justify-center pb-10">
			<DataIcon class="w-24 h-24 text-rosa-gray-400 -rotate-45" />
		</div>

		<div class="font-bold text-2xl">
			Based in St. Louis, I'm a data scientist and software engineer.
		</div>

		<div class="text-sm text-rosa-gray-100">
			Impactful problem-solving calls for a combination of data-driven insights, software solutions,
			and a collaborative environment.
		</div>

		<a
			class="text-rosa-red-400 font-medium underline text-sm flex gap-1 items-center"
			href="mailto:travis@travishorn.com"
			><EnvelopeIcon class="h-6 w-6 pt-1" /> travis@travishorn.com</a
		>
	</div>

	<img class="h-[300px] w-[226px] lg:h-[600px] lg:w-[452px]" alt="Travis Horn" src="/profile.png" />
</section>
