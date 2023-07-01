<template style="z-index:2">
<div v-show="$route.name !== 'loading'">

  <div class="tabletView selectDisable">

    <div id="headerTablet" 
      style="animation-duration:.3s;padding-top:1vh;width:100vw;height:6vh;display:flex;justify-content:left;background-color: hsla(0, 0%, 96%, 0.8);backdrop-filter:blur(2px);border-bottom:1px solid lightgray;z-index:3;position:fixed;top:0">

      <router-link to="/" @click="closeMenu()" class="infoMinute nw" style="margin-left:4vw;text-decoration:none;color:rgb(0,0,10);font-weight:350;text-transform:capitalize;margin-top:auto;margin-bottom:auto">omnium insurance solutions</router-link>

      <div class="ibn header-links infoMinute" style="display:flex;gap:3vw;padding-top:.1em;margin-left:3vw">
        <p class="pointer dividerLabel" @click="go('/')">Home</p>
        <p class="pointer dividerLabel" @click="go('/Policies')">Policies</p>
        <p class="nw pointer dividerLabel" @click="go('/About_OISS')">About Us</p>
        <p class="pointer dividerLabel" @click="go('/FAQ')">FAQ</p>
        <p class="pointer dividerLabel" @click="go('/Advisors')">Our Advisors</p>
        <p v-if="isLoggedin" class="ibn pointer nw dividerLabel" @click="checkGo('/Advisor_Channel_Gateway', isLoggedin)">Advisor Channel</p>
      </div>

      <div class="header-links infoMinute " style="color:gray;display:flex;justify-content:left;padding-top:.1em;margin-left:3vw">
        <div style="height:30px;position:absolute;right:3vw" v-if="!isLoggedin" @click="go('/Login')" class="ibn hv dividerLabel">
        <p>Login</p>
        </div>
      <div style="width:fit-content;height:30px;position: absolute;right:3vw;" v-if="isLoggedin" @click="go('/Profile')" class="ibn hv dividerLabel">
        <p class="infoMinute">{{usname}}</p>
      </div>

      </div>
    </div>
    <!-- <div :style="{display: notificationVisible}">
    <div style="display:flex;gap:1vw;padding-left:6vw;color:rgb(128, 128, 128);width:100vw;height:3vh;border-bottom:1px solid gainsboro;background-color:rgba(237, 231, 225, .8);z-index:2;position:fixed;top:6vh;overflow:hidden">
      <i class="fa-regular fa-bell" style="padding-top:.5vh"></i> 
      <p style="height:fit-content">Are you an insurance advsisor? Learn more about what Omnium can do for you!</p>
      <i @click="closeNotification()" class="hv fa-solid fa-x" style="float:right;padding-top:.5vh;position:fixed;right:3vw"></i>

    </div>
  </div> -->
  </div>

  <div class="mobileView">
    <div class="headerContainer ms"
      style="width:100vw;height:8vh;display:flex;justify-content:space-between;background-color: hsla(0, 0%, 96%, 0.8);backdrop-filter:blur(2px);z-index:2;position:fixed;top:0">
      <router-link to="/" @click="closeMenu()" class="infoSection" style="text-decoration:none;color:rgb(0,0,10);padding-top:1em;font-weight:350;text-transform:capitalize;padding-left:2vw">omnium insurance solutions</router-link>
      <i @click="toggleMenu()" class="infoTitle fa-solid fa-bars" style="color:darkgray;padding-top:1em;padding-right:4vw"></i>

    </div>
  </div>

<div class="mobileView">

  <div :style="{display: menuVisible}" style="width:100vw;height:100vh;background-color:rgb(245, 245, 245);position:fixed;overflow:hidden;z-index:4;top:7vh">
    
    <div style="width:90vw;margin-left:auto;margin-right:auto;font-weight:350;display:flex;flex-direction:column;gap:2vh;padding-left:2vw;padding-top:2vh">
      <div class="infoMinute" style="display:flex;justify-content:space-between" @click="go('/'), closeMenu()">
        <p>Home</p>
        <i class="fa-solid fa-arrow-right-long" style="padding-top:1vh"></i>
      </div>
      <div @click="go('/Policies'), closeMenu()" class="infoMinute" style="display:flex;justify-content:space-between">
        <p>Policies</p>
        <i class="fa-solid fa-arrow-right-long" style="padding-top:1vh"></i>
      </div>
      <div @click="go('/About_OISS'), closeMenu()" style="display:flex;justify-content:space-between">
        <p>About Us</p>
        <i class="fa-solid fa-arrow-right-long" style="padding-top:1vh"></i>
      </div>
      <div @click="go('/Advisors'), closeMenu()" style="display:flex;justify-content:space-between">
        <p>Our Advisors</p>
        <i class="fa-solid fa-arrow-right-long" style="padding-top:1vh"></i>
      </div>
      <div @click="checkGo('/Advisor_Channel_Gateway', isLoggedin), closeMenu()" style="display:flex;justify-content:space-between">
        <p>Advisor Channel</p>
        <i class="fa-solid fa-arrow-right-long" style="padding-top:1vh"></i>
      </div>
      <div @click="go('/FAQ'); closeMenu()" style="display:flex;justify-content:space-between">
        <p>FAQ</p>
        <i class="fa-solid fa-arrow-right-long" style="padding-top:1vh"></i>
      </div>
    </div>

    <div style=";width:90vw;height:30vh;margin-top:7vh;margin-left:auto;margin-right:auto">
    
      <div v-if="!isLoggedin" style="display:flex;justify-content:center;gap:2vw">
        <router-link to="/Login" @click="closeMenu()">
      <button class="brMobile" style="background-color:gray;color:white">Log in</button>
      </router-link>
      <router-link to="/Register" @click="closeMenu()">
      <button class="brMobile" style="background-color:darkgray;color:white">Sign up</button>
      </router-link>
      </div>

      <div v-else-if="isLoggedin" style="display:flex;justify-content:center">
        <router-link to="/Profile" @click="closeMenu()">
      <button class="brMobile" style="background-color:gray;color:white">Profile</button>
      </router-link>
      </div>
    </div>
  </div>
