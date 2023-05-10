<template>
  <v-container>
    <v-row class="text-center">
      <v-col class="mb-5" cols="12">
        <h2 class="headline font-weight-bold mb-5">AddFacility</h2>
      </v-col>
      <v-col cols="12">
        <div>
          <v-text-field
            v-model="name"
            :counter="20"
            :rules="nameRules"
            required
          >
            <template #label>
              <span class="text-red"><strong>* </strong></span> 장소/시설명
            </template>
          </v-text-field>

          <v-text-field
            v-model="category"
            :counter="20"
            :rules="nameRules"
            placeholder="편의점"
            required
          >
            <template #label>
              <span class="text-red"><strong>* </strong></span> 어떤곳인가요?
            </template>
          </v-text-field>

          <v-text-field
            v-model="floor"
            single-line
            type="number"
            suffix="층"
            required
          >
            <template #label>
              <span class="text-red"><strong>* </strong></span> 층
            </template>
          </v-text-field>

          <v-text-field
            v-model="area"
            single-line
            type="number"
            label="면적"
            suffix="m²"
          ></v-text-field>

          <v-btn color="error" class="mr-4" @click="reset">취소 </v-btn>

          <v-btn type="" @click="onSubmit">입력</v-btn>
        </div>
      </v-col>
      <v-col cols="12"> </v-col>
      <v-col cols="12"> </v-col>
    </v-row>
    <!-- Loader ****************************************************************************************** -->
    <v-dialog v-model="overlay"  fullscreen class="p-bg"
      :scrim="false"
      transition="dialog-bottom-transition">
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
  name: "AddFacility",
  components: {},

  data: () => ({
    name: "",
    category: "",
    floor: null,
    area: null,

    nameRules: [
      (v) => !!v || "Name is required",
      (v) => (v && v.length <= 20) || "Name must be less than 10 characters",
    ],
    email: "",
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
    ],
    parentData: null,
    overlay: false, 
  }),

  computed: {
    valid() {
      if(this.name.length<1||this.floor==null||this.category.length<1) return false 
      else return true
    }
  },

  async mounted() {
    this.$store.commit("setCurrentBarName", "시설추가");
    this.parentData = this.$store.getters.getPlaceStatData;
    console.log("Get parent data : ", this.parentData);
    const api = import.meta.env.VITE_URL + "/facility/getRewardPointPolicy";
    const raw = await this.axios.get(api);
    const policy = raw.data.data.item;
    console.log("Mounted : ", policy);
  }, // mounted

  methods: {
    validate() {
      //   this.$refs.form.validate();
    },
    reset() {
      //   this.$refs.form.reset();
    },
    resetValidation() {
      //   this.$refs.form.resetValidation();
    },

    async onSubmit() {
      if (this.valid === true) {
        this.overlay = true
        const params = {
          isPublic: this.parentData.isPublic,
          parent_id: this.parentData._id,
          parent_name: this.parentData.place_name,
          name: this.name,
          category: this.category,
          floor: this.floor,
          area: this.area,
          address: this.parentData.admin_address,
          r_depth_1: this.parentData.r_depth_1,
          r_depth_2: this.parentData.r_depth_2,
          r_depth_3: this.parentData.r_depth_3,
        };
        const api = import.meta.env.VITE_URL;
        const rawData = await this.axios.post(
          api + "/facility/addFacility",
          params
        );
        let result = rawData.data.data.item;
        console.log("Server Create Result : ", result);
        if (result) {
          this.overlay = false
          let insertStore = {
            _id: result._id,
            isPublic: result.is_public,
            possess: result.possess,
            placeName: result.place_name,
            location: [
              result.location.coordinates[1],
              result.location.coordinates[0],
            ],
            address: result.road_address,
            zip: "",
            bj_code: result.center_code,
            post:result.post,
            r_depth_1: result.r_depth_1,
            r_depth_2: result.r_depth_2,
            r_depth_3: result.r_depth_3,
            jibun: result.bunji,
            eup_myun: result.eup_myun,
            ri: result.ri,
          };
          // console.log("Object : ", insertStore);
          this.$store.commit("setPlaceStatData", insertStore);
          this.$router.go(-1);
        }
      } else {
        console.log("Not ready....");
      }
    },
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
