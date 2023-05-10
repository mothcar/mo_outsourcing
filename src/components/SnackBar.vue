<template>
  <!-- <v-container> -->
  <v-snackbar v-model="snackbar2" :multi-line="true"
    centered :timeout="timeout">
    <v-row>
      <v-col cols="8">
        {{ text }}
      </v-col>
      <v-col cols="4">
        <v-btn color="pink" text @click="snackbar2 = false"> Close </v-btn>
      </v-col>
    </v-row>
  </v-snackbar>
  <!-- </v-container> -->
</template>

<script>

export default {
  name: "Template",
  components: {},
  props: {
    snackbar: {
      type: Boolean,
      require: true,
    },
    text: {
      type: String,
      require: true,
    },
  },

  data: () => ({
    //   snackbar: false,
    //   text: '준비중',
    timeout: 2000,
    snackbar2: false,
  }),

  beforeUnmount() {
    console.log("beforeUnmount");
  },

  // unmounted() {
  //   console.log("unmounted");
  //   this.snackbar = false;
  // },

  mounted() {}, // mounted

  methods: {}, // methods
};
</script>

<style></style>
