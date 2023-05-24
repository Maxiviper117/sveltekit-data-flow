import log from '$lib/utils/log'

export async function handle({ event, resolve }) {
	log.hooksEnter('ENTERING :: hooks.server.ts')
	log.bold(`===📣 [hooks.server.ts :: handle()] RECEIVING request event from url path: " ${event.url.pathname} "`)

	event.locals.secret = '🍌'

	log.bold(`===📣 [hooks.server.ts :: handle()] RESOLVING request event from url path: " ${event.url.pathname} "`)
	const response = await resolve(event)

	log.bold(`===🔥 [hooks.server.ts :: handle()] RETURNING response from request event`)
	log.hooksExit('LEAVING :: hooks.server.ts')
	return response
}
