<template>
  <v-container class="pa-0">
    <v-row class="text-center">
      <v-col class="" cols="12">

          <v-card>
            <v-row>
              <v-col cols="12">
                <v-img
                  class="bg-white"
                  width="100%"
                  :aspect-ratio="16 / 9"
                  cover
                  :src="imgSrc"
                ></v-img>
              </v-col>
            </v-row>

            <v-card-title> {{ name }} </v-card-title>
            <v-card-subtitle>
              {{ addressTitle }}
            </v-card-subtitle>

            <v-col cols="12">
            <AvatarCard userId="user_id"></AvatarCard>
          </v-col>

            <v-card class="ma-3" variant="outlined">
              <template v-slot:title>
                <v-row justify="center" align-content="center">
                  <v-col cols="1">
                    <v-icon icon="mdi-chart-line" size="1em"></v-icon>
                  </v-col>
                  <v-col class="text-subtitle-1 pt-4" cols="8">
                    연면적 20,000m 매가 4,000
                  </v-col>
                  <v-col cols="3">
                    <v-btn variant="outlined" color="red" @click="goTrade">
                      구매
                    </v-btn>
                  </v-col>
                </v-row>
              </template>
            </v-card>

            <v-expansion-panels flat>
              <v-expansion-panel>
                <v-expansion-panel-title :hide-actions="true">
                  <v-row>
                    <v-col class="text-center pa-0 grey-lighten-1" cols="12">
                      <v-icon icon="mdi-plus" size="2em"></v-icon>
                    </v-col>
                  </v-row>
                </v-expansion-panel-title>

                <v-expansion-panel-text v-for="item in shopItems" :key="item.key">
                  <v-card flat class="mb-1" v-ripple >
                    <!-- <v-card-title> -->
                    <v-card-title class="text-center"> 
                      <v-row>
                        <v-col cols="12">
                          <span :style= "[item.active ? 'color:black;' : 'color:#d7d7d7;']">{{ item.name }}</span>
                        </v-col>
                      </v-row>
                    </v-card-title>
                  </v-card>
                </v-expansion-panel-text>
              </v-expansion-panel>
            </v-expansion-panels>

            <v-row>
              <v-col class="mt-5" cols="12">
                <v-card-text class="text-center pa-0 text-h6 grey-lighten-1">
                  내부공간 커뮤니티
                </v-card-text>

                <v-row>
                  <v-col class="ml-5 mr-5" cols="11">
                    <v-text-field
                      @click="editPost"
                      class="ma-0 pa-0 mt-5"
                      label="글쓰기"
                      outlined
                    ></v-text-field>
                  </v-col>
                </v-row>

                <v-list lines="three" :items="items" item-props>
                  <template v-slot:subtitle="{ subtitle }">
                    <div v-html="subtitle"></div>
                  </template>
                </v-list>
              </v-col>
            </v-row>


            <!-- Indtead Space *********************************************** -->
            <v-card class="ml-3 mr-3" variant="outlined" color="white">
              <v-card-text class="text-center pa-0 white">
                <v-icon icon="mdi-plus" size="2em"></v-icon>
              </v-card-text>
            </v-card>

            <v-divider></v-divider>
          </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import {fake} from '../DB/fake.js'
import AvatarCard from "../components/AdminCard.vue";

export default {
  name: "OneDepth",
  components: {AvatarCard},

  data: () => ({
    // oneDepthDialog: false,
    notifications: false,
    widgets: false,
    name: '내부공간',
    addressTitle: "주소",
    shopItems:[
     { name:"키오스크", key:'kiosk', active: false},
     { name:"메뉴", key:'menu', active: false},
     { name:"조직도", key:'org', active: false},
     { name:"홈페이지", key:'website', active: false},
     { name:"소개페이지", key:'introduce', active: false},
    ],
    items: [],
    // imgSrc: "https://cdn.vuetifyjs.com/images/parallax/material.jpg",
    imgSrc: "https://res.cloudinary.com/mothcar/image/upload/v1655176330/samju/toy/empty_image.png",
    
  }),

  watch: {},

  computed: {},

  async mounted() {
    this.$store.commit('setCurrentBarName', '내부정보')
    this.$store.commit('setCurrentPage', 'inner')
    this.$store.commit("setToShow", true);
    window.scrollTo(0,0)

    let _this = this
    let result
    if(this.$route.params.id!=='undefined') {
      let api = import.meta.env.VITE_URL;
      let rawData = await this.axios.get(api + "/facility/getFacility", {params:{_id:this.$route.params.id}});
      result = rawData.data.data.item;
      this.name = result.facility_name
      this.addressTitle = result.admin_address
      this.imgSrc = 'https://res.cloudinary.com/mothcar/image/upload/v1653914197/samju/toy/office.jpg';
      // this.$store.commit("setCurrentPlaceType", {placeType:  "FACILITY", _id: result._id});
      decorate()
    } else {
      this.addressTitle = this.$store.getters.getPlaceStatData.admin_address
      this.imgSrc = 'https://res.cloudinary.com/mothcar/image/upload/v1653914197/samju/toy/office.jpg';
      decorate()
    }

    
    function decorate() {
      
      
    }


    
    this.items = fake[1].commu
    // this.emitter.on("openInner", (e) => {
    //   this.openCommand(e.data);
    // });
    
  }, // mounted

  methods: {
    editPost() {
      this.$router.push('/detail/createPost')
      this.$store.commit("setToShow", false);
    },

    openCommand(val) {
      
      // this.oneDepthDialog = true
    },

    goTrade() {
      this.$store.commit('setCurrentBarName', '구매')
      this.$router.push('/detail/trade')
    },

    addItem() {
    },

  }, // methods
};
</script>

<style>
.slide-fade-enter-active {
  transition: all 2s ease;
}
/* .v-card-header {
  background: #e53834;
} */
</style>
