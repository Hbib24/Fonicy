<template
  ><div>
    <Navbar />
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
