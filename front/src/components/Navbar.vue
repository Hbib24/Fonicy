<template>
  <v-card class="overflow-hidden">
    <v-app-bar
      absolute
      color="teal lighten-3"
      dark
      hide-on-scroll
      prominent
      scroll-target="#scrolling-techniques-4"
    >
      <img id="logo" src="../assets/logo.png" />

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>
      <v-avatar><img src="../assets/user.jpg" id="user-img"/></v-avatar>
    </v-app-bar>
    <v-container style="height: 1000px;"></v-container>
  </v-card>
</template>

<script>
export default {
  name: "Navbar"
};
</script>

<style>
#logo {
  margin-left: 1%;
  cursor: pointer;
}
#user-img {
  cursor: pointer;
}
</style>
