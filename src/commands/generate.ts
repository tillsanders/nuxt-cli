import { defineCommand } from 'citty'
import buildCommand from './build'

import { legacyRootDirArgs, sharedArgs } from './_shared'

export default defineCommand({
  meta: {
    name: 'generate',
    description: 'Build Nuxt and prerender all routes',
  },
  args: {
    ...sharedArgs,
    ...legacyRootDirArgs,
    dotenv: {
      type: 'string',
      description: 'Path to .env file',
    },
    env: {
      type: 'string',
      description: 'Name of the build environment to use (see \'Environment overrides\' in the docs)',
    },
  },
  async run(ctx) {
    ctx.args.prerender = true
    await buildCommand.run!(ctx as any)
  },
})
