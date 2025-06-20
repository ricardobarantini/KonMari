<script lang="ts">
	let { to, title, icon = undefined } = $props();
</script>

<a href="{to}" class="bg-teal-500 hover:bg-teal-600 transition-all ease-linear rounded px-3 py-2 text-neutral-50 font-bold flex items-center">
	{@render icon?.()}
	{title}
</a>