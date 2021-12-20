import { Insurance } from '../../types/insurance';
import axios from 'axios';

// todo: move to config
axios.defaults.baseURL = 'https://api.fwd.co.th/dev-ecommerce/';

export async function fetchProduct(payload: Insurance) {
  // call fwd api directly
  // todo: impl. backend to handle api & store data
  return await axios.post('getProduct', payload);
}
