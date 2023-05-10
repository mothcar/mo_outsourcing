<template>
  <div class="container">
    <v-tabs class="mt-0" v-model="tab" style="height:0px;">
      <v-tab>
        Map
      </v-tab>
      <v-tab>
        Manual
      </v-tab>
      <v-tab>
        My
      </v-tab>
    </v-tabs>

    <v-window v-model="tab" :touch="false" class="fill-height">
      <v-window-item :value="0" id="home">
        <Map />
      </v-window-item>

      <v-window-item :value="1">
        <Manual />
      </v-window-item>

      <v-window-item :value="2">
        <My />
      </v-window-item>
    </v-window>
  </div>
</template>

<script>
import Map from './Map.vue'
import Manual from './Manual.vue'
import My from './My.vue'

export default {
  name: "Home",
  components: {
    Map, Manual, My
  },

  data: () => ({
    tab: null,
    tabName: null,
  }),

  watch: {
    // tab(val) {
    //   console.log('Tab : ', val)
    // }
  },

  computed: {
    // tab(val) {

    // }
  },

  async mounted() {
    // console.log('This is Real Home')
    this.emitter.on('my-event', (evt) => {
      this.tab = evt.eventContent;
    })

    // post test
    const api = import.meta.env.VITE_URL;
    let serverCon = await this.axios.post(api + '/test/')
    // console.log('Get server : ', serverCon.data.data.item)
  }, // mounted

  methods: {

  }, // methods
};
</script>

<style>
.p-hide {
  display: none;
}

.v-slide-group,
.v-slide-group__container {
  visibility: hidden;
}
</style>

<style lang="scss" scoped>
.container {
  max-width: 375px;
  height: calc(100vh - 60px);
  margin: 0 auto;
}
</style>