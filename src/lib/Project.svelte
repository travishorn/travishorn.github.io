<script>
	/** @type {string} */
	export let href;

	/** @type {string} */
	export let imgSrc = '/placeholder-200x200.png';

	/** @type {string} */
	export let title;

	/** @type {string} */
	export let description;
</script>

<a
	class="bg-rosa-gray-700 flex flex-col md:flex-row rounded p-4 group hover:bg-rosa-gray-600 transition-colors duration-200"
	{href}
	target="_blank"
	rel="noopener noreferrer"
>
	<div class="md:flex-shrink-0">
		<img
			class="w-full md:w-52 h-auto md:h-52 rounded object-cover"
			alt={`Screenshot of ${title}`}
			src={imgSrc}
		/>
	</div>
	<div class="flex flex-col gap-3 justify-between md:ml-5 flex-grow mt-3 md:mt-0">
		<h2 class="font-medium text-lg group-hover:text-rosa-red-400 transition-colors duration-200">
			{title}
		</h2>
		<div class="text-rosa-gray-100 text-sm flex-grow">{description}</div>
		<div class="text-right text-rosa-red-400 text-2xl">→</div>
	</div>
</a>
