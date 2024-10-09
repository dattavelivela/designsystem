/** @type { import('@storybook/react-vite').StorybookConfig } */
import { defineConfig } from 'vite';

const config = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-onboarding",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  core: {
    builder: '@storybook/builder-vite',
  },
  viteFinal: async (config) => {
    return defineConfig({
      ...config,
      base: './', // Set the base to './' to ensure relative paths work
    });
  },
};
export default config;
