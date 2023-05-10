<template>
  <v-container>
    <v-row class="text-center">
      <v-col class="mb-5" cols="12">
        <h2 class="headline font-weight-bold mb-5">정보센터입니다</h2>
      </v-col>

      <v-col class="" cols="12">
        <h2 class="text-h6 font-weight-bold">
          기획서와 비슷하게 구현해 주세요.
        </h2>
      </v-col>

      <!-- <v-col cols="12">
        <v-btn @click="goOrg">조직도</v-btn>
      </v-col> -->
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "PublicCenter",
  components: {},

  data: () => ({
    flag: null,
  }),

  watch: {},

  async mounted() {
    console.log('Get Route Params : ', this.$route.params)
    this.$store.commit("setCurrentBarName", "센터");
    // const api = import.meta.env.VITE_URL + "/publicPlace/getOnePublic";
    // const raw = await this.axios.get(api, {
    //   params: { _id: this.$route.params.id },
    // });
    // console.log("Params : ", raw.data.data.item)
  }, // mounted

  methods: {
    goOrg() {
      // console.log('Flag : ', this.flag)
      let flag = this.flag;
      console.log('Flag : ', flag)
      let sendQue = [];
      switch (flag[0]) {
        case "0국가_국":
          sendQue = ["r_depth_0"];
          break;
        case "1시도_시":
        case "2시도_도":
          sendQue = ["r_depth_1", flag[1]];
          break;
        case "3시군구_시":
        case "4시군구_군":
        case "5시군구_구":
          sendQue = ["r_depth_2", flag[1], flag[2]];
          break;
        case "6읍면동_읍": case "5시군7읍면동_면구_구": case "8읍면동_동":
          sendQue = ["r_depth_3", flag[1], flag[2],flag[3]];
      }

      console.log('sendQue..............:', sendQue)

      this.$router.push({
        name: "org",
        query: { id: '', depth: sendQue },
      });
    },
    // goBack() {
    //   this.$router.push("/home");
    // },
  }, // methods
};
</script>

<style></style>
