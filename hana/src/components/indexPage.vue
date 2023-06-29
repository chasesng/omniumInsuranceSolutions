
<template style="height:fit-content;background-color:#fafafa">
  <div class="tabletView selectDisable" style="overflow:hidden">
    <div loading="eager" id="heroSection"
      style="display:flex;justify-content:space-between;width:100vw;height:80vh;max-height:546px;margin-top:3vh;background-image:url('https://images.pexels.com/photos/434576/pexels-photo-434576.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2');background-size:cover;background-position:top;"
      class="infoSection">
      <div style="width:60%;display:flex;flex-direction:column;gap:15vh">
        <p class="infoHeader"
          style="margin-top:10vh;margin-left:6vw;padding-top:2vh;color:white;font-weight:500;text-transform:capitalize">
          For
          the people you
          won't compromise on, with Omnium</p>
        <div style="display:flex;gap:2vw;margin-left:6vw">
          <button class="brButton hvH" v-on:click="go('/Policies')">Get Insured</button>
          <button class="brButton hvH gloss"
            style="background-color:whitesmoke;color:rgba(70, 70, 70, 0.669);border:1px solid #c8bbc0"
            v-on:click="go('/About_OISS')">Learn More</button>

        </div>
      </div>
    </div>
  </div>
  <div class="mobileView">
    <div
      style="width:100vw;height:30vh;max-height:300px;margin-top:5vh;display:flex;flex-direction: column-reverse;background-image:url('https://images.pexels.com/photos/434576/pexels-photo-434576.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2');background-size:cover;background-position:center;"
      class="infoSection">
      <div style="width:100vw;height:3vh;background-color:rgba(255, 255, 255, 0.511)"></div>
    </div>
    <div
      style="background-color:rgb(245, 245, 245);border-bottom:1px solid gray;display:flex;flex-direction:column;justify-content:center">
      <p class="infoHeader ibn"
        style="width:80%;margin-left:auto;margin-right:auto;padding-top:2vh;color:black;font-weight:500;text-transform:capitalize;text-align:center">
        For the people you won't compromise on, with Omnium</p>
      <div style="display:flex;justify-content:center;margin-left:auto;margin-right:auto;gap:2vw;width:95vw">
        <button class="brMobile" v-on:click="go('/Policies')">Get Insured</button>
        <button class="brMobile gloss" style="background-color:whitesmoke;color:rgba(70, 70, 70, 1);border:1px solid #c8bbc0"
          v-on:click="go('/About_OISS')">Learn More</button>

      </div>
      <div style="width:100%;height:5vh;min-height:20px;">
      </div>
    </div>
  </div>

  <div class="tabletView selectDisable" v-if="isLoggedin"
    style="width:50vw;height:fit-content;overflow:hidden;text-align:center;flex-direction:column;padding-top:2vh;margin-left:auto;margin-right:auto">
    <p class="ibn primary infoHeader" style="text-transform:capitalize">Welcome Back, {{
      returnUserObject(usID)[0]['username'] }}<br /><span style="text-transform:none" class="infoMinute second">What would
        you like to do today?</span></p>
    <div style="display:flex;justify-content:center;gap:2vw;padding-bottom:2vh">
      <button class="brMobile mh"
        v-on:click="go('/Profile')">My Policies</button>

      <button class="brMobile gloss" style="background-color:whitesmoke;color:rgba(70, 70, 70, 1);border:1px solid #c8bbc0"
        v-on:click="go('/Advisor_Channel_Gateway')">Advisor Channel</button>
      

    </div>
  </div>

  <div class="mobileView" v-if="isLoggedin"
    style="width:90vw;height:fit-content;overflow:hidden;text-align:center;flex-direction:column;padding-top:2vh;margin-left:auto;margin-right:auto">
    <p class="ibn primary infoHeader">Welcome Back, {{ returnUserObject(usID)[0]['username'] }}<br /><span
        class="infoMinute second">What would you like to do today?</span></p>
    <div style="display:flex;flex-direction:column;margin-left:auto;margin-right:auto;gap:2vh;padding-bottom:2vh;width:95vw">
      <button class="brMobile nw" v-on:click="go('/Profile')"
        style="margin-right:auto;margin-left:auto;max-width:300px">My Policies</button>


      <button class="brMobile gloss" style="background-color:whitesmoke;color:rgba(70, 70, 70, 1);border:1px solid #c8bbc0;max-width:300px;margin-left: auto;margin-right: auto;"
        v-on:click="go('/Advisor_Channel_Gateway')">Advisor Channel</button>
    </div>
  </div>


  <div
    style="width:100vw;height:30vh;overflow:hidden;background-color:#fafafa;display:flex;justify-content:center;margin-top:2vh">

    <div class="infoSection"
      style="margin-left:auto;margin-right:auto;display:flex;color:#5f545e;justify-content:center;gap:2vw;width:95vw;height:10vh;background-color:#fafafa;padding-top:6vh;">
      <div
        style="width:15vw;min-width:100px;height:30vh;display:inline-block;justify-content:space-between;text-align:center">
        <i class="fa-solid fa-bolt-lightning"></i>
        <p style="color:#503830;font-weight:350">Highly Efficient</p>

      </div>
      <div
        style="width:15vw;min-width:100px;height:30vh;display:inline-block;justify-content:space-between;text-align:center">
        <i class="fa-solid fa-circle-check"></i>
        <p style="color:#503830;font-weight:350">Trusted By Major Brands</p>

      </div>
      <div
        style="width:15vw;min-width:100px;height:30vh;display:inline-block;justify-content:space-between;text-align:center">
        <i class="fa-solid fa-equals"></i>
        <p style="color:#503830;font-weight:350">0% Cost Markup w/ No Hidden Fees</p>

      </div>


    </div>

  </div>
  <div
    style="width:100vw;height:fit-content;margin-left:auto;margin-right:auto;background-color:#fcfcfc;display:flex;justify-content:center">
    <img src="../assets/logos/omniumrlogo.svg" style="min-width:150px;width:15vw;background-size: cover;" />
  </div>
  <div style="width:100vw;padding-bottom:7vh;background-color:#fafafa;text-align:center">
    <div style="width:50vw;min-width:310px;height:30vh;background-color:#fafafa;text-align:center;display:inline-block">
      <p id="whatWeDo" class="ibn infoHeader" style="color:#5f545e">What We Do</p>
      <p class="ibn primary infoMinute">Omnium showcases policies from all the brands partnered with us, so you can make
        the best
        decision for yourself.</p>

      <p class="ibn infoMinute" style="color:#796b78;padding-bottom:2vh">Buying insurance is hardly the easiest thing to
        do, for something
        so crucial to every Singaporean. <span style="color:gray">Omnium</span> is designed to give you peace of mind with
        lesser fuss, complications, and headaches.</p>
    </div>
  </div>

  <div class="tabletView" style="padding-top:6vh">
    <div style="width:100vw;height:30vh;background-color:rgb(245, 245, 245)">
      <div
        style="margin-left:auto;margin-right:auto;width:60vw;height:100%;overflow:hidden;background-color: #5f545e;opacity: 0.8;background-image:  radial-gradient(#ffffff 1.3px, transparent 1.3px), radial-gradient(#ffffff95 1.3px, #463e45 1.3px);background-size: 52px 52px;background-position: 0 0,26px 26px;">
        <div style="display:flex;justify-content:space-between">
          <div style="width:60vw;display:flex;flex-direction:column;gap:1vh;padding-left:6vw;padding-top:4vh">
            <p class="ibn infoHeader" style="width:50%;min-width:250px;text-transform:capitalize;color:white">Find out
              more about how we work</p>
              <button class="brButton hvH gloss"
            style="background-color:whitesmoke;color:rgba(70, 70, 70, 0.669);border:1px solid #c8bbc0"
            v-on:click="go('/About_OISS')">Learn More</button>
          </div>
          <i class="transitionSmooth hv fa-solid fa-umbrella" style="font-size:300px;color:white"></i>
        </div>

      </div>

    </div>
  </div>

  <div class="mobileView">
    <div style="width:100vw;height:12vh;background-color:rgb(245, 245, 245)">
      <div
        style="margin-left:auto;margin-right:auto;display:flex;justify-content:space-between;padding-left:6vw;padding-top:1vh;width:95vw;height:100%;overflow:hidden;background-color:rgb(95, 84, 94, .8)">
        <p class="ibn infoHeader"
          style="width:40%;min-width:200px;height:100%;color:white;padding:1vh 0px 1vh 0px;text-transform:capitalize">Find
          out more about how we work</p>
        <i class="hv fa-solid fa-umbrella" style="font-size:100px;color:white"></i>

      </div>
    </div>
    <div style="width:100vw;display:flex;justify-content:center">
      <button class="brMobile" style="width:95vw;margin-top:1vh" v-on:click="go('/About_OISS')">Learn More</button>

    </div>

  </div>

  <div style="width:100vw;height:45vh;background-color:rgb(245, 245, 245);overflow:hidden">
    <div class="ibn infoMinute"
      style="color:gray;width:50vw;height:35vh;min-height:300px;min-width:330px;margin-bottom:10vh;background-color:rgb(245, 245, 245);margin:0px auto 0px auto;text-align:center;padding-top:6vh">
      <p id="ourGuarantee" class="ibn infoHeader" style="color:#5f545e">Our Guarantee</p>
      <p>We offer a wide range of insurance policies for your viewing and
        selection, offered by acclaimed brands in Singapore.</p>
      <p>View, choose, and purchase the policy that fits you best, with all the
        support you could need at your fingertips.</p>
      <p>Require assistance? Omnium will connect you with an agent to resolve your issues.</p>
    </div>

  </div>
  <div class="tabletView" style="width:100vw;height:fit-content;">
    <div style="width:100vw;height:fit-content;display:flex;justify-content:center;padding-top:2vh;margin:auto">
      <div id="navigations" style="width:95vw;height:10vh;background-color:rgb(245, 245, 245);text-align:center;">
        <p class="infoHeader" style="color:#5f545e;padding-top:2vh;font-weight:600">More Links</p>
      </div>
    </div>

    <div class="tabletView" style="width:100vw;height:fit-content;margin-bottom:11vh">
      <div
        style="width:60vw;min-width:600px;height:40vh;margin-left: auto;margin-right:auto;display:flex;justify-content:space-between">
        <div style="width:26vw;min-width:300px;height:100%;display:flex;flex-direction:column;" class="sectionText">
          <p class="infoSection" style="color:#5f545e;font-weight:600;text-transform:capitalize">Omnium Insurance
            Assessment</p>
          <p class="infoMinute ibn">A quick questionnaire you can do at your own leisure with no assistance, your answers
            are saved to your account so agents can view them to have your best interests at heart when helping you.</p>
          <div style="display:flex;flex-direction: column-reverse;width:100%;height:100%">
            <div v-if="isLoggedin">
              <p class="infoMinute ibn dividerLabel pointer" v-on:click="go('/Assessment')"
              style="text-transform:capitalize;width:fit-content">View the insurance assessment <span
                style="color:#5f545e">></span></p>
            </div>
            <div v-else>
              <p class="infoMinute ibn dividerLabel pointer" v-on:click="go('/Register')"
              style="text-transform:capitalize;width:fit-content">View the insurance assessment <span
                style="color:#5f545e">></span></p>
            </div>
           

          </div>
        </div>
        <div v-if="isLoggedin">
          <div style="width:30vw;height:100%;overflow:hidden;border-radius:4px">
          <div v-on:click="go('/Assessment')"
            style="width:30vw;height:100%;text-align:center;background-image:url('https://images.pexels.com/photos/8441869/pexels-photo-8441869.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2');background-size:cover;background-position:center;"
            class="sectionImg ibn infoHeader">

          </div>
        </div>
        </div>
        <div v-else>
          <div style="width:30vw;height:100%;overflow:hidden;border-radius:4px">
          <div v-on:click="go('/Register')"
            style="width:30vw;height:100%;text-align:center;background-image:url('https://images.pexels.com/photos/8441869/pexels-photo-8441869.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2');background-size:cover;background-position:center;"
            class="sectionImg ibn infoHeader">

          </div>
        </div>
        </div>
        


      </div>
    </div>

    <div v-if="!isLoggedin" class="tabletView" style="width:100vw;height:fit-content;margin-bottom:11vh">
      <div
        style="width:60vw;min-width:600px;height:40vh;margin-left: auto;margin-right:auto;display:flex;justify-content:space-between">
        <div style="width:30vw;height:100%;overflow:hidden;border-radius:4px">
          <div @click="go('/Register')"
            style="width:30vw;height:100%;text-align:center;background-image:url('https://images.pexels.com/photos/1770310/pexels-photo-1770310.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2');background-size:cover;background-position:center;"
            class="sectionImg ibn infoHeader">

          </div>
        </div>
        <div style="width:26vw;min-width:300px;height:100%;display:flex;flex-direction:column;" class="sectionText">
          <p class="infoSection" style="color:#5f545e;font-weight:600;text-transform:capitalize">Get Started! Signing up
            is a breeze...</p>
          <p class="infoMinute ibn">Through signing up, you can instantly send in requests for agents to view, or receive
            the forms required to purchase a policy right away.</p>
          <div style="display:flex;flex-direction: column-reverse;width:100%;height:100%">
            <p class="infoMinute ibn dividerLabel pointer" style="text-transform:capitalize;width:fit-content"
              @click="go('/Register')">Sign up now <span style="color:#5f545e">></span></p>

          </div>
        </div>




      </div>
    </div>


    <div v-if="!isLoggedin" class="tabletView" style="width:100vw;height:fit-content;padding-bottom:11vh">
      <div
        style="width:60vw;min-width:600px;height:40vh;margin-left: auto;margin-right:auto;display:flex;justify-content:space-between">
        <div style="width:26vw;min-width:300px;height:100%;display:flex;flex-direction:column;" class="sectionText">
          <p class="infoSection" style="color:#5f545e;font-weight:600;text-transform:capitalize">View All Policies</p>
          <p class="infoMinute ibn">Ready to get insured? View all policies available and pick the one best for you! We
            help you contact an agent if you require assistance.</p>
          <div style="display:flex;flex-direction: column-reverse;width:100%;height:100%">
            <p @click="go('/Policies')" class="infoMinute ibn dividerLabel pointer"
              style="text-transform:capitalize;width:fit-content">View Policies <span style="color:#5f545e">></span></p>

          </div>
        </div>

        <div style="width:30vw;height:100%;overflow:hidden;border-radius:4px">
          <div @click="go('/Policies')"
            style="width:30vw;height:100%;text-align:center;background-image:url('https://images.pexels.com/photos/7735691/pexels-photo-7735691.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2');background-size:cover;background-position:center;"
            class="sectionImg ibn infoHeader">

          </div>
        </div>


      </div>
    </div>

    <div v-if="isLoggedin" class="tabletView" style="width:100vw;height:fit-content;padding-bottom:11vh">
      <div
        style="width:60vw;min-width:600px;height:40vh;margin-left: auto;margin-right:auto;display:flex;justify-content:space-between">
        <div style="width:30vw;height:100%;overflow:hidden;border-radius:4px">
          <div @click="go('/Policies')"
            style="width:30vw;height:100%;text-align:center;background-image:url('https://images.pexels.com/photos/7735691/pexels-photo-7735691.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2');background-size:cover;background-position:center;"
            class="sectionImg ibn infoHeader">

          </div>
        </div>
        <div style="width:26vw;min-width:300px;height:100%;display:flex;flex-direction:column;" class="sectionText">
          <p class="infoSection" style="color:#5f545e;font-weight:600;text-transform:capitalize">View All Policies</p>
          <p class="infoMinute ibn">Ready to get insured? View all policies available and pick the one best for you! We
            help you contact an agent if you require assistance.</p>
          <div style="display:flex;flex-direction: column-reverse;width:100%;height:100%">
            <p class="infoMinute ibn dividerLabel pointer" style="text-transform:capitalize;width:fit-content"
              @click="go('/Policies')">View Policies <span style="color:#5f545e">></span></p>

          </div>
        </div>




      </div>
    </div>
  </div>

  <div class="mobileView">
    <div
      style="width:100vw;height:fit-content;display:flex;justify-content:center;margin:auto;display: flex;flex-direction:column;text-align:center">
      
      <div style="width:100vw;height:fit-content">
        <div style="display:flex;flex-direction:column;width:90vw;justify-content:center;margin:auto;text-align:left">
          <p class="infoSection" style="color:#5f545e;font-weight:bold;">Omnium Insurance Assessment</p>
          <p class="infoMinute ibn">A quick questionnaire you can do at your own leisure with no assistance, your answers
            are saved to your account so agents can view them to have your best interests at heart when helping you.</p>
        </div>

        <div
          style="width:95vw;height:6vh;background-position:center;display:flex;max-width:550px;flex-direction:column-reverse;text-align:center;background-image:url('https://images.pexels.com/photos/8441869/pexels-photo-8441869.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2');background-size:cover;background-position:bottom;margin:auto;border-radius:4px ;"
          class="blur-bg">
          <div v-if="isLoggedin">
            <button class="brMobile" v-on:click="go('/Assessment')"
            style="color:whitesmoke;margin:auto;background-color:#5f545e88;width:100%">View Assessment</button>
          </div>
          <div v-else>
            <button class="brMobile" v-on:click="go('/Register')"
            style="color:whitesmoke;margin:auto;background-color:#5f545e88;width:100%">View Assessment</button>
          </div>
          
        </div>

      </div>
    </div>



  </div>


  <div v-if="!isLoggedin" class="mobileView" style="margin-top:6vh">
    <div
      style="width:100vw;height:fit-content;display:flex;justify-content:center;padding-top:2vh;margin:auto;display: flex;flex-direction:column;text-align:center">
      <div style="width:100vw;height:fit-content">
        <div style="display:flex;flex-direction:column;width:90vw;justify-content:center;margin:auto;text-align:left">
          <p class="infoSection" style="color:#5f545e;font-weight:bold;">Get Started! Signing up is a breeze...</p>
          <p class="infoMinute ibn">Through signing up, you can instantly send in requests for agents to view, or receive
            the forms required to purchase a policy right away.</p>
        </div>

        <div @click="go('/Register')"
          style="width:95vw;height:6vh;background-position:center;display:flex;max-width:550px;flex-direction:column-reverse;text-align:center;background-image:url('https://images.pexels.com/photos/1770310/pexels-photo-1770310.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2');background-size:cover;background-position:center;margin:auto;border-radius:4px ;"
          class="blur-bg">
          <button class="brMobile" style="color:whitesmoke;margin:auto;background-color:#5f545e88;width:100%">Sign
            Up</button>
        </div>

      </div>
    </div>



  </div>

  <div class="mobileView" style="margin-top:6vh;margin-bottom:6vh">
    <div
      style="width:100vw;height:fit-content;display:flex;justify-content:center;padding-top:2vh;margin:auto;display: flex;flex-direction:column;text-align:center">
      <div style="width:100vw;height:fit-content">
        <div style="display:flex;flex-direction:column;width:90vw;justify-content:center;margin:auto;text-align:left">
          <p class="infoSection" style="color:#5f545e;font-weight:bold;">View All Policies</p>
          <p class="infoMinute ibn">Ready to get insured? View all policies available and pick the one best for you! We
            help you contact an agent if you require assistance.</p>
        </div>

        <div
        style="width:95vw;height:6vh;background-position:center;display:flex;max-width:550px;flex-direction:column-reverse;text-align:center;background-image:url('https://images.pexels.com/photos/7735691/pexels-photo-7735691.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2');background-size:cover;background-position:top;margin:auto;border-radius:4px ;"
          class="blur-bg">
          <button class="brMobile" style="color:whitesmoke;margin:auto;background-color:#5f545e88;width:100%"
            @click="go('/Policies')">View Policies</button>
        </div>

      </div>
    </div>



  </div>
