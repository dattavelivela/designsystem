// Button.stories.js

import React from 'react';
import Button from './button';
import * as Icons from 'react-icons/fa'; // Import all icons from FontAwesome as an example

const availableIcons = Object.keys(Icons).reduce((acc, icon) => {
  acc[icon] = React.createElement(Icons[icon]);
  return acc;
}, { None: null });

const ButtonStory = {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    label: {
      control: 'text',
      defaultValue: 'Button',
    },
    toggleLabel: {
      control: 'boolean',
      defaultValue: true,
    },
    size: {
      control: 'select',
      options: ['xlarge', 'large', 'default', 'small', 'xsmall'],
      defaultValue: 'default',
    },
    type: {
      control: 'select',
      options: ['solid', 'outline', 'text-only'],
      defaultValue: 'solid',
    },
    color: {
      control: 'select',
      options: ['primary', 'grey', 'success', 'danger', 'warning'],
      defaultValue: 'primary',
    },
    disabled: {
      control: 'boolean',
      defaultValue: false,
    },
    toggleLeftIcon: {
      control: 'boolean',
      defaultValue: false,
    },
    toggleRightIcon: {
      control: 'boolean',
      defaultValue: false,
    },
    iconLeft: {
      control: 'select',
      options: Object.keys(availableIcons),
      if: { arg: 'toggleLeftIcon', truthy: true },
      mapping: availableIcons,
    },
    iconRight: {
      control: 'select',
      options: Object.keys(availableIcons),
      if: { arg: 'toggleRightIcon', truthy: true },
      mapping: availableIcons,
    },
  }
};

export default ButtonStory;

// Template to apply args
const Template = (args) => <Button {...args} />;

// Generate stories dynamically
const sizes = ['xlarge', 'large', 'default', 'small', 'xsmall'];
const types = ['solid', 'outline', 'text-only'];
const colors = ['primary', 'grey', 'success', 'danger', 'warning'];

export const Playground = sizes.flatMap(size =>
  types.flatMap(type =>
    colors.map(color => {
      const storyName = `${size} ${type} ${color}`.replace(/ /g, '_');
      const story = Template.bind({});
      story.args = {
        label: 'Button',
        toggleLabel: true,
        size,
        type,
        color,
        toggleLeftIcon: false,
        toggleRightIcon: false,
        iconLeft: 'None',
        iconRight: 'None',
        disabled: false
      };
      return { [storyName]: story };
    })
  )
).reduce((acc, cur) => ({ ...acc, ...cur }), {});