import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Viz, VizProps } from '../src/web/components/Viz/Viz';
import vizConfig from './config/Viz.json';

export default {
  title: 'JS API/Viz',
  component: Viz,
  argTypes: {
    embedDomElement: {
      table: {
        disable: true
      }
    },
    device: {
      control: {
       type: 'select',
       options: ['default', 'desktop', 'tablet', 'phone']
      }
    },
    hideToolbar: {
      description: 'Note: this functionality is disabled for visualizations hosted on Tableau Public'
    }
  }
} as Meta;

const embedDomElement: HTMLElement = document.getElementById('tableauViz');
const Template: Story<VizProps> = (args) => <Viz {...args} />;

export const Default = Template.bind({});
Default.args = {
  embedDomElement: embedDomElement,
  shareLink: vizConfig.defaultShareLink,
  device: 'desktop',
  hideTabs: false,
  hideToolbar: false
} as VizProps;