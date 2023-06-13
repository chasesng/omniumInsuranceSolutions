<template>
  <!-- <div class="animate__animated animate__slideInUp" style="width:100vw;margin-top:5vh;animation-duration:.3s;overflow-x:hidden">
    <div style="text-align:left;padding-left:3%">
      <div class="sign-up-container ft l" style="overflow-x:hidden;overflow-y:scroll;height:92vh;padding-top:2vh">
        
        <p class="ft l" style="margin:auto;text-align:center;font-size:2.5vh">Create an OIA Account</p>
        <p style="margin:auto;width:90vw;color:gray;margin-bottom:5vh;font-weight:300;font-size:1.5vh;text-align:center">Access OIA's comprehensive database of resources available for you to choose the best for yourself.</p>
        <div>
          <form @submit.prevent="submitForm" style="width:100vw">

            <div class="ib">
              <label for="fullname" style="color:gray;width:100vw;">Username * <br /></label>
              <input id="fullname" class="inpClear inp" style="width:90vw" type="text" @focus="changeLabelColor(4)"
                @blur="resetLabelColor(4)" placeholder="Username" v-model="username" />
                <div style="width:100%;height:3vh;overflow:hidden">
              <div v-if="validateUsername(username) && username.length >=4" class="l p9" style="color:green;font-size:.8em;line-height:1">Username is available</div>
                <div v-else-if="validateUsername(username) != true && username.length >= 4" class="l p9" style="color:red;font-size:.8em;line-height:1;text-transform: capitalize;">✖ Username cannot have spaces / special characters / Username in use</div>
            </div>
          </div>
            <div class="ib">
              <label for="email" style="width:100vw;color:gray;">Email *</label>
              <input id="email" class="inpClear inp" style="width:90vw" type="email" @focus="changeLabelColor(0)"
                @blur="resetLabelColor(0)" placeholder="name@example.com" v-model="email" />
                <div style="width:100%;height:3vh;overflow:hidden">
              <div v-if="checkEmail(email)" class="l p9" style="color:green;font-size:.8em;line-height:1;">Email is valid</div>
              <div v-else-if="checkEmail(email) != true && email.length >= 1" class="l p9" style="color:red;font-size:.8em;line-height:1;text-transform: capitalize;">✖ This is not
                a valid email</div>
              </div>
            </div>



            <div class="ib">
              <label for="password" style="color:gray;">Password *</label>
              <div class="passwordStatement" style="display:inline-block">

                <input id="password" class="inpClear inp" style="width:90vw" type="password"
                  @focus="changeLabelColor(1)" @blur="resetLabelColor(1)" placeholder="Password" v-model="password" />
                  <div style="width:100%;height:fit-content;overflow:hidden;padding-top:1vh">

                <div v-if="checkPassword(password)" class="l2 p9" style="color:green;font-size:.8em">Password is
                  valid</div>
                <div v-else-if="!checkPassword(password) && password.length >= 8" class="l2 p9"
                  style="color:red;font-size:.8em;line-height:1;text-transform: capitalize;">✖ This is not a valid password</div>
                <div v-if="(password.trim().length < 8)" class="l" style="color:gray;font-weight:lighter;font-size:.8em;line-height:1">Password must contain
                  at least 8 characters with 1 uppercase<br />& 1 lowercase.</div>
              </div>
            </div>
            </div>





            <div class="ib" style="margin-top:3vh">
              <label for="confirmPassword" style="width:100vw;color:gray;">Confirm Password *</label>


              <input id="confirmPassword" class="inpClear inp" style="width:90vw" type="password"
                @focus="changeLabelColor(2)" @blur="resetLabelColor(2)" placeholder="Password"
                v-model="confirmPassword" />
                <div style="width:100%;height:3vh;overflow:hidden">
              <div v-if="checkMatch(password, confirmPassword) === true && password != '' && confirmPassword != ''"
                class="l p9" style="color:green;font-size:.8em;line-height:1;">Passwords match</div>
              <div v-if="checkMatch(password, confirmPassword) === false && password != '' && confirmPassword != ''"
                class="l p9" style="color:red;font-size:.8em;line-height:1;text-transform: capitalize;">✖ Passwords do not match</div>
            </div>
          </div>
            <div class="errMsg ft l" style="height:33px;font-size:.7em">{{ errMsg }}</div>
        
            <div style="width:100vw;height:fit-content">
            
              <button type="submit" v-on:click="register()" class="primarybg brButton hv" style="height:4vh">Submit</button>

            </div>
          </form>
        </div>
      </div>
    </div>

  </div> -->
  <div class="tabletView" style="overflow-x:hidden;width:99vw">

