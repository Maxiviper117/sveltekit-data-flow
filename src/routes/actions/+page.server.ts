import log from '$lib/utils/log'

export async function load() {
	log.pageEnter('ENTERING :: /actions/+page.server.ts (load)')
	// log.pageEnter('/forms/+page.server.ts (load)')
	log.pageExit('LEAVING :: /actions/+page.server.ts (load)')
}

export const actions = {
	async login({ url }) {
		log.bold(`LOGIN ACTION: ${url.href}`)
	},
	async register({ url }) {
		log.bold(`REGISTER ACTION: ${url.href}`)
	},
}
