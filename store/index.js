import Vuex from 'vuex'

import * as modules from './modules'

export default () => {
  return new Vuex.Store({
    strict: process.env.NODE_ENV !== 'production',
    modules
  })
}
