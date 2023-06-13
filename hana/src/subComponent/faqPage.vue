<template>
    <div class="tabletView">
        <div style="width:100vw;height:fit-content;text-align:center;background-color:#f5f5fa;padding-top:6vh">

            <div class="sd"
                style="width:90%;margin-left:auto;margin-right:auto;height:50vh;background-color:whitesmoke;display:flex;justify-content:space-between">
                <div
                    style="display:flex;flex-direction:column;line-height:1;justify-content:center;text-align:center;width:50%;margin-left:auto;margin-right:auto">
                    <p class="ibn primary"><span class="infoHeader">F</span><span class="second">requently | </span><span
                            class="infoHeader">A</span><span class="second">sked | </span><span
                            class="infoHeader">Q</span><span class="second">uestions</span></p>
                    <p class="ibn second" style="width:60%;margin-left:auto;margin-right:auto">Got a question? We hope our
                        FAQ section helps you! If not, feel free to contact us directly here!</p>
                </div>
                <div
                    style="width:50%;height:100%;background-size:cover;background-position:center;background-image:url('https://images.pexels.com/photos/269318/pexels-photo-269318.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')">
                </div>
            </div>
            <div style="width:90%;margin-left:auto;margin-right:auto;height:10vh;margin-top:4vh">
                <div
                    style="width:100%;display:flex;justify-content:center;gap:2vw;background: rgba(211, 211, 211, 0.5);padding:1vh 0px 1vh 0px">
                    <button class="brMobile mh"
                        style="background-color:whitesmoke;color:rgba(70, 70, 70, 0.669);border:1px solid #c8bbc0"
                        v-for="(i, index) in faqCategory" :key="index" v-on:click="updateCat(index)">{{ i }}</button>
                </div>
            </div>
            <div style="width:90%;margin-left:auto;margin-right:auto;height:70vh;margin-bottom:6vh;display:flex;gap:1vw;">
                <div class="sd" style="width:40%;height:100%;background-color:#f5f5fa;border-radius:4px;overflow:hidden">
                    <div class="primarybg" style="width:100%;height:1vh"></div>

                    <div v-if="selectedCat == 0">
                    <div v-for="(i, index) in generalCategory" :key="index">
                         <div :class="{ 'selected': qn  == i.qn }" @click="updateAnswer(i.ans), updateQn(i.qn)" class="mh" style="width:100%;height:fit-content;min-height:9vh;padding-top:2vh;display:flex;flex-direction: column;line-height:1;border-bottom:1px solid gray">
                            <p class="ibn second" style="text-align:left;width:97%;margin-left:auto">{{ i.qn }}</p>
                            
                        </div>
                    </div>

                    </div>
                    <div v-if="selectedCat == 1">
                    <div v-for="(i, index) in accCategory" :key="index">
                         <div :class="{ 'selected': qn  == i.qn }" @click="updateAnswer(i.ans), updateQn(i.qn)" class="mh" style="width:100%;height:fit-content;min-height:9vh;padding-top:2vh;display:flex;flex-direction: column;line-height:1;border-bottom:1px solid gray">
                            <p class="ibn second" style="text-align:left;width:97%;margin-left:auto">{{ i.qn }}</p>
                            
                        </div>
                    </div>
                    
                    </div>
                </div>
                <div class="sd" style="width:50%;height:100%;background-color:#f5f5fa;border-radius:4px;overflow:hidden">
                    <div class="primarybg" style="width:100%;height:1vh">
                        <p class="infoSection" style="text-transform:capitalize;padding-top:2vh;width:90%;margin:auto;min-height:13vh;border-bottom:1px solid gray">{{ qn }}</p>
                        <p class="ibn" style="padding-top:2vh;width:90%;margin-left:auto;margin-right:auto">{{ answer }}</p>
                    </div>

                </div>
            </div>

        </div>
    </div>

    <div class="mobileView">
        <div style="width:100vw;height:fit-content;padding-top: 6vh;">
            <div class="sd"
                style="width:90%;margin-left:auto;margin-right:auto;height:30vh;background-color:whitesmoke;display:flex;justify-content:space-between">
                <div
                    style="display:flex;flex-direction:column;line-height:1;justify-content:center;text-align:center;width:50%;margin-left:auto;margin-right:auto">
                    <p class="ibn primary"><span class="infoHeader">F</span><span class="second">requently | </span><span
                            class="infoHeader">A</span><span class="second">sked | </span><span
                            class="infoHeader">Q</span><span class="second">uestions</span></p>
                    <p class="ibn second" style="width:90%;margin-left:auto;margin-right:auto">Got a question? We hope our
                        FAQ section helps you! If not, feel free to contact us directly here!</p>
                </div>
                <div
                    style="width:50%;height:100%;background-size:cover;background-position:center;background-image:url('https://images.pexels.com/photos/269318/pexels-photo-269318.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')">
                </div>
            </div>

            <div style="width:100vw;height:fit-content;padding-top:2vh;text-align:center">
                <div
                    style="width:90%;padding-left:2vw;padding-right:2vw;margin-left:auto;margin-right:auto;overflow-x:scroll;display:flex;justify-content:flex-start;gap:2vw;background: rgba(211, 211, 211, 0.1);padding:1vh 0px 1vh 0px">
                    <button class="brMobile mh"
                        style="background-color:whitesmoke;color:rgba(70, 70, 70, 0.669);border:1px solid #c8bbc0;width:fit-content;padding:1vh 1vw 1vh 1vw;min-width:150px"
                        v-for="(i, index) in faqCategory" :key="index" v-on:click="updateCat(index)">{{ i }}</button>
                </div>
            </div>

            <div style="width:90%;margin-left:auto;margin-right:auto;height:70vh;margin-bottom:6vh;display:flex;gap:1vw;">
                <div class="sd" style="width:100%;height:100%;background-color:#f5f5fa;border-radius:4px;overflow:hidden">
                    <div class="primarybg" style="width:100%;height:1vh"></div>

                    <div v-if="selectedCat == 0">
                    <div v-for="(i, index) in generalCategory" :key="index">
                         <div :class="{ 'selected': qn  == i.qn }" @click="updateAnswer(i.ans), updateQn(i.qn);toggleMobileVisible()" class="mh" style="width:100%;height:fit-content;min-height:9vh;padding-top:2vh;display:flex;flex-direction: column;line-height:1;border-bottom:1px solid gray">
                            <p class="ibn second" style="text-align:left;width:95%;margin-left:auto">{{ i.qn }}</p>
                            
                        </div>
                    </div>

                    </div>
                    <div v-if="selectedCat == 1">
                    <div v-for="(i, index) in accCategory" :key="index">
                         <div :class="{ 'selected': qn  == i.qn }" @click="updateAnswer(i.ans), updateQn(i.qn);toggleMobileVisible()" class="mh" style="width:100%;height:fit-content;min-height:9vh;padding-top:2vh;display:flex;flex-direction: column;line-height:1;border-bottom:1px solid gray">
                            <p class="ibn second" style="text-align:left;width:95%;margin-left:auto">{{ i.qn }}</p>
                            
                        </div>
                    </div>
                    
                    </div>
                </div>
                
            </div>

        </div>


    </div>

    <div class="sd animate__animated animate__slideInUp" :style="{display: mobileVisible}" style="animation-duration:.3s;width:100vw;height:60vh;background-color:#f5f5fa;border-radius:4px;overflow:hidden;position:fixed;bottom:0;z-index:2">
                    <div class="primarybg" style="width:100%;height:1vh">
                        
                    </div>
                    <i @click="toggleMobileVisible()" class="hv fa-solid fa-x" style="float:right;padding-top:.5em;position:fixed;right:3vw"></i>

                    <p class="infoSection" style="text-transform:capitalize;padding-top:2vh;width:90%;margin:auto;min-height:13vh;border-bottom:1px solid gray">{{ qn }}</p>
                        <div style="overflow-y:scroll;height:40vh">
                            <p class="ibn" style="padding-top:2vh;width:90%;margin-left:auto;margin-right:auto">{{ answer }}</p>

                        </div>


                </div>
