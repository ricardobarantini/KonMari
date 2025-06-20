<script>
import PageHeader from '../../../components/PageHeader.svelte';
import PrimaryButton from '../../../components/PrimaryButton.svelte';
</script>

<PageHeader title="Inventory">
	{#snippet action()}
		<PrimaryButton title="Back" to="/inventory" />
	{/snippet}
</PageHeader>

<form method="POST">
	<div class="flex flex-col">
		<label for="item">Item</label>
		<input type="text" id="item" name="item" />
	</div>

	<div class="flex flex-col">
		<label for="description">Description</label>
		<input type="text" id="description" name="description" />
	</div>

	<button>Submit</button>
</form>
