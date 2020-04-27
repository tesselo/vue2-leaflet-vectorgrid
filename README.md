# vue2-leaflet-vectorgrid

This is a [VectorGrid](https://github.com/Leaflet/Leaflet.VectorGrid) plugin extension for the [vue2-leaflet](https://github.com/KoRiGaN/Vue2Leaflet) package. Currently only the VectorGrid.protobuf layer is implemented.

## Install

    npm install vue2-leaflet-vectorgrid

## Quickstart

For a complete example, have a look at the demo code in the single-file component [example](example/app.vue).

### On &lt;template&gt; add something like this

```html
<l-map :zoom=10 :center="[-34.9205, -57.953646]">
  <l-protobuf url="https://example.com/my/favorite/endpoint/{z}/{y}/{x}.pbf" :options="options"/>
</l-map>
```

### on &lt;script&gt; add

```javascript
import { LMap } from 'vue2-leaflet';
import LProtobuf from 'vue2-leaflet-vectorgrid'

export default {
  components: {
    LMap,
    LProtobuf
  },
  data () {
    return {
      options: {
      	vectorTileLayerStyles: { ... },
         ...  // More VectorGrid options.
      }
    }
  }
}
```
## Example
There is a simple but complete usage example. First, clone the repo and install
its dependencies.

    git clone git@github.com:tesselo/vue2-leaflet-vectorgrid.git
    cd vue2-leaflet-vectorgrid
    npm install

Also install peer dependencies.

    npm install vue leaflet vue2-leaflet

To run the example `@vue/cli` and `@vue/cli-service-global` are required to be
installed globally.

       npm install -g @vue/cli @vue/cli-service-global

Start the dev server using the the vue serve utility

    vue serve example/app.vue

Then you should be able to navigate with your browser and see the demo at
http://localhost:8080/.

## Develop and build

    npm install
    npm run build

## Acknowledgements

Thanks to Aaron Gong and  Julián Perelli, the authors of the [markercluster plugin](https://github.com/jperelli/vue2-leaflet-markercluster) and the [tracksymbol plugin](https://github.com/ais-one/vue2-leaflet-tracksymbol). Both packages have been used as a basis to build this plugin.