<div style="display:flex;width:100vw;height:90vh;min-width:700px;min-height:300px;margin-top:6vh;overflow:hidden;border-radius:4px;margin-bottom:10vh">
    <div style="width:60%">
        <form style="height:100vh;width:100%" @submit.prevent="login">
        <div style="width:80%;height:100%;margin:auto;background-color:rgba(255, 255, 255, 0.413);text-align:center;float:right;border-radius:4px;">
          <p class="ibn infoHeader primary" style="text-align:left;width:70%;margin:auto">Sign Up</p>

            <div style="padding-top:2vh;width:70%;height:fit-content;margin:auto;display:flex;flex-direction:column;gap:1vh">
              
                    <div style="padding-top:2vh;width:70%;height:fit-content;margin:auto;display:flex;flex-direction:column;">
                <p class="ibn primary">Have an Account? <span>
                    <router-link to="/Login" style="text-decoration:none;">Log In Here</router-link> or
                </span></p>
                <a href="#" class="google-login-button" @click="signInWithGoogle(users)">
                      <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="Google Logo" width="18" height="18">
                        <span>Sign in with Google</span>
                    </a>
            </div>
                

              <div style="width:100%;height:30%;display:flex;justify-content:space-between;min-height:101px">

                <div style="width:40%;display:flex;flex-direction:column;text-align:left;">
                    <p class="ibn infoMinute primary" style="color:gray;font-weight:350;min-width:229px">NRIC/FIN/Passport No.</p>
                    <input class="inpType" type="text" placeholder="Enter Your NRIC" style="margin-top:-1vh" name="nric" v-model="nric"/>
                    <div style="height:24px;width:100%;text-align:right">
                      <div v-if="checkNRIC(nric)" style="color:green;font-weight:lighter">Valid NRIC</div>
                    <div v-else-if="!checkNRIC(nric) && nric.length >=9" style="color:red;font-weight:lighter">Invalid NRIC</div>
                    </div>
                </div>
                </div>
                
                <div style="width:100%;height:30%;display:flex;flex-direction:column">
                  <div style="display:flex;width:100%;justify-content:space-between">
                  <div style="width:50%;height:100%;display:flex;flex-direction:column;text-align:left">
                    <p class="ibn infoMinute primary" style="color:gray;font-weight:350">Full Name</p>
                    <input class="inpType" type="text" placeholder="Name" style="margin-top:-1vh" name="username" v-model="username"/>
                </div>
                <div style="width:45%;height:100%;display:flex;flex-direction:column;text-align:left">
                    <p class="ibn infoMinute primary" style="color:gray;font-weight:350">Date of Birth</p>
                    <input class="inpType" type="date" style="margin-top:-1vh" name="dob" v-model="dob"/>
                  
                </div>
              </div>
              <div style="min-height:24px;width:100%;text-align:right;max-height:24px">
                      <p v-if="calculateAge(dob) >=18" style="color:green;font-weight:lighter">You can sign up for Omnium</p>
                      <p v-else-if="dob != ''" style="color:red;font-weight:lighter">You cannot sign up for Omnium </p>
                    </div>


                </div>

                <div style="width:100%;height:30%;display:flex;flex-direction:column;text-align:left">
                    <p class="ibn infoMinute primary" style="color:gray;font-weight:350">Email</p>
                    <input class="inpType" type="text" placeholder="Enter Your Email" style="margin-top:-1vh" name="email" v-model="email"/>
                    <div style="min-height:24px;width:100%;text-align:right">
                      <div v-if="checkEmail(email)" style="color:green;font-weight:lighter">Email is valid</div>
                    <div v-else-if="checkEmail(email) != true && email.length >=5" style="color:red;font-weight:lighter">Invalid Email</div>
                    </div>
                  
                </div>
               
                <div style="width:100%;height:30%;">
                  <div style="width:100%;height:100%;display:flex;justify-content:space-between">

                  <div style="width:45%;display:flex;flex-direction:column;text-align:left;">
                    <p class="ibn infoMinute primary" style="color:gray;font-weight:350">Password</p>
                    <input class="inpType" type="password" placeholder="Enter Your Password" style="margin-top:-1vh" name="password" v-model="password"/>
                    <div style="min-height:40px;width:100%;text-align:right">
                      <div v-if="password.length === 0" style="color:gray;font-size:.7em">Must contain at least 8 characters, 1 uppercase & 1 lowercase</div>
                      <div v-if="checkPassword(password) === true" style="color:green;font-weight:lighter">Password is valid</div>
                      <div v-else-if="checkPassword(password) === false && password.length >= 8" style="color:red;font-weight:lighter">Password does not fit requirements</div>
                    </div>

                </div>
                <div style="width:45%;display:flex;flex-direction:column;text-align:left;">
                    <p class="ibn infoMinute primary" style="color:gray;font-weight:350">Confirm Password</p>
                    <input class="inpType" type="password" placeholder="Enter Your Password" style="margin-top:-1vh" name="confirmPassword" v-model="confirmPassword"/>
                    <div style="min-height:24px;width:100%;text-align:right">
                      <div v-if="checkMatch(password, confirmPassword) === true && password != '' && confirmPassword != ''" style="color:green;font-weight:lighter">Passwords match</div>
                      <div v-if="checkMatch(password, confirmPassword) === false && password != '' && confirmPassword != ''" style="color:red;font-weight:lighter">Passwords do not match</div>
                    </div>
                </div>

                </div>

                
              </div>

                
                <div style="width:100%;height:fit-content">
                  <button v-on:click="register()" class="brButton" style="width:100%;height:5vh;margin-top:2vh">Submit</button>
                   
                </div>
                <div style="width:100%;height:8vh;min-height:30px;padding-top:1vh">
                <p class="errMsg ibn l animate__animated animate__fadeIn" style="animation-duration:.2s" v-if="errMsg">{{ errMsg }}</p>
                </div>
                
            </div>
           

        </div>
    
    </form>



    </div>
    <div style="width:30%;background-image:url('https://images.pexels.com/photos/777059/pexels-photo-777059.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2');background-size:cover;background-position:left;filter:blur(2px)"></div>

