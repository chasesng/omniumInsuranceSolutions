<template>
<div style="width:100vw;height:100vh;background:linear-gradient(0deg, rgba(203,203,203,1) 10%, rgba(245,245,245,1) 100%);">

    <div style="width:90vw;height:100vh;padding-top:21vh;text-align:center;margin-left:auto;margin-right:auto;">
         <p class="ibn infoSection primary">Welcome to the Advisor Channel</p>
         <p class="ibn second">Please agree to the terms and conditions to access the platform's Advisor Channel.</p>
         <div style="display:flex;;gap:1vh;justify-content: center;padding-bottom:2vh;width:fit-content;margin-left:auto;margin-right:auto;">
            <router-link to="/TermsOfUse" style="text-transform:capitalize">i have read and accept the terms and conditions of omnium insurance.</router-link>
         <input type="checkbox" v-model="isChecked" style="width:fit-content;margin-left:auto;margin-right:auto;transform:scale(1.2);margin-top:.2em"/>
        </div>
        <button style="width:140px;" class="mh brMobile" :disabled="!isChecked" v-on:click="go('/Advisor_Channel')">Enter</button>

       
    </div>
</div>
</template>

<script>

export default {

    data() {
        return {
            isChecked: false
        }
    },
    methods: {
        go(val) {
      this.$router.push({ path: val })
    },
   
    }
}
</script>

<style scoped>
button:disabled {
    opacity:.5
}
</style>