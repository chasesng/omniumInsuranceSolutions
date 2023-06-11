<template>
    <div class="tabletView selectDisable" style="overflow:hidden">
        <div style="width:100vw;height:300vh;padding-bottom:10vh;padding-top:3vh;text-align:center">
            <div style="display:flex;flex-direction:column-reverse;height:50vh;text-align:center;background-image:url('https://images.pexels.com/photos/1595388/pexels-photo-1595388.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2');background-size:cover;background-position:0% 40%"
                class="ibn infoHeader">
                <p class="ibn infoHeader"
                    style="text-transform:capitalize;color:white;background-color: rgba(0, 0, 0, 0.7);padding:1vh 0vh 1vh 0vh;">
                    why choose omnium?</p>
            </div>
            <div style="padding-top:2vh">
            <div style="display:flex;flex-direction:column;margin:auto;width:100vw;height:50vh">
                
                <div style="display:flex;margin:auto;width:60vw;justify-content:space-between;height:35vh">
                    <div style="display:flex;flex-direction:column;width:50%">
                    <p class="infoSection primary" style="font-weight:600;text-transform:capitalize">How do we help you?</p>
                    <p class="ibn infoMinute second">Omnium is at its core a means to an end.<br/>Insurance has always been overcomplicated, with a plethora of steps and hurdles to jump through for something everyone needs.<br/><br/>Every step is now done on one website, with all the support you may need.</p>
                    </div>
                    <div style="width:45%;border-radius:4px;background-image:url('https://images.pexels.com/photos/7735630/pexels-photo-7735630.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2');background-size:cover;background-position:top"></div>

                </div>
             
            </div>
            <div style="background-color:rgb(245, 245, 245);width:100vw;height:25vh">
                <p class="infoSection primary" style="font-weight:600;text-transform:capitalize;padding-top:2vh">Insurance has never been simpler</p>
                <p style="margin:auto;width:50vw;margin-bottom:2vh" class="ibn infoMinute second">We will be by your side every step of the way.<br/><span class="second infoMinute">Handle everything with Omnium for ease of mind, knowing you're always on the right track.</span></p>
            </div>
            <div style="display:flex;justify-content:center;gap:2vw;width:90vw;height:35vh;margin-left:auto;margin-right:auto;">
                <div style="display:flex;flex-direction:column;gap:4vh;text-align:center;width:248px;height:min-content">
                <div style="box-shadow: 0px 10px 5px 0px rgba(204,204,204,0.75);margin-left:auto;margin-right:auto;width:200px;height:200px;border-radius:50%;border:1px solid pink;background-image:url('https://images.pexels.com/photos/955389/pexels-photo-955389.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2');background-position:center;background-size:cover"></div>
                <p class="ibn infoMinute primary" style="text-transform:capitalize;width:80%;margin-left:auto;margin-right:auto">insurance assessment</p>
                </div>

                <div style="display:flex;flex-direction:column;gap:4vh;text-align:center;width:248px;height:min-content">
                <div style="box-shadow: 0px 10px 5px 0px rgba(204,204,204,0.75);margin-left:auto;margin-right:auto;width:200px;height:200px;border-radius:50%;border:1px solid pink;background-image:url('https://images.pexels.com/photos/297494/pexels-photo-297494.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2');background-position:center;background-size:cover"></div>
                <p class="ibn infoMinute primary" style="text-transform:capitalize;width:80%;margin-left:auto;margin-right:auto">Find the right policy for you</p>
                </div>
                <div style="display:flex;flex-direction:column;gap:4vh;text-align:center;width:248px;height:min-content">
                <div style="box-shadow: 0px 10px 5px 0px rgba(204,204,204,0.75);margin-left:auto;margin-right:auto;width:200px;height:200px;border-radius:50%;border:1px solid pink;background-image:url('https://images.pexels.com/photos/7735691/pexels-photo-7735691.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2');background-position:center;background-size:cover"></div>
                <p class="ibn infoMinute primary" style="text-transform:capitalize;width:80%;margin-left:auto;margin-right:auto">Contact an advisor</p>
                </div>

                <div style="display:flex;flex-direction:column;gap:4vh;text-align:center;width:248px;height:min-content">
                <div style="box-shadow: 0px 10px 5px 0px rgba(204,204,204,0.75);margin-left:auto;margin-right:auto;width:200px;height:200px;border-radius:50%;border:1px solid pink;background-image:url('https://images.pexels.com/photos/1431088/pexels-photo-1431088.jpeg?auto=compress&cs=tinysrgb&w=1600');background-position:center;background-size:cover"></div>
                <p class="ibn infoMinute primary" style="text-transform:capitalize;width:80%;margin-left:auto;margin-right:auto">Get insured</p>
                </div>
              
            </div>
            <div style="width:100vw;height:fit-content;margin-top:11vh">
  <div style="width:60vw;min-width:600px;height:40vh;margin-left: auto;margin-right:auto;display:flex;justify-content:space-between">
    <div style="width:26vw;min-width:300px;height:100%;display:flex;flex-direction:column;text-align:left" class="sectionText">
      <p class="infoSection" style="color:#5f545e;font-weight:600;text-transform:capitalize">Insurance Assessment</p>
      <p class="infoMinute ibn">A quick questionnaire you can do at your own leisure with no assistance, your answers are saved to your account so agents can view them to have your best interests at heart when helping you.</p>
      <div style="display:flex;flex-direction: column-reverse;width:100%;height:100%">
        <p class="infoMinute ibn dividerLabel pointer" v-on:click="go('/Profile')" style="text-transform:capitalize;width:fit-content">Complete the insurance assessment <span style="color:#5f545e">></span></p>

      </div>
    </div>
    
    <div style="width:30vw;height:100%;overflow:hidden;border-radius:4px">
      <div v-on:click="go('/Profile')"
      style="width:30vw;height:100%;text-align:center;background-image:url('https://images.pexels.com/photos/4050287/pexels-photo-4050287.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2');background-size:cover;background-position:center;"
      class="sectionImg ibn infoHeader">
    </div>
    </div>
  </div>
  </div>

  <div style="width:100vw;height:fit-content;margin-top:11vh">
  <div style="width:60vw;min-width:600px;height:40vh;margin-left: auto;margin-right:auto;display:flex;justify-content:space-between">
    <div style="width:30vw;height:100%;overflow:hidden;border-radius:4px">
      <div
      style="width:30vw;height:100%;text-align:center;background-image:url('https://images.pexels.com/photos/297494/pexels-photo-297494.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2');background-size:cover;background-position:top;"
      class="sectionImg ibn infoHeader">
    </div>
    </div>
    <div style="width:26vw;min-width:300px;height:100%;display:flex;flex-direction:column;text-align:left" class="sectionText">
      <p class="infoSection" style="color:#5f545e;font-weight:600;text-transform:capitalize">Find The Policy For You</p>
      <p class="infoMinute ibn">With a large gallery of options, finding the perfect policy can be daunting.<br/>The insurance assessment gives you an option to filter for more suitable policies for you.<br/><br/>Still unsure? Contact an advisor with us!</p>
      <div style="display:flex;flex-direction: column-reverse;width:100%;height:100%">
        <p class="infoMinute ibn dividerLabel pointer" style="text-transform:capitalize;width:fit-content" @click="go('/Policies')">View Policies Available <span style="color:#5f545e">></span></p>

      </div>
    </div>
    
   
  </div>
  </div>
            <div style="padding-top:12vh;width:100vw;height:10vh;text-align:center">
                <div style="display:flex;flex-direction:column">
                    <p class="infoSection primary" style="font-weight:600;text-transform:capitalize">have questions?</p>
                    <p class="infoMinute second">Visit our <span><router-link to='/FAQ'>FAQ</router-link></span> or send a message to our support team.</p>
                </div>
            </div>
            </div>
        </div>
        <div style="width:100vw;height:30vh;text-align:center">
        <div style="display:flex;flex-direction:column">
        <p class="infoSection" style="font-weight:600;text-transform:capitalize">insurance advisor program</p>
        <p style="width:60vw;margin-left:auto;margin-right:auto" class="ibn infoMinute second">Learn more about the benefits of signing up to Omnium's agent program. Visit <span><router-link to='/AdvisorProgram'>this page</router-link></span> to learn more.</p>
        </div>

    </div>
    </div>
    
</template>

<script>

export default {
    data() {
        return {
            listStyle: [
                {id:1,stepName: 'Complete your insurance assessment',imgUrl: 'https://images.pexels.com/photos/955389/pexels-photo-955389.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'},
                {id:2,stepName: 'Pick the policy right for you', imgUrl: ''},
                {id:3,stepName:'If necessary, contact an insurance advisor', imgUrl: ''},
                {id:4,stepName: 'Discuss details of the plan and ensure the best for yourself', imgUrl: ''},
                {id:5,stepName: 'Get insured', imgUrl: ''},
                {id:6,stepName: 'View all purchased policies at any time, right here on Omnium', imgUrl: ''}
                        ]
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

ul li {
    padding:1vh 1vw 1vh 1vw;

}

ul li:hover {
    transform: scale(1.05);
    transition: all .2s;
    cursor:pointer;
    filter:brightness(.7);
}
</style>