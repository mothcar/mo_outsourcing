<template>
  <v-container>
    <v-row class="text-center">
      <v-col class="mb-5" cols="12">
        <h2 class="headline font-weight-bold mb-5">Manual</h2>
      </v-col>
      <v-col class="" cols="12">
        <h2 class="text-h6 font-weight-bold">서비스 이용방법</h2>
      </v-col>

      <v-col cols="12">
        유저들이 이해할 수 있도록 사용 설명 <br />
        - 가상부동산 시장을 열어간다. <br />
        - 내부 거래 화폐는 가치가 변하지 않는다. 항상 고정이다. <br />
        - 서비스 시작 초기시점에는 땅값이 제로(0)에 가깝고 <br />
        - 시간이 갈수록 땅값은 올라서 어느시점에는 현시세(공시지가)에 근접할
        것이다. <br />
        - 예를들어 서비스 시작시점에 1m² 당 1원이지만 런칭후 1년이
        지난시점에서는 1m² 당 백만원정도로 1,000,000배로 오를 수 있다. <br />
        - 본 가상부동산 서비스에서 부동산 거래 차액으로 얻은 돈은 실제 돈으로
        환전이 가능하다. <br />
        - 즉, 무일푼으도 돈도 벌수 있다. <br />
        - 강제 매수는 원하는 건물주가 7일동안 로그인 안 했을때 강제로 원하는
        건물을 매수할 수 있다. <br />
        - 반대로 매수당하는 것을 방어하기위해서는 매일 로그인하여 강제
        매수당하지 않고 계속 건물을 보유할 수 있다. <br />
      </v-col>

      <v-col class="" cols="12">
        <h2 class="text-h6 font-weight-bold">자주하는 질문</h2>
      </v-col>
      <v-col class="" cols="12">
        <h2 class="text-h6 font-weight-bold">1:1문의</h2>
      </v-col>

      <v-col cols="12">
        <v-btn>지역 커뮤니티로 이동</v-btn>
      </v-col>

      <v-col class="" cols="12">
        <h2 class="text-h6 font-weight-bold">사업목적사항</h2>
      </v-col>

      <v-col cols="12">
        연락처에서 초대하기기능, 각종 sns에서 공유하기기능
      </v-col>

      <v-col cols="12"> 공지사항 </v-col>
    </v-row>
  </v-container>
</template>

<script>

export default {
  name: "Manual",
  components: {},

  data: () => ({}),

  watch: {
    // picker(val) {
    //   console.log('Pick : ', val)
    // }
  },

  mounted() {}, // mounted

  methods: {
    goBack() {
      this.$router.push("/home");
    },
  }, // methods
};
</script>

<style></style>
