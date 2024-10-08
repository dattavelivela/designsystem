import React from 'react';
import Button from './button';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    label: {
      control: 'text',
      defaultValue: 'Button',
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
    iconLeft: {
      control: 'text',
      defaultValue: '',  // Assuming no icon by default
    },
    iconRight: {
      control: 'text',
      defaultValue: '',  // Assuming no icon by default
    },
  }
};

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
        size,
        type,
        color,
        iconLeft: '👈',
        iconRight: '👉',
        disabled: false
      };
      return { [storyName]: story };
    })
  )
).reduce((acc, cur) => ({ ...acc, ...cur }), {});