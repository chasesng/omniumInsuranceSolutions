<template>
    <div class="tabletView ms selectDisable"
        style="background:linear-gradient(0deg, rgba(203,203,203,1) 10%, rgba(245,245,245,1) 100%);">
        <div v-if="Object.keys(getAdvisor).length > 0">
            <div
                style="width:99vw;height:fit-content;padding:1vh 0 2vh 0;background-color:hsla(0, 0%, 96%, 0.6);white;position:sticky;top:1vh;backdrop-filter: blur(2px);z-index:2">
                <div
                    style="width:25vw;min-width:fit-content;display:flex;justify-content: left;gap:2vw;margin-left:auto;margin-right:auto;margin-top:6vh">
                    <label class="nw" style="width:fit-content">Find By ID / Username</label>
                    <div style="display:flex;height:4vh">
                        <input class="inpType" type="text" v-model="findByID" style="background-color:#F5F5F5;outline:none"
                            placeholder="Enter ID / Username" />
                    </div>
                </div>
                <div v-on:click="closeVisible()" :style="{ display: searchVisible }"
                    style="width:100vw;height:90vh;position:fixed;top:7vh;overflow-y:scroll;margin-top:6vh;z-index:3;background-color:hsla(0, 0%, 96%, 0.8);backdrop-filter:blur(1px)">
                    <router-link :to="'/Advisor/' + advisor.id" class="sd advisorProfile"
                        v-for="(advisor, index) in computedAdvisors.filter(u => u.userType == 'Advisor')" :key="index"
                        style="width:90%;margin-left: auto;margin-right: auto;height:fit-content;padding-top:6vh;padding-bottom:1vh;text-decoration: none;color:inherit;">
                        <div
                            style="display:flex;justify-content:left;gap:2vw;height:inherit;width:inherit;padding-left:1vw">
                            <div class="image gloss"
                                style="height:100px;width:100px;border-radius:50%;background-color:gray;margin-top:1em;">
                            </div>
                            <div
                                style="text-decoration:none;margin-top:1em;display:flex;flex-direction:column;line-height:1">
                                <p class="primary infoMinute">{{ advisor.username }}</p>
                                <p class="second">{{ advisor.id }}</p>
                                <p v-if="rating(advisor.id)[0] >= 1"><span class="primary">{{ rating(advisor.id)[0]
                                }}</span>
                                    <i class="fa-solid fa-star"></i>

                                    <span class="second">({{ rating(advisor.id)[1] }}
                                        Reviews)</span>
                                </p>
                                <p v-if="rating(advisor.id) == 'No Reviews'">No Reviews <i class="fa-solid fa-star"></i>
                                    <span class="second">(0 Reviews)</span>
                                </p>
                                <p><span class="second">Policies Completed</span> {{ getCompleted(advisor.id).length }}</p>

                            </div>
                        </div>

                    </router-link>

                </div>
            </div>

            <div
                style="min-width:900px;width:60vw;margin-left:auto;margin-right: auto;border-radius:4px;display: flex;padding-left:1vw;padding-right:2vw;padding-top:6vh;height:100vh;justify-content: space-between;">

                <div style="display:flex;flex-direction:column;width:240px;gap:2vh">
                    <div class="gloss" id="image" style="height:240px;background-color:lightgray;border-radius:50%"></div>
                </div>
                <div style="width:60%">
                    <div style="display:flex;flex-direction:column">
                        <div style="display:flex;justify-content:space-between;width:fit-content;min-width:200px">
                            <div class="infoMinute b" style="text-align:left;width:fit-content;">
                                <p>{{ getAdvisor.username }}</p>
                            </div>
                            <p class="second" style="padding-left:2vw;padding-top:.3em"><i
                                    class="fa-solid fa-location-dot"></i> Singapore
                            </p>
                        </div>
                        <div style="height:fit-content;line-height:1">
                            <p class="second">{{ getAdvisor.id }}</p>
                            <p v-if="rating(getAdvisor.id)[0] >= 1"><span class="primary">{{ rating(getAdvisor.id)[0]
                            }}</span> <i class="fa-solid fa-star"></i> <span class="second">({{
    rating(getAdvisor.id)[1] }}
                                    Reviews)</span></p>
                            <p v-if="rating(getAdvisor.id) == 'No Reviews'">No Reviews <i class="fa-solid fa-star"></i>
                                <span class="second">(0 Reviews)</span>
                            </p>
                            <p><span class="second">Policies Managed </span>{{ getCompleted(getAdvisor.id).length }}</p>
                        </div>


                        <div v-if="isLoggedin">

                            <div class=" ms second" style="font-weight:500;padding-left:.5vw;margin-top:5vh;">
                                <p style="text-decoration:capitalize;padding-top:1vh">Send an Inquiry to {{
                                    getAdvisor.username
                                }},</p>
                            </div>
                            <div class="ms" style="height:fit-content">
                                <input type="text"
                                    style="width:100%;border:none;border-bottom:1px solid gray;outline:none;padding:1vh 0px 1vh .5vw"
                                    placeholder="Inquiry Header" v-model="titleInquiry" />
                            </div>
                            <div class="ms sd" style="height:30vh">
                                <textarea v-model="submitInquiry"
                                    :placeholder="'Send an inquiry to connect with ' + getAdvisor.username + '!'"
                                    style="outline:none;width:100%;height:100%;padding-top:.5vh;padding-left:.5vw;resize:none;border:none">
                            </textarea>

                            </div>
                            <div style="width:100%;height:fit-content;min-height:6vh;padding-top:1vh;text-align:center">
                                <p class="animate__animated animate__fadeIn errMsg ibn l" style="animation-duration:.2s"
                                    v-if="errMsg">{{ errMsg }}</p>
                            </div>
                            <div style="display:flex;justify-content: right;">
                                <button class="brMobile mh" v-on:click="sendInquiry(usID)">Submit</button>

                            </div>
                        </div>

                        <div v-else>
                            <p class="infoMinute ms"
                                style="color:whitesmoke;background-color:rgba(0, 0, 0, 0.5);position:relative;top:10em;z-index: 1;text-align:center">
                                <span><router-link to="/Register" style="color:lightblue">Sign Up</router-link></span> or
                                <span><router-link to="/Login" style="color:lightblue">Log In</router-link></span> to send
                                an Inquiry
                            </p>
                            <div style="filter:blur(1px) brightness(.8)">
                                <div class=" ms second" style="font-weight:500;padding-left:.5vw;margin-top:5vh;">
                                    <p style="text-decoration:capitalize;padding-top:1vh">Send an Inquiry to {{
                                        getAdvisor.username
                                    }},</p>
                                </div>
                                <div class="ms" style="height:fit-content">
                                    <input type="text" :disabled="true"
                                        style="width:100%;border:none;border-bottom:1px solid gray;outline:none;padding:1vh 0px 1vh .5vw"
                                        placeholder="Inquiry Header" v-model="titleInquiry" />
                                </div>
                                <div class="ms sd" style="height:30vh">
                                    <textarea v-model="submitInquiry" :disabled="true"
                                        :placeholder="'Send an inquiry to connect with ' + getAdvisor.username + '!'"
                                        style="outline:none;width:100%;height:100%;padding-top:.5vh;padding-left:.5vw;resize:none;border:none">
                            </textarea>

                                </div>
                                <div style="width:100%;height:fit-content;min-height:6vh;padding-top:1vh;text-align:center">
                                    <p class="animate__animated animate__fadeIn errMsg ibn l" style="animation-duration:.2s"
                                        v-if="errMsg">{{ errMsg }}</p>
                                </div>
                                <div style="display:flex;justify-content: right;">
                                    <button class="brMobile mh">Submit</button>

                                </div>
                            </div>
                        </div>


                    </div>
                </div>




            </div>
        </div>
        <div v-else-if="Object.keys(getAdvisor).length == 0">

            <div
                style="width:95vw;height:100vh;padding-top:16vh;display:flex;justify-content:center;margin-left:auto;margin-right:auto">
                <div style="width:fit-content;margin-left:auto;margin-right:auto">
                    <p style="text-transform:capitalize" class="ibn infoSection">Could not find this user.</p>
                    <p class="second">If you believe this to be a mistake, please contact support.</p>
                    <p class="brMobile mh" style="padding-top:.5em" onclick="history.back()">Go Back</p>
                </div>


            </div>
        </div>
    </div>

    <div class="mobileView ms selectDisable"
        style="background:linear-gradient(0deg, rgba(203,203,203,1) 10%, rgba(245,245,245,1) 100%);">
        <div v-if="Object.keys(getAdvisor).length > 0">
            <div
                style="width:100vw;height:fit-content;background-color:hsla(0, 0%, 96%, 0.9);white;position:sticky;top:9vh;backdrop-filter: blur(2px);z-index:3">
                <div
                    style="width:25vw;min-width:fit-content;padding-top:1vh;display:flex;justify-content: left;gap:2vw;margin-left:auto;margin-right:auto;margin-top:3vh">
                    <label class="nw" style="width:fit-content;padding-top:.2em">Find By ID / Username</label>
                    <div style="display:flex;height:4vh">
                        <input class="inpType" type="text" v-model="findByID"
                            style="background-color:#F5F5F5;outline:none;width:50vw" placeholder="Enter ID / Username" />
                    </div>
                </div>
                <div v-on:click="closeVisible()" :style="{ display: searchVisible }"
                    style="width:100vw;height:100vh;position:fixed;top:9vh;overflow-y:scroll;margin-top:5vh;z-index:3;background-color:hsla(0, 0%, 96%);backdrop-filter:blur(1px)">
                    <router-link :to="'/Advisor/' + advisor.id" class="sd advisorProfile"
                        v-for="(advisor, index) in computedAdvisors.filter(u => u.userType == 'Advisor')" :key="index"
                        style="width:90%;margin-left: auto;margin-right: auto;height:fit-content;padding-top:6vh;padding-bottom:1vh;text-decoration: none;color:inherit;">
                        <div
                            style="display:flex;justify-content:left;gap:2vw;height:inherit;width:inherit;padding-left:1vw">
                            <div class="image gloss"
                                style="height:70px;width:70px;border-radius:50%;background-color:gray;margin-top:1em;">
                            </div>
                            <div
                                style="text-decoration:none;margin-top:1em;display:flex;flex-direction:column;line-height:1">
                                <p class="primary infoMinute">{{ advisor.username }}</p>
                                <p class="second">{{ advisor.id }}</p>
                                <p v-if="rating(advisor.id)[0] >= 1"><span class="primary">{{ rating(advisor.id)[0]
                                }}</span>
                                    <i class="fa-solid fa-star"></i>

                                    <span class="second">({{ rating(advisor.id)[1] }}
                                        Reviews)</span>
                                </p>
                                <p v-if="rating(advisor.id) == 'No Reviews'">No Reviews <i class="fa-solid fa-star"></i>
                                    <span class="second">(0 Reviews)</span>
                                </p>
                                <p><span class="second">Policies Completed</span> {{ getCompleted(advisor.id).length }}</p>

                            </div>
                        </div>

                    </router-link>

                </div>
            </div>

            <div
                style="width:100vw;margin-left:auto;margin-right: auto;border-radius:4px;display: flex;padding-left:1vw;padding-right:2vw;padding-top:6vh;height:fit-content;justify-content: space-between;">

                <div style="display:flex;flex-direction:column;width:100px;gap:2vh">
                    <div class="gloss" id="image" style="height:100px;background-color:lightgray;border-radius:50%"></div>
                </div>
                <div style="width:60%">
                    <div style="display:flex;flex-direction:column">
                        <div style="display:flex;justify-content:space-between;width:fit-content;min-width:200px">
                            <div class="infoMinute b" style="text-align:left;width:fit-content;">
                                <p>{{ getAdvisor.username }}</p>
                            </div>
                            <p class="second" style="padding-left:2vw;padding-top:.3em"><i
                                    class="fa-solid fa-location-dot"></i> Singapore
                            </p>
                        </div>
                        <div style="height:fit-content;line-height:1">
                            <p class="second">{{ getAdvisor.id }}</p>
                            <p v-if="rating(getAdvisor.id)[0] >= 1"><span class="primary">{{ rating(getAdvisor.id)[0]
                            }}</span> <i class="fa-solid fa-star"></i> <span class="second">({{
    rating(getAdvisor.id)[1] }}
                                    Reviews)</span></p>
                            <p v-if="rating(getAdvisor.id) == 'No Reviews'">No Reviews <i class="fa-solid fa-star"></i>
                                <span class="second">(0 Reviews)</span>
                            </p>
                            <p><span class="second">Policies Managed </span>{{ getCompleted(getAdvisor.id).length }}</p>
                        </div>
                    </div>
                </div>




            </div>
            <div style="width:95%;margin-right: auto;margin-left: auto;padding-bottom:11vh">
            <div v-if="isLoggedin">

                <div class=" ms second" style="font-weight:500;padding-left:.5vw;margin-top:5vh;">
                    <p style="text-decoration:capitalize;padding-top:1vh">Send an Inquiry to {{
                        getAdvisor.username
                    }},</p>
                </div>
                <div class="ms" style="height:fit-content">
                    <input type="text"
                        style="width:100%;border:none;border-bottom:1px solid gray;outline:none;padding:1vh 0px 1vh .5vw"
                        placeholder="Inquiry Header" v-model="titleInquiry" />
                </div>
                <div class="ms sd" style="height:30vh">
                    <textarea v-model="submitInquiry"
                        :placeholder="'Send an inquiry to connect with ' + getAdvisor.username + '!'"
                        style="outline:none;width:100%;height:100%;padding-top:.5vh;padding-left:.5vw;resize:none;border:none">
