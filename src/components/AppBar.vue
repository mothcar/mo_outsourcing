<template>
  <v-app-bar elevation="0" style="background: white; opacity: 0.9">
    <v-app-bar-title> Moham </v-app-bar-title>

    <v-spacer></v-spacer>
    {{ version }}
    <svg
        v-if="!isLogedIn"
        class="align-self-center"
        style="width: 28px; height: 28px"
        viewBox="0 0 24 24"
        @click="login"
      >
        <path
          fill="#a8a8a8"
          d="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,6A2,2 0 0,0 10,8A2,2 0 0,0 12,10A2,2 0 0,0 14,8A2,2 0 0,0 12,6M12,13C14.67,13 20,14.33 20,17V20H4V17C4,14.33 9.33,13 12,13M12,14.9C9.03,14.9 5.9,16.36 5.9,17V18.1H18.1V17C18.1,16.36 14.97,14.9 12,14.9Z"
        />
      </svg>
    <!-- <template v-slot:append>
    </template> -->
  </v-app-bar>
</template>

<script>
import { fake } from "../DB/fake.js";

export default {
  name: "AppBar",
  components: {},

  data: () => ({
    version: "1",
  }),

  computed: {
    isLogedIn() {
      let state = this.$store.getters.getIsLogedIn 
      if(state) return true 
      else return false
    }
  },

  mounted() {
    // this.version = fake[0].version
    this.version = import.meta.env.VITE_VERSION;
    // this.bg = 'transparent';
    this.changeColor();
    // window.onscroll = () => {
      
    // };
  }, // mounted

  methods: {
    login() {
      this.$router.push("/detail/signIn");
      console.log("Log in clicke.......");
    },
    changeColor() {
      if (
        document.body.scrollTop > 100 ||
        document.documentElement.scrollTop > 100
      ) {
        this.bg = 'white';
      } else {
        this.bg = 'transparent';
      }
    },
  }, // methods
};
</script>

<style></style>
