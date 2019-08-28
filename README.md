## Getting Started
Load bundles from a url or use modules from NPM.

> Note: there's no docs, just a demo site. the demo site is the best docs you have for the time being, I'll improve this. 

## load from url
1. `import 'https://slyd.netlify.com/slyd.js';`
1. `@import 'https://slyd.netlify.com/slyd.css';`

OR

1. `npm i slyd`
1. `import 'slyd';` // use es module
1. `@import 'slyd';` // (coming soon) import postCSS index

##### coming soon (load from Pika)

<br>
<br>

Start making `<slyd>`'s by adding HTML to your page.

```html
<slyds>
  <slyd>
    <h1>Slide 1</h1>
    <h2>subtitle</h2>
  </slyd>

  <slyd-group>

    <slyd>
      <h1 uppercase>Slide 2</h1>
      <h2>is in a <span highlight>vertical</span> slide list</h2>
    </slyd>
    
    ...
    
  </slyd-group>
  
  <slyd-group>...</slyd-group>
<slyds>
```
