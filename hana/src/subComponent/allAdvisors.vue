<template>
    <div class="tabletView ms selectDisable" style="overflow:hidden">

        <div class="blur-bg"
            style="width:100vw;margin-left:auto;margin-right:auto;height:50vh;margin-top:3vh;background-position:top;display:flex;justify-content:center;display:flex;justify-content:space-between;background-image:url('https://images.pexels.com/photos/7979441/pexels-photo-7979441.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')">
            <div style="width:fit-content;padding:0px 3vw 0px 1vw;background: linear-gradient(90deg, rgba(0, 0, 0, 0.6) 35%, rgba(126,126,126,.4) 100%)">

                <p class="infoHeader"
                    style="margin-top:10vh;margin-left:6vw;padding-top:7vh;color:whitesmoke;font-weight:500;text-transform:capitalize;line-height:1">
                    View and connect with our trusted advisors<span class="infoMinute second"><br />Have the freedom to
                        choose an advisor you trust.</span>
                </p>
            </div>
        </div>
        <div class="sd"
            style="height:8vh;display:flex;justify-content:left;gap:2vw;padding-left:6vw;padding-right:1vw;position:sticky;top:11vh">
            <div style="display:flex;gap:2vw;margin-top:1%">
                <div style="width:25vw;min-width:fit-content;display:flex;justify-content: left;gap:2vw;">
                    <label class="nw" style="width:fit-content">Find By ID / Username</label>
                    <div style="display:flex;height:37px">
                        <input class="inpType" type="text" v-model="findByID" placeholder="Enter ID / Username" />
                    </div>
                </div>

            </div>
        </div>
        <p class="second" style="text-align:center;width:90vw;padding-top:2vh;margin-left: auto;margin-right: auto">- Showing {{ counted }} results -</p>

        <div id="advisorContainer"
            style="width:90vw;height:100vh;margin-left:auto;margin-right:auto;backdrop-filter:blur(2px);padding-top:2vh;display:flex;flex-direction: column;gap:5vh;">
            <div style="height:80vh;overflow-y:scroll">
                <router-link :to="'/Advisor/' + advisor.id" class="sd advisorProfile advisorLink"
                    v-for="(advisor, index) in computedAdvisors.filter(u => u.userType == 'Advisor')" :key="index"
                    style="width:100%;margin-right:auto;height:fit-content;padding-top:1vh;padding-bottom:1vh;text-decoration:none;color:inherit">
                    <div class="advisorProfile"
                        style="display:flex;justify-content:left;gap:2vw;height:inherit;width:inherit;padding-left:1vw;border-bottom:1px solid rgba(128, 128, 128, 0.5)">
                        <div class="image gloss"
                            style="height:100px;width:100px;border-radius:50%;background-color:lightgray;margin-top:1em;">
                        </div>
                        <div style="text-decoration:none;margin-top:1em;display:flex;flex-direction:column;line-height:1">
                            <p class="primary infoMinute">{{ advisor.username }}</p>
                            <p class="second">{{ advisor.id }}</p>
                            <p v-if="rating(advisor.id)[0] >= 1"><span class="primary">{{ rating(advisor.id)[0] }}</span>
                                <i class="fa-solid fa-star"></i>
                                <span class="second">({{ rating(advisor.id)[1] }} Reviews)</span>
                            </p>
                            <p v-if="rating(advisor.id) == 'No Reviews'">No Reviews <i class="fa-solid fa-star"></i> <span
                                    class="second">(0 Reviews)</span></p>
                            <p><span class="second">Policies Managed</span> {{ getCompleted(advisor.id).length }}</p>
                        </div>
                    </div>
                </router-link>
            </div>
        </div>
    </div>

    <div class="mobileView selectDisable">
        <div class="blur-bg"
            style="width:100vw;margin-left:auto;margin-right:auto;height:40vh;margin-top:5vh;background-position:top;display:flex;justify-content:center;display:flex;justify-content:space-between;background-image:url('https://images.pexels.com/photos/7979441/pexels-photo-7979441.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')">
            <div style="width:fit-content;padding:0px 3vw 0px 1vw;background-color:rgba(0, 0, 0, 0.3)">

                <p class="infoHeader"
                    style="margin-top:10vh;margin-left:6vw;padding-top:7vh;color:whitesmoke;font-weight:500;text-transform:capitalize;line-height:1">
                    View and connect with our trusted advisors<span class="infoMinute wt" style="filter:opacity(.8)"><br />Have the freedom to
                        choose an advisor you trust.</span>
                </p>
            </div>
        </div>
        <div class="sd"
            style="height:8vh;display:flex;justify-content:left;gap:2vw;padding-left:4vw;padding-right:1vw;position:sticky;top:8vh;background-color:white;z-index:2">
            <div style="display:flex;gap:2vw;margin-top:1%">
                <div style="width:25vw;min-width:fit-content;display:flex;justify-content: left;gap:2vw;padding-top:1vh">
                    <label class="nw" style="width:fit-content;padding-top:.3em">Find By ID / Username</label>
                    <div style="display:flex;height:37px">
                        <input class="inpType" style="width:50vw" type="text" v-model="findByID" placeholder="Enter ID / Username" />
                    </div>
                </div>

            </div>
        </div>
        <p class="second" style="text-align:center;width:90vw;padding-top:2vh;margin-left: auto;margin-right: auto">- Showing {{ counted }} results -</p>

        <div id="advisorContainer"
            style="width:90vw;height:100vh;margin-left:auto;margin-right:auto;padding-top:2vh;display:flex;flex-direction: column;gap:5vh;">
            <div style="height:80vh;overflow-y:scroll">
                <router-link :to="'/Advisor/' + advisor.id" class="sd advisorProfile advisorLink"
                    v-for="(advisor, index) in computedAdvisors.filter(u => u.userType == 'Advisor')" :key="index"
                    style="width:100%;margin-right:auto;height:fit-content;padding-top:1vh;padding-bottom:1vh;text-decoration:none;color:inherit">
                    <div class="advisorProfile"
                        style="display:flex;justify-content:left;gap:6vw;height:inherit;width:inherit;padding-left:1vw;border-bottom:1px solid rgba(128, 128, 128, 0.5)">
                        <div class="image gloss"
                            style="height:70px;width:70px;border-radius:50%;background-color:lightgray;margin-top:1em;">
                        </div>
                        <div style="text-decoration:none;margin-top:1em;display:flex;flex-direction:column;line-height:1">
                            <p class="primary infoMinute">{{ advisor.username }}</p>
                            <p class="second">{{ advisor.id }}</p>
                            <p v-if="rating(advisor.id)[0] >= 1"><span class="primary">{{ rating(advisor.id)[0] }}</span>
                                <i class="fa-solid fa-star"></i>
                                <span class="second">({{ rating(advisor.id)[1] }} Reviews)</span>
                            </p>
                            <p v-if="rating(advisor.id) == 'No Reviews'">No Reviews <i class="fa-solid fa-star"></i> <span
                                    class="second">(0 Reviews)</span></p>
                            <p><span class="second">Policies Managed</span> {{ getCompleted(advisor.id).length }}</p>
                        </div>
                    </div>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
