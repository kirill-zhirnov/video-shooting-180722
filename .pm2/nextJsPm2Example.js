const path = require('path');
const rootPath = path.dirname(path.dirname(__filename));

//load .env file if necessary
const dotenv = require('dotenv');

module.exports = {
	apps: [
		{
			name: 'app-name',
			cwd: rootPath,
			//specify path to Nextjs execution file:
			script: 'node_modules/next/dist/bin/next',
			//specify argument which will be passed to the next file
			args: 'start',
			instances: 0,
			exec_mode: 'cluster',
			watch: false,
			merge_logs: true,
			//pass env-vars to workers
			env: Object.assign(dotenv.config().parsed, {
				NODE_ENV: 'production'
			})
		}
	]
};
