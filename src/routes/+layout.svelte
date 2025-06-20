<script lang="ts">
	import '../app.css';

	let { children } = $props();
</script>

<div class="w-full bg-teal-500 border-b-5 border-amber-100">
	<div class="flex justify-between items-center w-1/2 mx-auto py-3">
		<!-- Logo -->
		<div class="text-amber-100 font-bold text-xl">こんまり</div>

		<!-- Menu -->
		<div class="flex gap-x-3 *:text-amber-100 *:font-bold">
			<a href="/">Overview</a>
			<a href="/inventory">Inventory</a>
		</div>
	</div>
</div>

<div class="w-full mt-5">
	<div class="w-1/2 mx-auto">
		{@render children()}
	</div>
</div>
