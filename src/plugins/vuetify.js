import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import colors from 'vuetify/lib/util/colors';
Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#FD2D01',
      },
      dark: {
        background: colors.grey.base,
      },
    },
  },
});
//Bibliothéque Vuetify pour l'utilisation de leurs composants
