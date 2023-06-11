<template>
    <div style="width:90vw;height:100vh;padding-top:11vh;text-align:center;margin-left:auto;margin-right:auto">
        <p class="ibn infoHeader primary">Thank you for sending an inquiry!</p>
        <p class="ibn infoMinute second">Please be patient as you wait for an advisor to pick up your case.</p>
        <div style="width:50%;margin-top:2vh;margin-left:auto;margin-right:auto;display:flex;justify-content: center;gap:2vw;">
            <button v-on:click="go('/Advisor_Channel_Gateway')" class="brMobile mh">View Inquiry</button>
            <button v-on:click="go('/')" class="brMobile mh" style="background-color:whitesmoke;color:rgba(70, 70, 70, 0.669);border:1px solid #c8bbc0">Home</button>
        </div>
    </div>
    

</template>

<script>
export default {
    data() {
        return {

        }
    },
    methods: {
        go(val) {
      this.$router.push({ path: val })
    },
    }
}
</script>

<style>
</style>