import { defineConfig, mergeConfig } from 'vitest/config'
import viteConfig from '../vite.config'
import { storybookTest } from '@storybook/experimental-vitest-plugin'

export default mergeConfig(
  viteConfig,
  defineConfig({
    plugins: [
      storybookTest({
        renderer: 'react',
      }),
    ],
    test: {
      name: 'storybook',
      // add the paths to your stories
      include: ['../src/**/*.{story,stories}.?(c|m)[jt]s?(x)'],
      // enable browser mode
      browser: {
        enabled: true,
        name: 'chromium',
        // make sure to install playwright
        provider: 'playwright',
        headless: true,
      },
      setupFiles: ['./setupTests.ts'],
      environment: 'happy-dom',
    },
  })
)
