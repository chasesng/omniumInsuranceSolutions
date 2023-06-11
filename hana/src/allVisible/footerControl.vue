<template>
  <footer class="footer">
    <div class="container" style="overflow:hidden">
      <div style="display:inline-block">
      <div style="font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif; text-transform:uppercase;font-weight:bold;font-size:16px;"></div>

      </div>
      <div class="content has-text-centered">
        <p style="font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif">
          <strong>Copyright</strong> {{ year }} {{ companyName }}
        </p>
        <p style="font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif">
          <router-link to="/TermsOfUse">Terms of Use</router-link> | <a href="#">Privacy Policy</a>
        </p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      year: new Date().getFullYear(),
      companyName: "Omnium Insurance Solutions Singapore"
    };
  }
};
</script>

<style scoped>
footer {
background-color: #333;
color: #fff;
}
</style>