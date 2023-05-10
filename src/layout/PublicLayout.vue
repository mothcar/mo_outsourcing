<template>
  <v-app>
    <PublicAppBar></PublicAppBar>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import PublicAppBar from "../components/PublicAppBar.vue";

export default {
  name: "PublicLayout",
  components: {
    PublicAppBar,
  },

  data: () => ({}),

  mounted() {
    window.scrollTo(0, 0);
  }, // mounted

  methods: {}, // methods
};
</script>

<style></style>
