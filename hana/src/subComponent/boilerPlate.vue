<template>

    <div>


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
import { app } from '@/configs.js';

const db = getFirestore(app);





export default {
  name: 'indexPage',
  data() {
    return {
      users: ref([]),

    }
  },
  methods: {
    returnUserObject(uid) {
      return this.users.filter(u => u.userID === uid)
    },

    go(val) {
      this.$router.push({ path: val })
    },







  },
  computed: {

  },
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
    onUnmounted(liveOISSUsers)
  }

}




</script>






<style scoped>

</style>