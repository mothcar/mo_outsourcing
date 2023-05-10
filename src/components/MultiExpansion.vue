<template>
  <v-expansion-panels flat>
    <v-expansion-panel>
      <v-expansion-panel-title :hide-actions="true">
        <v-row>
          <v-col class="text-center pa-0 grey-lighten-1" cols="12">
            단지 정보 펼치기
          </v-col>
        </v-row>
      </v-expansion-panel-title>

      <v-expansion-panel-text v-for="item in items" :key="item._id">
        <v-card flat class="mb-1" v-ripple @click="goRoute(item)">
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
</template>

<script>

export default {
  name: "MultiExpansion",
  components: {},

  props: {
    bldg: {
      type: Array,
      require: true,
    },
  },

  data: () => ({
    items: [],
  }),

  mounted() {
    console.log("This bldg : ", this.bldg);
    this.items = this.bldg;
  }, // mounted

  methods: {
    goRoute(item) {
        this.$store.commit('setMultiStatData', item)
        this.$router.push("/detail/place");
        console.log('Item : ', item)
    },
  }, // methods
};
</script>

<style></style>
