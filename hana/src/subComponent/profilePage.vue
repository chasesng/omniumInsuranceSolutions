<template>
  <div class="tabletView" style="overflow:hidden">

    <div style="width:100vw;height:fit-content;padding-bottom:10vh;padding-top:3vh;text-align:center">
      <div
        style="display:flex;flex-direction:column-reverse;height:20vh;text-align:center;border-bottom:4px solid #585858;background-image:url('https://images.pexels.com/photos/16062274/pexels-photo-16062274/free-photo-of-people-art-summer-abstract.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2');background-size:cover;background-position:center">

      </div>
      <div
        style="width:100vw;height:10vh;margin-left:auto;border-radius:4px;display: flex;padding-left:1vw;padding-right:2vw;justify-content:space-between">
        <div id="image" style="height:240px;width:240px;background-color:rgba(211, 211, 211, 0.5);border-radius:50%;margin-top:2vh">
        </div>
       
        <p class="ibn infoSection second">Welcome Back, {{ returnUserObject(usID).username }}</p>
        <div class="holdTab selectDisable" style="display:flex;width:fit-content;gap:.5vw">
          <p class="mh" style="width:fit-content" v-on:click="viewPane('Active Policies'), updatePane(0)">Your
            Policies</p>
          <p class="mh" style="width:fit-content" v-on:click="viewPane('Assessment Profile'), updatePane(1)">Assessment
            Profile</p>
          <p class="mh" style="width:fit-content" v-on:click="viewPane('Profile'), updatePane(2), updateProfile(usID)">Edit Profile</p>
          <p class="mh" style="width:fit-content;background-color:lightgray;color:#585858;margin-left:6vw"
            v-on:click="handleSignOut(), go('/')">Sign Out</p>
        </div>



      </div>
      <div style="height:fit-content">
        <div style="padding-left:1vw;padding-top:1vh;text-align:left">
          <p class="ibn infoHeader primary" style="text-transform:capitalize;padding-left:2vw">{{ currentPaneText }}</p>
        </div>
        <div class="selectDisable" v-if="currentPane === 0 && String(returnPoliciesByUSID(usID)).length === 0" style="width:100vw;height:60vh;padding-top:2vh;display:flex;flex-direction:column;overflow-y:scroll;border-bottom:1px solid gray">
          <p class="ibn infoMinute primary" >You have no purchased policies...</p>
          <p class="ibn second">View policies offered by major insurance brands in Singapore and breeze through the process of getting insured like never before!</p>
          <button style="margin-left:auto;margin-right:auto;width:fit-content;padding:1vh 1vw 1vh 1vw" v-on:click="go('/Policies')" class="brMobile mh">View Policies</button>

        </div>
        <div class="selectDisable" v-if="currentPane === 0 && String(returnPoliciesByUSID(usID)).length != 0" style="width:100vw;height:fit-content;padding-top:2vh;border-bottom:1px solid gray;display:flex;flex-direction: column;gap:2vh">
          <div v-for="(i, index) in returnPoliciesByUSID(usID)" :key="index">
            <div class="sd"
              style="text-align:left;overflow:hidden;width:90vw;height:fit-content;margin-bottom:2vh;border-radius:4px;margin-left:auto;margin-right:auto;display:flex;flex-direction:column;border-top:1px solid rgba(128, 128, 128, 0.3);padding-top:1vh">
              <div style="display:flex;flex-direction:column;line-height:.7"> 
                <p style="padding-left:2vw" class="ibn second">{{ getPolicyData(i.policyID).type }}</p>
                <p style="padding-left:2vw" class="ibn infoSection primary">{{ getPolicyData(i.policyID).name }}<img :src="returnLogo(getPolicyData(i.policyID).provider)" style="margin-left:1vw;width:24px;height:24px;"/> </p>

              </div>

              <div style="width:100%;display:flex;height:100%">
                <div style="display: flex;width:100%; flex-direction: column;line-height:.8;overflow:hidden">

                  <div style="display:flex;width:100%;gap:1vw">
                    <p class="ibn second" style="width:20%;text-align:right;padding-left:1vw">
                      Purchase Date</p>
                    <p class="ibn primary">{{ i.purchaseDate }}</p>

                  </div>
                  <div style="display:flex;width:100%;gap:1vw">
                    <p class="ibn second" style="width:20%;text-align:right;padding-left:1vw">
                      Effective From</p>
                    <p class="ibn primary">{{ i.effectiveDate }}</p>

                  </div>
                  <div style="display:flex;width:100%;gap:1vw">
                    <p class="ibn second" style="width:20%;text-align:right;padding-left:1vw">
                      Effective Until</p>
                    <p class="ibn primary">{{ i.expirationDate }}</p>

                  </div>
                  <div style="display:flex;width:100%;gap:1vw;padding-bottom:2vh">
                    <p class="ibn second" style="width:20%;text-align:right;padding-left:1vw">
                      Coverage Duration</p>
                    <p class="ibn primary">{{ getDuration(i.effectiveDate, i.expirationDate).days }}d</p>

                  </div>

                </div>

                <div style="width:50%;display:flex;justify-content:right;align-items:flex-end;gap:10vw">

                  <router-link :to="'/Details/' + i.id" class="brMobile mh"
                    style="color:whitesmoke;outline:none;border-bottom-right-radius: 0px;border-bottom-left-radius: 0px;text-decoration:none;padding-top:.5em">More
                    Details</router-link>
                </div>
              </div>



              <div class="primarybg" style="width:100%;height:1vh"></div>

            </div>

          </div>

        </div>
        <div class="selectDisable" v-if="currentPane === 1" style="width:100vw;height:60vh;padding-top:2vh;border-bottom:1px solid gray">
          <div v-if="String(getUser(usID).assignmentArray).split(',').length != 16" style="display:flex;flex-direction:column;justify-content:center">
            <p class="ibn infoMinute primary" >You have no assessment results saved to your profile yet...</p>
            <p class="ibn second">Completing the assessment helps expedite your insurance processes, helping advisors get a clearer picture of your needs before connecting with you.</p>
            <button style="margin-left:auto;margin-right:auto;width:fit-content;padding:1vh 1vw 1vh 1vw" v-on:click="go('/Assessment')" class="brMobile mh">Complete the Assessment</button>
          </div>
          <div v-if="String(getUser(usID).assignmentArray).split(',').length >=2 " style="width:80vw;margin-left:auto;margin-right:auto;height:fit-content;text-align:right">
            <p class="dividerLabel pointer" style="padding-left:.5vw;padding-right:.5vw" @click="go('/Assessment')">Update Assessment Profile</p>
          </div>
          <div v-if="String(getUser(usID).assignmentArray).split(',').length >=2 " class="sd" style="overflow-y:scroll;background-color:#fafafa;border-radius:4px;padding-left:2vw;padding-top:2vh;border-top:1vh solid #5f545e;width:fit-content;height:50vh;overflow-y:scroll;margin-left:auto;margin-right:auto;">
          <div>
            <div v-for="(i, index) in getUser(usID).assignmentArray" :key="index">
              <div style="width:80vw;height:fit-content;line-height:.8;border-bottom:1px solid gray;padding-bottom:2vh;padding-top:2vh;text-align:left;background-color:#fafafa;display:flex;flex-direction:column">
                <p class="ibn primary" >{{ returnQnandResponse(i)[0] }}</p>
                <p class="ibn second">{{ returnQnandResponse(i)[1] }}</p>
              </div>
              
            </div>

          </div>
        </div>

        </div>
        <div class="selectDisable" v-if="currentPane === 2" style="width:100vw;height:60vh;padding-top:2vh;overflow-y:scroll;border-bottom:1px solid gray;">
          <div style="width:95vw;margin-left:auto;margin-right:auto;height:100%;display:flex;justify-content: space-between;">
            <div style="width:30%;display:flex;flex-direction:column;gap:2vh">
            <!-- <div style="display:flex;gap:2vw">
              <label style="width:40%;text-align:right">NRIC</label>
              <input style="width:60%" class="inpClear" type="text" v-model="nric" :disabled="true"/>
            </div> -->

            <div style="display:flex;gap:2vw">
              <label style="width:40%;text-align:right">Username</label>
              <input style="width:60%" class="inpClear" type="text" v-model="username"/>
            </div>
            <div style="display:flex;gap:2vw">
              <label style="width:40%;text-align:right">Date Of Birth</label>
              <input style="width:60%" class="inpClear" type="date" v-model="dateOfBirth" :disabled="true"/>
            </div>
            <div style="display:flex;gap:2vw">
              <label style="width:40%;text-align:right">Email</label>
              <input style="width:60%" class="inpClear" type="email" v-model="email" :disabled="true"/>
            </div>
            <div style="display:flex;gap:2vw">
              <label style="width:40%;text-align:right;color:red">Profile Permissions (BETA)</label>
              <select class="inpClear" style="width:60%;height:4vh;" v-model="userType">
                <option value="User">User</option>
                <option value="Advisor">Advisor</option>
              </select>
            </div>
            <div style="text-align:right">
              <button style="padding:1vh 1vw 1vh 1vw;width:fit-content;height:fit-content" class="brMobile mh" v-on:click="updateUsername(usID)">Update Profile</button>
            </div>

            <p v-if="errMsg" class="animate__animated animate__fadeIn" style="animation-duration:.3s;text-align:right;color:red">{{ errMsg }}</p>
          </div>
          <div style="width:60%;padding-top:3vh;display:flex;flex-direction:column;background-image:url('https://images.pexels.com/photos/16904262/pexels-photo-16904262/free-photo-of-hot-air-balloons-in-sky.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2');height:29vh;background-size:cover;background-position:0% 60%">
            <p class="ibn infoHeader" style="color:whitesmoke;background-color:rgba(0, 0, 0, 0.3)">Omnium Insurance Solutions Singapore</p>
          </div>

            
          </div>
        
        </div>

      </div>

    </div>

  </div>


  <div class="mobileView">
    <div style="width:100vw;height:fit-content;padding-top:5vh">
      <div id="polSection">
      <div
        style="display:flex;flex-direction:column-reverse;height:10vh;text-align:center;border-bottom:4px solid #585858;background-image:url('https://images.pexels.com/photos/16062274/pexels-photo-16062274/free-photo-of-people-art-summer-abstract.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2');background-size:cover;background-position:center">
      </div>
      <p class="ibn infoSection" style="color:whitesmoke;background-color: #5f545e;padding-left:1vw">Welcome Back, {{ returnUserObject(usID).username }}</p>

      <div style="width:100%;height:fit-content">
        <div style="padding-left:1vw;padding-top:1vh;text-align:left">
          <p class="ibn infoHeader primary" style="text-transform:capitalize;padding-left:2vw">Active Policies</p>
        </div>
        <div class="selectDisable" v-if="String(returnPoliciesByUSID(usID)).length === 0" style="width:90vw;margin-left:auto;margin-right:auto;height:40vh;padding-top:2vh;display:flex;flex-direction:column;overflow-y:scroll;border-bottom:1px solid gray;padding-bottom:1vh">
          <p class="ibn infoMinute primary" >You have no purchased policies...</p>
          <p class="ibn second">View policies offered by major insurance brands in Singapore and breeze through the process of getting insured like never before!</p>
          <button style="margin-left:auto;margin-right:auto;width:fit-content;width:180px;padding:1vh 1vw 1vh 1vw" v-on:click="go('/Policies')" class="brMobile mh">View Policies</button>

        </div>
        <div class="selectDisable" v-if="String(returnPoliciesByUSID(usID)).length != 0" style="width:100vw;height:50vh;padding-top:2vh;overflow-y:scroll;border-bottom:1px solid gray;display:flex;flex-direction: column;gap:2vh;margin-bottom:6vh">
          <div v-for="(i, index) in returnPoliciesByUSID(usID)" :key="index">
            <router-link :to="'/Details/' + i.id" class="sd"
              style="text-decoration:none;color:inherit;text-align:left;overflow:hidden;width:90vw;height:fit-content;margin-bottom:2vh;;margin-left:auto;margin-right:auto;display:flex;flex-direction:column;border-top:1px solid rgba(128, 128, 128, 0.3);padding-top:1vh">
              <div style="display:flex;flex-direction:column;line-height:.7"> 
                <p style="padding-left:2vw" class="ibn second">{{ getPolicyData(i.policyID).type }}</p>
                <p style="padding-left:2vw" class="ibn infoSection primary"><img :src="returnLogo(getPolicyData(i.policyID).provider)" style="margin-right:10vw;width:24px;height:24px;"/><span style="padding-top:1vh">{{ getPolicyData(i.policyID).name }}</span> </p>

              </div>

              <div style="width:90vw;display:flex;height:100%">
                <div style="display: flex;width:100%; flex-direction: column;line-height:.8;overflow:hidden">

                  <div style="display:flex;width:100%;gap:1vw">
                    <p class="ibn second" style="width:50%;text-align:right;padding-left:1vw">
                      Purchase Date</p>
                    <p style="width:50%;text-align:left;padding-left:6vw" class="ibn primary">{{ i.purchaseDate }}</p>

                  </div>
                  <div style="display:flex;width:100%;gap:1vw">
                    <p class="ibn second" style="width:50%;text-align:right;padding-left:1vw">
                      Effective From</p>
                    <p style="width:50%;text-align:left;padding-left:6vw" class="ibn primary">{{ i.effectiveDate }}</p>

                  </div>
                  <div style="display:flex;width:100%;gap:1vw">
                    <p class="ibn second" style="width:50%;text-align:right;padding-left:1vw">
                      Effective Until</p>
                    <p style="width:50%;text-align:left;padding-left:6vw" class="ibn primary">{{ i.expirationDate }}</p>

                  </div>
                  <div style="display:flex;width:100%;gap:1vw;padding-bottom:2vh">
                    <p class="ibn second" style="width:50%;text-align:right;padding-left:1vw">
                      Coverage Duration</p>
                    <p style="width:50%;text-align:left;padding-left:6vw" class="ibn primary">{{ getDuration(i.effectiveDate, i.expirationDate).days }}d</p>

                  </div>

                </div>

               
              </div>



              <div class="primarybg" style="width:100%;height:1vh"></div>

            </router-link>

          </div>

        </div>
      
      </div>
    </div>
    <div style="width:100vw;height:fit-content;margin-bottom:6vh">
      <div style="padding-left:1vw;padding-top:1vh;text-align:left">
          <p class="ibn infoHeader primary" style="text-transform:capitalize;padding-left:2vw;padding-top:2vh">Insurance Assessment</p>
        </div>

        <div class="selectDisable" style="width:100vw;height:fit-content;padding-top:2vh;padding-bottom:1vh">
          <div v-if="String(getUser(usID).assignmentArray).split(',').length != 16" style="display:flex;flex-direction:column;justify-content:center;text-align:left;padding-left:2vw">
            <p class="ibn infoMinute primary" >You have no assessment results saved to your profile yet...</p>
            <p class="ibn second">Completing the assessment helps expedite your insurance processes, helping advisors get a clearer picture of your needs before connecting with you.</p>
            <button style="margin-right:auto;width:180px;padding:1vh 1vw 1vh 1vw" v-on:click="go('/Assessment')" class="brMobile mh">Complete the Assessment</button>
          </div>
          <div v-if="String(getUser(usID).assignmentArray).split(',').length >=2 " style="width:90vw;margin-left:auto;margin-right:auto;height:fit-content;text-align:right">
            <p class="dividerLabel pointer" style="padding-left:.5vw;padding-right:.5vw" @click="go('/Assessment')">Update Assessment Profile</p>
          </div>
          <div v-if="String(getUser(usID).assignmentArray).split(',').length >=2 " class="sd" style="background-color:#fafafa;;padding-left:2vw;padding-top:2vh;border-top:1vh solid #5f545e;width:fit-content;height:50vh;margin-bottom:6vh;overflow-y:scroll;margin-left:auto;margin-right:auto;">
          <div>
            <div v-for="(i, index) in getUser(usID).assignmentArray" :key="index">
              <div style="width:90vw;height:fit-content;line-height:.8;border-bottom:1px solid gray;padding-bottom:2vh;padding-top:2vh;text-align:left;background-color:#fafafa;display:flex;flex-direction:column">
                <p class="ibn primary" >{{ returnQnandResponse(i)[0] }}</p>
                <p class="ibn second">{{ returnQnandResponse(i)[1] }}</p>
              </div>
              
            </div>

          </div>
        </div>

        </div>
    </div>



    <div style="width:100vw;min-height:40vh;height:fit-content">
      <div style="padding-left:1vw;padding-top:1vh;text-align:left">
          <p class="ibn infoHeader primary" style="text-transform:capitalize;padding-left:2vw;padding-top:2vh">Update Profile</p>
        </div>
        <div style="display:flex;justify-content: left;padding-left:2vw;width:100vw;padding-top:2vh">
          <button  class="brMobile mh" v-on:click="toggleVisible();updateProfile(usID)" style="width:180px;padding:1vh 1vw 1vh 1vw">Edit Profile</button>

        </div>

        <div :style="{display: editProfileVisibile}" class="selectDisable animate__animated animate__fadeInDown" style="overflow:hidden;animation-duration:.3s;width:100vw;height:fit-content;padding-top:2vh;overflow-y:scroll;border-bottom:1px solid gray;padding-bottom:1vh">
          <div style="width:95vw;margin-left:auto;margin-right:auto;height:100%;display:flex;justify-content: space-between;">
            <div style="width:90%;display:flex;flex-direction:column;gap:2vh">
            <!-- <div style="display:flex;gap:2vw">
              <label style="width:40%;text-align:right">NRIC</label>
              <input style="width:60%" class="inpClear" type="text" v-model="nric" :disabled="true"/>
            </div> -->

            <div style="display:flex;gap:2vw">
              <label style="width:40%;text-align:right">Username</label>
              <input style="width:60%" class="inpClear" type="text" v-model="username"/>
            </div>
            <div style="display:flex;gap:2vw">
              <label style="width:40%;text-align:right">Date Of Birth</label>
              <input style="width:60%" class="inpClear" type="date" v-model="dateOfBirth" :disabled="true"/>
            </div>
            <div style="display:flex;gap:2vw">
              <label style="width:40%;text-align:right">Email</label>
              <input style="width:60%" class="inpClear" type="email" v-model="email" :disabled="true"/>
            </div>
            <div style="display:flex;gap:2vw">
              <label style="width:40%;text-align:right;color:red">Profile Permissions</label>
              <select class="inpClear" style="width:60%;height:4vh;" v-model="userType">
                <option value="User">User</option>
                <option value="Admin">Admin</option>
              </select>
            </div>
            <div style="text-align:right">
              <button style="padding:1vh 1vw 1vh 1vw;width:180px;height:fit-content;padding:1vh 1vw 1vh 1vw;color:#5f545e" class="mh secondbg" v-on:click="updateUsername(usID)">Update</button>
            </div>
            <div style="height:6vh">
              <p v-if="errMsg" class="animate__animated animate__fadeIn" style="animation-duration:.3s;text-align:right;color:red">{{ errMsg }}</p>

            </div>
          </div>

            
          </div>
        
        </div>
    </div>

    <div style="width:100vw;display:flex;justify-content:center;height:fit-content">
        <button class="secondbg mh wt" v-on:click="handleSignOut(), go('/')" style="width:100vw;height:fit-content;padding:1vh 0px 1vh 0px;color:#5f545e">Sign Out</button>
    </div>


    </div>

  </div>
