<template>
  <v-app>
      <PlaceAppBar></PlaceAppBar>
      <v-main>
          <router-view/>
      </v-main>
  </v-app>
</template>

<script>
import PlaceAppBar from '../components/PlaceAppBar.vue'

export default {
  name: "PlaceLayout",
  components: {
    PlaceAppBar,
  },

  data: () => ({

  }),

  mounted() {
    window.scrollTo(0,0)
  }, // mounted

  methods: {
      
  }, // methods
};
</script>

<style>
</style>