</div>

</div>

<div class="mobileView">
  <div style="width:100vw;height:80vh;min-width:320px;display:flex;justify-content:center;margin-top:6vh;margin-bottom:1vh">
  <div style="width:95vw;height:100%;display:flex;flex-direction:column;border:1px solid gray;border-radius:4px;padding-top:1.5vh">
    <div style="width:100%;height:38px;display:flex;border-bottom:1px solid darkgray;box-shadow: 0px 10px 5px 0px rgba(217,217,217,0.75)">
      <div class="hv primarybg" style="color:white;width:50%;text-align:center" id="signUpOption" @click="setOptionSelected(0)">
        <p style="padding-top:.5vh" class="infoSection">Sign Up</p>
      </div>
      <div style="width:50%">
      <router-link to="/Login" class="hv" style="color:gray;text-align:center" id="signInOption">
        <p style="padding-top:.5vh" class="infoSection">Sign In</p>

      </router-link>
    </div>
  </div>
  
    <div style="height:90%;padding-top:3vh;display:flex;justify-content:left;overflow-y:scroll" id="selectSignUp">
      
      <div style="width:100%;display:flex;flex-direction:column;gap:3vh">
        <div style="width:90%;height:10%;margin-left:auto;margin-right:auto;margin-top:2vh">
        <a href="#" class="google-login-button" style="width:100%" @click="signInWithGoogle(users)">
                              <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="Google Logo" width="18" height="18">
                                <span>Sign in with Google</span>
                            </a>
      </div>
        <div style="padding-left:2vw;width:80%;display:flex;flex-direction:column">
          <p class="nw primary ibn infoMinute">NRIC/FIN/Passport No.</p>
          <input name="nric" v-model="nric" style="min-width:fit-content" type="text" class="inpClear" placeholder="NRIC/FIN/Passport No."/>
          <div style="height:12px;width:100%;text-align:left">
                      <div v-if="checkNRIC(nric)" style="color:green;font-weight:lighter">Valid NRIC</div>
                    <div v-else-if="!checkNRIC(nric) && nric.length >=9" style="color:red;font-weight:lighter">Invalid NRIC</div>
                    </div>

        </div>
        <div style="padding-left:2vw;width:80%;display:flex;flex-direction:column">
          <p class="nw primary ibn infoMinute">Name.</p>
          <input name="username" v-model="username" style="min-width:fit-content" type="text" class="nw inpClear" placeholder="Full Name" />

        </div>

        <div style="padding-left:2vw;width:80%;display:flex;flex-direction:column;height:min-content">
          <p class="nw primary ibn infoMinute">Date of Birth.</p>
          <input name="dob" v-model="dob" style="min-width:fit-content" type="date" class="nw inpClear"/>
          <div style="height:12px;width:100%;text-align:left">
                      <p v-if="calculateAge(dob) >=18" style="color:green;font-weight:lighter">You can sign up for Omnium</p>
                      <p v-else-if="dob != ''" style="color:red;font-weight:lighter">You cannot sign up for Omnium</p>
                    </div>
        </div>

        <div style="padding-left:2vw;width:80%;display:flex;flex-direction:column;height:min-content">
          <p class="nw primary ibn infoMinute">Email.</p>
          <input name="email" v-model="email" style="min-width:fit-content" type="email" class="nw inpClear" placeholder="Email"/>
          <div style="min-height:12px;width:100%;text-align:left;max-height:12px">
                      <div v-if="checkEmail(email)" style="color:green;font-weight:lighter">Email is valid</div>
                    <div v-else-if="checkEmail(email) != true && email.length >=5" style="color:red;font-weight:lighter">Invalid Email</div>
                    </div>
        </div>
        <div style="padding-left:2vw;width:80%;display:flex;flex-direction:column">
          <p class="nw primary ibn infoMinute">Password.</p>
          <input name="password" v-model="password" style="min-width:fit-content" type="password" class="nw inpClear" placeholder="Password"/>
          <div style="height:28px;width:100%;text-align:left">
                      <div v-if="password.length === 0" style="color:gray;font-size:.7em">Must contain at least 8 characters, 1 uppercase & 1 lowercase</div>
                      <div v-if="checkPassword(password) === true" style="color:green;font-weight:lighter">Password is valid</div>
                      <div v-else-if="checkPassword(password) === false && password.length >= 8" style="color:red;font-weight:lighter">Password does not fit requirements</div>
                    </div>
        </div>
       
        <div style="padding-left:2vw;width:80%;display:flex;flex-direction:column;padding-bottom:6vh">
          <p class="nw primary ibn infoMinute">Confirm Password.</p>
          <input name="confirmPassword" v-model="confirmPassword" style="min-width:fit-content" type="password" class="nw inpClear" placeholder="Confirm Password"/>
          <div style="height:12px;width:100%;text-align:left">
                      <div v-if="checkMatch(password, confirmPassword) === true && password != '' && confirmPassword != ''" style="color:green;font-weight:lighter">Passwords match</div>
                      <div v-if="checkMatch(password, confirmPassword) === false && password != '' && confirmPassword != ''" style="color:red;font-weight:lighter">Passwords do not match</div>
                    </div>

        </div>
      </div>
      

    </div>
    <div style="height:min-content;width:100%;justify-content:center;display:flex;flex-direction:column">
      <button v-on:click="register()" class="brMobile" style="width:95%;margin-left:auto;margin-right:auto">Submit</button>
      <div style="height:8vh;margin:auto">
        <p class="errMsg ibn l animate__animated animate__fadeIn" style="animation-duration:.2s;width:95%;margin-left:auto;margin-right:auto" v-if="errMsg">{{ errMsg }}</p>

      </div>
    </div>


  
    <div v-if="selectedOption === 1" style="height:90%" id="selectSignIn">
    
  
    </div>
  </div>
