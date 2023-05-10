<template>
  <v-container class="pa-0">
    <v-row class="text-center">
      <v-col class="" cols="12">
        <v-card flat>
          <v-card-title> 결제 </v-card-title>
          <v-card-subtitle>
            {{ addressTitle }}
          </v-card-subtitle>
          <v-card-subtitle>
            * 판매가능! (소유자가 7일이상 로그인 안 할경우 매수자가 강제로
            매입할 수 있음)
          </v-card-subtitle>
          <v-card-subtitle> 12층, 연면적 20,000m </v-card-subtitle>
          <v-card-subtitle> 보유현금 5,000 </v-card-subtitle>
          <v-card-subtitle> 매도가 2,000 </v-card-subtitle>
          <v-card-subtitle> 소유자 김정태 강원도 지역정보장 </v-card-subtitle>
        
          <v-row>
            <v-col class="text-h6 font-weight-bold" cols="12">
                PG사
            </v-col>
          </v-row>
          <!-- <v-card-actions class="justify-center mb-10">
            <v-btn variant="outlined" color="red"> 매입 </v-btn>
          </v-card-actions> -->
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

export default {
  name: "BuyModal",
  components: {},

  data: () => ({
    tradeDialog: false,
    notifications: false,
    widgets: false,
    addressTitle: "주소",
    // imgSrc: "https://cdn.vuetifyjs.com/images/parallax/material.jpg",
    imgSrc: "https://res.cloudinary.com/mothcar/image/upload/v1655176330/samju/toy/empty_image.png",
  }),

  watch: {},

  computed: {},

  mounted() {
    // console.log("This is BuyModal...........");
    this.$store.commit("setCurrentBarName", "매입/결제");
    window.scrollTo(0, 0);

    this.addressTitle = this.$store.getters.getPlaceStatData.admin_address
    this.imgSrc =
      "https://res.cloudinary.com/mothcar/image/upload/v1653913436/samju/toy/building.jpg";
  }, // mounted

  methods: {
  }, // methods
};
</script>

<style>
.slide-fade-enter-active {
  transition: all 2s ease;
}
</style>
