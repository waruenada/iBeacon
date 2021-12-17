import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import Vuex from 'vuex'

Vue.use(Vuex)

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        options: { customProperties: true },
        themes: {
          light: {
            button: "#4CAF50",
            secondary: "#7367F0",
            cancel: "#EA5455",
            
          },
        },
      },
});
