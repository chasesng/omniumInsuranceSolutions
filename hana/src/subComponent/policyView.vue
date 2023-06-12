<template>
    <div class="tabletView">
        <div style="width:100vw;height:fit-content;padding-top:6vh" v-if="Object.keys(thisPolicy).length > 0">
            <!-- <p>{{ returnPolicy(policyID) }}</p> -->
            <div style="display:flex;flex-direction:column;width:95%;margin-left:auto;margin-right:auto;height:fit-content">
                <div class="primarybg infoHeader wt"
                    style="width:100%;height:30vh;text-align:center;background-image:url('https://images.pexels.com/photos/289560/pexels-photo-289560.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2');background-size:cover;background-position:center">
                </div>
                <div class="ibn infoHeader"
                    style="position:sticky;top:5vh;width:100%;text-align:left;padding-left:1vw;display:flex;justify-content:space-between;padding-top:2vh;background:linear-gradient(270deg, rgba(190,190,190,0.1) 40%, rgba(190,190,190,0.7) 80%);">
                    <div style="width:fit-content;display:flex;flex-direction:column;line-height:.8">
                        <p class="ibn infoMinute second">{{ thisPolicy.type }}</p>
                        <p class="primary">{{ thisPolicy.name }}</p>
                    </div>
                    <div style="width:fit-content;padding-right:1vw;display: flex;gap:2vw;padding-top:1vh">
                        <div v-if="isLoggedin">
                            <button class="brMobile mh" v-on:click="buyPolicy(usID)">Buy Now</button>
                        </div>
                        <div v-else>
                            <button class="brMobile mh" v-on:click="go('/Register')">Buy Now</button>

                        </div>
                        <div>
                            <button class="brMobile mh"
                            style="background-color:whitesmoke;color:rgba(70, 70, 70, 0.669);border:1px solid #c8bbc0">Check
                            Eligibility</button>
                        </div>
                      
                    </div>

                </div>
                <p style="padding-left:1vw" class="ibn infoMinute second">Provided by {{ thisPolicy.provider }}</p>

                <div style="width:100%;text-align:left;padding-left:1vw;padding-top:2vh" class="ibn infoMinute second">
                    <p>{{ thisPolicy.coverageDetails }}</p>
                </div>
                <div style="display:table-cell;vertical-align: middle;width:50%;padding-left:1vw">
                    <label>Product Brochure </label>
                    <a :href="thisPolicy.brochure" target="_">View Here</a>
                </div>
                <div style="width:100%;display:flex;">

                </div>
            </div>

            <div class="sd"
                style="width:60%;height:60vh;margin-top:1vh;margin-left:auto;margin-right:auto;margin-bottom:6vh;display:flex;flex-direction:column;overflow:hidden;border-radius:4px">
                <div class="primarybg" style="width:100%;height:1vh"></div>
                <div style="height:59vh;width:100%;display:flex">
                    <div
                        style="width:30%;height:100%;background-size:cover;background-position:center;background-image:url('https://images.pexels.com/photos/17131288/pexels-photo-17131288/free-photo-of-antelope-canyon-paths.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')">
                        <p class="ibn infoHeader wt"
                            style="width:100%;padding:1vh 1vw 1vh 1vw;background-color:rgba(0, 0, 0, 0.8);color:whitesmoke">
                            Send Inquiry</p>

                    </div>
                    <div
                        style="width:70%;height:100%;padding-bottom:2vh;text-align:left;padding-top:2vh;padding-left:1vw;display:flex;flex-direction:column;gap:2vh">
                        <p class="second ibn">You can send an inquiry to an advisor to assist you further with this
                            policy.</p>
                        <div style="display:flex;width:50%">
                            <label>Policy</label>
                            <input type="text" class="inpClear" v-model="thisPolicy.name"
                                style="width:fit-content;padding: 0 1vw 0 0;" />
                        </div>
                        <div style="display:flex;width:50%">
                            <label>Header</label>
                            <input type="text" class="inpClear" v-model="titleInquiry"
                                style="width:fit-content;padding: 0 1vw 0 0;" />
                        </div>
                        <textarea placeholder="Enter your inquiry here..."
                            style="width:90%;margin-left:auto;margin-right:auto;height:60%;margin-top:2vh;resize:none;border:1px solid rgba(128, 128, 128, 0.3);outline:none"
                            v-model="submitInquiry">

                    </textarea>
                        <div style="width:90%;margin-left:auto;margin-right:auto;">
                            <button class="brMobile mh" v-on:click="submit(usID)">Submit</button>
                        </div>

                    </div>
                </div>

            </div>
        </div>

    </div>

    <div class="mobileView">
        <div style="width:100vw;height:fit-content">
            <div class="primarybg infoHeader wt"
                    style="width:100%;height:10vh;margin-top:4vh;text-align:center;background-image:url('https://images.pexels.com/photos/289560/pexels-photo-289560.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2');background-size:cover;background-position:center">
                </div>

                <div class="ibn infoHeader"
                    style="position:sticky;top:7vh;width:100%;text-align:left;padding-left:2vw;display:flex;flex-direction:column;justify-content:space-between;padding-top:2vh;background-color:rgba(220, 220, 220, 0.9);">
                    <div style="width:fit-content;display:flex;flex-direction:column;line-height:.8">
                        <p class="ibn infoMinute second">{{ thisPolicy.type }}</p>
                        <p class="primary">{{ thisPolicy.name }}</p>
                    </div>
                    <div style="width:fit-content;padding-right:1vw;display: flex;gap:2vw;padding-top:1vh">
                        <div v-if="isLoggedin">
                            <button class="brMobile mh" style="width:150px" v-on:click="buyPolicy(usID)">Buy Now</button>
                        </div>
                        <div v-else>
                            <button class="brMobile mh" style="width:150px" v-on:click="go('/Register')">Buy Now</button>
                        </div>
                        <button class="brMobile mh"
                            style="background-color:whitesmoke;color:rgba(70, 70, 70, 0.669);width:150px;border:1px solid #c8bbc0">Check
                            Eligibility</button>
                    </div>
                    <p style="padding-left:1vw;padding-top:1vh" class="ibn infoMinute second">Provided by {{ thisPolicy.provider }}</p>
                </div>

                <div style="width:100%;text-align:left;padding-left:2vw;padding-top:2vh" class="ibn infoMinute second">
                    <p>{{ thisPolicy.coverageDetails }}</p>
                </div>
                <div style="display:table-cell;vertical-align: middle;width:50%;padding-left:2vw">
                    <label>Product Brochure </label>
                    <a :href="thisPolicy.brochure" target="_">View Here</a>
                </div>
                <div class="sd"
                style="width:95%;height:60vh;margin-top:1vh;margin-left:auto;margin-right:auto;margin-bottom:6vh;display:flex;flex-direction:column;overflow:hidden;border-radius:4px">
                <div class="primarybg" style="width:100%;height:1vh"></div>
                <div style="height:59vh;width:100%;display:flex">
                    <div
                        style="width:95%;height:100%;padding-bottom:2vh;margin-left:auto;margin-right:auto;text-align:left;padding-top:2vh;padding-left:1vw;display:flex;flex-direction:column;gap:2vh">
                        <p class="second ibn">You can send an inquiry to an advisor to assist you further with this
                            policy.</p>
                        <div style="display:flex">
                            <label>Policy</label>
                            <input type="text" class="inpClear" v-model="thisPolicy.name"
                                style="width:fit-content;padding: 0 1vw 0 0;" />
                        </div>
                        <div style="display:flex">
                            <label>Header</label>
                            <input type="text" class="inpClear" v-model="titleInquiry"
                                style="width:fit-content;padding: 0 1vw 0 0;" />
                        </div>
                        <textarea placeholder="Enter your inquiry here..."
                            style="width:90%;margin-left:auto;margin-right:auto;height:60%;margin-top:2vh;resize:none;border:1px solid rgba(128, 128, 128, 0.3);outline:none"
                            v-model="submitInquiry">

                    </textarea>
                        <div style="width:90%;margin-left:auto;margin-right:auto;">
                            <button class="brMobile mh" v-on:click="submit(usID)">Submit</button>
                        </div>

                    </div>
                </div>

            </div>
        </div>

    </div>
    <div class="ibn infoSection" v-if="Object.keys(thisPolicy).length == 0"
        style="width:100vw;height:100vh;text-align:center;padding-top:11vh">
        <p>no policy of this id found</p>
    </div>
