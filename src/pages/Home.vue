<template>
  <v-ons-page>
    <v-ons-toolbar>
      <div class="center" ><p style="font-size: 20px;margin:0;">{{ title }}</p></div>
    </v-ons-toolbar>

    <header>
      <div style="text-align:center; margin: 5% 0;"><img src="../assets/onsenui-logo.png" alt="logo"></div>
    </header>

    <div style="text-align:center; margin: 5% 0;"><button @click="getLocation()"><p style="font-size:20px;margin:0;">位置情報の取得</p></button></div>

    <!-- <div id="map"></div> -->
    <div v-show="isGmap" style="text-align:center;">
      <div>
        <gmap-map
          :center="center"
          :zoom="18"
          style="display: inline-block; width:70%;  height: 400px;"
        >
        </gmap-map>
      </div>
    </div>
  </v-ons-page>
</template>
<script>
export default {
  name: 'Home',
  data: function () {
    return {
      title: '位置情報',
      center: {},
      isGmap: false
    }
  },
  methods: {
    // initMap() {
    //   var map = new google.maps.Map(document.getElementById ('map'), {
    //     center: {lat: -34.397, lng: 150.644},
    //     zoom: 6
    //   })
    //   var infoWindow = new google.maps.InfoWindow({map: map})
    //   // Try HTML5 geolocation.
    //   if (navigator.geolocation) {
    //     navigator.geolocation.getCurrentPosition(function (position) {
    //       var pos = {
    //         lat: position.coords.latitude,
    //         lng: position.coords.longitude
    //       }
    //       infoWindow.setPosition(pos)
    //       infoWindow.setContent('Location found.')
    //       map.setCenter(pos)
    //     }, function () {
    //       this.handleLocationError(true, infoWindow, map.getCenter())
    //     })
    //   } else {
    //     // Browser doesn't support Geolocation
    //     this.handleLocationError(false, infoWindow, map.getCenter())
    //   }
    // },
    // handleLocationError (browserHasGeolocation, infoWindow, pos) {
    //   infoWindow.setPosition(pos)
    //   infoWindow.setContent(browserHasGeolocation ? 'Error: The Geolocation service failed.' : 'Error: Your browser doesn\'t support geolocation.')
    // },
    getLocation () {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          position => {
            this.center = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            }
            this.isGmap = true
          },
          error => {
            switch (error.code) {
              case 1:
                alert('位置情報の利用が許可されていません')
                break
              case 2:
                alert('現在地が取得できませんでした')
                break
              case 3:
                alert('タイムアウトになりました')
                break
              default:
                alert('予期されないエラー：' + error.code)
                break
            }
          },
          {
            timeout: 5000,
            maximumAge: 0,
            enableHighAccuracy: true
          }
        )
      } else {
        alert('GeolocationAPIを利用できません')
      }
    }
  }
}
</script>

<style scoped>

.a{
  display: inline-block;
}
</style>
