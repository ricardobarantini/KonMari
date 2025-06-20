<script lang="ts">
	let { title, action } = $props();
</script>

<div class="flex justify-between items-center">
	<h1 class="text-teal-500 font-bold text-3xl">{title}</h1>
	{@render action?.()}
</div>