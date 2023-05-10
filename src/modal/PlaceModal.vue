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
            <v-col cols="3" v-if="isPublic">
              <v-btn variant="outlined" color="red" @click="goEdit">수정</v-btn>
            </v-col>
          </v-row>

          <v-card-subtitle>
            {{ addressTitle }}
          </v-card-subtitle>

          <v-col cols="12">
            <AvatarCard :userId="user_id"></AvatarCard>
          </v-col>

          <v-card flat class="ma-3" variant="outlined" v-if="showArea">
            <template v-slot:title>
              <v-row justify="center" align-content="center">
                <v-col cols="1">
                  <v-icon icon="mdi-chart-line" size="1em"></v-icon>
                </v-col>
                <v-col class="text-subtitle-1 pt-4" cols="8">
                  연면적 {{ totalArea }}m² 매가 {{ price }}원
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
          <v-expansion-panels flat>
            <v-expansion-panel>
              <v-expansion-panel-title>
                <v-row no-gutters>
                  <v-col cols="12" class="d-flex justify-center text-h6">
                    층별보기
                  </v-col>
                </v-row>
              </v-expansion-panel-title>
              <v-expansion-panel-text>
                <v-expansion-panels
                  flat
                  v-for="item in floors"
                  :key="item.floor"
                >
                  <v-expansion-panel>
                    <v-expansion-panel-title>
                      <v-row>
                        <v-col cols="2" class="text-h6">
                          {{ item.floor }}F
                        </v-col>
                        <v-col cols="10" align-self="center">
                          <!-- <div> -->
                          <span v-for="i in item.spaces" :key="i"
                            >{{ i.name }} /
                          </span>
                          <!-- </div> -->
                        </v-col>
                      </v-row>
                    </v-expansion-panel-title>
                    <v-expansion-panel-text
                      v-for="shop in item.spaces"
                      :key="shop"
                    >
                      <v-card flat class="mb-1" v-ripple @click="goInner(shop)">
                        <!-- <v-card-title> -->
                        <v-card-title> {{ shop.name }}</v-card-title>
                        <!-- <v-card-subtitle>{{i.name}}</v-card-subtitle> -->
                        <!-- <v-expansion-panel-title> {{i.name}} </v-expansion-panel-title> -->
                        <!-- </v-card-title> -->
                      </v-card>
                    </v-expansion-panel-text>
                  </v-expansion-panel>
                </v-expansion-panels>
              </v-expansion-panel-text>
              <v-expansion-panel-text>
                <!-- Add Button *********************************************** -->
                <v-expansion-panels flat>
                  <v-expansion-panel>
                    <v-expansion-panel-title :hide-actions="true">
                      <v-row>
                        <v-col
                          class="text-center pa-0 grey-lighten-1"
                          cols="12"
                        >
                          <v-icon icon="mdi-plus" size="2em"></v-icon>
                        </v-col>
                      </v-row>
                    </v-expansion-panel-title>

                    <v-expansion-panel-text
                      v-for="item in placeItems"
                      :key="item.key"
                    >
                      <v-row>
                        <v-col
                          v-ripple
                          class="text-sutbitle-1"
                          cols="12"
                          @click="addPlace(item.key)"
                        >
                          <span
                            :style="[
                              item.active ? 'color:black;' : 'color:#d7d7d7;',
                            ]"
                            >{{ item.name }}</span
                          >
                        </v-col>
                      </v-row>
                    </v-expansion-panel-text>
                  </v-expansion-panel>
                </v-expansion-panels>
              </v-expansion-panel-text>
            </v-expansion-panel>
          </v-expansion-panels>

          <!-- <div class="d-flex justify-space-around text-center"> -->

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

