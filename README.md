## Getting Started
Load bundles from a url or use modules from NPM.

> Note: there aren't any docs yet, just a demo site. The demo site is the best docs you have for the time being as it's sorta documentation by example. I'll improve this! 

<br>

##### CDN
1. `import 'https://slyd.netlify.com/slyd.js';`
1. `@import 'https://slyd.netlify.com/slyd.css';`

##### NPM

1. `npm i slyd`
1. `import 'slyd';` // use es module
1. `@import 'slyd';` // use postcss module

##### Starter Kit

1. Clone and go with this [Slyd starter](https://github.com/argyleink/slyd-starter)

##### Pika
1. coming soon

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
