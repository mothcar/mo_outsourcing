<template>
  <v-card class="mx-auto mt-2 mb-2" dark max-width="400" v-ripple @click="goProfile">
    <!-- color="#26c6da" -->
    <v-row>
      <v-col cols="3">
        <v-avatar  size="50px">
            <img :src="item.avatar" style="object-fit: contain;"/>
        </v-avatar>
      </v-col>

      <v-col cols="9" class="text-left">
        <v-list-item-title v-html="item.title"></v-list-item-title>
        <v-list-item-subtitle class="mt-2">{{ item.subtitle }}</v-list-item-subtitle>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>

export default {
  name: "AdminCard",
  components: {},

  props:{
    userId : {
      type: String,
      require: true,
    }
  },

  data: () => ({
    item: {
      avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
      title: "황상익",
      subtitle: `직업 : 소유자 및 관리자 Level-500`,
    },
  }),

  mounted() {
    console.log('Get id : ', this.userId)
  }, // mounted

  methods: {
    goProfile() {
      this.$router.push('/detail/profile/'+this.userId)
      console.log('Profile get ID....')
    },
  }, // methods
};
</script>

<style></style>
