import log from "$lib/utils/log"

export async function load({ parent }) {
	// parent `+layout.ts` data

	log.pageEnter('ENTERING :: /nested/route/+page.ts (load)')
	const data = await parent()

	log.bold(`===📣 [/nested/route/+page.ts :: load()] RETREIVING PARENT data: ${JSON.stringify(data)}`)

	log.pageExit('LEAVING :: /nested/route/+page.ts (load)')
}