</template>

<script>
import { getFirestore, onSnapshot, collection, query, updateDoc, doc } from 'firebase/firestore';
import { onAuthStateChanged, getAuth, signOut } from '@firebase/auth';
import { ref, onUnmounted, onMounted } from 'vue';
import { app, returnLogo } from '@/configs.js';

const db = getFirestore(app);

export default {
  name: 'indexPage',
  data() {
    return {
      users: ref([]),
      policies: ref([]),
      completedPolicies: ref([]),
      assessments: ref([]),
      currentPaneText: 'Active Policies',
      currentPane: 0,
      username: ref(''),
      email: ref(''),
      dateOfBirth: ref(''),
      nric: ref(''),
      userType: ref(''),
      errMsg: ref(''),
      userProf: ref(''),
      editProfileVisibile: 'none',
      selectedFile: null

    }
  },
  methods: {
    returnUserObject(uid) {
      return Object(this.users.find(u => u.userID === uid))
    },
    onFileSelected(event) {
      this.selectedFile = event.target.files[0]
      updateDoc(doc(db, 'omniumISSUsers', this.returnUserObject(this.usID).id), {
          profilePicture: this.selectedFile
        })
    },
    go(val) {
      this.$router.push({ path: val })
    },
    viewPane(text) {
      this.currentPaneText = text
    },
    updatePane(i) {
      this.currentPane = i
    },
    returnPolicies(usID) {
      let userPolicies = Object(this.users.find(u => u.userID === usID)).purchasedPolicies;
      const matchedObjects = this.findMatchingObjects(userPolicies, this.policies);
      return matchedObjects
    },

    findMatchingObjects(array1, array2) { //comparing completedPolicies array and omniumISSUsers array, this is to return all completedPolicies under omniumISSUsers purchasedPolicies
      //array1 holds all completedPolicies, array2 is user's specific purchasedPolicies
      const matchingObjects = [];
      array1.forEach((item) => {
        const matchingObject = array2.find((obj) => obj === item.id);
        if (matchingObject) {
          matchingObjects.push(item);
        }
      });

      return matchingObjects;
    },

    getPolicyData(policyID) {
      const pol = this.policies.find(p => p.id === policyID);
      return Object(pol)
    },

    getDuration(startDate, endDate) {
      const start = new Date(startDate);
      const end = new Date(endDate);

      const duration = Math.abs(end - start);

      // Convert the duration to days, hours, minutes, and seconds
      const days = Math.floor(duration / (24 * 60 * 60 * 1000));

      return {
        days,
      };
    },
    returnPoliciesByUSID(uid) {
      const docID = this.users.find(u => u.userID === uid)?.id;
      return this.completedPolicies.filter(c => c.buyerID === docID);
    },

    getUser(uid) {
      const user = this.users.find(u => u.userID === uid);
      return Object.assign({}, user)
    },

    returnQuestionObj(qnNumber) {
      const questionObject = Object(this.assessments.find(a => a.qnNumber == qnNumber));
      return questionObject
    },
    returnQnandResponse(qnItem) { //parameter takes in Qn1_0 etc
      let split = qnItem.split('_')
      var cleanedFirst = split[0].replace('Qn', ''); //returns question number
      let qnDesc = Object(this.returnQuestionObj(cleanedFirst)).qnDesc
      let qnResponse = Object(this.returnQuestionObj(cleanedFirst)).qnOptions_SC_Delimiter;
      let qnResponseArr = String(qnResponse).split(';')[split[1]]
      let qnandAnswer = [qnDesc, qnResponseArr]

      return qnandAnswer;

    },

    updateProfile(uid) {
      let user = Object(this.users.find(u => u.userID === uid));
      this.username = user.username
      this.email = user.emailRef,
      this.dateOfBirth = user.dateOfBirth,
      this.nric = user.nric,
      this.userType = user.userType

    },
    updateUsername(uid) {
      var user = Object(this.users.find(u => u.userID === uid));
      if (this.username.length >= 5) {
        updateDoc(doc(db, 'omniumISSUsers', user.id), {
          username: this.username,
          userType: this.userType
        })
        this.errMsg = 'Profile Updated'
      }
      else {
        this.errMsg = "Username must be at least 5 characters long"
        console.log('New username is too short')
      }
      setTimeout(() => {
        this.errMsg = '';
      }, 2000);
    },

    toggleVisible() {
      this.editProfileVisibile = this.editProfileVisibile === 'none' ? 'block' : 'none';

    }




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

    const completedPoliciesQuery = query(collection(db, 'completedPolicies'));
    const liveCPQ = onSnapshot(completedPoliciesQuery, (snapshot) => {
      this.completedPolicies = snapshot.docs.map((doc) => {
        return {
          id: doc.id,
          policyID: doc.data().policyID,
          policyTerm: doc.data().policyTerm,
          premiumAmount: doc.data().premiumAmount,
          agentID: doc.data().agentID,
          buyerID: doc.data().buyerID,
          deductibleValue: doc.data().deductibleValue,
          effectiveDate: doc.data().effectiveDate,
          expirationDate: doc.data().expirationDate,
          policyEndorsements: doc.data().policyEndorsements,
          policyExclusions: doc.data().policyExclusions,
          purchaseDate: doc.data().purchaseDate


        }


      })
    })

    const policyQuery = query(collection(db, 'policiesOfISS'));
    const livePolicies = onSnapshot(policyQuery, (snapshot) => {
      this.policies = snapshot.docs.map((doc) => {
        return {
          id: doc.id,
          coverageDetails: doc.data().policy_CoverageDetails,
          duration: doc.data().policy_Duration,
          issueAge: doc.data().policy_IssueAge,
          name: doc.data().policy_Name,
          registeredNumber: doc.data().policy_Number,
          periodType: doc.data().policy_Period,
          policyPremium: doc.data().policy_Premium,
          provider: doc.data().policy_Provider,
          sumInsured: doc.data().policy_SumInsured,
          policyTNC: doc.data().policy_TermsAndConditions,
          type: doc.data().policy_Type,
          policyFrequency: doc.data().premium_Frequency
        }


      })
    })

    const userQuery = query(collection(db, "omniumISSUsers"));
    const liveOISSUsers = onSnapshot(userQuery, (snapshot) => {
      this.users = snapshot.docs.map((doc) => {
        return {
          id: doc.id,
          nric: doc.data().nric,
          userID: doc.data().userID,
          username: doc.data().username,
          gender: doc.data().gender,
          dateOfBirth: doc.data().dateOfBirth,
          assignmentArray: doc.data().assignmentArray,
          from: doc.data().from,
          occupation: doc.data().occupation,
          emailRef: doc.data().emailRef,
          userType: doc.data().userType,
          purchasedPolicies: doc.data().purchasedPolicies,
          profilePicture: doc.data().profilePicture

        }
      });
    })
    onUnmounted(liveQns, liveCPQ, livePolicies, liveOISSUsers)
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

const handleSignOut = () => {
  signOut(auth).then(() => {
    this.$router.push('/')
  });
}

</script>



<style>
div::-webkit-scrollbar {
  width: 0 !important;
}
</style>

<style scoped>
div.holdTab p {
  background-color: #585858;
  color: whitesmoke;
  padding: 1vh 1vw 1vh 1vw;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  height: min-content
}
</style>