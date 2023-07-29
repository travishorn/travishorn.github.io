<script>
	import { EnvelopeIcon } from 'heroicons-svelte/24/outline';
	import GitHubIcon from '$lib/icons/GitHub.svelte';
	import TwitterIcon from '$lib/icons/Twitter.svelte';
	import StackOverflowIcon from '$lib/icons/StackOverflow.svelte';
	import RSSIcon from '$lib/icons/RSS.svelte';
</script>

<section class="bg-rosa-gray-900 py-20" id="contact">
	<div class="container px-3 mx-auto flex flex-col gap-5">
		<a class="text-rosa-red-400 font-medium underline" href="#contact">Contact</a>

		<div class="flex flex-col gap-6">
			<a class="flex gap-4 hover:text-rosa-red-400" href="mailto:travis@travishorn.com"
				><EnvelopeIcon class="w-6 h-6" /> travis@travishorn.com</a
			>
			<a class="flex gap-4 hover:text-rosa-red-400" href="https://github.com/travishorn"
				><GitHubIcon class="w-6 h-6" /> github.com/travishorn</a
			>
			<a class="flex gap-4 hover:text-rosa-red-400" href="https://twitter.com/horn_travis"
				><TwitterIcon class="w-6 h-6" /> twitter.com/horn_Travis</a
			>
			<a
				class="flex gap-4 hover:text-rosa-red-400"
				href="https://stackoverflow.com/users/307338/travis?tab=profile"
				><StackOverflowIcon class="w-6 h-6" /> stackoverflow.com/users/307338/travis</a
			>
			<a class="flex gap-5 hover:text-rosa-red-400" href="https://travishorn.com"
				><RSSIcon class="w-5 h-5" /> My blog - travishorn.com</a
			>
		</div>
	</div>
</section>
