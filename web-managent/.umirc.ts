import { defineConfig } from 'umi';
import { IPlugin, IConfig } from 'umi-types';

import { config } from './configs'

export default defineConfig(config) as IConfig;
