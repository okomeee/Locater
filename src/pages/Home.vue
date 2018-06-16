<template>
  <v-ons-page>
    <v-ons-toolbar>
      <div class="center" ><p style="font-size: 20px;margin:0;">{{ title }}</p></div>
    </v-ons-toolbar>

    <header>
      <div style="text-align:center; margin: 5% 0;"><img src="../assets/onsenui-logo.png" alt="logo"></div>
    </header>

    <router-link to="/Game"><div style="text-align:center; margin: 5% 0;"><button><p style="font-size:20px;margin:0;">移動</p></button></div></router-link>
    <div style="text-align:center; margin: 5% 0;"><button @click="getLocation()"><p style="font-size:20px;margin:0;">位置情報の取得</p></button></div>

  </v-ons-page>
</template>
<script>
export default {
  name: 'Home',
  data () {
    return {
      title: '位置情報'
    }
  },
  methods: {
    getLocation () {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          function (position) {
            alert(position.coords.latitude + ' ' + position.coords.longitude)
          },
          function (error) {
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

</style>
