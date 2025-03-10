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
    text: Attribute.RichText;
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

export interface LayoutPublication extends Schema.Component {
  collectionName: 'components_layout_publications';
  info: {
    displayName: 'Publication';
    icon: 'discuss';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    publisher: Attribute.String;
    url: Attribute.String;
    year: Attribute.Integer &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 2000;
          max: 3000;
        },
        number
      >;
    contributors: Attribute.Component<'layout.project-contributor', true> &
      Attribute.Required;
  };
}

export interface LayoutProject extends Schema.Component {
  collectionName: 'components_layout_projects';
  info: {
    displayName: 'Project';
    icon: 'discuss';
    description: '';
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    repoUrl: Attribute.String & Attribute.Required;
    contributors: Attribute.Component<'layout.project-contributor', true>;
    languages: Attribute.Component<'layout.language', true>;
    description: Attribute.RichText & Attribute.Required;
  };
}

export interface LayoutProjectContributor extends Schema.Component {
  collectionName: 'components_layout_project_contributors';
  info: {
    displayName: 'ProjectContributor';
    icon: 'grid';
  };
  attributes: {
    name: Attribute.String;
    url: Attribute.String;
    image: Attribute.Media<'images'> & Attribute.Required;
  };
}

export interface LayoutPost extends Schema.Component {
  collectionName: 'components_layout_posts';
  info: {
    displayName: 'Post';
    icon: 'exit';
  };
  attributes: {
    content: Attribute.Component<'layout.rich-text-w-ith-specific-font'> &
      Attribute.Required;
    title: Attribute.String & Attribute.Required;
    image: Attribute.Media<'images'>;
  };
}

export interface LayoutLanguage extends Schema.Component {
  collectionName: 'components_layout_languages';
  info: {
    displayName: 'Language';
    icon: 'filePdf';
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    color: Attribute.Enumeration<
      [
        'AliceBlue',
        'AntiqueWhite',
        'Aqua',
        'Aquamarine',
        'Azure',
        'Beige',
        'Bisque',
        'Black',
        'BlanchedAlmond',
        'Blue',
        'BlueViolet',
        'Brown',
        'BurlyWood',
        'CadetBlue',
        'Chartreuse',
        'Chocolate',
        'Coral',
        'CornflowerBlue',
        'Cornsilk',
        'Crimson',
        'Cyan',
        'DarkBlue',
        'DarkCyan',
        'DarkGoldenRod',
        'DarkGray',
        'DarkGreen',
        'DarkKhaki',
        'DarkMagenta',
        'DarkOliveGreen',
        'DarkOrange',
        'DarkOrchid',
        'DarkRed',
        'DarkSalmon',
        'DarkSeaGreen',
        'DarkSlateBlue',
        'DarkSlateGray',
        'DarkTurquoise',
        'DarkViolet',
        'DeepPink',
        'DeepSkyBlue',
        'DimGray',
        'DodgerBlue',
        'FireBrick',
        'FloralWhite',
        'ForestGreen',
        'Fuchsia',
        'Gainsboro',
        'GhostWhite',
        'Gold',
        'GoldenRod',
        'Gray',
        'Green',
        'GreenYellow',
        'HoneyDew',
        'HotPink',
        'IndianRed',
        'Indigo',
        'Ivory',
        'Khaki',
        'Lavender',
        'LavenderBlush',
        'LawnGreen',
        'LemonChiffon',
        'LightBlue',
        'LightCoral',
        'LightCyan',
        'LightGoldenRodYellow',
        'LightGray',
        'LightGreen',
        'LightPink',
        'LightSalmon',
        'LightSeaGreen',
        'LightSkyBlue',
        'LightSlateGray',
        'LightSteelBlue',
        'LightYellow',
        'Lime',
        'LimeGreen',
        'Linen',
        'Magenta',
        'Maroon',
        'MediumAquaMarine',
        'MediumBlue',
        'MediumOrchid',
        'MediumPurple',
        'MediumSeaGreen',
        'MediumSlateBlue',
        'MediumSpringGreen',
        'MediumTurquoise',
        'MediumVioletRed',
        'MidnightBlue',
        'MintCream',
        'MistyRose',
        'Moccasin',
        'NavajoWhite',
        'Navy',
        'OldLace',
        'Olive',
        'OliveDrab',
        'Orange',
        'OrangeRed',
        'Orchid',
        'PaleGoldenRod',
        'PaleGreen',
        'PaleTurquoise',
        'PaleVioletRed',
        'PapayaWhip',
        'PeachPuff',
        'Peru',
        'Pink',
        'Plum',
        'PowderBlue',
        'Purple',
        'RebeccaPurple',
        'Red',
        'RosyBrown',
        'RoyalBlue',
        'SaddleBrown',
        'Salmon',
        'SandyBrown',
        'SeaGreen',
        'SeaShell',
        'Sienna',
        'Silver',
        'SkyBlue',
        'SlateBlue',
        'SlateGray',
        'Snow',
        'SpringGreen',
        'SteelBlue',
        'Tan',
        'Teal',
        'Thistle',
        'Tomato',
        'Turquoise',
        'Violet',
        'Wheat',
        'White',
        'WhiteSmoke',
        'Yellow',
        'YellowGreen'
      ]
    > &
      Attribute.Required &
      Attribute.DefaultTo<'BlueViolet'>;
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

export interface LayoutCertificate extends Schema.Component {
  collectionName: 'components_layout_certificates';
  info: {
    displayName: 'certificate';
    icon: 'crown';
    description: '';
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    fileUrl: Attribute.String;
    date: Attribute.String;
    organizationName: Attribute.String;
    organizationUrl: Attribute.String;
    description: Attribute.Component<'layout.rich-text-w-ith-specific-font'>;
    image: Attribute.Media<'images'>;
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
      'layout.publication': LayoutPublication;
      'layout.project': LayoutProject;
      'layout.project-contributor': LayoutProjectContributor;
      'layout.post': LayoutPost;
      'layout.language': LayoutLanguage;
      'layout.image-list': LayoutImageList;
      'layout.certificate': LayoutCertificate;
      'layout.button': LayoutButton;
    }
  }
}
