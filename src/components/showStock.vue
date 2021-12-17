<template>
  <div>
    <v-container>
      <v-row justify="center" class="mt-4 ml-8">
        <v-col cols="10" sm="6" md="10">
          <v-text-field label="ค้นหา" filled rounded dense v-model="search"></v-text-field>
        </v-col>
        <v-col cols="2">
          <v-btn rounded style="height: 48px" class="button" dark>
            Search
          </v-btn>
        </v-col>
      </v-row>
      <v-data-table
        :headers="headers"
        :items="desserts"
        :items-per-page="5"
        :search="search"
        class="elevation-1"
        @click:row="row_value"
      >
        <!-- <template v-slot:item.number="{ on, props }">
          <v-col style="height: 52px">
            <v-checkbox
              color="green"
              v-bind="props"
              v-on="on"
              class="mt-n1"
              @click="checkbox_row()"
            ></v-checkbox>
          </v-col>
        </template> -->
        <template v-slot:item.action>
      <v-icon
        dense
        color="#AED581"
        @click="deleteItem()"
      >
        mdi-delete
      </v-icon>

        </template>
      </v-data-table>
    </v-container>
    <dialogDelete ref="dialog_delete"></dialogDelete>
    </div>
</template>


<script>
import dialogDelete from '../components/dialogDelete.vue'

export default {
  components: {
    dialogDelete,
  },
  data() {
    return {
      selected: [],
      value: [],
      status: false,
      search:'',
      // value_row:"",
      headers: [
        {
          text: "No.",
          align: "center",
          width: "5%",
          value: "no",
          sortable: false,
        },
        {
          text: "Serial number",
          align: "center",
          sortable: false,
          width: "20%",
          value: "serial_number",
        },
        {
          text: "Secret Key",
          align: "center",
          sortable: false,
          width: "20%",
          value: "secret_key",
        },
        {
          text: "Major",
          align: "center",
          sortable: false,
          width: "10%",
          value: "major",
        },
        {
          text: "Minor",
          align: "center",
          sortable: false,
          width: "10%",
          value: "minor",
        },
        {
          text: "Order At",
          align: "center",
          sortable: false,
          width: "15%",
          value: "order_at",
        },
        {
          text: "Time At",
          align: "center",
          sortable: false,
          width: "10%",
          value: "time_at",
        },
        {
          text: "Action",
          align: "center",
          sortable: false,
          width: "15%",
          value: "action",
        },
      ],
      desserts: [
        {
          no: 1,
          serial_number: "0000000000000001",
          secret_key: "abcdefg-000000-100000",
          major: 32780,
          minor: 1003,
          order_at: "2021:12:07",
          time_at: "16:06:25",
        },
        {
          no: 2,
          serial_number: "0000000000000002",
          secret_key: "abcdefg-000000-100000",
          major: 32780,
          minor: 1004,
          order_at: "2021:12:07",
          time_at: "16:06:27",
        },
      ],
    };
  },
  // watch:{
  //   status(newVal){
  //     console.log(newVal);
  //     if (newVal === true) {
  //       for (let index = 0; index < this.value.length; index++) {
  //         const element = this.value[index];
  //         console.log(element);
  //         if (!this.selected.includes(element)) {
  //           this.selected.push(element);
  //         }
  //       }
  //       console.log(this.selected);
  //     }
  //   }
  // },
  methods: {
    row_value(data) {
      this.value.push(data);
    },
    checkbox_row() {
        this.status = !this.status;
    },
    deleteItem() {
      this.$refs.dialog_delete.openDialog();
    },
    
    // selected_value(value) {
    //   this.value.push(value);
    //   console.log(this.value);
    //   if (this.status === true) {
    //     for (let index = 0; index < this.value.length; index++) {
    //       const element = this.value[index];
    //       console.log(element);
    //       if (!this.selected.includes(element)) {
    //         this.selected.push(element);
    //       }
    //     }
    //     console.log(this.selected);
    //   }
    // },
  },
};
</script>

<style lang="scss" scoped>
</style>