<script lang="ts">
	import '../app.css';

	let { children } = $props();
</script>

<div class="w-full bg-teal-500 border-b-5 border-amber-100">
	<div class="w-1/2 mx-auto py-3 text-xl">
		<div class="text-amber-100 font-bold">こんまり</div>
	</div>
</div>

<div class="w-full mt-5">
	<div class="w-1/2 mx-auto">
		{@render children()}
	</div>
</div>
