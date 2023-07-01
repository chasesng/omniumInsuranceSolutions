import { initializeApp } from "firebase/app";
// import { onAuthStateChanged,getAuth } from "firebase/auth";
// import { onSnapshot, collection, query, getFirestore } from 'firebase/firestore';
// import { onMounted, onUnmounted, ref} from 'vue';


export const firebaseConfig = {
  apiKey: "AIzaSyD8kn26Sj-wvYhB6h-vALgxWoZ2UyujHyI",
  authDomain: "hana-firebase-auth.firebaseapp.com",
  projectId: "hana-firebase-auth",
  storageBucket: "hana-firebase-auth.appspot.com",
  messagingSenderId: "257456893215",
  appId: "1:257456893215:web:7da412256ffcbfeb62142a",
  measurementId: "G-VNEDYMGDTL"
}

export const app = initializeApp(firebaseConfig);

export function checkEmail(input) {
  const regex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
  if (!regex.test(input) === true) {
    return false;
  }
  else {
    return true;

  }

}



export function checkNRIC(input) {
  const regex = /^[STFG]\d{7}[A-Z]$/;
  if (!regex.test(input) === true) {
    return false
  }
  else {
    return true
  }
}
export function checkPassword(input) {
  const regex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,31}$/;
  if (!regex.test(input) === true) {
    return false;
  }
  else {
    return true;

  }
}


export function checkMatch(input, confirmInput) {
  if (input.trim() != confirmInput.trim()) {
    return false;
  }
  else {
    return true
  }
}

export function rQuotes(input) {
  // regex will read string with the quotes, use this to remove them, works for ref const specifically... to alter for others, remove .value
  return input.value.replace(/['"]+/g, '')
}

//both functions below are for converting epoch time to readable human datetime format
export function timestampFormat(timestamp) { //returns yyyy-mm-dd hh:mm:ss
  const date = new Date(timestamp);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}

export function timestampDateOnly(timestamp) { //returns yyyy-mm-dd
  const date = new Date(timestamp);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  return `${year}-${month}-${day}`;
}


export function getAge (timestamp) { //receive epoch time as parameter, return difference in years

  const timeDifference = Date.now() - timestamp;
  const seconds = timeDifference / 1000;
  const minutes = seconds / 60;
  const hours = minutes / 60;
  const days = hours / 24;

  return days/365
}

export function returnUSName(usID) {
  for (let i = 0 ; i < this.users.length; i++) {
    if (this.users[i].userID === usID) {
      return this.users[i].username
    }
  }
}

export function calculateAge(dateString) {
  const birthDate = new Date(dateString);
  const currentDate = new Date();
  
  let age = currentDate.getFullYear() - birthDate.getFullYear();
  
  const monthDifference = currentDate.getMonth() - birthDate.getMonth();
  
  if (monthDifference < 0 || (monthDifference === 0 && currentDate.getDate() < birthDate.getDate())) {
    age--;
  }
  
  return age;
}

export function go(val) {
  this.$router.push({ path: val })
}

export function returnLogo(brandString) {
  if (brandString === "AIA Singapore") {
    return require("./assets/logos/AIA_Group_logo.svg.png")
  }
  if (brandString === 'Great Eastern') {
    return require("./assets/logos/Great-Eastern-Life.svg")
  }
  if (brandString === 'NTUC Income') {
    return require("./assets/logos/ntucIncome.png")
  }
}

export function truncateString(str) {
  if (str.length > 30) {
    return str.substring(0, 50) + "...";
  }
  else {
    return str;
  }
}


export function timeDifference (timestamp) {

  const timeDifference = Date.now() - timestamp;
  const seconds = timeDifference / 1000;
  const minutes = seconds / 60;
  const hours = minutes / 60;
  const days = hours / 24;

  if (minutes < 60) {
    return Math.round(minutes) + ' minute(s) ago';
  } else if (hours < 24) {
    return Math.round(hours) + ' hour(s) ago';
  } else {
    return Math.round(days) + ' day(s) ago';
  }
}



export function strTruncate(str, val) {
  if (str.length > val) {
    return str.substring(0, val) + "...";
  }
  else {
    return str;
  }

}
export function getDuration(startDate, endDate) {
  const start = new Date(startDate);
  const end = new Date(endDate);

  const duration = Math.abs(end - start);

  // Convert the duration to days, hours, minutes, and seconds
  const days = Math.floor(duration / (24 * 60 * 60 * 1000));

  return {
    days,
  };
}

export function countIteration(arr, toFind) {
  let iterations = 0;
  for (let i = 0 ; i < arr.length; i ++) {
    if (arr[i] === toFind) {
      iterations++;
    }
  }
  return iterations
}
