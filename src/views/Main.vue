<template>
  <div>
    <!-- <v-card
    class="mx-auto overflow-hidden"
    height="400"
  > -->
    <v-app-bar dark :style="{ backgroundImage: createBackgroundString }">
      <!-- <div :style="{ backgroundImage: createBackgroundString }" /> -->
      <img :src="image.sample" width="80px" class="mt-n1" />

      <v-toolbar-title class="ml-4"
        >บริษัท อินเทอร์เน็ตประเทศไทย จำกัด(มหาชน)</v-toolbar-title
      >
      <v-spacer></v-spacer>
      <!-- <v-tabs
      color="deep-purple accent-4"
      right
    >
      <v-tab @click="check_selected('show_beacon')">Beacon</v-tab>
      <v-tab @click="check_selected('import_file')">Import</v-tab>

    </v-tabs> -->

      <!-- <v-list-item v-for="item in items" :key="item.title" link>
        <v-list-item-content @click="selected = item.selected">
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item> -->
      <v-icon large class="mr-2" @click="openDialogGenQr()">mdi-qrcode-scan</v-icon>
    </v-app-bar>
    <showStock></showStock>
    <genQrcode ref="gen_qrcode"></genQrcode>
  </div>
</template>


<script>
import showStock from "../components/showStock.vue";
import genQrcode from "../components/dialogGenQr.vue";

export default {
  components: {
    showStock,
    genQrcode,
  },
  data: () => ({
    selected: 'show_beacon',
    drawer: false,
    group: null,
    angle: "50",
    color1: "#AED581",
    color2: "#8BC34A",
    color3: "#4CAF50",
    image: { sample: require("../assets/inetlogo.png") },
  }),
  computed: {
    createBackgroundString() {
      return `linear-gradient(${this.angle}deg, ${this.color1}, ${this.color2}, ${this.color3})`;
    },
  },
  methods: {
    openDialogGenQr() {
      this.$refs.gen_qrcode.openDialogGenQr();
    },
    check_selected(newSelected) {
      // this.$store.commit("update_selected", newSelected);
      this.selected = newSelected
    },
  },
};
</script>

<style>
</style>