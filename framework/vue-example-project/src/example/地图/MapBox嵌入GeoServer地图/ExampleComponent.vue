<template>
  <div id="map" style="width: 100%; height: 600px;">
  </div>
</template>
<script>
import 'mapbox-gl/dist/mapbox-gl.css'
import mapboxgl from 'mapbox-gl'

export default {
  name: "ExampleComponent",
  data() {
    return {
      mapBoxGLAccessToken: 'pk.eyJ1IjoiYm50YW5nIiwiYSI6ImNsaXR2ZnFxaDJhMjYzcG52ZGIzcHdldDYifQ.rL9nttXLtDaomq54_gkNWg'
    }
  },
  mounted() {
    this.initMap();
  },
  components: {},
  methods: {
    initMap() {
      mapboxgl.accessToken = this.mapBoxGLAccessToken;
      const map = new mapboxgl.Map({
        // 容器元素的ID
        container: 'map',
        // Mapbox地图样式
        style: 'mapbox://styles/mapbox/streets-v11',
        // 地图初始中心点 [经度, 维度]
        center: [119.13697, 33.7843],
        // 容器元素的ID
        zoom: 12,
        // 地图投影，自 v2.9.0 起支持 'globe'
        projection: 'globe',
      })

      new mapboxgl.Marker({ color: 'red' })
          .setLngLat([119.13697, 33.7843])
          .setPopup(new mapboxgl.Popup().setHTML("<p>您的中文标注</p>")) // 替换为您的中文标注内容
          .addTo(map);

      var source = {
        "type": "vector",
        "tiles": ["http://localhost:8080/geoserver/gwc/service/tms/1.0.0/qeoten@EPSG%3A4326@pbf/{z}/{x}/{y}.pbf"],
        "minzoom": 0,
        "maxzoom": 22
      };

      var layer = {
        "id": "my-layer",
        "type": "fill",
        "source": source,
        "source-layer": "<layer-name>",
        "paint": {
          "fill-color": "#ff0000"
        }
      };

      map.on("load", function() {
        map.addLayer(layer);
      });
    }
  }
}
</script>

<style scoped>

</style>
