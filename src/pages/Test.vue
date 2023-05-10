<template>
  <v-container>
    <v-row class="text-center">
      <v-col class="mb-5" cols="12">
        <h2 class="headline font-weight-bold mb-5">Test</h2>
        <v-btn @click="goBack">Back</v-btn>

        <!-- <v-time-picker
          v-model="picker"
          ampm-in-title
        ></v-time-picker> -->
        <Timepicker
          v-model="picker"
          
          ampm-in-title
        ></Timepicker>
        <v-btn @click="setMyAlarm">click</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { ref } from 'vue'
import Timepicker from 'vue3-timepicker'
import 'vue3-timepicker/dist/VueTimepicker.css'

export default {
  name: "Test",
  components: {
    Timepicker,
  },

  data: () => ({
    picker: null, 
  }),

  watch: {
    // picker(val) {
    //   console.log('Pick : ', val)
    // }
  },


  mounted() {}, // mounted

  methods: {
    goBack() {
      this.$router.push('/')
    },  

    setMyAlarm() {
      // 1. 전화번호
      // 2. 하루전 메세지 전송 
      
      class userAlarm {
        constructor(hours, minutes, seconds) {
          this.hours = hours;
          this.minutes = minutes;
          this.seconds = seconds;
        }

        alarm() {
          let x = {
            hours: this.hours,
            minutes: this.minutes,
            seconds: this.seconds,
          };

          let dtAlarm = new Date();
          dtAlarm.setHours(x.hours);
          dtAlarm.setMinutes(x.minutes);
          dtAlarm.setSeconds(x.seconds);
          let dtNow = new Date();

          if (dtAlarm - dtNow > 0) {
            console.log("Later today, no changes needed!");
          } else {
            console.log("Tomorrow, changing date to tomorrow");
            dtAlarm.setDate(dtAlarm.getDate() + 1);
          }

          let diff = dtAlarm - new Date();
          setTimeout(function () {
            alert("Hello");
          }, diff);
        }
      }

      const myTime = this.picker
      const h = myTime.HH
      const min = myTime.mm 
      console.log(`hour : ${h} , min : ${min}`)


      let myAlarm = new userAlarm(h,min,0);
      let setAlarm = myAlarm.alarm()
      // let myAlarm2 = new userAlarm(17,20,5);
      // let setAlarm2 = myAlarm2.alarm()
      // console.log("my car : ", myAlarm);
    },
  }, // methods
};
</script>

<style></style>
