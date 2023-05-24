import log from '$lib/utils/log'

export async function load() {

	log.layoutEnter('ENTERING :: +layout.server.ts (load)')

	const res = {
		"+layout.server.ts": {
			a: 1,
		}
	}

	log.bold(`===📣 [+layout.server.ts :: load()] RETURNING data: ${JSON.stringify(res)}`)

	log.layoutExit('LEAVING :: +layout.server.ts (load)')
	return res
}
