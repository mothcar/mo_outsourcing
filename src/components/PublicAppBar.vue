<template>
  <v-app-bar style="background: white; opacity: 0.7">
    <template v-slot:prepend>
      <v-btn flat icon @click="goBack" color="">
        <v-icon class="" icon="mdi-arrow-left"></v-icon>
      </v-btn>
    </template>
    <v-app-bar-title>
      {{ appBarName }}
    </v-app-bar-title>

    <v-spacer></v-spacer>
  </v-app-bar>
</template>

<script>

export default {
  name: "PlaceAppBar",
  components: {},

  data: () => ({}),

  computed: {
    appBarName() {
      let name = this.$store.getters.getCurrentBarName;
      return name;
    },

    currentPage() {
      let curPage = this.$store.getters.getCurrentPage;
      return curPage;
    },

    toShow() {
      let isShow = this.$store.getters.getToShow;
      return isShow;
    },
  },

  watch: {},

  mounted() {}, // mounted

  methods: {
    goBack() {
      this.$router.go(-1);
    },

    changeName(val) {
      this.appBarName = val;
    },
  }, // methods
};
</script>

<style></style>
