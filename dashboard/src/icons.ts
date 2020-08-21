import Vue from 'vue';

import {
  faTrash, faKey, faSync, faRedo,
  faCloudDownloadAlt, faPlay, faFolderOpen,
  faUsers, faAddressBook, faPaperPlane,
  faCalendarCheck, faCogs, faEye, faEyeSlash,
  faExclamationCircle, faUpload, faCopy, faAngleDoubleLeft, 
  faAngleDoubleRight, faPlus, faTimes, faCaretDown, 
  faCaretUp, faMinus, faFile, faBook, 
  faCodeBranch, faSearch, faQuestionCircle, faExternalLinkAlt, 
  faArrowUp, faTools, faCheck, faSeedling, faDatabase, faGem, 
  faInfoCircle, faExchangeAlt
} from '@fortawesome/free-solid-svg-icons';

import { faTwitter, faGalacticSenate 
} from '@fortawesome/free-brands-svg-icons';

import { library } from '@fortawesome/fontawesome-svg-core';

library.add(faTrash, faKey, faSync, faRedo,
  faCloudDownloadAlt, faPlay, faFolderOpen,
  faUsers, faAddressBook, faPaperPlane,
  faCalendarCheck, faCogs, faEye, faEyeSlash,
  faExclamationCircle, faUpload, faCopy, faAngleDoubleLeft,
  faAngleDoubleRight, faPlus, faTimes, faCaretDown, 
  faCaretUp, faMinus, faFile, faBook,
  faCodeBranch, faSearch, faQuestionCircle, faExternalLinkAlt,
  faTwitter, faArrowUp, faTools, faCheck, faSeedling, 
  faGalacticSenate, faDatabase, faGem,
  faTwitter, faArrowUp, faTools, faCheck,
  faInfoCircle, faExchangeAlt );

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
Vue.component('vue-fontawesome', FontAwesomeIcon);  
