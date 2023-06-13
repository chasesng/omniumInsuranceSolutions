
import { createApp } from "vue";
import { createRouter,createWebHistory } from "vue-router";
import './allcss/cssFormats.vue';
import VueSplide from '@splidejs/vue-splide';
import '@splidejs/vue-splide/css';
import './assets/fonts/Quicksand-Regular.ttf'


import { initializeApp } from "firebase/app";

export const firebaseConfig = {
  apiKey: "AIzaSyD8kn26Sj-wvYhB6h-vALgxWoZ2UyujHyI",
  authDomain: "hana-firebase-auth.firebaseapp.com",
  projectId: "hana-firebase-auth",
  storageBucket: "hana-firebase-auth.appspot.com",
  messagingSenderId: "257456893215",
  appId: "1:257456893215:web:7da412256ffcbfeb62142a",
  measurementId: "G-VNEDYMGDTL"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

import App from './App'
import indexPage from './components/indexPage'
import signUp from './authentication/signUp.vue'
import loginPage from './authentication/loginPage'
import { getAuth, onAuthStateChanged } from "firebase/auth";
import profilePage from './subComponent/profilePage';
import reclaimPassword from './authentication/reclaimPassword.vue'

import landing from './authentication/landingView.vue'

import loading from './subComponent/loadingScreen'
import aboutUs from './components/aboutUs.vue'
import policies from './components/allPolicies.vue'
import assess from './subComponent/assessmentPage.vue'
import acGate from './subComponent/acGate.vue'
import advisorChannel from './subComponent/advisorChannel'
import TandC from './subComponent/termsAndConditions.vue'
import enquiryView from './subComponent/enquiryView.vue'
import policyView from './subComponent/policyView.vue'
import faq from './subComponent/faqPage.vue'
import sentPassed from './subComponent/sentInquirySuccess.vue'

const router = createRouter({
    scrollBehavior() {
        // always scroll to top
        return { top: 0 }
      },
    history: createWebHistory(),
    routes : [
    {path: '/', name: "Index", component: indexPage},
    {path: "/Register", name: "l", component: signUp},
    {path: "/Login", name: "Login", component: loginPage},
    {path: "/Profile", name: "userProfile", component: profilePage, meta: { requiresAuth: true}},
    {path: "/ForgotPassword", name: "reclaimPW", component: reclaimPassword},

    {path: "/Landing", name: 'auth', component: landing},
    {path: "/Loading", name: 'loading', component: loading},
    {path: "/About_OISS", name: 'aboutUs', component: aboutUs},
    {path: "/Policies/", name: "allPolicies", component: policies},
    {path: "/Assessment", name: "assess", component: assess, meta: {requiresAuth: true}},
    {path: "/Advisor_Channel_Gateway", component: acGate, meta: {requiresAuth: true}},
    {path: "/Advisor_Channel", component: advisorChannel, meta: {requiresAuth: true}},
    {path: "/Enquiry/:enquiryID", component: enquiryView, props: true, meta: { requiresAuth: true}},
    {path: "/TermsOfUse", component: TandC, meta: {requiresAuth: true}},
    {path: "/Policy/:policyID", component: policyView, props:true},
    // {path: "/AddPolicy", component: adminAddPolicy},
    {path: "/FAQ", component: faq},
    {path: "/ThankYou", component: sentPassed},
    






    
















],

})

const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const removeListener = onAuthStateChanged(
      getAuth(),
      (user) => {
        removeListener();
        resolve(user);
      },
      reject 
    );
  }
  )}

router.beforeEach(async (to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (await getCurrentUser()) {
      next();
    } else {
      next("/");
    }
  } else {
    next();
  }
})
createApp(App).use(router).use(VueSplide).mount("#app");
export { app };
