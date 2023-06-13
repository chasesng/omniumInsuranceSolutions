<template>
  <div class="tabletView selectDisable" style="overflow:hidden">
    <div style="width:100vw;height:50vh;padding-top:4vh">
      <div
        style="background-image:url('https://images.pexels.com/photos/2434268/pexels-photo-2434268.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2');box-shadow: 0px 10px 5px 0px rgba(204,204,204,0.75);overflow:hidden;width:80vw;height:40vh;display:flex;margin-left:auto;margin-right:auto;text-align:center;background-position:0% 30%;background-size:cover">
        <div class="animate__animated animate__fadeInLeft"
          style="width:55%;display:flex;flex-direction:column;text-align:left;padding-top:6vh;padding-left:2vw;background: linear-gradient(270deg, rgba(186,186,186,.3) 35%, rgba(126,126,126,.4) 88%)">
          <p class="ibn infoHeader primary" style="background-color:whitesmoke;padding:0px 1vh 0px 1vh;width:fit-content">
            Policies</p>
          <p class="ibn infoSection second"
            style="text-transform: capitalize;background-color:white;padding:0px 1vh 0px 1vh;width:fit-content">View
            policies offered by major brands in insurance</p>
          <p class="ibn" style="background-color:black;color:whitesmoke">Note: Buying of policies works instantly for demonstration in current
            showcase state. Upon completion of certification and licensing, Omnium will exit showcase. Please be patient
            with us, thank you.</p>
        </div>
        <div class="animate__animated animate__slideInLeft"
          style="animation-duration:.3s;animation-delay:.6s;width:5%;background-color:rgba(220, 220, 220, 0.5)"></div>

      </div>


    </div>
    <div
      style="width:80vw;display:flex;gap:2vw;height:200vh;padding-bottom:10vh;margin:auto;justify-content:space-between">
      <div class="sd"
        style="padding-top:6vh;display:flex;flex-direction:column;gap:2vh;width:25%;height:fit-content;padding-bottom:6vh;border:1px solid gray">
        <!-- <p style="color:red">{{ selectedInsuranceTypes }}</p><br/>
        <p style="color:blue">{{ selectedBrands }}</p> -->
        
        <div
          style="display:flex;flex-direction:column;width:95%;height:fit-content;margin-left:auto;margin-right:auto;line-height:1">
          <p class="ibn second" style="padding-left:.3vw">Search</p>
          <input style="outline:none" type="text" class="inpType" placeholder="Search Policy Name..." v-model="searchBar">
        </div>
        <div id="filterByType"
          style="width:98%;margin-left:auto;margin-right:auto;padding-top:6vh;display:flex;flex-direction:column;">
          <p class="ibn second" style="padding-left:.3vw">Find By Type</p>
          <div style="display:flex;flex-direction:column;justify-content:center;padding-left:1vw">
            <div style="display:flex;justify-content:space-between">
              <div style="display:table-cell;vertical-align:middle;width:20vw;">
                <label style="width:80%;min-width:fit-content" for="Health policyType">Health</label>
                <input style="outline:none" id="Health policyType" @change="updateTypeFilter" type="checkbox" name="filterByType">
              </div>
              <div style="display:table-cell;vertical-align:middle;width:20vw">
                <label style="width:80%;min-width:fit-content" for="Life policyType">Life</label>
                <input style="outline:none" id="Life policyType" @change="updateTypeFilter" type="checkbox" name="filterByType">
              </div>
            </div>
            <div style="display:flex;justify-content:space-between">
              <div style="display:table-cell;vertical-align:middle;width:20vw">
                <label style="width:80%;min-width:fit-content" for="Accident policyType">Accident</label>
                <input style="outline:none" id="Accident policyType" @change="updateTypeFilter" type="checkbox" name="filterByType">
              </div>
              <div style="display:table-cell;vertical-align:middle;width:20vw;">
                <label style="width:80%;min-width:fit-content" for="Home policyType">Home</label>
                <input style="outline:none" id="Home policyType" @change="updateTypeFilter" type="checkbox" name="filterByType">
              </div>

            </div>
            <div style="display:flex;justify-content:space-between">
              <div style="display:table-cell;vertical-align:middle;width:20vw;">
                <label style="width:80%;min-width:fit-content" for="Disability policyType">Disability</label>
                <input style="outline:none" id="Disability policyType" @change="updateTypeFilter" type="checkbox" name="filterByType">
              </div>
              <div style="display:table-cell;vertical-align:middle;width:20vw">
                <label style="width:80%;min-width:fit-content" for="Long-Term policyType">Long-Term</label>
                <input style="outline:none" id="Long-Term policyType" @change="updateTypeFilter" type="checkbox" name="filterByType">
              </div>
            </div>
            <div style="display:flex;justify-content:space-between">
              <div style="display:table-cell;vertical-align:middle;width:20vw;">
                <label style="width:80%;min-width:fit-content" for="Wealth Accumulation policyType">Wealth Acc.</label>
                <input style="outline:none" id="Wealth Accumulation policyType" @change="updateTypeFilter" type="checkbox" name="filterByType">
              </div>
              <div style="display:table-cell;vertical-align:middle;width:20vw">
              
              </div>
            </div>
          </div>
        </div>

        <div id="filterByComp"
          style="width:95%;margin-left:auto;margin-right:auto;padding-top:6vh;display:flex;flex-direction:column;">
          <p class="ibn second" style="padding-left:.3vw">Find By Provider</p>
          <div style="display:flex;flex-direction: column;padding-left:1vw">
            <div v-for="(i, index) in brandsandImg" :key="index">
              <div style="display:table-cell;vertical-align:middle;width:20vw">
                <label style="width:60%;min-width:fit-content" :for="i.brand">{{ i.brand }}</label>
                <input style="outline:none" :id="i.brand + ' brandType'" @change="updateBrandFilter" type="checkbox" name="filterByComp" />
              </div>
            </div>

          </div>
        </div>

        <div id="filterByType"
          style="width:95%;margin-left:auto;margin-right:auto;padding-top:6vh;display:flex;flex-direction:column;">
          <p class="ibn second" style="padding-left:.3vw">Period</p>
          <div style="display:flex;flex-direction: column;padding-left:1vw">
            <div style="display:table-cell;vertical-align:middle;width:20vw">
              <label style="width:60%;min-width:fit-content" for="term">Term</label>
              <input id="term" style="outline:none" type="radio" name="filterByPeriod" />
            </div>
            <div style="display:table-cell;vertical-align:middle;width:20vw">
              <label style="width:60%;min-width:fit-content" for="permanent">Permanent</label>
              <input id="permanent" style="outline:none" type="radio" name="filterByPeriod" />
            </div>
          </div>
        </div>

        <div id="filterByType"
          style="width:95%;height:fit-content;min-height:20vh;margin-left:auto;margin-right:auto;padding-top:6vh;display:flex;flex-direction:column;">
          <p class="ibn second" style="padding-left:.3vw">Budget / Month ($ SGD)</p>
          <input type="text" v-model="sliderVal" class="ibn inpType second"
            style="height:3vh;width:50%;margin-left:auto;margin-right:auto;font-size:1em" />
          <input type="range" id="range" v-model="sliderVal" class="range-input" min="0" max="1000" step="1"
            style="width:70%;margin:auto;background:gray" placeholder="Select Amount ($)">
        </div>


      </div>
      <div style="display:flex;flex-direction:column;gap:2vh;width:75%;height:190vh;margin-bottom:2vh;overflow-y:scroll;text-align:left">
        <div v-if="computedPolicies.length == 0" style="text-align:center;padding-top:11vh;width:100%;height:100vh">
            <p class="ibn infoMinute second" style="text-transform: capitalize;">No policies found!</p>
          </div>
        <div v-for="(policy, index) in computedPolicies" :key="index">
          
          <div class="selectDisable"
            style="height:220px;border-radius:11px;overflow:hidden;border:1px solid gray;box-shadow: 0px 10px 5px 0px rgba(204,204,204,0.75);display:flex;flex-direction:column">
            <div class="primarybg" style="height:1vh;filter:opacity(.9)"></div>
            <div style="display:flex;justify-content:space-between;height:70%">
              <div style="display:flex;flex-direction:column;width:40%;line-height:1;padding-top:1em">
                <p class="second" style="padding-left:2vw"><img :src="returnLogo(policy.provider)"
                    style="width:50px;height:50px;" /></p>
                <p class="ibn infoSection primary" style="padding-left:2vw">{{ policy.name }}</p>
                <p class="infoMinute second" style="padding-left:2vw;height:min-content">{{ policy.type }} Policy</p>
               
              </div>
              <div style="width:50%;padding-top:1em">
                <p class="ibn infoMinute second">{{ strTruncate(policy.coverageDetails, 200) }}</p>
              </div>
            </div>
            <div style="height:35%;display:flex;justify-content:flex-end;gap:1vw;padding-right:1vw;">
              <button class="tertiaryMobile mh" style="color:whitesmoke;border:1px solid #c8bbc0">Get Assistance</button>
              <button class="brMobile mh" v-on:click="go('/Policy/' + policy.id)"
                style="background-color:whitesmoke;color:rgba(70, 70, 70, 0.669);border:1px solid #c8bbc0">More
                Details</button>
            </div>

          </div>
        </div>
      </div>

    </div>
  </div>
  <div class="mobileView" style="width:100vw;height:fit-content">
    <div class="mh" v-on:click="updateSearchVisible()" style="z-index:3;position:fixed;bottom:5vh;right:9vw;width:60px;height:60px;background-color: rgba(195, 195, 195);border-radius:50%;display:flex;justify-content: center;">
      <i class="fa-solid fa-magnifying-glass infoHeader" style="padding-top:30%;color:white"></i>
    </div>
    <div style="width:100vw;height:fit-content">
      <div
        style="background-image:url('https://images.pexels.com/photos/2434268/pexels-photo-2434268.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2');box-shadow: 0px 10px 5px 0px rgba(204,204,204,0.75);overflow:hidden;width:95vw;height:20vh;display:flex;margin-left:auto;margin-right:auto;text-align:center;margin-top:6vh;background-position:0% 30%;background-size:cover">
        <div class="animate__animated animate__fadeInLeft"
          style="width:90%;display:flex;flex-direction:column;text-align:left;padding-top:6vh;padding-left:2vw;line-height:1;background: linear-gradient(270deg, rgba(186,186,186,.3) 35%, rgba(126,126,126,.4) 88%)">
          <p class="ibn infoHeader primary" style="background-color:whitesmoke;padding:0px 1vh 0px 1vh;width:fit-content">
            Policy Gallery</p>
          <p class="ibn infoSection second" style="background-color:whitesmoke;padding:0px 1vh 0px 1vh;width:fit-content">
            View policies offered by major brands in insurance here</p>
           
        </div>

      </div>
      <p class="ibn" style="width:95%;margin-left:auto;margin-right:auto;background-color:black;color:whitesmoke">Note: Buying of policies works instantly for demonstration in current
            showcase state. Upon completion of certification and licensing, Omnium will exit showcase. Please be patient
            with us, thank you.</p>



      <div :style="{display: searchVisible}" style="overflow-y:scroll;">
      <div class="sd primary" 
        style=";width:96vw;position:fixed;top:0;left:2vw;background-color:#fafafa;z-index:2;height:fit-content;border-radius:4px;margin-top:2vh;margin-bottom:2vh;display:flex;flex-direction:column;margin-left:auto;margin-right:auto;">
        <div class="sd"
        style="padding-top:6vh;display:flex;flex-direction:column;gap:2vh;width:100%;height:fit-content;padding-bottom:2vh;border:1px solid gray">
        
        <div
          style="display:flex;flex-direction:column;width:95%;height:fit-content;margin-left:auto;margin-right:auto;line-height:1">
          <p class="ibn second" style="padding-left:.3vw">Search</p>
          <input style="outline:none" type="text" class="inpClear" placeholder="Search Policy Name..." v-model="searchBar">
        </div>
        <div id="filterByType"
          style="width:98%;margin-left:auto;margin-right:auto;padding-top:6vh;display:flex;flex-direction:column;">
          <p class="ibn second" style="padding-left:.3vw">Find By Type</p>
          <div style="display:flex;flex-direction:column;justify-content:center;padding-left:1vw">
            <div style="display:flex;justify-content:space-between">
              <div style="display:table-cell;vertical-align:middle;width:90vw;">
                <label style="width:80%;min-width:fit-content" for="Health policyType">Health</label>
                <input style="outline:none" id="Health policyType" @change="updateTypeFilter" type="checkbox" name="filterByType">
              </div>
              <div style="display:table-cell;vertical-align:middle;width:90vw">
                <label style="width:80%;min-width:fit-content" for="Life policyType">Life</label>
                <input style="outline:none" id="Life policyType" @change="updateTypeFilter" type="checkbox" name="filterByType">
              </div>
            </div>
            <div style="display:flex;justify-content:space-between">
              <div style="display:table-cell;vertical-align:middle;width:90vw">
                <label style="width:80%;min-width:fit-content" for="Accident policyType">Accident</label>
                <input style="outline:none" id="Accident policyType" @change="updateTypeFilter" type="checkbox" name="filterByType">
              </div>
              <div style="display:table-cell;vertical-align:middle;width:90vw;">
                <label style="width:80%;min-width:fit-content" for="Home policyType">Home</label>
                <input style="outline:none" id="Home policyType" @change="updateTypeFilter" type="checkbox" name="filterByType">
              </div>

            </div>
            <div style="display:flex;justify-content:space-between">
              <div style="display:table-cell;vertical-align:middle;width:90vw;">
                <label style="width:80%;min-width:fit-content" for="Disability policyType">Disability</label>
                <input style="outline:none" id="Disability policyType" @change="updateTypeFilter" type="checkbox" name="filterByType">
              </div>
              <div style="display:table-cell;vertical-align:middle;width:90vw">
                <label style="width:80%;min-width:fit-content" for="Long-Term policyType">Long-Term</label>
                <input style="outline:none" id="Long-Term policyType" @change="updateTypeFilter" type="checkbox" name="filterByType">
              </div>
            </div>
            <div style="display:flex;justify-content:space-between">
              <div style="display:table-cell;vertical-align:middle;width:90vw;">
                <label style="width:80%;min-width:fit-content" for="Wealth Accumulation policyType">Wealth Acc.</label>
                <input style="outline:none" id="Wealth Accumulation policyType" @change="updateTypeFilter" type="checkbox" name="filterByType">
              </div>
              <div style="display:table-cell;vertical-align:middle;width:90vw">
              
              </div>
            </div>
          </div>
        </div>

        <div id="filterByComp"
          style="width:95%;margin-left:auto;margin-right:auto;padding-top:2vh;display:flex;flex-direction:column;">
          <p class="ibn second" style="padding-left:.3vw">Find By Provider</p>
          <div style="display:flex;flex-direction: column;padding-left:1vw">
            <div v-for="(i, index) in brandsandImg" :key="index">
              <div style="display:table-cell;vertical-align:middle;width:90vw">
                <label style="width:60%;min-width:fit-content" :for="i.brand">{{ i.brand }}</label>
                <input style="outline:none" :id="i.brand + ' brandType'" @change="updateBrandFilter" type="checkbox" name="filterByComp" />
              </div>
            </div>

          </div>
        </div>

        <div id="filterByType"
          style="width:95%;margin-left:auto;margin-right:auto;padding-top:2vh;display:flex;flex-direction:column;">
          <p class="ibn second" style="padding-left:.3vw">Period</p>
          <div style="display:flex;flex-direction: column;padding-left:1vw">
            <div style="display:table-cell;vertical-align:middle;width:90vw">
              <label style="width:50%;min-width:fit-content" for="term">Term</label>
              <input id="term" style="outline:none" type="radio" name="filterByPeriod" />
            </div>
            <div style="display:table-cell;vertical-align:middle;width:90vw">
              <label style="width:50%;min-width:fit-content" for="permanent">Permanent</label>
              <input id="permanent" style="outline:none" type="radio" name="filterByPeriod" />
            </div>
          </div>
        </div>

        <div id="filterByType"
          style="width:95%;height:fit-content;min-height:20vh;margin-left:auto;margin-right:auto;padding-top:2vh;display:flex;flex-direction:column;">
          <p class="ibn second" style="padding-left:.3vw">Budget / Month ($ SGD)</p>
          <input type="text" v-model="sliderVal" class="ibn inpType second"
            style="height:3vh;width:50%;margin-left:auto;margin-right:auto;font-size:1em" />
          <input type="range" id="range" v-model="sliderVal" class="range-input" min="0" max="1000" step="1"
            style="width:70%;margin:auto;background:gray" placeholder="Select Amount ($)">
        </div>


      </div>
      </div>
    </div>


      
      <div class="sd"
        style="width:95vw;height:fit-content;margin-bottom:2vh;margin-left:auto;margin-right:auto;display:flex;flex-direction:column;gap:2vh">
        <div v-if="computedPolicies.length == 0" style="text-align:center;padding-top:6vh;width:100vw;height:100vh">
            <p class="ibn infoMinute second" style="text-transform: capitalize;">No policies found!</p>
          </div>
        <div v-for="(policy, index) in computedPolicies" :key="index">
          <div class="selectDisable"
            style="height:fit-content;border-radius:4px;overflow:hidden;border:1px solid gray;padding-bottom:1vh;box-shadow: 0px 10px 5px 0px rgba(204,204,204,0.75);display:flex;flex-direction:column">
            <div class="primarybg" style="height:1vh;filter:opacity(.9)"></div>
            <div style="display:flex;flex-direction:column;height:70%;width:95%">
              <div style="display:flex;flex-direction:column;width:100%;line-height:1.2;padding-top:1em">
                <p class="second" style="padding-left:2vw"><img :src="returnLogo(policy.provider)"
                    style="width:40px;height:40px;" /></p>
                <p class="ibn infoSection  primary" style="padding-left:2vw">{{ policy.name }}</p>
                <p class="infoMinute second" style="padding-left:2vw;height:min-content">{{ policy.type }} Policy</p>
               
              </div>
              <div style="width:90%;padding-left:2vw;padding-top:1em">
                <p class="ibn infoMinute second">{{ strTruncate(policy.coverageDetails, 100) }}</p>
              </div>
            </div>
            <div style="width:95%;margin-left:auto;margin-right:auto;height:fit-content;display:flex;gap:1vw;">
              <button class="nw tertiaryMobile mh" style="color:whitesmoke;border:1px solid #c8bbc0">Get
                Assistance</button>
              <button class="nw brMobile mh" v-on:click="go('/Policy/' + policy.id)"
                style="background-color:whitesmoke;color:rgba(70, 70, 70, 0.669);border:1px solid #c8bbc0">More
                Details</button>
            </div>

          </div>
        </div>
      </div>

    </div>

  </div>