</div>

</div>

  <router-view />
</template>


<script setup>
import { onMounted, ref } from 'vue'
import { getAuth, onAuthStateChanged } from '@firebase/auth';
const isLoggedin = ref(false);
var usname = ref('');

let auth;


onMounted(() => {
  auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      isLoggedin.value = true;
      usname = user.email;


    }
    else {
      isLoggedin.value = false;
    }
    return {
      usname
    }
  })
})



</script>

<script>
// let lastScrollTop =
//   window.scrollY || document.documentElement.scrollTop;
// let pause = false;

// window.addEventListener(
//   'scroll',
//   function handleScroll() {
//     if (pause) {
//       return;
//     } else {
//       const scrollTopPosition =
//       window.scrollY || document.documentElement.scrollTop;
//       const headerTablet = document.getElementById('headerTablet');
//       if (!headerTablet || headerTablet.offsetHeight === 0) {
//         return;
//       }
//       else {
//         if ((scrollTopPosition > lastScrollTop) && (pause == false)) {
//         headerTablet.classList.add('animate__animated', 'animate__slideOutUp');
//       } else if ((scrollTopPosition < lastScrollTop) && (pause == false)) {
//         headerTablet.classList.remove('animate__animated', 'animate__slideOutUp');
//         headerTablet.classList.add('animate__animated', 'animate__slideInDown');
//       }
//       lastScrollTop = scrollTopPosition <= 0 ? 0 : scrollTopPosition;
//       }


//     }
//     pause = true;
//       setTimeout(function () {
//         pause = false;
//       }, 50);
//   }
// );


export default {
 
  components: {
    
  },

  data() {
    return {
      menuVisible: 'none',
      notificationVisible: 'block',
      showSuccess: false,


    }
  },
 
  methods: {
    go(val) {
      this.$router.push({ path: val })
    },

    toggleMenu() {
      this.menuVisible = this.menuVisible == 'none' ? 'block' : 'none';
    },

    closeMenu() {
      this.menuVisible = 'none'
    },

    closeNotification() {
      this.notificationVisible = this.notificationVisible == 'none' ? 'block' : 'none';
    },
    checkGo(val, isLoggedin) {
      if (isLoggedin) {
        this.$router.push({ path: val })
      }
      else {
        this.$router.push({ path: '/Register' })
      }
    }
    

   
  },

  }

</script>

<style scoped>

.headerContainer {
  /* between 768 and 1200 */
    font-size: 16px
  }

.infoHeader {
    font-size: 18px;
  }
  
.hideHeader {
  top:-6vh;
  background-color:red;
  transition: all .3s
}
.infoTitle {
  font-size:24px;
}

.headerLink {
  padding:0px 1vw 0px 1vw;
  height:30px;
}

.mobileView {
  display:none
}
@media screen and (max-width: 1023px) {
  .mobileView {
    display: block;
  }

  .tabletView {
    display: none;
  }
}

@media screen and (max-width: 768px) {

  /* Adjust font size for smaller screens */
  .headerContainer {
    font-size: 16px;
  }

  .infoHeader {
    font-size: 16px;
  }

  .infoTitle {
  font-size:22px;
}
}

@media screen and (min-width: 1200px) {

  /* Adjust font size for larger screens */
  .headerContainer {
    font-size: 22px;
  }

  .infoHeader {
    font-size: 24px;
  }

  .infoTitle {
  font-size:30px;
}
}

@media screen and (min-width: 1600px) {

  /* Adjust font size for even larger screens */
  .headerContainer {
    font-size: 24px;
  }

  .infoHeader {
    font-size: 30px;
  }

  .infoTitle {
  font-size:36px;
}
}

.header-links p {
  padding:0px .6vw 0px .6vw;
  height:30px;
}

.signUp:hover {
  background-color: #5f545e;
  color: white;
  border-bottom: 1px solid gray;
  transition-duration: 0.3s;
  cursor: pointer;
  transform: scale(1.1);

}</style>
