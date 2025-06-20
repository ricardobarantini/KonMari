import * as db from '$lib/server/db';
import type { Actions } from './$types';
import { createInventoryItem } from '$lib/server/db';

export const actions = {
	default: async ({ request }) => {
		const data = await request.formData();

		createInventoryItem(data)
	}
} satisfies Actions;