import { getFirestore, onSnapshot, collection, query } from 'firebase/firestore';
import { onAuthStateChanged, getAuth } from '@firebase/auth';
import { ref, onUnmounted, onMounted } from 'vue';
import { app } from '@/configs.js';

const db = getFirestore(app);

export default {
    name: 'indexPage',
    data() {
        return {
            users: ref([]),
            completedPolicies: ref([]),
            findByID: ref(''),
            sortBy: ref(''),
            idFilter: []

        }
    },
    methods: {
        rating(uid) {
            let obj = Object(Object(this.users.find(u => u.id == uid)).rating);
            let val = 0;
            for (let i = 0; i < obj.length; i++) {
                val += obj[i].score;
            }
            let averageRating = val / obj.length;
            if (averageRating <= 0 || obj.length == 0) {
                return 'No Reviews';
            } else {
                return [averageRating.toFixed(2), obj.length];
            }
        },
        getCompleted(advisorID) {
            let umbrellaPolicies = this.completedPolicies.filter(c => c.agentID == advisorID)
            return umbrellaPolicies
        },

        updateIDFilter() {
            this.idFilter = this.findByID
        },


    },
    computed: {
        computedAdvisors() {
            let cleanedSearch = this.findByID.trim().toLowerCase();
            let filter1 = this.users.filter(u => u.userType == 'Advisor');
            let advisors = filter1.filter(u =>u.id != 'FHTGJCjOM1h8SfTR21Kh') //Omnium Direct Support Advisor Exclusion from being displayed
            if (cleanedSearch.length >= 1) {
                return advisors.filter(u => u.id.includes(cleanedSearch) || String(u.username).trim().toLowerCase().includes(cleanedSearch));
            }
            return advisors

        },
        counted() {
            let cleanedSearch = this.findByID.trim().toLowerCase();
            let filter1 = this.users.filter(u => u.userType == 'Advisor');
            let advisors = filter1.filter(u =>u.id != 'FHTGJCjOM1h8SfTR21Kh') //Omnium Direct Support Advisor Exclusion from being displayed
            if (cleanedSearch.length >= 1) {
                return advisors.filter(u => u.id.includes(cleanedSearch) || String(u.username).trim().toLowerCase().includes(cleanedSearch)).length;
            }
            return advisors.length
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
    }

}




</script>



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
<style scoped>
.advisorProfile {
    transition: all .3s;
}

.advisorLink:nth-child(even) {
    background-color: gray;
}

.advisorProfile:hover {
    padding-left: 1vw;
    background-color: #E6E2E1;
    cursor: pointer;
    transition: all .3s
}

.advisorProfile:hover .image {
    transform: scale(1.1);
    transition: all .3s
}

.advisorProfile .image {
    transition: all .3s
}
</style>