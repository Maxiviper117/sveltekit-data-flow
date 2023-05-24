import log from '$lib/utils/log'

export async function load() {

	log.pageEnter('ENTERING :: +page.server.ts (load)')

	const res = {
		'+page.server.ts': {
			c: 3,
		},
	}

	log.bold(`===📣 [+page.server.ts :: load()] RETURNING data: ${JSON.stringify(res)}`)

	log.pageExit('LEAVING :: +page.server.ts (load)')


	return res
}
