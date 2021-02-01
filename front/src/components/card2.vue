<template>
  <v-card
    class="mx-auto"
    max-width="200"
    style="width: 300px; margin: 45px; cursor: pointer"
  >
    <v-card-text>
      <p class="display-1 text--primary">
        {{ cat }}
      </p>
      <strong>Explore</strong>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: {
    cat: String
  },
  data: () => ({
    reveal: false
  })
};
</script>

<style>
.v-card--reveal {
  bottom: 0;
  opacity: 1 !important;
  position: absolute;
  width: 100%;
}
</style>
