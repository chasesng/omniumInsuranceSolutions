<template>
    <div class="tabletView selectDisable">

        <div style="display:flex;width:100vw;height:80vh;min-width:700px;min-height:300px;margin-top:7vh;overflow:hidden;border-radius:4px;margin-bottom:10vh">
            <div style="width:60%">
                <form style="height:100vh;width:100%" @submit.prevent="login">
                <div style="width:80%;height:100%;margin:auto;background-color:rgba(255, 255, 255, 0.413);text-align:center;float:right;border-radius:4px;">
                    <div style="padding-top:2vh;width:70%;height:60%;margin:auto;display:flex;flex-direction:column;">
                        <p class="ibn infoHeader primary" style="padding-top:14vh;text-align:left;">Welcome Back,</p>

                        <div style="width:100%;height:30%;display:flex;flex-direction:column;text-align:left;padding-bottom:2vh">
                            <p class="ibn infoMinute primary" style="color:gray;font-weight:350">Email</p>
                            <input class="inpType" type="text" placeholder="Enter Your Email" style="margin-top:-1vh" name="email" v-model="email"/>
                        </div>
                        <div style="width:100%;height:30%;display:flex;flex-direction:column;text-align:left;">
                            <p class="ibn infoMinute primary" style="color:gray;font-weight:350">Password</p>
                            <input class="inpType" type="password" placeholder="Enter Your Password" style="margin-top:-1vh" name="password" v-model="password"/>
                        </div>
                        <div style="width:100%;height:8vh;min-height:30px;padding-top:1vh;text-align:center">
                        <p class="errMsg ibn l" v-if="errMsg">{{ errMsg }}</p>
                    </div>
                        <div style="width:100%;height:fit-content;display:flex;flex-direction:column;text-align:left;gap:2vh">
                            <button v-on:click="login()" class="brButton" style="width:100%;height:5vh;margin-top:2vh">Login</button>
                            <a href="#" class="google-login-button" @click="signInWithGoogle(users)">
                              <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="Google Logo" width="18" height="18">
                                <span>Sign in with Google</span>
                            </a>
                        </div>
                        

                    </div>
                    <div class=" primary" style="padding-top:6vh;width:70%;height:fit-content;min-height:30px;margin:auto;">
                            <router-link to="/ForgotPassword" style="text-decoration:none;">Forgot Your Password?</router-link>

                    </div>
                    <p class="primary">or</p>
                    <div style="width:70%;height:fit-content;margin:auto;margin-top:-1vh">
                            <router-link to="/Register" style="text-decoration:none;">Sign Up Here</router-link>


                    </div>
                </div>
            
            </form>



            </div>
            <div style="width:30%;background-image:url('https://images.pexels.com/photos/290597/pexels-photo-290597.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2');background-size:cover;background-position:center;filter:blur(2px)"></div>
        
        </div>

    </div>


    
<div class="mobileView">
  <div style="width:100vw;height:80vh;min-width:320px;display:flex;justify-content:center;margin-top:6vh;margin-bottom:1vh">
  <div style="width:95vw;height:100%;display:flex;flex-direction:column;border:1px solid gray;border-radius:4px;padding-top:1.5vh">
    <div style="width:100%;height:38px;display:flex;border-bottom:1px solid darkgray;box-shadow: 0px 10px 5px 0px rgba(217,217,217,0.75)">
      <div style="width:50%">
        <router-link to="/Register" class="hv" style="color:gray;text-align:center">
          <p style="padding-top:.5vh;color:gray;font-weight:350" class="infoSection">Sign Up</p>

        </router-link>
      </div>
      <div class="hv primarybg" style="color:white;width:50%;text-align:center" id="signUpOption">
        <p style="padding-top:.5vh;font-weight:500" class="infoSection">Sign In</p>

      </div>

  </div>



  
    <div style="height:100%;display:flex;padding-top:3vh;flex-direction:column" id="selectSignIn">
      <div style="width:100%;display:flex;flex-direction:column;margin-left:auto;margin-right:auto;margin-bottom: 4vh;text-align:center">
          <p class="ibn infoHeader" style="height:min-content;">Omnium Insurance Solutions</p>
        <p class="ibn second infoMinute" style="margin-top:-1em">Singapore</p>
        </div>
      <div style="width:90%;display:flex;flex-direction:column;;margin-left:auto;margin-right:auto">
       
       
        <div class="ibn infoSection" style="display:flex;justify-content:center;margin-bottom:6vh">
          <i style="width:10%;max-width:30px;padding-top:.2em;color:gray;" class="fa-solid fa-user"></i>
          <input class="ibn inpClear infoMinute" type="text" style="width:90%;max-width:400px;min-width:fit-content" placeholder="Email" name="email" v-model="email">
        </div>
        <div class="ibn infoSection" style="display:flex;justify-content:center">
          <i style="width:10%;max-width:30px;padding-top:.2em;color:gray;" class="fa-solid fa-lock"></i>
          <input class="ibn inpClear infoMinute" type="password" style="width:90%;max-width:400px;min-width:fit-content" placeholder="Password" name="password" v-model="password">
        </div>
        <div style="width:100%;height:6vh;min-height:30px;padding-top:1vh;text-align:center">
                        <p class="errMsg ibn l" style="font-weight:350" v-if="errMsg">{{ errMsg }}</p>
                    </div>

        <button v-on:click="login()" class="brMobile" style="width:100%;margin-left:auto;margin-right:auto">Sign In</button>
        <div class="primary" style="margin-top:2vh;height:fit-content;min-height:30px;text-align:right">
                            <router-link to="/ForgotPassword" style="text-decoration:none;">Forgot Your Password</router-link>

                    </div>
      </div>
      <div style="width:90%;height:30%;margin-left:auto;margin-right:auto;margin-top:6vh">
        <p class="second" style="text-align:center">Login With</p>
        <a href="#" class="google-login-button" style="width:100%" @click="signInWithGoogle(users)">
                              <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="Google Logo" width="18" height="18">
                                <span>Sign in with Google</span>
                            </a>
      </div>
      
    
  
    </div>
  </div>
