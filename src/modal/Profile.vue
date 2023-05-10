<template>
  <v-container>
    <v-row class="text-center">
      <v-col class="mb-5" cols="12">
        <h2 class="headline font-weight-bold mb-5">Profile</h2>
      </v-col>
      <v-col cols="12">
        <v-avatar size="200px">
            <v-img
                src="https://res.cloudinary.com/mothcar/image/upload/v1655037897/samju/toy/profile.png"
            />
        </v-avatar>
      </v-col>
      <v-col cols='12'>
        {{ name }}
      </v-col>
      <v-col cols='12'>
        직책 {{ job }}
      </v-col>
      <v-col cols='12'>
        {{ email }}
      </v-col>
      <v-col cols='12'>
        기여도 {{ contribute }}
      </v-col>
      <v-col cols='12'>
        대표관리빌딩 {{ building }}
      </v-col>
      <v-col cols='12'>
        <v-img
         src="https://res.cloudinary.com/mothcar/image/upload/v1653913436/samju/toy/building.jpg"
        >

        </v-img>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

export default {
  name: "Profile",
  components: {
    
  },

  data: () => ({
    name: '황상익',
    job: '동작구 정보관리자',
    email: 'mothcar@naver.com',
    contribute: 500,
    building: '누만지빌딩',
  }),

  mounted() {
    this.$store.commit("setCurrentBarName", "프로필");
    console.log('Get Params from router : ', this.$route.params.id)
  }, // mounted

  methods: {
      
  }, // methods
};
</script>

<style>
</style>
