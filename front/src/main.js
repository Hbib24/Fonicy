import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import firebase from "firebase";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyDV5pQAU2ChFvvPR5SkM4deplL5DUK1_uc",
  authDomain: "test-dd2af.firebaseapp.com",
  projectId: "test-dd2af",
  storageBucket: "test-dd2af.appspot.com",
  messagingSenderId: "242247506989",
  appId: "1:242247506989:web:2abf1b914f5d8c89c22ca4",
  measurementId: "G-GZ8N054PS6"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App)
}).$mount("#app");
