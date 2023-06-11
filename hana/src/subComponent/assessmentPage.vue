
<template style="height:fit-content;background-color:#fafafa">
  <div class="tabletView selectDisable" style="overflow:hidden">
    <div style="width:fit-content;height:fit-content;padding-top:6vh;margin-left:auto;margin-right:auto">
      <div style="display:flex;justify-content:flex-start;gap:2vw">

        <div style="display:flex;flex-direction:column;gap:2vh">
          <div class="primarybg" style="width:17vw;height:fit-content;text-align:left">
            <div style="width:90%;padding-left:1vw;">
              <p class="ibn infoMinute" style="text-transform:capitalize;padding-top:3vh;color:whitesmoke">Welcome to the
                insurance assessment</p>
              <p class="ibn" style="color:whitesmoke;padding-bottom:2vh">Complete all questions to the best of your
                ability before submitting. You are not timed.
                <br />Your results will give a comprehensive overview of your needs, helping an insurance agent tailor the
                most appropriate and cost-effective insurance policy for you.
              </p>
            </div>

          </div>
          <div v-if="String(getUser(usID).assignmentArray).split(',').length >= 2"
            style="border-bottom:1px solid gray;width:17vw;height:fit-content;text-align:left">
            <div style="width:90%;padding-left:1vw">
              <p class="ibn infoSection" style="text-transform:capitalize;padding-top:3vh;color:whitesmoke;color:red">Note
              </p>
              <p class="ibn" style=";padding-bottom:2vh">You have an assessment profile saved. Submitting new results will
                overwrite previous results. Purchased policies have profile details saved at that point in time. Changing
                your assessment profile now will not affect past purchased policies' details.</p>
            </div>
          </div>
          <div class="ibn" style="width:17vw;height:fit-content;text-align:left;padding-bottom:2vh">
            <div class="ibn infoMinute second" style="text-align:center;padding-top:2vh">
              <p>Overview</p>
            </div>
            <div v-for="(qn, index) in assessments.sort((a, b) => a.qnNumber - b.qnNumber)" :key="index" style="gap:2vh">
              <p class="pointer" @click="scrollToDiv(qn.qnNumber)" v-if="checkParameter('Qn' + qn.qnNumber)"
                style="color:whitesmoke;padding:0px 1vw 0px 1vw;background-color:rgba(0, 128, 0, 0.8)">Question {{
                  qn.qnNumber }}</p>
              <p class="pointer" @click="scrollToDiv(qn.qnNumber)" v-else
                style="color:whitesmoke;background-color:rosybrown;padding:0px 1vw 0px 1vw;">Question {{ qn.qnNumber }}
              </p>


            </div>
            <button v-on:click="submitResponse(usID), go('/Profile')" class="brMobile mh" style="width:100%"
              :disabled="!complete" :style="{ backgroundColor: complete ? '' : 'gainsboro' }">Submit</button>

          </div>


        </div>





        <div style="width:50vw;height:fit-content;display:flex;flex-direction: column;gap:2vh">

          <div style="height:fit-content;padding-bottom:6vh">
            <div v-for="(qn, index) in assessments.sort((a, b) => a.qnNumber - b.qnNumber)" :key="index">
              <div :id="qn.qnNumber" class="primary"
                style="padding-left:2vw;padding-top:2vh;display:flex;flex-direction:column;background-color:#Fafafa;border-bottom:1px solid gray;width:80%;margin-left:auto;margin-right:auto;height:fit-content">

                <p class="ibn infoMinute" style="width:80%"><span class="second">{{ index + 1 }}. </span>{{ qn.qnDesc }}</p>
                <div style="padding-bottom:2vh">
                  <div style="display:flex;flex-direction:column"
                    v-for="(option, optionIndex) in delimiterConvert(qn.qnOptions_SC_Delimiter)" :key="optionIndex">
                    <input @click="updateDetails(), scanComplete()" :name="qn.qnNumber" type="radio"
                      :id="'Qn' + qn.qnNumber + '_' + optionIndex" style="display:none">
                    <label :for="'Qn' + qn.qnNumber + '_' + optionIndex" class="ibn second option nw"
                      style="width:90%;;padding:.5vh .5vw .5vh .5vw">{{ option }}</label>
                  </div>
                </div>
              </div>
            </div>


          </div>

        </div>
      </div>

    </div>

  </div>
  <div class="mobileView">
    <div style="width:100vw;padding-top:6vh">
      <div style="width:100vw;height:fit-content;text-align:left">
        <div class="sd primarybg" style="width:95%;margin-left:auto;margin-right:auto;border-radius:4px;padding-left:1vw">
          <p class="ibn infoMinute" style="text-transform:capitalize;padding-top:3vh;color:whitesmoke">Welcome to the
            insurance assessment</p>
          <p class="ibn" style="color:whitesmoke;padding-bottom:2vh">Complete all questions to the best of your ability
            before submitting. You are not timed.
            <br />Your results will give a comprehensive overview of your needs, helping an insurance agent tailor the
            most appropriate and cost-effective insurance policy for you.
          </p>
        </div>


      </div>
      <div
        style="text-align:center;border-radius:4px;overflow:hidden;width:95%;height:fit-content;display:flex;flex-direction:column;margin-left:auto;margin-right:auto;background-color:#fafafa">
        <p class="ibn infoSection primary" style="height:min-content">Overview</p>
        <div class="primarybg" style="width:100%;height:4vh;display:flex;justify-content:center"
          v-on:click="toggleOverviewDisplay()">
          {{ assessmentArray }}
          <p class="infoMinute" style="color:white;"><i class="fa-solid fa-chevron-down"></i></p>
        </div>
      </div>
      <div style="width:95%;margin-left:auto;margin-right:auto;height:fit-content;margin-bottom:2vh;padding-top:2vh"
        :style="{ display: visibleOverview }">
        <div class="ibn" style="width:100%;height:fit-content;text-align:left;padding-bottom:2vh">
          <div v-for="(qn, index) in assessments.sort((a, b) => a.qnNumber - b.qnNumber)" :key="index" style="gap:2vh">
            <p class="pointer" @click="scrollToDiv(qn.qnNumber)" v-if="checkParameter('Qn' + qn.qnNumber)"
              style="color:whitesmoke;padding:0px 1vw 0px 1vw;background-color:rgba(0, 128, 0, 0.8)">Question {{
                qn.qnNumber }}</p>
            <p class="pointer" @click="scrollToDiv(qn.qnNumber)" v-else
              style="color:whitesmoke;background-color:rosybrown;padding:0px 1vw 0px 1vw;">Question {{ qn.qnNumber }}</p>


          </div>

        </div>
      </div>

      <div
        style="width:100vw;margin-left:auto;margin-right:auto;height:fit-content;display:flex;flex-direction: column;gap:2vh">

        <div style="height:fit-content;padding-bottom:6vh">
          <div v-for="(qn, index) in assessments.sort((a, b) => a.qnNumber - b.qnNumber)" :key="index">
            <div :id="qn.qnNumber" class="primary"
              style="padding-left:2vw;padding-top:2vh;display:flex;flex-direction:column;background-color:#Fafafa;border-bottom:1px solid gray;margin-left:auto;margin-right:auto;height:fit-content">

              <p class="ibn infoMinute"><span class="second">{{ index + 1 }}. </span>{{ qn.qnDesc }}</p>
              <div style="padding-bottom:2vh">
                <div style="display:flex"
                  v-for="(option, optionIndex) in delimiterConvert(qn.qnOptions_SC_Delimiter)" :key="optionIndex">
                  <input @click="updateDetails(), scanComplete()" :name="qn.qnNumber" type="radio"
                    :id="'Qn' + qn.qnNumber + '_' + optionIndex" style="display:none">
                  <label :for="'Qn' + qn.qnNumber + '_' + optionIndex" class="ibn second option nw"
                    style="width:90%;;padding:.5vh .5vw .5vh .5vw">{{ option }}</label>
                </div>
              </div>
            </div>
          </div>


        </div>

      </div>
    </div>

  </div>
