## Getting Started
1. import the js `import 'https://slyd.netlify.com/bundle.js';` `400b`'s
1. import the css `@import 'https://slyd.netlify.com/bundle.css';` `1.2kb`'s

OR

1. `npm i slyd`
1. `import 'slyd';`
1. `@import 'slyd';`

Start making `<slyd>`'s!

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
