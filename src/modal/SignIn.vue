<template>
  <v-container>
    <v-row v-if="!signUp" class="text-center">
      <v-col class="mb-5" cols="12">
        <v-btn
          variant="outlined"
          :rounded="false"
          color="green"
          width="250px"
          height="100px"
          size="x-large"
          @click="signUp = !signUp"
          >로그인</v-btn
        >
        <!-- plain tonal outlined -->
      </v-col>
      <v-col cols="12"> 회원가입 </v-col>
      <v-col cols="12">
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="아이디(이메일)"
            hint="sample@naver.com"
            required
          ></v-text-field>

          <v-text-field
            v-model="password"
            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
            :type="show1 ? 'text' : 'password'"
            :counter="20"
            :rules="nameRules"
            label="비밀번호"
            hint="최소 8글자"
            required
            @click:append="show1 = !show1"
          ></v-text-field>
          <v-text-field
            v-model="confirmPassword"
            :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
            :type="show2 ? 'text' : 'password'"
            :counter="20"
            :rules="confirmPasswordRules.concat(passwordConfirmationRule)"
            label="비밀번호확인"
            required
            @click:append="show2 = !show2"
          ></v-text-field>

          <v-checkbox
            v-model="checkbox"
            :rules="[(v) => !!v || '동의후 가입']"
            label="이용약관 동의?"
            required
          ></v-checkbox>

          <v-btn
            :disabled="!valid"
            color="success"
            class="mr-4"
            @click="upSubmit"
          >
            회원가입
          </v-btn>
        </v-form>
      </v-col>
    </v-row>

    <v-row v-if="signUp" class="text-center">
      <v-col class="mb-5" cols="12">
        <v-btn
          variant="outlined"
          :rounded="false"
          color="green"
          width="250px"
          height="100px"
          size="x-large"
          @click="signUp = !signUp"
          >신규회원가입</v-btn
        >
        <!-- plain tonal outlined -->
      </v-col>
      <v-col cols="12"> 로그인 </v-col>
      <v-col cols="12">
        <v-form ref="form" v-model="inValid" lazy-validation>
          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="아이디(이메일)"
            hint="sample@naver.com"
            required
          ></v-text-field>

          <v-text-field
            v-model="password"
            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
            :type="show1 ? 'text' : 'password'"
            :counter="20"
            :rules="nameRules"
            label="비밀번호"
            hint="최소 8글자"
            required
            @click:append="show1 = !show1"
            
          ></v-text-field>

          <v-btn
            :disabled="!inValid"
            color="success"
            class="mt-10"
            @click="inSubmit"
          >
            로그인
          </v-btn>
        </v-form>
      </v-col>
      <v-col cols="12">
        {{ msg }}
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
// Sample  https://www.saramin.co.kr/zf_user/member/registration/join

export default {
  name: "SignIn",
  components: {},

  data: () => ({
    signUp: true,
    valid: true,
    inValid: true,

    nameRules: [
      (v) => !!v || "필수입력",
      (v) => (v && v.length >= 8) || "최소 8글자이상",
    ],
    email: "",
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
    ],
    compareRules: [(v) => v === this.password || "비밀번호가 다릅니다"],
    confirmPasswordRules: [(v) => !!v || "비밀번호 확인"],
    checkbox: false,
    show1: false,
    show2: false,
    // pw: "Password",
    password: "",
    confirmPassword: "",
    msg: '',
  }),

  computed: {
    passwordConfirmationRule() {
      if (this.confirmPassword.length >= 8) {
        return () =>
          this.password === this.confirmPassword || "비밀번호가 다릅니다";
      }
    },
  },

  mounted() {
    this.$store.commit("setCurrentBarName", "로그인/회원가입");
    window.scrollTo(0, 0);
    
  }, // mounted

  methods: {
    async upSubmit() {
      const params = {
        email: this.email,
        password: this.password,
      };
      // this.loading_bar = true;
      const api = import.meta.env.VITE_URL
      const res = await this.axios.post(api+"/auth/signup", params);
      const data = res.data.data.item;
      if(data.email === this.email) {
        this.msg = "가입되었습니다"
        this.email = ''
        this.password = ''
        this.signUp = true 
      }
      // this.loginCommon(data);
    },

    async inSubmit() {
      const params = {
        email: this.email,
        password: this.password,
      };
      const api = import.meta.env.VITE_URL+"/auth/login"
      const res = await this.axios.post(api, params);
      const data = res.data.data.item;
      const token = res.data.data.token;
      console.log("log in data : ", data);
      if(token === "No data") {
        this.msg = "회원가입되어 있지 않습니다"
        return
      }
      this.$cookies.set("token", token);
      this.$store.commit('setIsLogedIn', true)
      this.$router.go(-1)
      // let userData = data.item;
      // let userBalance = data.user_balance;
      // console.log("Log in userData ....: ", userData);
      // console.log("Log in userBalance ....: ", userBalance);
      // this.$store.commit({ type: "setUserData", userData: userData });
      // this.$store.commit({ type: "setBalance", balance: userBalance });
    },

    loginCommon(data) {
      
    },

    validate() {
      this.$refs.form.validate();
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    },
  }, // methods
};
</script>

<style></style>
