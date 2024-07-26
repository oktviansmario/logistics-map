<template>
  <!-- Inteface for showing the maps -->
  <l-map :zoom="zoom" :center="center" style="height: 100vh;">
    <l-tile-layer :url="url" />
    <l-marker-cluster>
      <l-marker v-for="marker in markers" :key="marker.id" :lat-lng="marker.latlng">
        <l-popup>{{ marker.info }}</l-popup>
      </l-marker>
    </l-marker-cluster>
  </l-map>
</template>

<script>
import { LMap, LTileLayer, LMarker, LPopup } from '@vue-leaflet/vue-leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet.markercluster/dist/MarkerCluster.css';
import 'leaflet.markercluster/dist/MarkerCluster.Default.css';
import L from 'leaflet'; 


delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

export default {
  components: {
    LMap, LTileLayer, LMarker, LPopup
  },
  data() {
    // Where the maps will show at the first time. 
    return {
      zoom: 14,
      center: [-6.183025, 106.828157],
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      markers: [
        // Marker coodinates
        { id: 1, latlng: [-6.174414, 106.837396], info: 'Marker 1' },
        { id: 2, latlng: [-6.206847, 106.774171], info: 'Marker 2' },
      ],
    };
  },
};
</script>

<style>
#app {
  height: 100%;
  width: 100%;
}
</style>
