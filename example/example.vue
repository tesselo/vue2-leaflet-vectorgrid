<template>
  <div id="app">
    <v-map :zoom="initialZoom" :center="initialLocation">
      <v-protobuf :url="tilesUrl" :options="opts"></v-protobuf>
    </v-map>
  </div>
</template>

<script>
import L from 'leaflet'
import Vue2Leaflet from 'vue2-leaflet'
import Vue2LeafletVectorGridProtobuf from '../Vue2LeafletVectorGridProtobuf'
import vectorStyle from './style'

const vectorTileOptions = {
	attribution: '© ESRI',
	vectorTileLayerStyles: vectorStyle,
}

export default {
  components: {
    'v-map': Vue2Leaflet.Map,
    'v-protobuf': Vue2LeafletVectorGridProtobuf
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
