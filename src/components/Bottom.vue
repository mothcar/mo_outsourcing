<template>
  <v-layout class="container" style="height: 55px; border-top: 1px solid #EAEAEA;" >
    <v-bottom-navigation
      grow
      :value="value" fixed color="black" style="z-index: 100"
    >
      <v-btn @click="bottomChange(0)">
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8.35982 0.533487L0.359816 7.20015C0.131823 7.39015 0 7.6716 0 7.96838V17C0 17.5523 0.447715 18 1 18H6C6.55228 18 7 17.5523 7 17V15C7 13.8954 7.89543 13 9 13C10.1046 13 11 13.8954 11 15V17C11 17.5523 11.4477 18 12 18H17C17.5523 18 18 17.5523 18 17V7.96837C18 7.6716 17.8682 7.39015 17.6402 7.20015L9.64018 0.533487C9.26934 0.224449 8.73066 0.224449 8.35982 0.533487Z" fill="#00BAFF"/>
        </svg>
        <span class="menu-acitve">홈</span>
      </v-btn>

      <v-btn @click="bottomChange(0)">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="1" y="1" width="18" height="18" rx="3" stroke="#808080" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M11.1865 7.9628C11.2979 8.18025 11.5081 8.32984 11.7501 8.36373L13.8284 8.6548C14.0363 8.68392 14.1179 8.94083 13.9649 9.08458L12.4865 10.4736C12.3018 10.6471 12.2172 10.9021 12.2616 11.1516L12.6187 13.1584C12.6548 13.3614 12.4435 13.5184 12.2596 13.4252L10.339 12.452C10.1259 12.344 9.8741 12.344 9.661 12.452L7.74043 13.4252C7.5565 13.5184 7.34517 13.3614 7.3813 13.1584L7.7384 11.1516C7.78279 10.9021 7.69822 10.6471 7.51354 10.4736L6.03514 9.08458C5.88213 8.94083 5.96374 8.68392 6.17164 8.6548L8.24992 8.36373C8.49186 8.32984 8.70213 8.18025 8.81347 7.9628L9.77747 6.08015C9.87037 5.89874 10.1296 5.89874 10.2225 6.08015L11.1865 7.9628Z" stroke="#808080" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <span>즐겨찾기</span>
      </v-btn>

      <v-btn @click="bottomChange(0)">
        <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9 9C11.2091 9 13 7.20914 13 5C13 2.79086 11.2091 1 9 1C6.79086 1 5 2.79086 5 5C5 7.20914 6.79086 9 9 9Z" stroke="#808080" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <rect x="1" y="12" width="16" height="7" rx="2" stroke="#808080" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <span>My</span>
      </v-btn>
    </v-bottom-navigation>
  </v-layout>
</template>


<!-- <template>
  <v-layout class="container" style="height: 55px; border-top: 1px solid #EAEAEA;">
    <v-bottom-navigation :value="value" fixed color="black" style="z-index: 100">
      <v-row>
        <v-col cols="4" class="text-center pa-0">
          <v-btn @click="bottomChange(0)" height="55">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.35982 0.533487L0.359816 7.20015C0.131823 7.39015 0 7.6716 0 7.96838V17C0 17.5523 0.447715 18 1 18H6C6.55228 18 7 17.5523 7 17V15C7 13.8954 7.89543 13 9 13C10.1046 13 11 13.8954 11 15V17C11 17.5523 11.4477 18 12 18H17C17.5523 18 18 17.5523 18 17V7.96837C18 7.6716 17.8682 7.39015 17.6402 7.20015L9.64018 0.533487C9.26934 0.224449 8.73066 0.224449 8.35982 0.533487Z" fill="#00BAFF"/>
            </svg>
            <span class="menu-acitve">홈</span>
          </v-btn>
        </v-col>
        <v-col cols="4" class="text-center pa-0">
          <v-btn @click="bottomChange(1)" height="55">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="1" y="1" width="18" height="18" rx="3" stroke="#808080" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M11.1865 7.9628C11.2979 8.18025 11.5081 8.32984 11.7501 8.36373L13.8284 8.6548C14.0363 8.68392 14.1179 8.94083 13.9649 9.08458L12.4865 10.4736C12.3018 10.6471 12.2172 10.9021 12.2616 11.1516L12.6187 13.1584C12.6548 13.3614 12.4435 13.5184 12.2596 13.4252L10.339 12.452C10.1259 12.344 9.8741 12.344 9.661 12.452L7.74043 13.4252C7.5565 13.5184 7.34517 13.3614 7.3813 13.1584L7.7384 11.1516C7.78279 10.9021 7.69822 10.6471 7.51354 10.4736L6.03514 9.08458C5.88213 8.94083 5.96374 8.68392 6.17164 8.6548L8.24992 8.36373C8.49186 8.32984 8.70213 8.18025 8.81347 7.9628L9.77747 6.08015C9.87037 5.89874 10.1296 5.89874 10.2225 6.08015L11.1865 7.9628Z" stroke="#808080" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <span class="">즐겨찾기</span>
          </v-btn>
        </v-col>
        <v-col cols="4" class="text-center pa-0">
          <v-btn @click="bottomChange(2)" height="55">
            <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 9C11.2091 9 13 7.20914 13 5C13 2.79086 11.2091 1 9 1C6.79086 1 5 2.79086 5 5C5 7.20914 6.79086 9 9 9Z" stroke="#808080" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <rect x="1" y="12" width="16" height="7" rx="2" stroke="#808080" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <span class="">My</span>
          </v-btn>
        </v-col>
      </v-row>
    </v-bottom-navigation>
  </v-layout>
</template> -->

<script>

export default {
  name: "Index",
  components: {},

  data: () => ({
    value: 0,
  }),

  mounted() {}, // mounted

  methods: {
    bottomChange(value) {
      this.value = value;

      this.emitter.emit('my-event', {'eventContent': value})
    },
  }, // methods
};
</script>

<style>
</style>

<style lang="scss" scoped>
.container:deep() {
  max-width: 375px;
  height: 60px !important;
  margin: 0 auto;

  span {
    font-size: 0.75rem;
    font-weight: 500;
    padding-top: 6px;
    color: #808080;
  }

  .menu-acitve {
    color: #00BAFF;
  }
}

</style>