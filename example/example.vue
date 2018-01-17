<template>
  <div id="app">
    <v-map :zoom="initialZoom" :center="initialLocation">
      <v-vectorgrid :url="tilesUrl" :options="opts"></v-vectorgrid>
    </v-map>
  </div>
</template>

<script>
import L from 'leaflet'
import Vue2Leaflet from 'vue2-leaflet'
import Vue2LeafletVectorGrid from '../Vue2LeafletVectorGrid'
import vectorStyle from './style'

const vectorTileOptions = {
	rendererFactory: L.canvas.tile,
	attribution: '© ESRI',
	vectorTileLayerStyles: vectorStyle,
  fetchOptions: {credentials: 'same-origin'},
  getFeatureId: function(f) {
    return f.properties.id;
  },
  interactive: true,
  zIndex: 9999
};

export default {
  components: {
    'v-map': Vue2Leaflet.Map,
    'v-tilelayer': Vue2Leaflet.TileLayer,
    'v-vectorgrid': Vue2LeafletVectorGrid
  },
  data () {
    return {
      initialLocation: L.latLng(0, 0),
      initialZoom: 2,
      opts: vectorTileOptions,
      tilesUrl: "https://basemaps.arcgis.com/v1/arcgis/rest/services/World_Basemap/VectorTileServer/tile/{z}/{y}/{x}.pbf"
    }
  }
}
</script>

<style>
  @import "~leaflet/dist/leaflet.css";
  html, body {
    margin: 0;
    height: 100%;
  }
  #app {
    height: 100%;
  }
</style>
