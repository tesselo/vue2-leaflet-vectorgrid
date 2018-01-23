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
  }
}

export default {

  props: props,

  mounted () {

    this.mapObject = L.vectorGrid.protobuf(this.url, this.options)

    if (this.$parent._isMounted)  {
      this.deferredMountedTo(this.$parent.mapObject);
    }

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
