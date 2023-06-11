<template>
    <transition name="notification">
      <div class="notification" :class="getNotificationClass()">
        {{ message }}
      </div>
    </transition>
  </template>
  
  <script>
  export default {
    props: {
      message: {
        type: String,
        required: true
      },
      success: {
        type: Number,
        required: true,
        validator: value => [0, 1, 2].includes(value)
      }
    },
    methods: {
      getNotificationClass() {
        return `notification-${this.success}`;
      }
    }
  };
  </script>
  
  <style scoped>
  </style>
  