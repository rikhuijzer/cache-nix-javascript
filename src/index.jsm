import * as cache from '@actions/cache';

const utils = require('./utils.js');
utils.spawn_script('./src/core.sh', ['main']);
