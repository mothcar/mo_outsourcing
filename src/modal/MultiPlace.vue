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

            <v-col cols="8" class="text-h6 ml-4" align="left">
              {{ placeName }}
            </v-col>
            <v-col cols="3">
              <v-btn variant="outlined" color="red" @click="goEdit">수정</v-btn>
            </v-col>
          </v-row>

          <v-card-subtitle>
            {{ addressTitle }}
          </v-card-subtitle>

          <v-col cols="12">
            <AvatarCard :userId="user_id"></AvatarCard>
          </v-col>

          <v-card flat class="ma-3" variant="outlined" v-if="isNormal">
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

          <!-- If Multi ***************************************************************************** -->
          <!-- <MultiExp :bldg="buildings"></MultiExp> -->
          <v-expansion-panels flat>
            <v-expansion-panel>
            <v-expansion-panel-title :hide-actions="true">
                <v-row>
                <v-col class="text-center pa-0 grey-lighten-1" cols="12">
                    단지 정보 펼치기
                </v-col>
                </v-row>
            </v-expansion-panel-title>

            <v-expansion-panel-text v-for="item in buildings" :key="item._id">
                <v-card flat class="mb-1" v-ripple @click="goPlace(item)">
                <!-- <v-card-title> -->
                <v-card-title class="text-center">
                    <v-row>
                    <v-col cols="12">
                        {{ item.place_name }}
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
                {{ placeName }} 커뮤니티
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

              <!-- Post ******************************************************************************************* -->
              <div v-for="item in posts" :key="item._id">
                <PostCard :postData="item" class="mb-5"></PostCard>
              </div>

              <v-list lines="three" :items="items" item-props>
                <template v-slot:subtitle="{ subtitle }">
                  <div v-html="subtitle"></div>
                </template>
              </v-list>
            </v-col>
          </v-row>

          <!-- Indtead Space *********************************************** -->
          <v-card flat class="ml-3 mr-3" variant="outlined" color="white">
            <v-card-text class="text-center pa-0 white">
              <v-icon icon="mdi-plus" size="2em"></v-icon>
            </v-card-text>
          </v-card>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { fake } from "../DB/fake.js";
import AvatarCard from "../components/AdminCard.vue";
import PostCard from "../components/PostCard.vue";
import MultiExp from "../components/MultiExpansion.vue";

export default {
  name: "PlaceModal",
  components: { AvatarCard, PostCard, MultiExp },

  data: () => ({
    isNormal: true,
    placeDialog: true,
    notifications: false,
    widgets: false,
    placeName: "누만지빌딩",
    addressTitle: "주소",
    items: [],
    // imgSrc: "https://cdn.vuetifyjs.com/images/parallax/material.jpg",
    imgSrc:
      "https://res.cloudinary.com/mothcar/image/upload/v1655176330/samju/toy/empty_image.png",
    placeItems: [
      { name: "건물", key: "building", active: false },
      { name: "시설", key: "facility", active: true },
      { name: "키오스크", key: "kiosk", active: false },
      { name: "메뉴", key: "menu", active: false },
      { name: "조직도", key: "org", active: false },
      { name: "홈페이지", key: "website", active: false },
      { name: "소개페이지", key: "introduce", active: false },
    ],
    floors: null,
    user_id: "34jklkj134kj34kj5k4j",
    posts: [],
    buildings: [],
  }),

  watch: {},

  computed: {},

  async mounted() {
    console.log(`%c Path : `, 'color:yellow;', this.$route.fullPath)
    this.$store.commit("setCurrentBarName", "단지그룹");
    this.$store.commit('setCurrentPage', 'multi')
    this.$store.commit("setToShow", true);
    let placeData = this.$store.getters.getPlaceStatData;
    // console.log("Place Data : ", placeData);
    // let multiData = this.$store.getters.getMultiStatData;
    // console.log("multi Data : ", multiData);

    let raw = [];
    if (placeData.bldg.length < 1) {
      raw = fake[0].curPlaceData.possess;
      decorate(raw);
    } else {
      // console.log('ELSE...........', placeData.bldg)
      function compare( a, b ) {
        if ( a.place_name < b.place_name ){
          return -1;
        }
        if ( a.place_name > b.place_name ){
          return 1;
        }
        return 0;
      }

      let reorder = placeData.bldg.sort( compare );
      this.buildings = reorder
      // decorate(raw);
      this.isNormal = false 
      this.imgSrc =
          "https://res.cloudinary.com/mothcar/image/upload/v1653913436/samju/toy/building.jpg";
      this.placeName = this.$store.getters.getPlaceStatData.place_name;
      this.addressTitle = this.$store.getters.getPlaceStatData.admin_address;
    }

    if (placeData.post.length < 1) this.posts = fake[1].posts;
    else this.posts = placeData.post;
    

    let _this = this;

    this.items = fake[1].commu;

    function decorate(raw) {
      const only = raw.filter(
        (v, i, a) => a.findIndex((v2) => v.floor === v2.floor) === i
      );

      // const only = [... new Set(raw.map(item=>item.floor))]
      // const only = floor.map(item=> item)

      const newArr = only.map((item) => {
        item["spaces"] = [];
        raw.forEach((ele) => {
          if (item.floor == ele.floor) {
            // obj.spaces.push({ name: object.name });
            // let obj = item.spaces
            item.spaces.push({ _id: ele._id, name: ele.facility_name });
            return item;
          }
        });
        return item;
      });

      newArr.sort((a, b) => b.floor - a.floor);
      _this.floors = newArr;
      // this..on("foo", (e) => {
      // });
      const normalAddKey = ["building", "kiosk"];
      if (_this.$store.getters.getPlaceStatData.is_public) {
        _this.isNormal = false;
        _this.imgSrc =
          "https://res.cloudinary.com/mothcar/image/upload/v1654782801/samju/toy/somoim.jpg";
        _this.placeItems = _this.placeItems.filter(
          (item) => normalAddKey.indexOf(item.key) == -1
        );
      } else {
        _this.isNormal = true;
        _this.imgSrc =
          "https://res.cloudinary.com/mothcar/image/upload/v1653913436/samju/toy/building.jpg";
      }

      _this.placeName = _this.$store.getters.getPlaceStatData.place_plame;
      _this.addressTitle = _this.$store.getters.getPlaceStatData.admin_address;
      // let barTitle = this.$store.getters.getCurrentBarName
      // if(barTitle != '장소상세') this.$store.commit('setCurrentBarName', '장소상세')
    }
  }, // mounted

  methods: {
    goEdit() {
      this.$router.push('/detail/editPlace')
    },

    goPlace(item) {
        this.$store.commit('setMultiStatData', item)
        this.$router.push("/detail/place");
        // console.log('Item : ', item)
    },

    editPost() {
      this.$router.push("createPost");
      this.$store.commit("setToShow", false);
    },

    goTrade() {
      this.$router.push("/detail/trade");
    },

    goInner(shop) {
      // this.emitter.emit("openInner", { data: shop });
      this.$router.push("/detail/inner/" + shop._id);
    },

    addPlace(val) {
      // facility
      let routerName;
      switch (val) {
        case "facility":
          routerName = "/detail/addFacility";
          break;
      }
      this.$router.push(routerName);
    },
  }, // methods
};
</script>

<style>
.slide-fade-enter-active {
  transition: all 2s ease;
}
/* .v-input {
  padding-left: 5px;
  height: 60px;
} */
/* .v-card-header {
  background: #e53834;
} */
</style>
