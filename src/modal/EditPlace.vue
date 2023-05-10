<template>
  <v-container>
    <v-row class="text-center">
      <v-col class="mb-5" cols="12">
        <h2 class="headline font-weight-bold mb-5">Edit Place</h2>
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

        

          <v-btn color="error" class="mr-4" @click="reset">취소 </v-btn>

          <v-btn type="" @click="onSubmit">수정</v-btn>
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
  name: "EditPlace",
  components: {},

  data: () => ({
    name: "",

    nameRules: [
      (v) => !!v || "Name is required",
      (v) => (v && v.length <= 20) || "Name must be less than 10 characters",
    ],
    parentData: null,
    overlay: false, 
  }),

  computed: {
    valid() {
      if(this.name.length<1) return false 
      else return true
    }
  },

  async mounted() {
    this.$store.commit("setCurrentBarName", "장소정보수정");
    this.$store.commit("setToShow", false);
    this.parentData = this.$store.getters.getPlaceStatData.address.address_name
    console.log("Get parent data : ", this.parentData);
    // this.name = this.parentData.place_name
    // const api = import.meta.env.VITE_URL + "/facility/getRewardPointPolicy";
    // const raw = await this.axios.get(api);
    // const policy = raw.data.data.item;
    // console.log("Mounted : ", policy);
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
        console.log('This name : ', this.name)
        this.overlay = true
        const params = {
          _id: this.parentData._id,
          place_name: this.name,
        };

        const api = import.meta.env.VITE_URL;
        const rawData = await this.axios.post( api + "/place/editPlace", params );
        let result = rawData.data.data.item;
        console.log("Server Create Result : ", result);
        if (result) {
          this.overlay = false
          // console.log("Object : ", insertStore);
          this.$store.commit("setPlaceStatData", result);
          this.$router.go(-1);
        }
      } else {
        console.log("Not Compeleted....");
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
