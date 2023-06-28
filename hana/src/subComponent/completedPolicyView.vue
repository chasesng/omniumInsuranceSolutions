<template>
    <div class="tabletView selectDisable">
        <div style="width:100vw;height:100vh;padding-top:3vh">
            <div v-if="rDetailsUsers(signedPolicyId).includes(rUser(usID))">
                <div class="sd"
                    style="width:55vw;height:fit-content;padding-bottom:11vh;margin-left: auto;margin-right: auto">

                    <div
                        style="display:flex;flex-direction:column-reverse;height:20vh;text-align:center;border-bottom:4px solid #585858;background-image:url('https://images.pexels.com/photos/16062274/pexels-photo-16062274/free-photo-of-people-art-summer-abstract.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2');background-size:cover;background-position:center">
                    </div>

                    <div style="width:55vw;height:fit-content;display:flex">
                        <div
                            style="background:linear-gradient(0deg, rgba(203,203,203,1) 10%, rgba(245,245,245,1) 100%);border-radius:4px;overflow:hidden;width:300px;height:fit-content;padding-top:4vh;display:flex;flex-direction:column;justify-content: space-between;">
                            <div class="second" style="width:fit-content;height:30vh;margin-right: auto;margin-left: auto">
                                <img :src="returnLogo(rPolicy(policy.policyID).provider)"
                                    style="width:160px;height:160px" />
                            </div>
                            <div
                                style="width:100%;background-color:rgba(0, 0, 0, 0.9);color:whitesmoke;text-align:center;padding-top:1vh">
                                <p><span class="second">Policy Purchased </span><br />{{ rPolicy(policy.policyID).name }}
                                </p>
                            </div>
                            <div class="ms"
                                style="width:100%;padding-top:3vh;text-align:left;padding-left:1vw;background-color:#f5f5f5">
                                <p>Want assistance on your policy?<br />Contact Support Anytime</p>
                                <p>Or contact your advisor,<br /> <router-link :to="'/Advisor/' + policy.agentID">{{
                                    rId(policy.agentID).username }}</router-link></p>

                            </div>

                        </div>
                        <div class="ms"
                            style="padding-top:1vh;padding-left:1vw;display:flex;flex-direction:column;line-height:1.1;width:fit-content;text-decoration: none">
                            <p><router-link :to="'/Advisor/' + policy.agentID">{{ rId(policy.agentID).username
                            }}</router-link><br /><span class="second">Insurance Advisor Affiliated</span></p>
                            <p><router-link :to="'/Policy/' + rPolicy(policy.policyID).id">{{ rPolicy(policy.policyID).name
                            }}</router-link><br /><span class="second">Policy Purchased</span></p>
                            <p>{{ policy.purchaseDate }}<br /><span class="second">Policy Purchase Date</span></p>
                            <p>{{ policy.effectiveDate }}<br /><span class="second">Policy Effective Date</span></p>
                            <p>{{ policy.expirationDate }}<br /><span class="second">Policy Expiration Date</span></p>
                            <p>{{ getDuration(policy.effectiveDate, policy.expirationDate).days }}d<br /><span
                                    class="second">Coverage Duration</span></p>
                            <p>{{ policy.policyEndorsements }}<br /><span class="second">Policy Endorsements</span></p>
                            <p>{{ policy.policyExclusions }}<br /><span class="second">Policy Exclusions</span></p>
                            <p>{{ policy.policyTerm }}<br /><span class="second">Term</span></p>
                            <p>{{ policy.premiumAmount }}<br /><span class="second">Premium Amount</span></p>


                        </div>
                    </div>


                </div>

            </div>
            <div v-else>
                <div
                    style="width:95vw;height:100vh;padding-top:16vh;display:flex;justify-content:center;margin-left:auto;margin-right:auto">
                    <div style="width:fit-content;margin-left:auto;margin-right:auto">
                        <p style="text-transform:capitalize" class="ibn infoSection">You do not have the permission to view
                            this page.</p>
                        <p class="second">If you believe this to be a mistake, please contact support.</p>
                        <p class="brMobile mh" style="padding-top:.5em" onclick="history.back()">Go Back</p>
                    </div>


                </div>

            </div>
        </div>

    </div>

    <div class="mobileView selectDisable">
        <div style="width:100vw;height:fit-content;padding-top:3vh;padding-bottom:11vh">
            <div v-if="rDetailsUsers(signedPolicyId).includes(rUser(usID))" style="display:flex;flex-direction:column">
                <div
                    style="display:flex;margin-top:3vh;flex-direction:column-reverse;height:10vh;text-align:center;border-bottom:4px solid #585858;background-image:url('https://images.pexels.com/photos/16062274/pexels-photo-16062274/free-photo-of-people-art-summer-abstract.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2');background-size:cover;background-position:center">
                </div>
                <div
                    style="width:95vw;height:fit-content;display:flex;flex-direction:column;margin-left: auto;margin-right: auto">
                    <div style="overflow:hidden;width:100%;height:fit-content;display:flex;justify-content: left;gap:6vw">
                        <div class="second ms infoHeader"
                            style="padding: 3vh 0 2vh 0;border:none;width:100vw;height:min-content;margin-right: auto;margin-left: auto;display:flex;justify-content:left;gap:6vw">
                            <img :src="returnLogo(rPolicy(policy.policyID).provider)" style="width:50px;height:50px" />
                            <p style="height:50px;padding-top:.3em">{{ rPolicy(policy.policyID).name }}</p>
                        </div>


                    </div>
                    <div style="border:none;width:95vw;margin-left: auto;margin-right: auto">
                        <div class="ms"
                            style="display:flex;flex-direction:column;padding-top:2vh;line-height:1.1;width:100%;padding-left:2vw;margin-right: auto;margin-left: auto;text-align:left;text-decoration: none;">
                            <p><router-link :to="'/Advisor/' + policy.agentID">{{ rId(policy.agentID).username
                            }}</router-link><br /><span class="second">Insurance Advisor Affiliated</span></p>
                            <p><router-link :to="'/Policy/' + rPolicy(policy.policyID).id">{{ rPolicy(policy.policyID).name
                            }}</router-link><br /><span class="second">Policy Purchased</span></p>
                            <p>{{ policy.purchaseDate }}<br /><span class="second">Policy Purchase Date</span></p>
                            <p>{{ policy.effectiveDate }}<br /><span class="second">Policy Effective Date</span></p>
                            <p>{{ policy.expirationDate }}<br /><span class="second">Policy Expiration Date</span></p>
                            <p>{{ getDuration(policy.effectiveDate, policy.expirationDate).days }}d<br /><span
                                    class="second">Coverage Duration</span></p>
                            <p>{{ policy.policyEndorsements }}<br /><span class="second">Policy Endorsements</span></p>
                            <p>{{ policy.policyExclusions }}<br /><span class="second">Policy Exclusions</span></p>
                            <p>{{ policy.policyTerm }}<br /><span class="second">Term</span></p>
                            <p>{{ policy.premiumAmount }}<br /><span class="second">Premium Amount</span></p>

                        </div>

                    </div>

                    <div class="ms second"
                                style="width:95vw;margin-right: auto;margin-left: auto;padding-top:3vh;text-align:left;padding-left:2vw;background-color:#f5f5f5">
                                <p>Want assistance on your policy?<br />Contact Support / </p>
                                
                                <p>Contact your advisor,<br /> <router-link :to="'/Advisor/' + policy.agentID">{{
                                    rId(policy.agentID).username }}</router-link></p>

                            </div>
                </div>
            </div>
            <div v-else>
                <div
                    style="width:95vw;height:100vh;padding-left:2vw;padding-top:11vh;display:flex;justify-content:center;margin-left:auto;margin-right:auto">
                    <div style="width:fit-content;margin-left:auto;margin-right:auto">
                        <p style="text-transform:capitalize" class="ibn infoSection">You do not have the permission to view
                            this page.</p>
                        <p class="second">If you believe this to be a mistake, please contact support.</p>
                        <p class="brMobile mh" style="padding-top:.5em" onclick="history.back()">Go Back</p>
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
import { getFirestore, onSnapshot, collection, query } from 'firebase/firestore';
import { onAuthStateChanged, getAuth } from '@firebase/auth';
import { ref, onUnmounted, onMounted } from 'vue';
import { app, returnLogo, getDuration } from '@/configs.js';

