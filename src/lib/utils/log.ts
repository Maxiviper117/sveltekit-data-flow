import chalk from 'chalk'

const styles = {
	tomato: chalk.hex('#000000').bgHex('#ff6347'),
	aqua: chalk.hex('#000000').bgHex('#7ffd4'),
	white: chalk.hex('#000000').bgHex('#ffffff'),
	black: chalk.hex('#ffffff').bgHex('#000000'),
}

export default {
	hooksEnter(text: string) {
		console.log(chalk.bold(chalk.bgGreen(text)))
	},
	hooksExit(text: string) {
		console.log(chalk.bold(chalk.bgRed(text)))
	},
	layoutEnter(text: string) {
		console.log(chalk.bold(chalk.bgGreen(text)))
	},
	layoutExit(text: string) {
		console.log(chalk.bold(chalk.bgRed(text)))
	},
	pageEnter(text: string) {
		console.log(chalk.bold(chalk.bgGreen(text)))
	},
	pageExit(text: string) {
		console.log(chalk.bold(chalk.bgRed(text)))
	},
	endpoint(text: string) {
		console.log(styles.black(text))
	},
	bold(text: string) {
		console.log(chalk.bold(chalk.bold(text)))
	},
}