export default {
  name: "PlaceModal",
  components: { AvatarCard, PostCard },

  data: () => ({
    showArea: true,
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
    floors: [],
    user_id: "34jklkj134kj34kj5k4j",
    posts: [],
    isMulti: false,
    totalArea: 0,
    price: 0,
    currentPage: "/detail/place",
    isPublic: false,
    description: '아직 정보가 없습니다. 이 장소에 대해 소개를 해주세요.'
  }),

  watch: {},

  computed: {},

  async mounted() {
    console.log(`%c Path : `, "color:yellow;", this.$route.fullPath);
    this.$store.commit("setCurrentBarName", "장소상세");
    this.$store.commit("setCurrentPage", "place");
    this.$store.commit("setToShow", true);
    //
    const id = this.$route.params.id;
    let api = import.meta.env.VITE_URL;
    let rawData = await this.axios.get(api + "/place/getPlace", {
      params: { _id: id },
    });
    let placeData = rawData.data.data.item;
    // console.log("PlaceModal - Place Data : ", placeData);
    // let multiData = this.$store.getters.getMultiStatData;
    // // console.log("multi Data : ", multiData);

    // if(placeData.is_public === true) this.isPublic = false
    // else this.isPublic = true

    // let raw = [];
    // let that = this
    // if(placeData.is_public) {
    //   this.showArea = false;
    //   this.imgSrc =
    //     "https://res.cloudinary.com/mothcar/image/upload/v1653913436/samju/toy/building.jpg";
    //   this.placeName = placeData.place_name;
    //   this.addressTitle = placeData.admin_address;
    // } else {
    //     if (placeData.place_type === "MULTI") {
    //     this.isMulti = true;
    //     if (placeData.bldg.length < 1) {
    //       raw = fake[0].curPlaceData.possess;
    //       decorate(raw, that);
    //     } else {

    //       let rawData = await this.axios.get(api + "/place/getPlace", {params:{_id:multiData._id}});
    //       let result = rawData.data.data.item;
    //       raw = result.possess
    //       console.log('Raw : ', raw)
    //       decorate(raw, that);
    //     }
    //   } else {
    //     if (placeData.possess.length < 1) {
    //       raw = fake[0].curPlaceData.possess;
    //       decorate(raw, that);
    //     } else {
    //       let inners = Object.values(placeData.possess);
    //       raw = placeData.possess;
    //       // for await (const item of inners){
    //       //   let api = import.meta.env.VITE_URL;
    //       //   let rawData = await this.axios.get(api + "/facility/getFacility", {params:{_id:item}});
    //       //   let result = rawData.data.data.item;
    //       //   raw.push(result)
    //       // }

    //       decorate(raw, that);
    //     }
    //   } // else

    // } // root else

    this.showArea = true;
    this.imgSrc =
      "https://res.cloudinary.com/mothcar/image/upload/v1653913436/samju/toy/building.jpg";
      this.placeName = placeData.place_name;
      this.addressTitle = placeData.admin_address;

    if (placeData.post.length < 1) this.posts = fake[1].posts;
    else this.posts = placeData.post;

    this.items = fake[1].commu;

    function decorate(raw, that) {
      const only = raw.filter(
        (v, i, a) => a.findIndex((v2) => v.floor === v2.floor) === i
      );
      // const only = [... new Set(raw.map(item=>item.floor))]
      // const only = floor.map(item=> item)
      const newArr = only.map((item) => {
        // console.log('ITem...... : ', item)
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
      that.floors = newArr;
      // this..on("foo", (e) => {
      // });
      let placeStoredData = that.$store.getters.getPlaceStatData;
      if (placeStoredData.place_code === "02000") that.showArea = true;
      const normalAddKey = ["building", "kiosk"];
      // if (placeStoredData.is_public) {
      //   that.showArea = false;
      //   that.imgSrc =
      //     "https://res.cloudinary.com/mothcar/image/upload/v1654782801/samju/toy/somoim.jpg";
      //   that.placeItems = that.placeItems.filter(
      //     (item) => normalAddKey.indexOf(item.key) == -1
      //   );
      // } else {
      that.imgSrc =
        "https://res.cloudinary.com/mothcar/image/upload/v1653913436/samju/toy/building.jpg";
      // }

      if (placeStoredData.place_type === "MULTI") {
        that.showArea = false;
        that.imgSrc =
          "https://res.cloudinary.com/mothcar/image/upload/v1653913436/samju/toy/building.jpg";
        that.placeName = that.$store.getters.getMultiStatData.place_name;
        that.addressTitle = that.$store.getters.getMultiStatData.admin_address;
      } else {
        that.placeName = placeStoredData.place_name;
        that.addressTitle = placeStoredData.admin_address;
        if (placeStoredData.bld_plot_area) {
          console.log("Is Normal : ", placeStoredData.bld_plot_area);
          that.showArea = true;
          that.totalArea = placeStoredData.bld_plot_area;
          that.price = Math.ceil(placeStoredData.bld_plot_area * 2);
        }
        // else that.showArea = false
      }

      // let barTitle = this.$store.getters.getCurrentBarName
      // if(barTitle != '장소상세') this.$store.commit('setCurrentBarName', '장소상세')
    }
  }, // mounted

  methods: {
    goEdit() {
      this.$router.push("/detail/editPlace");
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
