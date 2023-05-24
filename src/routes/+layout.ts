import log from '$lib/utils/log'

export async function load({ data }) {

	log.layoutEnter('ENTERING :: +layout.ts (load)')

	log.bold(`===📣 [+layout.ts :: load()] RECEIVING data from +layout.server.ts: ${JSON.stringify(data)}`)

	const newData = {
		'+layout.ts': {
			b: 2
		},
	}

	log.bold(`===📣 [+layout.ts :: load()] COMBINING data: ${JSON.stringify(data)} | with new data: ${JSON.stringify(newData)}`)

	const res = {
		...data,
		...newData,
	}

	log.bold(`===📣 [+layout.ts :: load()] RETURNING data: ${JSON.stringify(res)}`)


	log.layoutExit('LEAVING :: +layout.ts (load)')

	return res
}