</template>


<script>

export default {
    data() {
        return {
            faqCategory: ['General', 'Account-Related', 'Policy Related'],
            selectedCat: '',
            generalCategory: [{ qn: 'What can I do with Omnium I can\'t do with the individual insurance companies?', ans: 'Omnium lets you keep track of all insurance policies in one platform for tracking anytime, providing an expedited and comfortable experience to breeze past all insurance processes.' }, { qn: 'How are promotions from individual companies handled if I purchase their policies on Omnium?', ans: 'We will always want the best deal for you. Promotions and rewards you would obtain purchasing from the individual companies will be rewarded to you regardless of whether you buy the policy traditionally or using Omnium.' }, { qn: 'Is the insurance assessment compulsory to complete?', ans: 'Whilst not compulsory, The insurance assessment is a tool used for your benefit as much as it is for the advisor you may request at any time. Advisors can view your assessment results when you send in an enquiry to determine whether they are a fit to pick up your enquiry. For more information regarding the assessment, visit the Insurance Assessment Help page.' }],
            accCategory: [{qn: 'Why do I have to create an account?', ans: 'Creating an account lets you send enquiries to chat with advisors, purchase policies instantly, track past and active policies, and more.'}, {qn: 'How do I update data mistakenly inputted in my profile?', ans: 'To update locked fields such as email and DOB, contact our support and request an update.'}],
            answer: '',
            qn: '',
            mobileVisible: 'none'
        }
    },
    methods: {
        updateCat(val) {
            this.selectedCat = val;
        },
        updateAnswer(val) {
            this.answer = val;
        },
        updateQn(val) {
            this.qn = val
        },
        toggleMobileVisible() {
            this.mobileVisible = this.mobileVisible === 'none' ? 'block' : 'none';
        }
        

    }
}
</script>


<style scoped>

.selected p {
   padding-left: 1vw;
   transition: padding-left .3s
 }

 .selected {
   background-color: rgba(128, 128, 128, 0.2);
 }
</style>