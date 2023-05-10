<template>
  <v-container>
    <v-row class="text-center">
      <v-col v-if="isLogedIn" class="mb-5" cols="12">
        <v-card class="pt-5 pb-5" flat color="grey-lighten-3">
          <v-card-header>
            <v-card-header-text>
              <v-card-title class="justify-center pt-5 pb-5"
                >마이페이지</v-card-title
              >
              <v-card-subtitle class="justify-center pt-5"
                >총자산</v-card-subtitle
              >
            </v-card-header-text>
          </v-card-header>

          <v-card-text class="text-h5 pb-10"> 38,490,000 </v-card-text>
        </v-card>

        <v-card class="mx-auto" prepend-icon="mdi-file-word-box" flat v-ripple @click="openLedger">
          <template v-slot:title>
            <v-row>
              <v-col cols="6" style="text-align: left"> 현금 </v-col>
              <v-col cols="6" style="text-align: right"> 5,000,000 </v-col>
            </v-row>
          </template>
        </v-card>

        <v-card class="mx-auto" prepend-icon="mdi-chart-line" flat v-ripple @click="openStock">
          <template v-slot:title>
            <v-row>
              <v-col cols="6" style="text-align: left"> 주식 </v-col>
              <v-col cols="6" style="text-align: right"> 5,000,000 </v-col>
            </v-row>
          </template>
        </v-card>

        <v-card class="mx-auto" prepend-icon="mdi-trending-up" flat v-ripple @click="openEstate">
          <template v-slot:title>
            <v-row>
              <v-col cols="6" style="text-align: left"> 부동산 </v-col>
              <v-col class="text-h6" cols="6" style="text-align: right">
                5,000,000
              </v-col>
            </v-row>
          </template>
        </v-card>

        <v-card class="mx-auto" prepend-icon="mdi-food" flat v-ripple @click="openRent">
          <template v-slot:title>
            <v-row>
              <v-col cols="6" style="text-align: left"> 임대수익 </v-col>
              <v-col cols="6" style="text-align: right"> 5,000,000 </v-col>
            </v-row>
          </template>
        </v-card>
      </v-col>

      <v-col class="mt-10 text-h6 font-weight-bold" cols="12">
        <v-btn v-if="!isLogedIn" @click="login">
          로그인
        </v-btn>
        <v-btn v-if="isLogedIn" @click="logout">
          로그아웃
        </v-btn>
      </v-col>


      <v-col class="text-h6 font-weight-bold" cols="12"> 공지사항 </v-col>
      <v-col class="text-h6 font-weight-bold" cols="12"> 정책 </v-col>
      <v-col class="text-h6 font-weight-bold" cols="12"> 제휴문의 </v-col>
    </v-row>

    <!-- Alert ********************************************************************** -->
    <SnackBar :snackbar="snack" :text="text"/>

    <div class="text-white">
      <div>test</div>
      <div>test</div>
      <div>test</div>
      <div>test</div>
    </div>
    
  </v-container>
</template>

<script>
import { fake } from "../DB/fake";
import SnackBar from "../components/SnackBar.vue";

export default {
  name: "My",
  components: { SnackBar, },

  data: () => ({
    totalQnt: 0,
    myRecords: null,
    holders: null,
    snack: false,
    text: '준비중', 
    isLogedIn: false, 
  }),

  mounted() {
    this.myRecords = fake[0].contents;
    this.holders = fake[1].list;
    // console.log("Get DB : ", fake);
    this.totalQnt = this.myRecords.reduce((tot, curr) => {
      return (tot += curr.qnt);
    }, 0);
    this.isLogedIn = this.$store.getters.getIsLogedIn
  }, // mounted

  methods: {
    login() {
      this.$router.push('/detail/signIn')
    },

    logout() {
      this.$cookies.set("token", null);
      this.$store.commit('setIsLogedIn', false)
      this.isLogedIn = false
    },

    formatThousand(value) {
      //   console.log("called....", value);
      try {
        return value.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
      } catch {
        return value;
      }
    },

    openLedger() {
      
      this.snack = true
      this.text = '지갑 준비중'
    },

    openStock() {
      this.snack = true
      this.text = '주식 준비중'
    },

    openEstate() {
      this.snack = true
      this.text = '부동산 준비중'
    },

    openRent() {
      this.snack = true
      this.text = '임대수익 준비중'
    },
  }, // methods
};
</script>

<style>
.mdi-file-word-box {
  color: #56a5dc;
}
.mdi-chart-line {
  color: #ab4ebf;
}
.mdi-trending-up {
  color: #ef8d34;
}
.mdi-food {
  color: #55ad82;
}
</style>
