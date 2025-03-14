<script>
	import Project from '$lib/Project.svelte';
</script>

<section class="py-16 bg-rosa-gray-800" id="portfolio">
	<div class="container max-w-6xl px-4 sm:px-6 mx-auto">
		<div class="mb-8">
			<a class="text-rosa-red-400 font-medium underline text-xl" href="#portfolio">Portfolio</a>
		</div>

		<div class="flex flex-col gap-6">
			<Project
				href="https://github.com/travishorn/python-covid-dashboard"
				imgSrc="/screenshots/covid-dashboard.png"
				title="Interactive Data Dashboard for COVID-19 Statistics"
				description="A web-based data dashboard that presents and visualizes COVID-19 statistics from a publicly available data source. Allows users to interact with the data, selecting from different countries, date ranges, and metrics for visualization."
			/>
			<Project
				href="https://github.com/travishorn/nbi-data-analysis"
				imgSrc="/screenshots/nbi-database-schema.png"
				title="Exploratory Data within the National Bridge Inventory (NBI)"
				description="The scripts and instructions in this project set up a highly-optimized SQL database for exploring a large dataset of bridge inspections in the U.S. state of Georgia. Sample SQL queries are provided which perform various data manipulations including filtering, sorting, grouping, aggregations, and joining multiple tables to gather interesting insights from the data."
			/>
			<Project
				href="https://github.com/travishorn/poi-classifier"
				imgSrc="/screenshots/poi-classifier.png"
				title="Geospatial Point of Interest (POI) Classifier"
				description="A geospatial point of interest (POI) classifier that takes in data points with latitude, longitude, and name information and predicts the category of each point of interest. This project demonstrates data preprocessing, feature engineering, and classification using geospatial data."
			/>
			<Project
				href="https://github.com/travishorn/"
				imgSrc="/screenshots/github-repositories.png"
				title="Much, much more!"
				description="I'm not just a coder, I'm a creator. With over 200 public repositories spanning web development, data analysis, automation tools, and educational content, my GitHub showcases my passion for building innovative solutions. Browse through my projects to see how I tackle real-world problems with clean, efficient code!"
			/>
		</div>
	</div>
</section>
