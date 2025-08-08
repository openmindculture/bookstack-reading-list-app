import { defineWorkspace } from 'vitest/config'
import { storybookTest } from '@storybook/experimental-vitest-plugin'

// Deprecated:
// use the projects field in the root config instead
export default defineWorkspace([
  // This is the path to your existing vitest config files
  './vitest.config.ts',
  // 👇 Add the path to the storybook config directory
  './.storybook'
])
