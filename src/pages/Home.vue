<template>
  <v-ons-page>
    <v-ons-toolbar>
      <div class="center" ><p style="font-size: 20px;margin:0;">{{ title }}</p></div>
    </v-ons-toolbar>

    <header>
      <div style="text-align:center; margin: 5% 0;"><img src="../assets/onsenui-logo.png" alt="logo"></div>
    </header>

    <div style="text-align:center; margin: 5% 0;"><button @click="geo()"><p style="margin: 0;">位置情報の取得</p></button></div>

    <!-- <div id="map"></div> -->
    <!-- <div v-show="isGmap" style="text-align:center;">
      <div>
        <gmap-map
          :center="center"
          :zoom="18"
          style="display: inline-block; width:70%;  height: 400px;"
        >
        </gmap-map>
      </div>
    </div> -->
    <div style="text-align:center;">
      <div style="font-size:10px;">2回押してください</div>
    </div>
    <br>
    <br>
    <div v-show="isGmap" style="text-align:center;">
      <div>ここは</div>
      <div id="result" style="font-size: 20px;"></div>
    </div>

  </v-ons-page>
</template>
<script>
import {gmapApi} from 'vue2-google-maps'
export default {
  name: 'Home',
  data: function () {
    return {
      title: '位置情報',
      center: {},
      isGmap: false
    }
  },
  computed: {
    google: gmapApi
  },
  methods: {
    geo () {
      this.getLocation()
      new this.google.maps.Geocoder().geocode({ location: this.center },
        (results, status) => {
          if (status === this.google.maps.GeocoderStatus.OK) {
            var addData = results[0].address_components
            var addInf = '「' + addData[4].long_name + addData[3].long_name + addData[2].long_name + '」'
            document.getElementById('result').innerHTML = addInf
          } else {
            alert(status)
          }
        })
    },
    getLocation () {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          position => {
            this.center = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            }
            this.isGmap = true
            // alert('緯度:' + position.coords.latitude + '\n' + '経度:' + position.coords.longitude)
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
