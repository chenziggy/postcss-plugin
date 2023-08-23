import plugin from './postcss-plugin.js'
import px2rem from 'postcss-plugin-px2rem'
 export default () => ({
  plugins: [
    // require('postcss-px2rem')({ remUnit: 75 })
    plugin,
    // px2rem
  ]
});

// console.log(111, JSON.stringify(px2rem))