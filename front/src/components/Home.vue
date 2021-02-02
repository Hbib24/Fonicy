<template
  ><div>
    <Navbar />
    <div class="divider">
      <h1 style="position: relative; top: 75px">
        Check out our hottest deals!
      </h1>
      <img
        src="../assets/expand_more-white-36dp.svg"
        style="position: relative; top: 90px"
      />
    </div>
    <Footer />
  </div>
</template>

<script>
import Navbar from "./Navbar";
import Footer from "./Footer";
export default {
  name: "Home",
  components: { Navbar, Footer }
};
</script>

<style scoped>
.divider {
  color: white;
  background-color: #80cbc4 !important;
  width: 100%;
  height: 15%;
  text-align: center;
  margin-bottom: 50px;
}
</style>
