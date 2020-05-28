// references: https://github.com/zeit/docs/blob/master/lib/data/v2/docs.js
// https://github.com/zeit/next.js/blob/canary/docs/manifest.json
import { COMPONENTS_URL } from '../constants';

export default [

  {
    name: 'Getting Started',
    routes: [
      {
        title: 'Introduction',
        href: `${COMPONENTS_URL}`,
      },
      {
        title: 'Common Props',
        href: `${COMPONENTS_URL}/common-props`,
      },
      {
        title: 'Theming',
        href: `${COMPONENTS_URL}/theming`,
      },
      {
        title: 'Responsive Styling',
        href: `${COMPONENTS_URL}/responsive`,
      },
    ],
  },
  {
    name: 'Components',
    routes: [
      {
        title: 'Alerts',
        href: `${COMPONENTS_URL}/alerts`,
      },
      {
        title: 'Box',
        href: `${COMPONENTS_URL}/box`,
      },
      {
        title: 'Buttons',
        href: `${COMPONENTS_URL}/buttons`,
      },
      {
        title: 'Cards',
        href: `${COMPONENTS_URL}/cards`,
      },
      {
        title: 'Flex',
        href: `${COMPONENTS_URL}/flex`,
      },
      {
        title: 'Grid',
        href: `${COMPONENTS_URL}/grid`,
      },
      {
        title: 'Links',
        href: `${COMPONENTS_URL}/links`,
      },
      {
        title: 'Icons',
        href: `${COMPONENTS_URL}/icons`,
      },
      {
        title: 'Heading',
        href: `${COMPONENTS_URL}/heading`,
      },
      {
        title: 'Tags',
        href: `${COMPONENTS_URL}/tags`,
      },
      {
        title: 'Text',
        href: `${COMPONENTS_URL}/text`,
      },
      {
        title: 'TextField',
        href: `${COMPONENTS_URL}/text-field`,
      },
    ],
  },
];