</div>

  


</div>


</template>


<script setup>
import { ref } from 'vue'
import { createUserWithEmailAndPassword, getAuth,GoogleAuthProvider,signInWithPopup } from '@firebase/auth'
import { useRouter } from 'vue-router';
import { getFirestore, addDoc, collection } from '@firebase/firestore';
import { app, calculateAge, checkNRIC } from '@/configs'

const email = ref('')
const password = ref('')
const router = useRouter();
const confirmPassword = ref('')
var errMsg = ref('');
const username = ref('');
const dob = ref('')
const nric = ref('')


// function checkUsername(input) {
//   const regex = /^(?=[a-zA-Z0-9._]{5,20}$)(?!.*[_.]{2})[^_.].*[^_.]$/;
//   if (!regex.test(input) === true) {
//     return false
//   }
//   else {
//     return true
//   }

// }



function checkPassword(input) {
  const regex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,31}$/;
  if (!regex.test(input) === true) {
    return false;
  }
  else {
    return true;

  }
}

function checkEmail(input) {
  const regex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
  if (!regex.test(input) === true) {
    //invalid email
    return false;
  }
  else {
    return true;

  }
}

function checkMatch(input, confirmInput) {
  if (input.trim() != confirmInput.trim()) {
    return false;
  }
  else {
    return true;
  }
}
function rQuotes(input) {
  // regex will read string with the quotes, use this to remove them, works for ref const specifically... to alter for others, remove .value
  return input.value.replace(/['"]+/g, '')
}

const checkInput = () => {
  const emailPass = checkEmail(rQuotes(email))
  const passwordPass = checkPassword(rQuotes(password))
  const passwordMatch = checkMatch(rQuotes(password), rQuotes(confirmPassword))
  const dobValidated = calculateAge(rQuotes(dob)) >= 18 ? true : false;
  const nricPass = checkNRIC(rQuotes(nric));
  const usernameInputted = String(username.value).trim().length >= 5 ? true : false;



  return emailPass + passwordPass + passwordMatch + dobValidated + nricPass + usernameInputted
}

 
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

const register = () => {
  if (checkInput() === 6) {
    createUserWithEmailAndPassword(getAuth(), email.value.trim(), password.value.trim())
      .then((userCredentials) => {
        const user = userCredentials.user;
        const UCuserID = user.uid;
        addDoc(collection(db, 'omniumISSUsers'), {
        username: username.value,
        dateOfBirth: dob.value,
        assignmentArray: [],
        emailRef: email.value,
        from: '',
        gender: '',
        occupation: '',
        userID: UCuserID,
        userType: "User",
        nric: nric.value,
        mobile: '',
        purchasedPolicies: []


        });
        console.log("Successful");
        router.push('/');

      })
      .catch((error) => {
        console.log(error.code);
        switch (error.code) {
          case "auth/email-already-exists":
            errMsg.value = "The provided email is already in use by an existing user.";
            break;
          case "auth/invalid-email":
            errMsg.value = "The provided email is invalid.";
            break;
          case "auth/missing-email":
            errMsg.value = "You have not entered an email.";
            break;
          case "auth/email-already-in-use":
            errMsg.value = "The provided email is already in use by an existing user.";
            break;
          default:
            errMsg.value = error.code;

            break;
        }
      })
     
  }
  else {
    errMsg.value = "One or more fields are invalid";
  }

  setTimeout(() => {
        errMsg.value = '';
      }, 2000);
};





</script>

<script>
import { onSnapshot } from 'firebase/firestore';
import { query } from 'firebase/firestore';
// import { ref, onUnmounted,onMounted } from 'vue';
import { onUnmounted } from 'vue';
const db = getFirestore(app);


export default {
  data() {


    return {
      nricValid: 'False',
      nric: '',
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
      mobile: '',
      users: ref([]),
      selectedOption: 0
    }
  },

  methods: {
    validateUsername(input) {
      var availableUsername = true;
      const regex = /^(?=[a-zA-Z0-9._]{5,20}$)(?!.*[_.]{2})[^_.].*[^_.]$/;
      if (!regex.test(input) === true) {
        return false
      }
      else {
        for (let i = 0; i < this.users.length; i++) {
          if (String(input).toLowerCase() === this.users[i].username.toLowerCase()) {
            availableUsername = false;
          }
        }
        return availableUsername
      }
    },

    changeLabelColor(index) {
      this.labelColors[index] = "black";
    },
    resetLabelColor(index) {
      this.labelColors[index] = "gray";
    },

    submitForm() {
      this.isSubmitted = true;
      this.$v.$touch();
      if (this.$v.$invalid) {
        return;
      }
      alert("Success" + JSON.stringify(this.userForm));
    },

    setOptionSelected(val) {
  this.selectedOption = val;
  },

  findEmail(email) {
    if (this.users.find(u => u.emailRef === email) === undefined) {
      return false
    }
    else {
      return true
    }
  }




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
          phone: doc.data().phone,
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
};


</script>



<style>


.firstlastFlex {
  display: flex;
}

label {
  width: 150px;
  float: left;
  font-weight: lighter;
  text-align: left;

}

.dispFlex {
  display: flex;
  align-items: center;
  width: 100%;
  height: 45px;
}

::placeholder {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
}


.form-group {
  width: 100vw
}

.label-column {
  padding: 10px;
}

.input-column {
  width: 70vw;
  padding: 10px
}


input {

  font-size: 10px;
}

.assistSide {
  width: 40%;
  height: fit-content;
  padding-bottom: 1%;
  margin-top: 5%;
  border-radius: 10px;
  margin-left: 1%;
}

</style>
