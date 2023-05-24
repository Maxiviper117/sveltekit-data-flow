import log from '$lib/utils/log'

export async function load({ data }) {


	log.pageEnter('ENTERING :: +page.ts (load)')

	log.bold(`===📣 [+page.ts :: load()] RECEIVING data from +page.server.ts: ${JSON.stringify(data)}`)


	const newData = {
		'+page.ts': {
			d: 4
		},
	}

	log.bold(`===📣 [+page.ts :: load()] COMBINING data: ${JSON.stringify(data)} | with new data: ${JSON.stringify(newData)}`)

	const res = {
		...data,
		...newData,
	}

	log.bold(`===📣 [+page.ts :: load()] RETURNING data: ${JSON.stringify(res)}`)

	log.pageExit('LEAVING :: +page.ts (load)')

	return res

	return {
		a: 1
	}
}