const db = getFirestore(app);





export default {
    name: 'indexPage',
    data() {
        return {
            users: ref([]),
            completedPolicies: ref([]),
            policies: ref([])


        }
    },
    methods: {
        rId(ids) {
            return Object(this.users.find(u => u.id === ids))

        },
        rUser(uid) {
            return Object(this.users.find(u => u.userID === uid)).id
        },
        rDetailsUsers(signedPolicyId) {
            const policy = Object(this.completedPolicies.find(c => c.id == signedPolicyId));
            return [policy.agentID, policy.buyerID];
        },
        go(val) {
            this.$router.push({ path: val })
        },
        rPolicy(id) {
            return Object(this.policies.find(p => p.id == id))
        }







    },
    computed: {
        policy() {
            return Object(this.completedPolicies.find(p => p.id == this.signedPolicyId))
        }
    },
    props: ['signedPolicyId'],

    mounted() {


        const userQuery = query(collection(db, "omniumISSUsers"));
        const liveOISSUsers = onSnapshot(userQuery, (snapshot) => {
            this.users = snapshot.docs.map((doc) => {
                return {
                    id: doc.id,
                    userID: doc.data().userID,
                    username: doc.data().username,
                    gender: doc.data().gender,
                    age: doc.data().age,
                    assignmentArray: doc.data().assignmentArray,
                    from: doc.data().from,
                    occupation: doc.data().occupation,
                    emailRef: doc.data().emailRef,
                    userType: doc.data().userType,

                }
            });
        })


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
                    policyFrequency: doc.data().premium_Frequency
                }


            })
        })
        onUnmounted(liveOISSUsers, liveCPQ, livePolicies)
    }

}




</script>






<style scoped></style>