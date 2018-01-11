<template></template>

<script>
import L from 'leaflet'
import 'leaflet.vectorgrid'
import eventsBinder from 'vue2-leaflet'
import propsBinder from 'vue2-leaflet'

const events = [];

const VectorStyle = {
        fill: false,
        weight: 5,
        fillColor: '#3333FF',
        color: '#BB2222',
        fillOpacity: 0.3,
        opacity: 0.8
};

const style = {
  'bla': VectorStyle
}

const props = {
  url: String,
  options: {
    type: Object,
    default: function () {
      return {}
    }
  },
  fetchOptions: {credentials: 'same-origin'},
  getFeatureId: function(f) {
    console.log('Getting feature id', f);
    return f.properties.id;
  },
  interactive: true,
  vectorTileLayerStyles: style,
  zIndex: 9999,
}

export default {

  props: props,

  mounted () {
    const options = this.options;
    const otherPropertytoInitialize = [ "attribution", "token", "detectRetina", "opacity", "zIndex" ];
    for (var i = 0; i < otherPropertytoInitialize.length; i++) {
      const propName = otherPropertytoInitialize[i];
      if(this[propName]) {
        options[propName] = this[propName];
      }
    }

    this.mapObject = L.vectorGrid.protobuf(this.url, {
      fetchOptions: {credentials: 'same-origin'},
      getFeatureId: function(f) {
        return f.properties.id;
      },
      interactive: true,
      vectorTileLayerStyles: style,
      zIndex: 9999,
    });

    console.log('url', this.url, this.mapObject)

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
