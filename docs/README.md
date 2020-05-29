# Bridge Documentation Site
A [next.js](https://nextjs.org/) site with [mdx](https://mdxjs.com/) for markdown to html rendering

This site is under h4i-design.now.sh and aliased from uiuc.hack4impact.org/design

## To Run
```
yarn
yarn dev
```

## Code Run

**MDX**
The core of this site is [MDX](https://mdxjs.com/), which allows you to write JSX components in markdown and generates html from it. 

- styling markdown components: `./components/mdx-components.js`
- layout for documentation: `./components/layout.js` (this shows the sidebar and renders the markdown)
- syntax highlighting: we use prism-react-render in `./components/CodeBlock`

**Adding new components**
There are two main routes that render mdx
- `/design`
- `/components`

To add new documentation, such as adding a new doc for a new component:
1. Create a new `.mdx` file for the page - e.g. if you are adding "Alerts" to components documentation, it would be `./pages/components/alerts.mdx`
2. Add Layout.js to the mdx file
```js
export const meta = {type: "components", title: "Buttons"}

import Layout from '../../components/layout.js'
export default Layout({...meta})
```
if it's a design doc, make type `"design"`.
3. Add route to `./lib/data/components.js` in the corresponding section, giving `title` and `href` (href for alerts will be `/components/alerts`). This data tells the sidebar, which links to show. It will show up in the same order as listed in the file.
   - `title` will be rendered as the heading in page
   - if it's a design doc, add it to `./lib/data/design.js`
4. when using code blocks for examples, use add the live prop to the code block, such as
```
```jsx live
```
