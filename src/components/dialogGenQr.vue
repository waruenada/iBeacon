<template>
  <div id="component" class="text-center">
  
    
    <v-dialog v-model="DialogGenQr" width="700px">
    <v-card v-if="loading === true" height="200px">
        <v-row justify="center" class="ma-0">
          <v-col cols="2" class="" align="center">
      <rotate-square5 class="mt-16"></rotate-square5>
          </v-col>
        </v-row>
    <!-- </div> -->
    </v-card>
    <v-card v-if="loading === false">
      <v-row class="ma-0">
        <v-col cols="12">
    <file-pond
      name="test"
      ref="pond"
      allow-multiple="true"
      v-bind:server="myServer"
      v-on:init="handleFilePondInit"
    />
      
        </v-col>
      </v-row>
      <v-row class="ma-0">
        <v-spacer></v-spacer>
        <v-col cols="2" class="mr-1 mt-n9">
          <v-btn rounded
          v-if="data_file != null"
      color="#8BC34A"
      @click="generate()"
      dark><v-icon>mdi-arrow-right-circle</v-icon>Next</v-btn>
        </v-col>
      </v-row>
      <!-- </div> -->
    </v-card>
    </v-dialog>
  </div>
</template>


<script>
import vueFilePond from "vue-filepond";
import "filepond/dist/filepond.min.css";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.css";
import FilePondPluginFileValidateType from "filepond-plugin-file-validate-type";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import {RotateSquare5} from 'vue-loading-spinner'


const FilePond = vueFilePond(
  FilePondPluginFileValidateType,
  FilePondPluginImagePreview
);
export default {
  name: "qr",
  components: {
    FilePond,
    RotateSquare5
  },
  data: function() {
    return {
      DialogGenQr: false,
      data_file: null,
      loading: false,
      // fake server to simulate loading a 'local' server file and processing a file
      myServer: {
        process: (fieldName, file, metadata, load) => {
          // console.log(fieldName);
          console.log(file);
          this.data_file = file;
          console.log(this.data_file);
          // simulates uploading a file
          setTimeout(() => {
            load(Date.now());
          }, 1500);
        },
        load: (source, load) => {
          // simulates loading a file from the server
          fetch(source)
            .then((res) => res.blob())
            .then(load);
        },
      },
      // myFiles: [
      //   {
      //     source: "photo.jpeg",
      //     options: {
      //       type: "local",
      //     },
      //   },
      // ],
    };
  },
  methods: {
    handleFilePondInit: function() {
      // FilePond instance methods are available on `this.$refs.pond`

      /* eslint-disable */
      console.log("FilePond has initialized");
    },
    openDialogGenQr() {
      this.DialogGenQr = true;
    },
    generate() {
      this.loading = true;
    }
  },

};
</script>