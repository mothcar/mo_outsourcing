<template>
  <v-container>
    <v-row class="text-center">
      <v-col class="mb-5" cols="12">
        <h2 class="headline font-weight-bold mb-5">Create Post</h2>
      </v-col>
      <v-col cols="12">
        <v-radio-group v-model="radioGroup">
          <v-radio label="링크" value="link" @change="radioChange"></v-radio>
          <v-radio
            label="사진업로드"
            value="photo"
            @change="radioChange"
          ></v-radio>
        </v-radio-group>
      </v-col>
      <v-col cols="12">
        <div>
          <v-text-field v-model="url" required v-if="radioGroup === 'link'">
            <template #label>
              <span class="text-red"><strong>* </strong></span> 링크주소
            </template>
          </v-text-field>

          <div v-if="radioGroup === 'photo'">
            <label for="myfileid">
              <v-btn
                disabled
                :loading="loading[2]"
                width="200"
                size="x-large"
                color="blue-grey"
                prepend-icon="mdi-cloud-upload"
                class="mb-5"
              >
                <!-- @click="load(2)" -->
              </v-btn>
            </label>
            <!-- -->
            <v-file-input
              type="file"
              v-model="selectedPhoto"
              name="something"
              id="myfileid"
              style="display: none"
              accept="image/*"
              @change="choosePhoto"
            />
          </div>
        </div>
      </v-col>

      <v-col cols="12" class="text-center">
        <img
          id="barcodeImage"
          :src="previewPhoto"
          class="white--text align-end"
          style="width: 90vw"
        />
      </v-col>

      <v-card class="mx-auto mt-2 mb-2" dark max-width="400" v-if="isReady">
        <!-- color="#26c6da" -->
        <v-row>
          <v-col cols="12">
            <!-- <img :src="ogImg" aspect-ratio="16/9" width="100vw" style="object-fit: contain" /> -->
            <img
              :src="ogImg"
              aspect-ratio="16/9"
              width="300"
              style="object-fit: contain"
            />
          </v-col>

          <v-col cols="12" class="text-center">
            <v-list-item-title v-html="ogTitle"></v-list-item-title>
            <!-- <v-list-item-subtitle class="mt-2">{{ item.subtitle }}</v-list-item-subtitle> -->
          </v-col>
        </v-row>
      </v-card>

      <v-col cols="12">
        <v-text-field v-model="comment" placeholder="입력" required>
          <template #label>
            <span class="text-red"><strong>* </strong></span> 내용을
            입력해주세요
          </template>
        </v-text-field>
      </v-col>

      <v-col cols="12"> </v-col>
      <v-col cols="12">
        <v-btn color="error" class="mr-4" @click="reset">취소 </v-btn>

        <v-btn type="" @click="onSubmit">입력</v-btn>
      </v-col>
    </v-row>
    <!-- Loader ****************************************************************************************** -->
    <v-dialog
      v-model="overlay"
      fullscreen
      class="p-bg"
      :scrim="false"
      transition="dialog-bottom-transition"
    >
      <v-progress-circular
        :size="50"
        class="center"
        indeterminate
        color="amber"
      ></v-progress-circular>
    </v-dialog>
  </v-container>
</template>

