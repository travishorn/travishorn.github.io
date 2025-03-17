<script>
	import ContactLink from '$lib/ContactLink.svelte';
	import { EnvelopeIcon } from 'heroicons-svelte/24/outline';
	import GitHubIcon from '$lib/icons/GitHub.svelte';
	import XIcon from '$lib/icons/X.svelte';
	import StackOverflowIcon from '$lib/icons/StackOverflow.svelte';
	import RSSIcon from '$lib/icons/RSS.svelte';
</script>

<section class="bg-rosa-gray-900 py-20" id="contact">
	<div class="container px-3 mx-auto flex flex-col gap-5">
		<a class="text-rosa-red-400 font-medium underline" href="#contact">Contact</a>

		<div class="flex flex-col gap-6">
			<ContactLink href="mailto:travis@travishorn.com" rel="me"
				><EnvelopeIcon class="w-6 h-6" /> travis@travishorn.com</ContactLink
			>
			<ContactLink href="https://github.com/travishorn" rel="me"
				><GitHubIcon class="w-6 h-6" /> github.com/travishorn</ContactLink
			>
			<ContactLink href="https://x.com/horn_travis" rel="me"
				><XIcon class="w-6 h-6" /> x.com/horn_travis</ContactLink
			>
			<ContactLink href="https://stackoverflow.com/users/307338/travis?tab=profile" rel="me"
				><StackOverflowIcon class="w-6 h-6" /> stackoverflow.com/users/307338/travis</ContactLink
			>
			<ContactLink href="https://travishorn.com" rel="me"
				><RSSIcon class="w-5 h-5" /> My blog - travishorn.com</ContactLink
			>
		</div>
	</div>
</section>