</div>

  


</div>
</template>
<script>

const db = getFirestore(app);
export default {
  data() {


return {
  
  users: ref([]),
}
},
  methods: {
  //   triggerMethodInB(data) {
  //   this.$emit('my-event', data);
  // }
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
import { ref } from 'vue'
import { useRouter } from 'vue-router';
import { signInWithEmailAndPassword, getAuth,GoogleAuthProvider,signInWithPopup  } from '@firebase/auth'
import { onSnapshot, query, addDoc, collection, getFirestore } from 'firebase/firestore';
import {app} from '@/configs'
import { onUnmounted } from 'vue';



const email = ref('')
const password = ref('')
const router = useRouter();
const errMsg = ref();


const signInWithGoogle = (users) => {
  const provider = new GoogleAuthProvider();
  signInWithPopup(getAuth(), provider)
  .then((userCredentials) => {
    console.log(userCredentials.user);
    console.log('Connection Established')
    const user = userCredentials.user;
    const UCuserID = user.uid;
    const UCemail = user.email;
    const UCusername = user.displayName;
    if (users.find(u => u.emailRef === UCemail) === undefined) {
      addDoc(collection(db, 'omniumISSUsers'), {
      username: UCusername,
      dateOfBirth: '',
      assignmentArray: [],
      emailRef: UCemail,
      from: '',
      gender: '',
      occupation: '',
      userID: UCuserID,
      userType: "User",
      nric: '',
      mobile: '',
      purchasedPolicies: []

    })
    console.log("Successful creation of custom user profile in Omnium ISS")

    }
    router.push('/')
     })
  .catch((error) => {
    console.log(error)
    if(error.response.status === 422){
        this.$router.push('/');
    }
  })
}

const login = () => {
  const auth = getAuth()
   signInWithEmailAndPassword(auth, email.value, password.value)
   .then(() => {
    console.log("Successfully signed in");
    console.log(auth.currentUser);
    router.push('/');
   })
   .catch((error) => {
    console.log(error.code);
    switch(error.code) {
      case "auth/invalid-email":
        errMsg.value = "Invalid Email";
        break;
      case "auth/user-not-found":
        errMsg.value = "No account with that email was found";
        break;
      case "auth/wrong-password":
        errMsg.value = "Invalid Password";
        break;
      default:
        errMsg.value = "Email / Password is incorrect";
        break;
    }

  })
  };  

  


</script>

<style>
      .google-login-button {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      background-color: #f9f9f9;
      color: #757575fa;
      font-family: Arial, sans-serif;
      font-size: 14px;
      font-weight: bold;
      text-decoration: none;
      padding: 10px 20px;
      border-radius: 2px;
      border: none;
      cursor: pointer;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.25);
    }
    
    .google-login-button:hover {
      background-color: #bcbcbc;
      color:whitesmoke
    }
    
    .google-login-button:focus {
      outline: none;
      box-shadow: 0 0 0 3px rgba(66, 133, 244, 0.5);
    }
    
    .google-login-button img {
      margin-right: 10px;
    }

    ::placeholder {
      color:rgba(0, 0, 10);
      opacity:.8;
    }

* {
  overscroll-behavior: contain;

}
</style>
