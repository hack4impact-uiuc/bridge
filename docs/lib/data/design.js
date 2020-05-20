import { DESIGN_URL } from '../constants';

export default [
  {
    name: 'Getting Started',
    routes: [
      {
        title: 'Introduction',
        href: `${DESIGN_URL}`,
      },
    ],
  },
  {
    name: 'Base',
    routes: [{
      title: 'Colors',
      href: `${DESIGN_URL}/colors`,
    },
    {
      title: 'Typography',
      href: `${DESIGN_URL}/typography`,
    },
    ],
  },
  {
    name: 'UI Patterns',
    routes: [{
      title: 'Buttons',
      href: `${DESIGN_URL}/buttons`,
    }],
  },
];