</template>
  
<script>
import { getFirestore, onSnapshot, collection, query, updateDoc, doc } from 'firebase/firestore';
import { onAuthStateChanged, getAuth } from '@firebase/auth';
import { ref, onUnmounted, onMounted } from 'vue';
import { app } from '@/configs.js';

const db = getFirestore(app);


function scrollToDiv(divId) {
  const element = document.getElementById(divId);

  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}

export default {
  name: 'assessmentPage',
  data() {
    return {
      users: ref([]),
      assessments: ref([]),
      assessmentArray: [],
      complete: false,
      visibleOverview: 'none'

    }
  },
  methods: {
    delimiterConvert(dl) {
      let arr = String(dl).split(";")
      return arr
    },
    checkParameter(value) {
      const regex = new RegExp(`^${value}_`);
      return this.assessmentArray.some(item => regex.test(item));
    },

    scanComplete() {
      this.complete = true;
      for (let i = 0; i < this.assessments.length; i++) {
        if (!this.checkParameter('Qn' + this.assessments[i].qnNumber)) {
          this.complete = false;
        }
      }
    },
    toggleOverviewDisplay() {
      this.visibleOverview = this.visibleOverview == 'none' ? 'block' : 'none';
    },

    updateDetails() {
      this.assessmentArray = [];
      const assessmentAnswers = document.querySelectorAll('input[type="radio"]:checked');
      assessmentAnswers.forEach((button) => {
        this.assessmentArray.push(button.id);
      })
    },

    submitResponse(usid) {
      var user = this.users.find(u => u.userID === usid);
      if (user !== undefined) {
        updateDoc(doc(db, 'omniumISSUsers', user.id), {
          assignmentArray: this.assessmentArray
        })
      }
      else {
        console.log("User not found")
      }


    },

    getUser(uid) {
      const user = (this.users.find(u => u.userID === uid))
      return Object(user);
    },
    go(val) {
      this.$router.push({ path: val })
    },






  },
  computed: {

  },
  mounted() {
    const assessmentQuery = query(collection(db, 'omniumAssessment'));
    const liveQns = onSnapshot(assessmentQuery, (snapshot) => {
      this.assessments = snapshot.docs.map((doc) => {
        return {
          id: doc.id,
          qnDesc: doc.data().qnDesc,
          qnNumber: doc.data().qnNumber,
          qnOptions_SC_Delimiter: doc.data().qnOptions_SC_Delimiter
        }
      })
    })

    const userQuery = query(collection(db, "omniumISSUsers"));
    const liveOISSUsers = onSnapshot(userQuery, (snapshot) => {
      this.users = snapshot.docs.map((doc) => {
        return {
          id: doc.id,
          userID: doc.data().userID,
          username: doc.data().username,
          gender: doc.data().gender,
          age: doc.data().age,
          assignmentArray: doc.data().assignmentArray,
          from: doc.data().from,
          occupation: doc.data().occupation,
          emailRef: doc.data().emailRef,
          userType: doc.data().userType,

        }
      });
    })
    onUnmounted(liveOISSUsers, liveQns)
  }

}




</script>
  
  
<script setup>
var usID = ref('');
var usEmail = ref('');
let auth;
const isLoggedin = ref(false);
onMounted(() => {
  auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {

      isLoggedin.value = true;
      usID.value = user.uid;
      usEmail.value = user.email;

    }
    else {
      isLoggedin.value = false;
    }
    return {
      usID
    }
  })
})

</script>

  
<style scoped>
.option:hover {
  background-color: rgba(128, 128, 128, 0.3);
  transition: all .2s;
  cursor: pointer;
  color: #13131A;
}


* {
  scrollbar-width: auto;
  scrollbar-color: #d6d6d6 #ffffff;
}

/* Chrome, Edge, and Safari */
*::-webkit-scrollbar {
  width: 11px;
}

*::-webkit-scrollbar-track {
  background: #ffffff;
}

*::-webkit-scrollbar-thumb {
  background-color: #d6d6d6;
  border-radius: 4px;
  border: 3px none #ffffff;
}

input[type="radio"]:checked+label {
  background-color: gray;
  color: white;
}
</style>