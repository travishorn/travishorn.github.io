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
	class="bg-rosa-gray-700 flex flex-col lg:flex-row gap-4 lg:gap-0 justify-between rounded p-3 group"
	{href}
>
	<img class="w-52 h-52 rounded" alt={`Screenshot of ${title}`} src={imgSrc} />
	<div class="flex flex-col gap-4 justify-between w-72">
		<h2 class="font-medium group-hover:text-rosa-red-400">{title}</h2>
		<div class="text-rosa-gray-100 text-sm">{description}</div>
		<div class="text-right text-rosa-red-400 text-2xl">→</div>
	</div>
</a>
