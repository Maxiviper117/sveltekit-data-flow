import { redirect } from '@sveltejs/kit'
import log from '$lib/utils/log'

export async function load({ locals }) {
	log.pageEnter('ENTERING :: /redirect/+page.server.ts (load)')

	if (!locals) {
		throw redirect(307, '/')
	}


}
