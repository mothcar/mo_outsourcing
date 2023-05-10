<template>
  <v-container class="ma-0 pa-0 text-center">
    
    <v-btn class="mt-10" @click="goCenter">센터로 이동</v-btn>

  </v-container>
</template>

<script>
import {G_CFG} from '../DB/m_config.js'

export default {
  name: "Map",
  components: {
  },

  data: () => ({
    
  }), // data 

  watch: {
  },
  computed: {},
  created() {
  },

  mounted() {
    console.log("%c Map Mounted", "color:red;");
  }, // mounted

  methods: {
    goCenter() {
      const id = '1234'
      this.$router.push('/infocenter/info/'+id)
    }, 
  }, // methods
};
</script>

<style lang="scss" scoped>

</style>
