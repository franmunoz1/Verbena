import { atom } from 'nanostores';

export const cart = atom([{
  id: 1,
  name: 'Limpieza Facial',
  price: 100,
  quantity: 1
}, {
  id: 2,
  name: 'Dermapen',
  price: 200,
  quantity: 1
}]);