<template>
  <v-app>
    <MainView class="fill-height" />
    <Bottom />
  </v-app>
</template>

<script>
import Bottom from "../components/Bottom.vue";
import MainView from "../layout/MainView.vue";

export default {
  name: "Index",
  components: {
    Bottom,
    // AppBar,
    MainView,
  },

  data: () => ({
    count: null,
  }),

  async mounted() {
    this.$router.replace("/");
  }, // mounted

  methods: {}, // methods
};
</script>

<style></style>
