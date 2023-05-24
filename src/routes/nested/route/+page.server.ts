import log from "$lib/utils/log"

export async function load({ parent }) {
	// parent `+layout.server.ts` data
	log.pageEnter('ENTERING :: /nested/route/+page.server.ts (load)')
	const data = await parent()

	log.bold(`===📣 [/nested/route/+page.server.ts :: load()] RETREIVING PARENT data: ${JSON.stringify(data)}`)

	log.pageExit('LEAVING :: /nested/route/+page.server.ts (load)')


}
