<script>
	import { EnvelopeIcon } from 'heroicons-svelte/24/outline';
</script>

<div
	class="flex flex-col lg:flex-row container px-3 mx-auto justify-center items-center lg:items-start"
>
	<h1 class="text-4xl lg:text-8xl font-bold text-center lg:text-right lg:pt-28">
		Travis<br class="hidden lg:block" />
		Horn
	</h1>

	<div class="flex flex-col gap-4 lg:gap-8 pt-10 lg:pt-60 lg:order-last max-w-sm">
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
</div>

<div class="bg-rosa-gray-900 py-20" id="about">
	<div class="container px-3 mx-auto flex flex-col gap-5">
		<a class="text-rosa-red-400 font-medium underline" href="#about">About me</a>

		<div class="flex flex-col lg:flex-row gap-24">
			<div class="lg:w-1/2 flex flex-col gap-5">
				<div class="text-2xl font-bold">
					In the realm of data science, hidden narratives of information can be unvieled, unlocking
					greater potential.
				</div>

				<div class="text-rosa-gray-100 text-sm">
					Since the start of my career, data has been at the heart of every project I've undertaken.
					I enjoy digging into the numbers and seeing what useful insights can be gleaned. I'm
					excited for what the future holds: from real-time analytics to machine learning, we have a
					lot to look forward to in this industry.
				</div>

				<div class="flex gap-3 items-center justify-center lg:justify-start">
					<div class="text-rosa-red-400 font-bold text-7xl">
						{Math.round((new Date().valueOf() - new Date('2007-05-26').valueOf()) / 3.154e10)}
					</div>
					<div class="text-xl font-medium">Years of<br />experience</div>
				</div>
			</div>

			<div class="lg:w-1/2 flex flex-col gap-5">
				<div class="text-5xl font-bold">Want to know more?</div>

				<div class="text-rosa-gray-100">Let's talk.</div>

				<a
					class="text-rosa-red-400 font-medium underline text-2xl flex gap-5"
					href="mailto:travis@travishorn.com"
				>
					<span>travis@travishorn.com</span>
					<span>→</span></a
				>
			</div>
		</div>
	</div>
</div>
