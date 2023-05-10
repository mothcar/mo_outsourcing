<template>
  <v-container class="pa-0">
    <v-row class="text-center">
      <v-col class="" cols="12">
        <v-card flat>
          <v-card-title> 물건지 {{placeName}} </v-card-title>
          <v-img
            class="bg-white mb-5"
            width="100%"
            :aspect-ratio="16 / 9"
            cover
            :src="imgSrc"
          ></v-img>
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
            <v-col class="text-h6 mt-5" cols="12">
              안내 및 유의사항
            </v-col>
          </v-row>
          <v-card-actions class="justify-center mb-10">
            <v-btn variant="outlined" color="red" @click="goBuy"> 결제 </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

export default {
  name: "TradeModal",
  components: {},

  data: () => ({
    tradeDialog: false,
    notifications: false,
    widgets: false,
    placeName: "빌딩명",
    addressTitle: "주소",
    // imgSrc: "https://cdn.vuetifyjs.com/images/parallax/material.jpg",
    imgSrc: "https://res.cloudinary.com/mothcar/image/upload/v1655176330/samju/toy/empty_image.png",
  }),

  watch: {},

  computed: {},

  mounted() {
    // console.log("This is TradeModal...........");
    this.$store.commit("setCurrentBarName", "구매");
    window.scrollTo(0, 0);
    this.placeName = this.$store.getters.getPlaceStatData.place_name
    this.addressTitle = this.$store.getters.getPlaceStatData.admin_address
    this.imgSrc =
      "https://res.cloudinary.com/mothcar/image/upload/v1653913436/samju/toy/building.jpg";
  }, // mounted

  methods: {
    goBuy() {
      this.$router.push('/detail/buy')
    },

  }, // methods
};
</script>

<style>
.slide-fade-enter-active {
  transition: all 2s ease;
}
</style>
