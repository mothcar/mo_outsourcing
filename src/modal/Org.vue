<template>
  <v-container>
    <v-row class="text-center">
      <v-col class="mb-5" cols="12">
        <h2 class="headline font-weight-bold mb-5">중앙행정부</h2>
        <h4 class="text-caption font-weight-bold mb-5">상위기관보기</h4>
      </v-col>

      <v-col>
        <v-expansion-panels>
          <v-expansion-panel v-for="(i, idx) in orgs" :key="idx">
            <v-expansion-panel-title>
              <v-row no-gutters>
                <v-col cols="12" class="d-flex justify-center">
                  {{ i.title }}
                </v-col>
              </v-row>
            </v-expansion-panel-title>
            <v-expansion-panel-text
              v-for="(aaa, idx2) in i.content"
              :key="idx2"
            >
              <v-row no-gutters>
                <v-col> {{ aaa.position }} {{ aaa.name }} </v-col>
              </v-row>
            </v-expansion-panel-text>
            <v-expansion-panel-text>
              <v-row>
                <v-col cols="12" class="mt-2">
                  <v-btn v-if="isAdmin" @click="openAddPerson(idx)"
                    >사람 추가</v-btn
                  >
                </v-col>
              </v-row>
            </v-expansion-panel-text>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-col>

      <v-col cols="12">
        <v-btn
          v-if="isAdmin"
          class="mb-5"
          color="primary"
          @click="dialog = true"
        >
          부서 추가
        </v-btn>
      </v-col>

      <v-col class="mb-5" cols="12">
        <h2 class="headline font-weight-bold mb-5">지역관리자 추가</h2>
      </v-col>
      <v-col cols="12" v-for="(gugun, i) in sel2" :key="i">
        <div>{{ gugun.place_name }} 정보관리자</div>
      </v-col>
    </v-row>
  </v-container>

  <!-- Dialog Start ************************************************************************ -->
  <!-- Create 부서 Start *********************************** -->
  <div class="text-center">
    <v-dialog
      v-model="dialog"
      width="auto"
      transition="dialog-bottom-transition"
    >
      <v-card>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12" sm="6" md="4">
                <v-text-field
                  v-model="org_name"
                  style="width: 200px"
                  label="부서명*"
                  required
                ></v-text-field>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-row>
            <v-col cols="6">
              <v-btn color="primary" block @click="dialog = false">취소</v-btn>
            </v-col>
            <v-col cols="6">
              <v-btn color="primary" block @click="addOrg">생성</v-btn>
            </v-col>
          </v-row>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
  <!-- Create 부서 End   **************************** -->

  <!-- Create 사람 Start *********************************** -->
  <div class="text-center">
    <v-dialog v-model="person_dialog" width="auto">
      <!-- <template v-slot:activator="{ props }">
        <v-btn color="primary" v-bind="props"> 사람 추가 </v-btn>
      </template> -->
      <v-card>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12" sm="6" md="4">
                <v-text-field
                  v-model="person_position"
                  style="width: 200px"
                  label="직책*"
                  required
                ></v-text-field>
                <v-text-field
                  v-model="person_name"
                  style="width: 200px"
                  label="성명*"
                  required
                ></v-text-field>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-row>
            <v-col cols="6">
              <v-btn color="primary" block @click="person_dialog = false"
                >취소</v-btn
              >
            </v-col>
            <v-col cols="6">
              <v-btn color="primary" block @click="addPerson">생성</v-btn>
            </v-col>
          </v-row>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
  <!-- Create 사람 End   **************************** -->
  <!-- End   ************************************************************************ -->
</template>

<script>
import { sojaeji as soje } from "../DB/sojeji.js";

