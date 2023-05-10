<template>
  <v-card class="mx-auto mb-7" outlined max-width="400" max-height="900">
    <!-- color="#26c6da" -->
    <v-row>
      <!-- Top  ************************************************************************************************** -->
      <v-col cols="2" class="">
        <v-avatar size="40px">
          <img :src="avatar" style="object-fit: contain" />
        </v-avatar>
      </v-col>
      <v-col cols="10" class="text-left" align-self="center">
        <p>{{ userName }}</p>
      </v-col>
      <!-- Link ************************************************************************************************** -->
      <v-row v-if="item.post_type==='LINK'" v-ripple class="ma-3" @click="goUrl">
        <v-col cols="12" class="pt-0">
          <v-img :src="item.og_image"></v-img>
        </v-col>
        <v-col cols="12" class="text-left">
          {{ item.og_title }}
        </v-col>
      </v-row>
      <!-- PHOTO ************************************************************************************************** -->
      <v-row v-if="item.post_type==='PHOTO'" v-ripple class="ma-3" @click="goUrl">
        <v-col cols="12" class="pt-0 w-full">
          <v-img class="" aspect-ratio="1" :src="item.photo_url"></v-img>
        </v-col>

      <!-- Comment ************************************************************************************************** -->
        <v-col cols="3" class="font-weight-bold">
          <p>{{ userName }}</p>
        </v-col>
        <v-col cols="9" class="text-left">
          <p>{{ item.comment }}</p>
        </v-col>
      </v-row>

      
        
      <v-divider class="mx-4"></v-divider>
      <v-col cols="12" class="font-weight-bold text-left ml-3">
        <p>댓글 {{ replyCount }}</p>
      </v-col>
      <v-card-text class="ma-0 pt-0 pb-0">
        <div>
          <v-textarea
            label="댓글입력"
            auto-grow
            outlined
            rows="4"
            row-height="30"
            :placeholder="holderComment"
          ></v-textarea>
        </div>
      </v-card-text>

      <v-col cols="12" class="text-left">
        <p>{{ item.comment }}</p>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>

export default {
  name: "PostCard",
  components: {},

  props: {
    postData: {
      type: Object,
      require: true,
    },
  },

  data: () => ({
    // item: {},
    avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
    userName: "황상익",
    replyCount: 5,
    holderComment:
      "권리침해, 욕설, 특정 대상을 비하하는 내용, 청소년에게 유해한 내용 등을 게시할 경우 운영정책과 이용약관 및 관련 법률에 의해 제재될 수 있습니다.댓글 작성 시 상대방에 대한 배려와 책임을 담아주세요.",
  }),

  computed: {
    item() {
      return this.postData;
    },
  },

  mounted() {
    // this.item = this.postData;
  }, // mounted

  methods: {
    goUrl() {
      let path = this.item.og_url;
      window.open(path, "_blank");
    },
  }, // methods
};
</script>

<style scoped>
.v-card-text {
  height: 150px;
}
</style>
