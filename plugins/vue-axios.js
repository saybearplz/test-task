import axios from '@/utils/axios'

export default (ctx, inject) => {
  inject('axios', axios)
}
