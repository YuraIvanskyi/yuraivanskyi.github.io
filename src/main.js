import { createApp } from 'vue'
import App from './App.vue'
import './index.css'

import { library } from '@fortawesome/fontawesome-svg-core'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faSkype, faTwitter, faTwitch, faFacebook, faLinkedin, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons'
library.add([faEnvelope, faSkype, faTwitter, faTwitch, faFacebook, faLinkedin, faInstagram, faGithub])

createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
