<template>
  <div class="tabletView">
    <div class="sd"
    
      style="width:95vw;height:85vh;margin-top:6vh;margin-bottom:2vh;margin-left:auto;margin-right:auto;border-radius:4px">
      <div style="width:100%;height:1%;background-color:gainsboro;display:flex;flex-direction: column-reverse;">

      </div>
      <div class="primarybg" style="height:99%;width:100%;display:flex">
        <div
          style="width:30%;border-right:1px solid #ebebf0;height:100%;background-color:#ebebf0;display:flex;flex-direction:column;">
          <div v-if="retrieveUserbyUSID(usID).userType =='Advisor' || retrieveUserbyUSID(usID).userType == 'Admin'" class="sd primarybg"
            style="display:flex;width:100%;height:6%;border-bottom:1px solid #ebebf0">
            <button id="tabBtn" :class="{ active: currentInbox === 0 }" @click="inbox(0)"
              style="border:none;width:50%;padding-top:.5vh;background-color:;text-align: center">
              Open Inquiries
            </button>
            <button id="tabBtn" :class="{ active: currentInbox === 1 }" @click="inbox(1)"
              style="border:none;width:50%;padding-top:.5vh;background-color:;text-align: center">
              Your Inbox
            </button>
          </div>

          <div v-if="retrieveUserbyUSID(usID).userType == 'User'" class="sd primarybg"
            style="width:100%;height:6%;text-align:center">
            <p
              style="background-color:transparent;border:none;padding-top:1vh;color:whitesmoke;background-color:;text-align: center">
              Advisor Channel
            </p>

          </div>
          <!-- below holds the contents of messages -->
          <!-- personal inbox short message is to show latest message -->
          <!-- should user be advisor or admin below -->
          <div v-if="retrieveUserbyUSID(usID).userType == 'Advisor' || retrieveUserbyUSID(usID).userType == 'Admin' && currentInbox == 0"
            style="width:100%;height:90%;padding-top:2vh;">
            <div v-for="(enq, index) in enquiries.filter(e => e.advisorID == '')" :key="index">
              <div :class="{ 'selected': selectedEnquiry == enq.id }" @click="showEnquiry(enq.id)" class="mh"
                style="margin-bottom:2vh;padding-top:1vh;border-radius:4px;padding-left:1vw;display:flex;flex-direction:column;line-height:1;width:98%;margin-left:auto;margin-right:auto;height:fit-content;border-bottom:2px solid gray">
                <p class="ibn">{{ enq.enquiryTitle }}</p>
                <p class="ibn primary">Policy Referred: <span class="primary b">{{
                  getPolicyData(enq.referredPolicyID).name }}</span> ({{ getPolicyData(enq.referredPolicyID).type }}
                  Policy)</p>
                <p class="second">{{ truncateString(enq.enquiryContent) }}</p>

              </div>
            </div>
          </div>

          <!-- advisor or admin's personal inbox below -->
          <div v-if="retrieveUserbyUSID(usID).userType == 'Advisor' || retrieveUserbyUSID(usID).userType == 'Admin' && currentInbox == 1"
            style="width:100%;height:90%;padding-top:2vh;">
            <div v-for="(enq, index) in enquiries.filter(e => e.advisorID == retrieveUserbyUSID(usID).id)" :key="index">
              <div :class="{ 'selected': selectedEnquiry == enq.id }" @click="showEnquiry(enq.id)" class="mh"
                style="margin-bottom:2vh;padding-top:1vh;border-radius:4px;padding-left:1vw;display:flex;flex-direction:column;line-height:1;width:98%;margin-left:auto;margin-right:auto;height:fit-content;border-bottom:2px solid gray">
                <p class="ibn">{{ enq.enquiryTitle }}</p>
                <p class="ibn primary">Policy Referred: <span class="primary b">{{
                  getPolicyData(enq.referredPolicyID).name }}</span> ({{ getPolicyData(enq.referredPolicyID).type }}
                  Policy)</p>
                <p class="second">{{ truncateString(enq.enquiryContent) }}</p>

              </div>
            </div>
          </div>
           <div v-if="retrieveUserbyUSID(usID).userType == 'User'" style="width:100%;height:90%;padding-top:2vh">
            <div v-for="(personalEnquiry, index) in enquiries.filter(e => e.senderID == retrieveUserbyUSID(usID).id)" :key="index">
              <div :class="{ 'selected': selectedEnquiry == personalEnquiry.id }" @click="showEnquiry(personalEnquiry.id)" class="mh"
                style="margin-bottom:2vh;padding-top:1vh;border-radius:4px;padding-left:1vw;display:flex;flex-direction:column;line-height:1;width:98%;margin-left:auto;margin-right:auto;height:fit-content;border-bottom:2px solid gray">
                
                <p class="ibn">{{ personalEnquiry.enquiryTitle }}</p>
                <p class="ibn primary">Policy Referred: <span class="primary b">{{
                  getPolicyData(personalEnquiry.referredPolicyID).name }}</span> ({{ getPolicyData(personalEnquiry.referredPolicyID).type }}
                  Policy)</p>
                <p class="second">{{ truncateString(personalEnquiry.enquiryContent) }}</p>
              
              </div>
            
            </div>
          </div>


      

        </div>
        <div v-if="Object.keys(retrieveEnquiry(selectedEnquiry)).length == 0" class="selectDisable"
          style="width:70%;text-align:center">
          <p v-if="retrieveUserbyUSID(usID).userType =='Admin' || retrieveUserbyUSID(usID).userType == 'Advisor'" class="ibn infoHeader" style="text-transform:capitalize;color:whitesmoke;padding-top:11vh">Open an inquiry
            with the panel on the left... </p>
            <div v-if="retrieveUserbyUSID(usID).userType == 'User'" style="display:flex;flex-direction:column">
              <p class="ibn infoHeader" style="text-transform:capitalize;color:whitesmoke;padding-top:11vh">You have no chats open!<br/>Send in an inquiry for a policy to get support.</p>
              <button class="brMobile mh" @click="go('/Policies')" style="border:1px solid whitesmoke;margin-left:auto;margin-right:auto">Send an inquiry</button>
            </div>
        
          </div>
        <div v-if="Object.keys(retrieveEnquiry(selectedEnquiry)).length != 0" class="selectDisable" style="width:70%">
          <div
            style="width:95%;margin-left:auto;margin-top:2vh;margin-right:auto;height:11vh;background-color:#ebebf0;border-radius:4px">
            <div class="nw" style="width:100%;height:50%;border-bottom:1px solid gray;display:flex;overflow:hidden">

              <div style="width:50%;text-align:left;padding-left:1vw;padding-top:.5em">
                <p class="ibn"><span class="second" style="padding-right:1vw">Sender: </span> {{
                  retrieveUser(retrieveEnquiry(selectedEnquiry).senderID).username }}</p>
              </div>
              <div style="width:50%;text-align:left;padding-left:1vw;padding-top:.5em">
                <p class="ibn"><span class="second" style="padding-right:1vw">Policy Inquiry:</span>
                  {{ getPolicyData(retrieveEnquiry(selectedEnquiry).referredPolicyID).name }}</p>
              </div>
            </div>
            <div class="nw" style="width:100%;height:50%;border-bottom:1px solid gray;display:flex;overflow:hidden">
              <div style="width:50%;text-align:left;padding-left:1vw;padding-top:.5em">
                <p class="ibn"><span class="second" style="padding-right:1vw">Enquiry: </span> {{
                  (retrieveEnquiry(selectedEnquiry).enquiryTitle) }}</p>
              </div>
              <div style="width:50%;text-align:left;padding-left:5vw;padding-top:.5em">
                <p class="ibn"><span class="second" style="padding-right:1vw">Sent:</span>{{
                  timeDifference(retrieveEnquiry(selectedEnquiry).requestDate) }}</p>
              </div>
            </div>
          </div>
          <div style="display:flex;width:95%;justify-content:space-between;margin-left:auto;margin-right:auto;">
            <div
              style="width:20%;height:5vh;margin-top:.5em;border-radius:4px;text-align:left;padding-left:1vw;overflow:hidden">
              <p class="ibn infoHeader" style="color:whitesmoke">Inquiry</p>

            </div>
            <div class="mh"
              style="color:whitesmoke;width:fit-content;height:5vh;margin-top:.5em;border-radius:4px;text-align:left;padding-top:.5em">
              <p v-on:click="scrollToDiv('assessmentResults')" class="ibn" style="padding:0px 1vw 0px 1vw">View {{
                retrieveUser(retrieveEnquiry(selectedEnquiry).senderID).username }}'s' Assessment Results</p>
            </div>
          </div>
          <div
            style="width:95%;height:50vh;overflow-y:scroll;padding-bottom:1vh;background-color:#ebebf0;margin-left:auto;margin-right:auto;margin-top:1vh;border-radius:4px;text-align:left;padding-left:1vw;padding-top:1vh">
            <p class="ibn">{{ retrieveEnquiry(selectedEnquiry).enquiryContent }}</p>
          </div>
          <div v-if="retrieveEnquiry(selectedEnquiry).advisorID === '' && retrieveUserbyUSID(usID).userType == 'Admin' || retrieveUserbyUSID(usID).userType == 'Advisor'"
            style="width:95%;height:6vh;margin-top:1vh;margin-left:auto;margin-right:auto;display:flex;justify-content: right;gap:.5vw">
            <div style="display:flex;width:50%;color:whitesmoke;padding-top:.3em">
              <input id="confirmAccept" type="checkbox" v-model="isChecked" style="width:fit-content;height:25px;transform:scale(1.2)" />
              <p style="width:fit-content;padding-left:1vw;font-weight:500" for="confirmAccept">I accept that I will be
                responsible for this client and their inquiries.</p>
            </div>

            <button :disabled="!isChecked" class="brMobile mh nw" style="background-color:#423b41;width:fit-content"
              @click="acceptEnquiry(usID, selectedEnquiry)">Accept
              Enquiry / Reply</button>
            <button class="brMobile mh" style="background-color:red;color:whitesmoke;">Report Spam</button>
          </div>

          <div v-if="retrieveEnquiry(selectedEnquiry).advisorID === retrieveUserbyUSID(usID).id || retrieveEnquiry(selectedEnquiry).senderID === retrieveUserbyUSID(usID).id"
            style="width:95%;height:6vh;margin-top:1vh;margin-left:auto;margin-right:auto;display:flex;justify-content: right;gap:.5vw">
            <router-link :to="'/Enquiry/' + selectedEnquiry" class="mh" style="background-color:#423b41;color:white;text-decoration:none;width:fit-content;height:fit-content;border-radius:4px;padding:1vh 1vw 1vh 1vw">Reply</router-link>
          </div>




        </div>


      </div>
    </div>
    <div
      style="width:100vw;height:60vh;margin-bottom:2vh;text-align:left;padding-left:2vw;display:flex;flex-direction:column">
      <div  v-if="selectedEnquiry != -1"  style="width:95vw;text-align:right;line-height:1">
        <p id="assessmentResults" class="ibn infoHeader" style="padding-right:1vw;text-transform:capitalize">{{
        retrieveUser(retrieveEnquiry(selectedEnquiry).senderID).username }}'s' Assessment Results</p>
        <p class="ibn" style="padding-right:1vw"> DOB: {{ retrieveUser(retrieveEnquiry(selectedEnquiry).senderID).dateOfBirth }}</p>
      </div>
      <div v-if="String(retrieveUser(retrieveEnquiry(selectedEnquiry).senderID).assignmentArray).split(',').length >= 2" style="display:flex;justify-content: right;width:90vw;margin-left:auto;margin-right:auto">
        
        <div
          class="sd"
          style="display:flex;flex-direction:column;width:fit-content;background-color:#fafafa;border-radius:4px;padding-left:2vw;padding-top:2vh;border-top:1vh solid #5f545e;height:50vh;overflow-y:scroll">
          <div
            v-for="(i, index) in String(retrieveUser(retrieveEnquiry(selectedEnquiry).senderID).assignmentArray).split(',')"
            :key="index">
            <div
              style="float:right;width:40vw;height:fit-content;line-height:.8;border-bottom:1px solid gray;padding-bottom:2vh;padding-top:2vh;text-align:left;background-color:#fafafa">
              <p class="ibn primary">{{ returnQnandResponse(i)[0] }}</p>
              <p class="ibn second">{{ returnQnandResponse(i)[1] }}</p>
            </div>

          </div>

        </div>
      </div>
      <div v-else-if="selectedEnquiry != -1 && String(retrieveUser(retrieveEnquiry(selectedEnquiry).senderID).assignmentArray).split(',').length <= 2" style="display:flex;justify-content: right;width:90vw;margin-left:auto;margin-right:auto">
        <p class="ibn infoSection">No assessment results to display.</p>
      </div>






    </div>
  </div>
