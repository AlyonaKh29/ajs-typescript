import Buyable from '../domain/Buyable';

export default interface CartItem {
  product: Buyable;
  quantity: number;
}