</template>

<script>
import { ref, onUnmounted, onMounted } from 'vue'
import { getFirestore, collection, onSnapshot, query, addDoc } from '@firebase/firestore';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { app } from '@/configs'


const db = getFirestore(app);

export default {
    data() {


        return {
            users: ref([]),
            policies: ref([]),
            completedPolicies: ref([]),
            titleInquiry: ref(''),
            submitInquiry: ref('')

        }
    },

    methods: {
        submit(usID) {
            let uid = Object(this.users.find(u => u.userID === usID)).id
            addDoc(collection(db, 'omniumISSEnquiries'), {
                advisorID: '',
                enquiryContent: String(this.submitInquiry),
                enquiryTitle: String(this.titleInquiry),
                finalizedPurchase: false,
                referredPolicyID: this.thisPolicy.id,
                replies: [],
                requestDate: Date.now(),
                senderID: String(uid),
                status: 'In Progress'
            })
            this.go('/ThankYou')
        },
        formatEpochToString(epoch) {
            const currentDate = new Date(epoch);
            const year = currentDate.getFullYear();
            const month = String(currentDate.getMonth() + 1).padStart(2, '0');
            const day = String(currentDate.getDate()).padStart(2, '0');

            return `${year}-${month}-${day}`;
        },
        addYearToEpoch(epoch, yearsToAdd) {
            const date = new Date(epoch);
            date.setFullYear(date.getFullYear() + yearsToAdd);
            return date.getTime();
        },
        findPolicyByUser(usID) {
            let i = Object(this.users.find(u => u.userID == usID)).id
            return this.completedPolicies.filter(p => p.buyerID == i)
        },
        buyPolicy(usID) {
            if (this.findPolicyByUser(usID).includes(this.policyID)) {
                console.log("Checked")
            }
            else {


                let uid = Object(this.users.find(u => u.userID === usID)).id
                addDoc(collection(db, 'completedPolicies'), {
                    agentID: 'FHTGJCjOM1h8SfTR21Kh', //my account user id
                    buyerID: String(uid),
                    deductibleValue: 0,
                    effectiveDate: this.formatEpochToString(Date.now()),
                    expirationDate: this.formatEpochToString(this.addYearToEpoch(Date.now(), 30)),
                    policyEndorsements: 'NA',
                    policyExclusions: 'NA',
                    policyID: this.policyID,
                    policyTerm: 'Months',
                    premiumAmount: '21',
                    purchaseDate: this.formatEpochToString(Date.now())


                })
                window.alert("Purchase Completed, View In Profile")
            }
        },
        go(val) {
            this.$router.push({ path: val })
        },
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
        const policyQuery = query(collection(db, 'policiesOfISS'));
        const livePolicies = onSnapshot(policyQuery, (snapshot) => {
            this.policies = snapshot.docs.map((doc) => {
                return {
                    id: doc.id,
                    coverageDetails: doc.data().policy_CoverageDetails,
                    duration: doc.data().policy_Duration,
                    issueAge: doc.data().policy_IssueAge,
                    name: doc.data().policy_Name,
                    registeredNumber: doc.data().policy_Number,
                    periodType: doc.data().policy_Period,
                    policyPremium: doc.data().policy_Premium,
                    provider: doc.data().policy_Provider,
                    sumInsured: doc.data().policy_SumInsured,
                    policyTNC: doc.data().policy_TermsAndConditions,
                    type: doc.data().policy_Type,
                    policyFrequency: doc.data().premium_Frequency,
                    footnotes: doc.data().footnotes,
                    brochure: doc.data().brochure_Url
                }


            })
        })

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
        onUnmounted(liveCPQ, livePolicies, liveOISSUsers)
    },
    computed: {
        thisPolicy() {
            return Object(this.policies.find(p => p.id == this.policyID))
        },
        currentUser() {
            return Object(this.users.find(u => u.userID == this.usID))
        }



    },
    props: ['policyID']
};


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

<style scoped></style>