# vue2-leaflet-vectorgrid

This is a [VectorGrid](https://github.com/Leaflet/Leaflet.VectorGrid) plugin extension for the [vue2-leaflet](https://github.com/KoRiGaN/Vue2Leaflet) package. Currently only the VectorGrid.protobuf is implemented.

## Install

    npm install --save vue2-leaflet-vectorgrid

## Demo

    git clone git@github.com:tesselo/vue2-leaflet-vectorgrid.git
    cd vue2-leaflet-vectorgrid

    npm install
    npm run example

Then you should be able to navigate with your browser and see the demo in http://localhost:4000/

You can see the demo code in the file [example.vue](example.vue)

## Usage

### on &lt;template&gt; add

something like this

    <v-map :zoom=10 :center="[-34.9205, -57.953646]">
      <v-tilelayer url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"></v-tilelayer>
      <v-vectorgrid url=""></v-vectorgrid>
    </v-map>

### on &lt;script&gt; add

## Develop and build

    npm install
    npm run build

## Author

Daniel Wiesmann

## License

MIT