export default {
  name: "Org",
  components: {},

  data: () => ({
    isAdmin: true,
    dialog: false,
    person_dialog: false,
    person_position: null,
    person_name: null,
    org_num: 0,
    org_name: null,
    orgs: [],
    orgs1: [
      {
        title: "국방부",
        content: [
          {
            position: "장관",
            name: "한민관",
          },
          {
            position: "차관",
            name: "이순신",
          },
        ],
      },
      {
        title: "재정부",
        content: [
          {
            position: "장관",
            name: "김민관",
          },
          {
            position: "차관",
            name: "박순신",
          },
        ],
      },
    ],
    soje: [],
    sel1: [],
    sel2: [],
    sel3: [],
    sel1_one: "",
  }),

  mounted() {
    let depth = this.$route.query.depth[0];
    console.log("Test ........... : ", depth);

    this.$store.commit("setCurrentBarName", "조직도");
    this.soje = soje;

    let shortTerm = this.$route.query.depth[1];
    let gugunTerm = this.$route.query.depth[2];
    let dongTerm = this.$route.query.depth[3];
    if (depth == "r_depth_1") {
      this.gugunview(shortTerm);
    } else if (depth == "r_depth_2") {
      this.dongview(shortTerm, gugunTerm);
    } else if (depth == "r_depth_3") {
      this.centerview(shortTerm, gugunTerm, dongTerm);
    } else if (depth == "r_depth_0") {
      this.sidoview();
    }
    console.log("Get Params from router : ", this.$route.query.id);
    console.log("Organization........... ");
  }, // mounted

  methods: {
    addOrg() {
      let arr = this.orgs;
      arr.push({ title: this.org_name, content: [{}] });
      this.org_name = null;
      this.orgs = arr;
      this.dialog = false;
    },

    openAddPerson(idx) {
      this.person_dialog = true;
      this.org_num = idx;
    },

    addPerson() {
      let idx = this.org_num;
      let arr = this.orgs;
      let right = arr[idx];
      let deepArr = right.content;
      deepArr.push({ position: this.person_position, name: this.person_name });
      this.person_position = null;
      this.person_name = null;
      arr[idx] = right;
      this.orgs = arr;
      this.person_dialog = false;
      console.log("result : ", this.orgs);
    },

    goSubmit() {
      console.log("Go Submit..........");
    },

    sidochange(val) {
      console.log("Sido chagne.........", val);
      this.sel1_one = val;
      this.gugunview(val);
    },

    gugunchange(val) {
      console.log("Gugun chagne.........", val);
      this.dongview(this.sel1_one, val);
    },

    async centerview(sido, gugun, dong) {
      const public_api = import.meta.env.VITE_URL + "/publicPlace/getCenter";
      const raw = await this.axios.get(public_api, {
        params: { r_depth_1: sido, r_depth_2: gugun, r_depth_3: dong}
      });
      console.log("get Dong.... : ", raw.data.data.item);
      let newArr = raw.data.data.item;
      this.sel2 = newArr;
      console.log("Result sel2 : ", newArr);
    },

    async dongview(sido, gugun) {
      const public_api = import.meta.env.VITE_URL + "/publicPlace/getDong";
      const raw = await this.axios.get(public_api, {
        params: { r_depth_1: sido, r_depth_2: gugun}
      });
      console.log("get Dong.... : ", raw.data.data.item);
      let newArr = raw.data.data.item;
      this.sel2 = newArr;
      console.log("Result : ", newArr);
    },

    async gugunview(sido) {
      console.log("sido ; ", sido);
      // let sojae = soje[sido].split(",");
      const public_api = import.meta.env.VITE_URL + "/publicPlace/getGugun";
      const raw = await this.axios.get(public_api, {
        params: { r_depth_1: sido}
      });
      console.log("get gugun.... : ", raw.data.data.item);
      let newArr = raw.data.data.item;
      this.sel2 = newArr;
      console.log("Result : ", newArr);
    },

    async sidoview() {
      const public_api = import.meta.env.VITE_URL + "/publicPlace/getSido";
      const raw = await this.axios.get(public_api);
      console.log("get gugun.... : ", raw.data.data.item);
      let newArr = raw.data.data.item;
      this.sel2 = newArr;
      console.log("Result : ", newArr);
    },
  }, // methods
};
</script>

<style></style>
