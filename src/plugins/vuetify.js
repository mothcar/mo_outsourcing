// Styles
import "vuetify/styles";
// import colors from 'vuetify/lib/util/colors'
import colors from "vuetify/lib/util/colors";
// import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Vuetify
import { createVuetify } from 'vuetify'

export default createVuetify(
  // https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
  {     
      theme : {
        defaultTheme: "myCustomTheme",
      themes: {
        myCustomTheme: {
          dark: false,
          colors: {
            background: "#FFFFFF",
            surface: "#FFFFFF",
            // primary: '#fe9900', // amond : #5EB4F9 , #FFC107  --> orange #EF6C00--> #fe9900
            primary: colors.red.darken1, // #E53935
            secondary: colors.red.lighten4, // #FFCDD2
            error: "#B00020",
            info: "#2196F3",
            success: "#4CAF50",
            warning: "#FB8C00",
          },
        },
      },
      }
      
    }
  
)
