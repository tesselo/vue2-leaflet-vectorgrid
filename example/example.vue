<template>
  <div id="app">
    <v-map :zoom=5 :center="[38.92, -7.95]">
      <v-tilelayer url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"></v-tilelayer>
      <v-vectorgrid url="http://localhost/api/vtiles/35/{z}/{x}/{y}.pbf"></v-vectorgrid>
    </v-map>
  </div>
</template>

<script>
import L from 'leaflet'
import Vue2Leaflet from 'vue2-leaflet'
import Vue2LeafletVectorGrid from '../Vue2LeafletVectorGrid'

export default {
  components: {
    'v-map': Vue2Leaflet.Map,
    'v-tilelayer': Vue2Leaflet.TileLayer,
    'v-vectorgrid': Vue2LeafletVectorGrid
  },
  data () {
    return {
      initialLocation: L.latLng(-34.9205, -57.953646)
    }
  }
}
</script>

<style>
  @import "~leaflet/dist/leaflet.css";
  #app {
    height: 500px;
  }
</style>
