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
    ],
  },
  {
    name: 'Components',
    routes: [
      {
        title: 'Buttons',
        href: `${COMPONENTS_URL}/buttons`,
      },
      {
        title: 'Cards',
        href: `${COMPONENTS_URL}/cards`,
      },
      {
        title: 'Links',
        href: `${COMPONENTS_URL}/links`,
      },
    ],
  },


];
