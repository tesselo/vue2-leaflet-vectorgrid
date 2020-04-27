<template>
  <div class="example">
  <l-map
    :zoom="initialZoom"
    :center="initialLocation">
    <l-protobuf
      :url="tilesUrl"
      :options="opts"/>
  </l-map>
  </div>
</template>

<script>
import L from 'leaflet'
import { LMap } from 'vue2-leaflet'
import LProtobuf from '../Vue2LeafletVectorGridProtobuf'
import vectorStyle from './style'

const vectorTileOptions = {
	attribution: '© ESRI',
	vectorTileLayerStyles: vectorStyle,
}

export default {
  components: {
    LMap,
    LProtobuf
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
  @import "https://unpkg.com/leaflet@1.6.0/dist/leaflet.css";
  html, body {
    margin: 0;
    height: 100%;
  }
  .example {
    height: 100%;
    width: 100%;
  }
</style>