<script>
export default {
  name: "CreatePost",
  components: {},

  data: () => ({
    url: "",
    comment: "",

    nameRules: [
      (v) => !!v || "Name is required",
      (v) => (v && v.length <= 20) || "Name must be less than 10 characters",
    ],
    parentData: null,
    overlay: false,
    // ogImg: 'https://cdn.mediatoday.co.kr/news/thumbnail/202206/304469_413291_4849_v150.jpg',
    ogImg: null,
    ogTitle: null,
    ogUrl: null,
    isReady: false,
    radioGroup: "link",
    radioItems: ["link", "photo"],
    loading: [],
    selectedPhoto: [],
    previewPhoto: "",
  }),

  computed: {
    valid() {
      if (this.url.length < 1 || this.comment.length < 1) return false;
      else return true;
    },
  },

  watch: {
    url: {
      handler: async function (val) {
        if (val.length > 10) this.isReady = true;
        const params = {
          url: val,
        };
        const API = import.meta.env.VITE_URL;
        var rawData = await this.axios.get(API + "/linkpreview", {
          params: params,
        });
        let preparedDate = rawData.data.data.item;
        if (rawData) {
          this.ogImg = preparedDate.image.url;
          this.ogTitle = preparedDate.title;
          this.ogUrl = preparedDate.origin_url;
        }
      },
    },
  },

  async mounted() {
    this.$store.commit("setCurrentBarName", "글쓰기");
    this.parentData = this.$store.getters.getPlaceStatData.place;
    console.log("Place Data : ", this.parentData);
  }, // mounted

  methods: {
    load(i) {
      //noww
      this.loading[i] = true;
      setTimeout(() => (this.loading[i] = false), 3000);
      console.log("Clicked : ", i);
    },

    choosePhoto() {
      // console.log("업로드", this.selectedPhoto);

      if (this.selectedPhoto.length > 0) {
        // this.barcode_preview_dialog = true;
        this.previewPhoto = URL.createObjectURL(this.selectedPhoto[0]);

        // PREVIEW IMAGE
        // this.selected_img = URL.createObjectURL(this.selectedPhoto);
      }
    },

    radioChange() {
      let test = this.radioGroup;
      console.log("Data changed.....", test);
    },

    validate() {
      //   this.$refs.form.validate();
    },
    reset() {
      this.$router.go(-1);
      //   this.$refs.form.reset();
    },
    resetValidation() {
      //   this.$refs.form.resetValidation();
    },

    async onSubmit() {
      // console.log('Check submit : ', this.radioGroup)
      // return


      // if (this.valid === true) {
      if (true) {
        this.overlay = true;
        // let placeType = this.$store.getters.getCurrentPlaceType;

        let params = {};
        if (this.radioGroup === "link") {
          params = {
            post_type: "PLACE",
            user_id: "62c0700fb7e82a1cf2f81585",
            is_public: this.parentData.isPublic,
            // place_type: placeType.place_type, // getCurrentPlaceType 안 쓰깐 다른 방법 찾아보기 
            parent_id: this.parentData._id,
            og_url: this.ogUrl,
            og_image: this.ogImg,
            og_title: this.ogTitle,
            comment: this.comment,
            r_depth_1: this.parentData.r_depth_1,
            r_depth_2: this.parentData.r_depth_2,
            r_depth_3: this.parentData.r_depth_3,
            location: {
              type: "Point",
              coordinates: [this.parentData.location.coordinates[0], this.parentData.location.coordinates[1]],
            },
          };
        } else {
          let formData = new FormData();
          formData.append("file", this.selectedPhoto[0]);

          let upload_url = null;
          formData.append("upload_preset", "khtvl2yr");
          const imageData = await this.axios.post(
            "https://api.cloudinary.com/v1_1/mothcar/upload",
            formData
          );

          // const imageData = await axios.post('https://api.cloudinary.com/v1_1/mothcar/image/upload', formData)
          if (imageData) {
            // console.log("이미지 업로드", imageData);
            upload_url = imageData.data.url;
            console.log("이미지 url :", upload_url);
            this.selectedPhoto = [];
          }

          params = {
            post_type: "PHOTO",
            user_id: "62c0700fb7e82a1cf2f81585",
            is_public: false,
            place_type: this.parentData.place_type,
            parent_id: this.parentData._id,
            photo_url: upload_url,
            comment: this.comment,
            r_depth_1: this.parentData.r_depth_1,
            r_depth_2: this.parentData.r_depth_2,
            r_depth_3: this.parentData.r_depth_3,
            location: this.parentData.location,
          };
        }

        // console.log('Not proceded if !!!')
        // return
        console.log('Gakuni Params : ', params)

        const api = import.meta.env.VITE_URL;
        const rawData = await this.axios.post(api + "/post/createPost", params);
        let result = rawData.data.data.item;

        // const rawData = await this.axios.post( api + "/post/createPhoto", params );
        // let result = rawData.data.data.item;

        if (result) {
          this.loading[2] = false;
          this.overlay = false;
          // let insertStore = {
          //   _id: result._id,
          //   isPublic: result.is_public,
          //   possess: result.possess,
          //   placeName: result.place_name,
          //   location: [
          //     result.location.coordinates[1],
          //     result.location.coordinates[0],
          //   ],
          //   address: result.road_address,
          //   zip: "",
          //   bj_code: result.center_code,
          //   post: result.post,
          //   r_depth_1: result.r_depth_1,
          //   r_depth_2: result.r_depth_2,
          //   r_depth_3: result.r_depth_3,
          //   jibun: result.bunji,
          //   eup_myun: result.eup_myun,
          //   ri: result.ri,
          // };
          this.$store.commit("setPlaceStatData", result);
          this.$router.go(-1);
        }
      } else {
        console.log("Not ready....");
      }
    }, // onSubmit
  }, // methods
};
</script>

<style>
.center {
  margin: auto;
  width: 50%;
  padding: 10px;
}
.p-bg {
  background: #000;
  opacity: 0.6;
}
</style>
