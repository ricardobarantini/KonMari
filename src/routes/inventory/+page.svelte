<script>
	import PageHeader from "../../components/PageHeader.svelte"
	import PrimaryButton from "../../components/PrimaryButton.svelte"
</script>

<PageHeader title="Inventory">
	{#snippet action()}
		<PrimaryButton title="Create" to="/inventory/create" />
	{/snippet}
</PageHeader>

<div class="grid grid-cols-3  gap-3 mt-5 *:bg-neutral-200 *:h-30 *:rounded-lg *:border-3 *:border-amber-100">
	<div>1</div>
	<div>2</div>
	<div>3</div>
	<div>4</div>
	<div>5</div>
	<div>6</div>
	<div>7</div>
	<div>8</div>
	<div>9</div>
	<div>10</div>
	<div>11</div>
	<div>12</div>
	<div>13</div>
	<div>14</div>
	<div>15</div>
</div>