</textarea>

                </div>
                <div style="width:100%;height:fit-content;min-height:6vh;padding-top:1vh;text-align:center">
                    <p class="animate__animated animate__fadeIn errMsg ibn l" style="animation-duration:.2s" v-if="errMsg">
                        {{ errMsg }}</p>
                </div>
                <div style="display:flex;justify-content: right;">
                    <button class="brMobile mh" v-on:click="sendInquiry(usID)">Submit</button>

                </div>
            </div>

            <div v-else>
                <p class="infoMinute ms"
                    style="color:whitesmoke;background-color:rgba(0, 0, 0, 0.5);position:relative;top:10em;z-index: 1;text-align:center">
                    <span><router-link to="/Register" style="color:lightblue">Sign Up</router-link></span> or
                    <span><router-link to="/Login" style="color:lightblue">Log In</router-link></span> to send an Inquiry
                </p>
                <div style="filter:blur(1px) brightness(.8)">
                    <div class=" ms second" style="font-weight:500;padding-left:.5vw;margin-top:5vh;">
                        <p style="text-decoration:capitalize;padding-top:1vh">Send an Inquiry to {{
                            getAdvisor.username
                        }},</p>
                    </div>
                    <div class="ms" style="height:fit-content">
                        <input type="text" :disabled="true"
                            style="width:100%;border:none;border-bottom:1px solid gray;outline:none;padding:1vh 0px 1vh .5vw"
                            placeholder="Inquiry Header" v-model="titleInquiry" />
                    </div>
                    <div class="ms sd" style="height:30vh">
                        <textarea v-model="submitInquiry" :disabled="true"
                            :placeholder="'Send an inquiry to connect with ' + getAdvisor.username + '!'"
                            style="outline:none;width:100%;height:100%;padding-top:.5vh;padding-left:.5vw;resize:none;border:none">