</template>


<script>
import { getFirestore, onSnapshot, collection, query, doc, updateDoc } from 'firebase/firestore';
import { onAuthStateChanged, getAuth } from '@firebase/auth';
import { ref, onUnmounted, onMounted } from 'vue';
import { app, truncateString, timeDifference } from '@/configs.js';

const db = getFirestore(app);





export default {
  name: 'advisorChannel',
  data() {
    return {
      currentInbox: 0,
      selectedEnquiry: -1,
      isChecked: false,
      users: ref([]),
      policies: ref([]),
      assessments: ref([]),
      enquiries: ref([]),

    }
  },
  methods: {
    returnUserObject(uid) {
      return Object(this.users.find(u => u.userID === uid))
    },
    go(val) {
      this.$router.push({ path: val })
    },
    scrollToDiv(divId) {
      const element = document.getElementById(divId);

      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    },

    inbox(val) {
      this.currentInbox = val
    },
    returnText(val) {
      if (val == 0) {
        return "You are viewing open inquiries submitted by users, responding to an enquiry will place it in your personal inbox."
      }
      else if (val == 1) {
        return 'Your personal inbox stores inquiries you have responded to, with only you being able to view them and its contents.'
      }
    },
    getPolicyData(policyID) {
      const pol = this.policies.find(p => p.id === policyID);
      return Object(pol)
    },

    showEnquiry(index) {
      this.selectedEnquiry = index;
    },

    retrieveEnquiry(enqID) {
      return Object(this.enquiries.find(e => e.id === enqID))
    },

    retrieveUser(userid) {
      return Object(this.users.find(u => u.id === userid))
    },

    retrieveUserbyUSID(userid) {
      return Object(this.users.find(u => u.userID === userid))
    },
    returnQuestionObj(qnNumber) {
      const questionObject = Object(this.assessments.find(a => a.qnNumber == qnNumber));
      return questionObject
    },
    returnQnandResponse(qnItem) { //parameter takes in Qn1_0 etc
      let split = String(qnItem).split('_')
      var cleanedFirst = split[0].replace('Qn', ''); //returns question number
      let qnDesc = Object(this.returnQuestionObj(cleanedFirst)).qnDesc
      let qnResponse = Object(this.returnQuestionObj(cleanedFirst)).qnOptions_SC_Delimiter;
      let qnResponseArr = String(qnResponse).split(';')[split[1]]
      let qnandAnswer = [qnDesc, qnResponseArr]

      return qnandAnswer;

    },
    acceptEnquiry(usid, enqId) {
      let user = Object(this.users.find(u => u.userID === usid))
      let enq = Object(this.enquiries.find(e => e.id === enqId))
      let boolFor = enq.advisorID == '';
      if (user.userType == 'Admin' && boolFor) {
        updateDoc(doc(db, 'omniumISSEnquiries', enqId), {
          advisorID: user.id
        })
      }
    },










  },
  mounted() {

    const enquiryQuery = query(collection(db, 'omniumISSEnquiries'));
        const liveEnquiries = onSnapshot(enquiryQuery, (snapshot) => {
            this.enquiries = snapshot.docs.map((doc) => {
                return {
                    id: doc.id,
                    advisorID: doc.data().advisorID,
                    enquiryContent: doc.data().enquiryContent,
                    enquiryTitle: doc.data().enquiryTitle,
                    finalizedPurchase: doc.data().finalizedPurchase,
                    referredPolicyID: doc.data().referredPolicyID,
                    replies: doc.data().replies,
                    requestDate: doc.data().requestDate,
                    senderID: doc.data().senderID,
                    status: doc.data().status
                }
            })
        })
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
          purchasedPolicies: doc.data().purchasedPolicies

        }
      });
    
})
onUnmounted(liveEnquiries, liveQns, liveOISSUsers, livePolicies)
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

 button.active {
   background-color: #5f545e;
   color:whitesmoke;
   

 }


 .selected p {
   padding-left: 1vw;

   transition: padding-left .3s
 }

 .selected {
   background-color: rgba(128, 128, 128, 0.2);
 }

 button:disabled {
   opacity: .5
 }
</style>