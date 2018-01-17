# vue2-leaflet-vectorgrid

This is a [VectorGrid](https://github.com/Leaflet/Leaflet.VectorGrid) plugin extension for the [vue2-leaflet](https://github.com/KoRiGaN/Vue2Leaflet) package. Currently only the VectorGrid.protobuf layer is implemented.

## Install

    npm install vue2-leaflet-vectorgrid

## Quickstart

For a complete example, have a look at the demo code in the single-file component [example](example/example.vue).

### On &lt;template&gt; add something like this

```html
<v-map :zoom=10 :center="[-34.9205, -57.953646]">
  <v-protobuf url="https://example.com/my/favorite/endpoint/{z}/{y}/{x}.pbf" :options="options"></v-protobuf>
</v-map>
```

### on &lt;script&gt; add

```javascript
import Vue2Leaflet from 'vue2-leaflet'
import Vue2LeafletVectorGridProtobuf from 'vue2-leaflet-vectorgrid'

export default {
  components: {
    'v-map': Vue2Leaflet.Map,
    'v-protobuf': Vue2LeafletVectorGridProtobuf
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
## Demo

    git clone git@github.com:tesselo/vue2-leaflet-vectorgrid.git
    cd vue2-leaflet-vectorgrid

    npm install
    npm run example

Then you should be able to navigate with your browser and see the demo in http://localhost:4000/

## Develop and build

    npm install
    npm run build

## Acknowledgements

Thanks to Aaron Gong and  Julián Perelli, the authors of the [markercluster plugin](https://github.com/Leaflet/Leaflet.markercluster) and the [tracksymbol plugin](https://github.com/ais-one/vue2-leaflet-tracksymbol). Both packages have been used as a basis to build this plugin.