</template>
<script>
import { ref, onUnmounted } from 'vue'
import { getFirestore, collection, onSnapshot, query } from '@firebase/firestore';
import { app } from '@/configs'


const db = getFirestore(app);

export default {
  data() {


    return {
      nricValid: 'False',
      nric: '',
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
      mobile: '',
      users: ref([]),
      policies: ref([]),
      selectedOption: 0,
      insuranceTypes: ['Health', 'Life', 'Accident', 'Home', 'Disability', 'Long-Term', 'Wealth Accumulation'],
      brandsandImg: [{ id: 1, brand: 'AIA Singapore', asset: '' }, { id: 2, brand: 'Great Eastern', asset: '' }, { id: 3, brand: 'NTUC Income', asset: '' }, { id: 4, brand: 'Allianz Singapore', asset: '' }, { id: 5, brand: 'HSBC Life', asset: '' }],
      sliderVal: ref(),
      selectedInsuranceTypes: ['Health', 'Life', 'Accident', 'Home', 'Disability', 'Long-Term', 'Wealth Accumulation'],
      selectedBrands: ['AIA Singapore','Great Eastern', 'NTUC Income', 'Allianz Singapore', 'HSBC Life'],
      searchVisible: 'none',
      searchBar: ref('')

    }
  },

  methods: {
    returnLogo(brandString) {
      if (brandString === "AIA Singapore") {
        return require("../assets/logos/AIA_Group_logo.svg.png")
      }
      if (brandString === 'Great Eastern') {
        return require("../assets/logos/Great-Eastern-Life.svg")
      }
      if (brandString === 'NTUC Income') {
        return require("../assets/logos/ntucIncome.png")
      }
    },
    updateSearchVisible() {
      this.searchVisible = this.searchVisible === 'none' ? 'block' : 'none';
    }, 
    strTruncate(str, val) {
      if (str.length > val) {
        return str.substring(0, val) + "...";
      }
      else {
        return str;
      }
    },
    updateTypeFilter() {
      var elements = document.querySelectorAll('input[type="checkbox"][id*="policyType"]:checked');
      var values = [];

      for (var i = 0; i < elements.length; i++) {
        var id = elements[i].id;
        var value = id.replace(" policyType", "");
        values.push(value);
      }
      this.selectedInsuranceTypes = values

      if (this.selectedInsuranceTypes.length == 0) {
        this.selectedInsuranceTypes = ['Health', 'Life', 'Accident', 'Home', 'Disability', 'Long-Term', 'Wealth Accumulation']
      }
    },
    updateBrandFilter() {
      var elements = document.querySelectorAll('input[type="checkbox"][id*="brandType"]:checked');
      var values = [];

      for (var i = 0; i < elements.length; i++) {
        var id = elements[i].id;
        var value = id.replace(" brandType", "");
        values.push(value);
      }
      this.selectedBrands = values

      if (this.selectedBrands.length == 0) {
        this.selectedBrands = ['AIA Singapore','Great Eastern', 'NTUC Income', 'Allianz Singapore', 'HSBC Life'];
      }
    },
    go(val) {
      this.$router.push({ path: val })
    },


  },
  mounted() {
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
          footnotes: doc.data().footnotes
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
    onUnmounted(livePolicies, liveOISSUsers)
  },
  computed: {
    computedPolicies() {
      let cleanedSearch = this.searchBar.trim().toLowerCase()
      let firstState = this.policies.filter(obj => this.selectedInsuranceTypes.includes(obj.type))
      let secondstate = firstState.filter(obj => this.selectedBrands.includes(obj.provider))
      if (cleanedSearch.length >= 1) {
        secondstate = secondstate.filter(obj => String(obj.name).trim().toLowerCase().includes(cleanedSearch))
      }

      return secondstate
  
    },
    

   

  }
};


</script>

<style>
.gallery {
  -moz-transform: rotate(353deg);
  -webkit-transform: rotate(353deg);
  -o-transform: rotate(353deg);
  -ms-transform: rotate(353deg);
  transform: rotate(353deg);
}

#filterByType input {
  scale: 1.3;
}

#filterByComp input {
  scale: 1.3;
}
</style>