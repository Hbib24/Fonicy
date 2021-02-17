<template>
  <div>
    <NavBar class="nav" />
    <SideNav class="sidenav" />
  </div>
</template>
<script>
import NavBar from "../components/NavBar.vue";
import SideNav from "../components/SideNav.vue";
export default {
  name: "Home",
  components: [SideNav, NavBar]
};
</script>

<style scoped>
.sidenav {
  position: absolute;
  width: 13%;
  min-width: 60px;
  height: 100%;
  background: #bdbdbd;
  box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
  z-index: -1;
}

.nav {
  position: fixed;
  width: 100%;
  height: 121px;
  background: #828282;
  border: 1px solid #2ddbb5;
  box-sizing: border-box;
}
</style>