</textarea>

                    </div>
                    <div style="width:100%;height:fit-content;min-height:6vh;padding-top:1vh;text-align:center">
                        <p class="animate__animated animate__fadeIn errMsg ibn l" style="animation-duration:.2s"
                            v-if="errMsg">{{ errMsg }}</p>
                    </div>
                    <div style="display:flex;justify-content: right;">
                        <button class="brMobile mh">Submit</button>

                    </div>
                </div>
            </div>
        </div>





        </div>
    </div>
</template>

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

<script>
import { getFirestore, onSnapshot, collection, query, addDoc } from 'firebase/firestore';
import { onAuthStateChanged, getAuth } from '@firebase/auth';
import { ref, onUnmounted, onMounted } from 'vue';
import { app } from '@/configs.js';

var errMsg = ref('');

const db = getFirestore(app);

export default {
    name: 'indexPage',
    data() {
        return {
            users: ref([]),
            completedPolicies: ref([]),
            findByID: ref(''),
            sortBy: ref(''),
            titleInquiry: ref(''),
            submitInquiry: ref(''),
            // searchVisible: 'none',

        }
    },
    methods: {
        go(val) {
            this.$router.push({ path: val })
        },
        closeVisible() {
            this.findByID = ''
        },
        rating(uid) {
            let val = 0;
            let obj = this.users.find(u => u.id == uid).rating
            for (let i = 0; i < obj.length; i++) {
                val += obj[i].score
            }
            return (val / obj.length <= 0 || obj.length == 0) ? 'No Reviews' : [val / obj.length, obj.length];


        },
        getCompleted(advisorID) {
            let umbrellaPolicies = this.completedPolicies.filter(c => c.agentID == advisorID)
            return umbrellaPolicies
        },
        sendInquiry(usID) {
            let uid = Object(this.users.find(u => u.userID === usID)).id
            let checkInquiryTitle = String(this.titleInquiry.trim())
            let checkInquiryContents = String(this.submitInquiry.trim())

            if (checkInquiryTitle.length >= 1 && checkInquiryContents.length >= 1) {
                addDoc(collection(db, 'omniumISSEnquiries'), {
                    advisorID: this.getAdvisor.id,
                    enquiryContent: String(this.submitInquiry),
                    enquiryTitle: String(this.titleInquiry),
                    finalizedPurchase: false,
                    referredPolicyID: 'General Inquiry',
                    replies: [],
                    requestDate: Date.now(),
                    senderID: String(uid),
                    status: 'In Progress',
                    reports: []
                })
                this.go('/ThankYou')
            }
            else {
                console.log('Not validated' + checkInquiryTitle.length + ' ' + checkInquiryContents.length)
                errMsg.value = 'Please complete all fields before submitting an inquiry'
            }
            setTimeout(() => {
                errMsg.value = '';
            }, 2000)

        }


    },
    mounted() {

        const completedPoliciesQuery = query(collection(db, 'completedPolicies'));
        const liveCPQ = onSnapshot(completedPoliciesQuery, (snapshot) => {
            this.completedPolicies = snapshot.docs.map((doc) => {
                return {
                    id: doc.id,
                    policyID: doc.data().policyID,
                    policyTerm: doc.data().policyTerm,
                    premiumAmount: doc.data().premiumAmount,
                    agentID: doc.data().agentID,
                    buyerID: doc.data().buyerID,
                    deductibleValue: doc.data().deductibleValue,
                    effectiveDate: doc.data().effectiveDate,
                    expirationDate: doc.data().expirationDate,
                    policyEndorsements: doc.data().policyEndorsements,
                    policyExclusions: doc.data().policyExclusions,
                    purchaseDate: doc.data().purchaseDate


                }


            })
        })

        const userQuery = query(collection(db, "omniumISSUsers"));
        const liveOISSUsers = onSnapshot(userQuery, (snapshot) => {
            this.users = snapshot.docs.map((doc) => {
                return {
                    id: doc.id,
                    nric: doc.data().nric,
                    userID: doc.data().userID,
                    username: doc.data().username,
                    gender: doc.data().gender,
                    dateOfBirth: doc.data().dateOfBirth,
                    assignmentArray: doc.data().assignmentArray,
                    from: doc.data().from,
                    occupation: doc.data().occupation,
                    emailRef: doc.data().emailRef,
                    userType: doc.data().userType,
                    rating: doc.data().rating

                }
            });
        })
        onUnmounted(liveCPQ, liveOISSUsers)
    },
    computed: {
        computedAdvisors() {
            let cleanedSearch = this.findByID.trim().toLowerCase();
            let advisors = this.users.filter(u => u.userType == 'Advisor');
            if (cleanedSearch.length >= 1) {
                return advisors.filter(u => u.id.includes(cleanedSearch) || String(u.username).trim().toLowerCase().includes(cleanedSearch));
            }
            return this.users.filter(u => u.userType == 'Advisor')

        },
        getAdvisor() {
            return Object(this.users.find(u => u.id == this.advisorID && u.userType == 'Advisor'))
        },
        searchVisible() {
            if (this.findByID.trim().length >= 1) {
                return 'block'
            }
            else {
                return 'none'
            }
        }
    },
    props: ['advisorID']

}




</script>



