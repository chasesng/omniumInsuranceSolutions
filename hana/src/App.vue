
<template>
  <!-- <div id="app" class="bgControl" :style="{ backgroundImage: `url(${require('./assets/whitebg.jpg')})`}"> -->
  <!-- <div id="app" class="bgControl" style="background-color:rgba(243,246,251,255)"> -->
  <div id="app" class="bg" style="background-color:#f5f5f5 ">


    <LoadingScreen v-if="isLoading"></LoadingScreen>
    <br />

    <headerControl />

    <footerControl />

  </div>
</template>
  
<script>
import LoadingScreen from "@/subComponent/loadingScreen";
import headerControl from './allVisible/headerControl.vue'
import footerControl from '@/allVisible/footerControl.vue'

export default {

  name: "App",
  state: {
    user: {
      loggedIn: false,
      data: null
    },

    getters: {
      user(state) {
        return state.user
      }
    },
    mutations: {
      SET_LOGGED_IN(state, value) {
        state.user.loggedIn = value;
      },
      SET_USER(state, data) {
        state.user.data = data;
      }
    }

  },
  data() {
    return {
      isLoading: true,
      
    }
  },
  methods: {
    
  },
  mounted() {
    setTimeout(() => {
      this.isLoading = false;
    }, 1500);
  },


  components: {
    headerControl,
    footerControl,
    LoadingScreen,

  },


}

</script>
  
<style>
::placeholder {
  color: gray;
  filter: opacity(.6)
}
</style>


<style scoped></style>
  