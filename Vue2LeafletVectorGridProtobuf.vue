<template></template>

<script>
import L from 'leaflet'
import 'leaflet.vectorgrid'
import eventsBinder from 'vue2-leaflet'
import propsBinder from 'vue2-leaflet'

const events = [];

const props = {
  url: {
    type: String,
    required: true
  },
  options: {
    type: Object,
    default: function () {
      return {}
    }
  },
  fetchOptions: {
    type: Object,
    default: function() {
      credentials: 'same-origin'
    }
  },
  getFeatureId: {
    type: Function,
    default: function(f) {
      return f.properties.id;
    }
  },
  interactive: {
    type: Boolean,
    default: true
  },
  vectorTileLayerStyles: {
    type: Object,
    default: function () {
      var VectorStyle = {
        fill: false,
        weight: 5,
        fillColor: '#3333FF',
        color: '#BB2222',
        fillOpacity: 0.3,
        opacity: 0.8
      };

      var style = {
        'test': VectorStyle
      }

      return style
    }
  },
  zIndex: {
    type: Number,
    default: 9999
  }
}

export default {

  props: props,

  mounted () {

    this.mapObject = L.vectorGrid.protobuf(this.url, this.options)

    // eventsBinder(this, this.mapObject, events);
    // propsBinder(this, this.mapObject, props);
  },

  methods: {
    deferredMountedTo(parent) {
      this.mapObject.addTo(parent);

      this.attributionControl = parent.attributionControl;
      for (var i = 0; i < this.$children.length; i++) {
        if (typeof this.$children[i].deferredMountedTo === "function") {
          this.$children[i].deferredMountedTo(this.mapObject);
        }
      }
    },

    setAttribution(val, old) {
      this.attributionControl.removeAttribution(old);
      this.attributionControl.addAttribution(val);
    },

    setToken(val) {
      this.options.token = val;
    }
  },

  beforeDestroy() {
    this.$parent.mapObject.removeLayer(this.mapObject);
  }
}
</script>
