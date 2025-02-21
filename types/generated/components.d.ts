import type { Schema, Attribute } from '@strapi/strapi';

export interface LayoutTool extends Schema.Component {
  collectionName: 'components_layout_tools';
  info: {
    displayName: 'Tool';
    icon: 'cup';
  };
  attributes: {
    image: Attribute.Media<'images'> & Attribute.Required;
    tooltip: Attribute.String;
    NavigateTo: Attribute.String;
  };
}

export interface LayoutTimelineItem extends Schema.Component {
  collectionName: 'components_layout_timeline_items';
  info: {
    displayName: 'timeline-item';
    icon: 'envelop';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    date: Attribute.String;
    icon: Attribute.String & Attribute.DefaultTo<'pi pi-check-circle'>;
    image: Attribute.Media<'images'>;
    text: Attribute.Text;
  };
}

export interface LayoutRichTextWIthSpecificFont extends Schema.Component {
  collectionName: 'components_layout_rich_text_w_ith_specific_fonts';
  info: {
    displayName: 'RichTextWIthSpecificFont';
    icon: 'brush';
    description: '';
  };
  attributes: {
    text: Attribute.RichText & Attribute.Required;
    defaultFont: Attribute.Enumeration<
      [
        'exo-2',
        'exo-2-extra-large',
        'exo-2-bold',
        'exo-2-bold-extra-large',
        'iceland-regular',
        'iceland-regular-extra-large',
        'iceland-regular-bold',
        'iceland-regular-bold-extra-large',
        'playwrite-de-grund',
        'playwrite-de-grund-bold',
        'playwrite-de-grund-extra-large',
        'playwrite-de-grund-bold-extra-large',
        'quicksand',
        'quicksand-extra-large',
        'quicksand-bold',
        'quicksand-bold-extra-large'
      ]
    > &
      Attribute.DefaultTo<'quicksand-bold'>;
  };
}

export interface LayoutImageList extends Schema.Component {
  collectionName: 'components_layout_image_lists';
  info: {
    displayName: 'ToolsList';
    icon: 'eye';
    description: '';
  };
  attributes: {
    tools: Attribute.Component<'layout.tool', true>;
  };
}

export interface LayoutButton extends Schema.Component {
  collectionName: 'components_layout_buttons';
  info: {
    displayName: 'Button';
    icon: 'arrowUp';
  };
  attributes: {
    Text: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 20;
      }>;
    NavigateTo: Attribute.String & Attribute.Required;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'layout.tool': LayoutTool;
      'layout.timeline-item': LayoutTimelineItem;
      'layout.rich-text-w-ith-specific-font': LayoutRichTextWIthSpecificFont;
      'layout.image-list': LayoutImageList;
      'layout.button': LayoutButton;
    }
  }
}
