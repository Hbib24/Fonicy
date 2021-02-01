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

      <div style="margin: 12px; ">
        <v-autocomplete
          filled
          rounded
          v-model="searchValues"
          :items="searchValues"
        ></v-autocomplete>
      </div>

      <img class="nav-btn" src="../assets/manage_search-white-36dp.svg" />

      <v-badge
        :content="items"
        :value="items"
        color="red"
        overlap
        class="nav-btn"
      >
        <img src="../assets/shopping_cart-white-36dp.svg" />
      </v-badge>

      <img class="nav-btn" src="../assets/logout-white-36dp.svg" />

      <h4 style="margin-top: 19px !important; margin-right: 7px" id="username">
        Hbib Bekir
      </h4>
      <v-avatar size="60" id="user-img"
        ><img src="../assets/user.jpg"
      /></v-avatar>
    </v-app-bar>
    <v-container
      style="height: 100vh; margin: 0px !important; display: flex !important"
    >
      <div style="margin-top: 12%">
        <Card2 :cat="searchValues[0]" />
        <Card2 :cat="searchValues[1]" />
        <Card2 :cat="searchValues[2]" />
        <Card2 :cat="searchValues[3]" />
        <Card2 :cat="searchValues[4]" />
        <Card2 :cat="searchValues[5]" />
      </div>
      <v-card style="margin-top: 12%; margin-left: 10%">
        <v-window v-model="onboarding">
          <v-window-item v-for="n in slides" :key="`card-${n}`">
            <v-card color="transparent" height="750">
              <v-row class="fill-height" align="center" justify="center">
                <img :src="n" />
              </v-row>
            </v-card>
          </v-window-item>
        </v-window>

        <v-card-actions class="justify-space-between">
          <v-btn text @click="prev">
            <v-icon>mdi-chevron-left</v-icon>
          </v-btn>
          <v-item-group v-model="onboarding" class="text-center" mandatory>
            <v-item
              v-for="n in slides"
              :key="`btn-${n}`"
              v-slot="{ active, toggle }"
            >
              <v-btn :input-value="active" icon @click="toggle">
                <v-icon>mdi-record</v-icon>
              </v-btn>
            </v-item>
          </v-item-group>
          <v-btn text @click="next">
            <v-icon>mdi-chevron-right</v-icon>
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-container>
  </v-card>
</template>

<script>
import Card2 from "./card2";
export default {
  name: "Navbar",
  components: { Card2 },
  data() {
    return {
      items: 5,
      show: false,
      searchValues: [
        "clothing",
        "electronics",
        "furniture",
        "health",
        "video games",
        "home appliance"
      ],
      slides: [
        "https://images.wallpaperscraft.com/image/phone_smartphone_hand_143432_1920x1080.jpg",
        "https://images.wallpaperscraft.com/image/camera_film_strap_158942_1920x1080.jpg",
        "https://images.wallpaperscraft.com/image/watch_light_hand_134786_1600x1200.jpg"
      ],
      onboarding: 0
    };
  },
  methods: {
    next() {
      this.onboarding =
        this.onboarding + 1 === this.slides.length ? 0 : this.onboarding + 1;
    },
    prev() {
      this.onboarding =
        this.onboarding - 1 < 0 ? this.slides.length - 1 : this.onboarding - 1;
    },
    auto() {
      setInterval(this.next, 3000);
    }
  },
  mounted() {
    this.auto();
  }
};
</script>

<style>
#logo {
  margin-left: 1%;
  cursor: pointer;
}
#user-img {
  cursor: pointer;
  margin-top: 6px;
}
.nav-btn {
  margin-right: 2%;
  margin-top: 1%;
  cursor: pointer;
}
#username:hover {
  text-decoration: underline;
  cursor: pointer;
}
.v-card {
  max-width: 120% !important;
}
</style>