</template>

<script>
import { getFirestore, onSnapshot, collection, query } from 'firebase/firestore';
import { onAuthStateChanged, getAuth } from '@firebase/auth';
import { ref, onUnmounted, onMounted } from 'vue';
import { app } from '@/configs.js';

const db = getFirestore(app);





export default {
  name: 'indexPage',
  data() {
    return {
      users: ref([]),

    }
  },
  methods: {
    returnUserObject(uid) {
      return this.users.filter(u => u.userID === uid)
    },

    go(val) {
      this.$router.push({ path: val })
    },







  },
  computed: {

  },
  mounted() {


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
    onUnmounted(liveOISSUsers)
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

<style>
.headerLabel {
  font-family: 'Ibarra Real Nova', serif;
  font-size: 4vh;
  padding-left: 2vw;
}


html {
  scroll-behavior: smooth;
}
</style>

<style>
::placeholder {
  color: gray;
  opacity: .5;
}

.mobileView {
  display: none
}


@media screen and (max-width: 1023px) {
  .mobileView {
    display: block;
  }

  .tabletView {
    display: none;
  }
}

.infoSection {
  /* between 768 and 1200 */
  font-size: 18px
}

.infoHeader {
  font-size: 24px;
}

@media screen and (max-width: 768px) {

  /* Adjust font size for smaller screens */

  .infoMinute {
    font-size: 16px;
  }

  .infoSection {
    font-size: 18px;
  }

  .infoHeader {
    font-size: 22px;
  }

}

@media screen and (min-width: 1200px) {

  /* Adjust font size for larger screens */

  .infoMinute {
    font-size: 18px;
  }

  .infoSection {
    font-size: 24px;
  }

  .infoHeader {
    font-size: 28px;
  }
}

@media screen and (min-width: 1600px) {

  /* Adjust font size for even larger screens */
  .infoMinute {
    font-size: 22px;
  }

  .infoSection {
    font-size: 28px;
  }

  .infoHeader {
    font-size: 32px;
  }
}

.divider {
  width: 95vw;
  height: 5vh;
  display: table-cell;
  vertical-align: middle;
  border-bottom: 1px solid gray;
  background-color: rgba(189, 189, 189, 0.3);
  color: #5f545e;
  text-align: center;
  border-radius: 4px
}

.blur-bg {
  position: relative;
  width: 60vw;
  height: 20vh;
  border-radius: 4px;
  margin: auto;
}

.blur-bg::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: inherit;
  background-size: cover;
  filter: blur(2px) brightness(.6);

}

.blur-bg>* {
  position: relative;
}



@media screen and (max-width: 800px) {
  .navContainer {
    flex-direction: column;
  }

  .navOption {
    flex-basis: auto;
    margin: auto;
  }

  .navOption:hover {
    filter: blur(2px) brightness(.8);
    transform: scale(1.05)
  }

  .navOption:hover~.navOption {
    filter: blur(5px) brightness(.5)
  }
}

.padder {
  height: 300px;
  width: 100vw
}
</style>


<style scoped>
.sectionImg {
  position: relative;
  cursor: pointer
}

.sectionImg::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0);
  backdrop-filter: blur(0);
  transition: all 0.3s;
}

.sectionImg:hover::before {
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(3px);
}

.sectionImg:hover::after {
  content: "Learn More";
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: whitesmoke;
}

.hvH:hover~#heroSection {
  filter: brightness(.5);
}</style>