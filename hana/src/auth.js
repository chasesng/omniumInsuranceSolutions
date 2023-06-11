import { ref, onMounted } from 'vue';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

export const usID = ref('');
export const usEmail = ref('');
export const isLoggedin = ref(false);

export function setupAuth() {
  const auth = getAuth();

  onMounted(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        isLoggedin.value = true;
        usID.value = user.uid;
        usEmail.value = user.email;
      } else {
        isLoggedin.value = false;
      }
    });
  });
}