import Buyable from '../domain/Buyable';
import CartItem from '../service/CartItem';


/*  В корзине хранится не просто массив товаров Buyable,
    а массив CartItem, т.е. каждый товар в сочетании с его количеством. */

export default class Cart {
    private _items: CartItem[] = [];

    add(item: Buyable): void {
        const availabile = this._items.find(thing => thing.product.id === item.id);
        if (item.unit) {
            if (!availabile) {
                this._items.push({ product: item, quantity: 1 });
            }
        } else {
            if (availabile) {
                availabile.quantity += 1;
            } else {
                this._items.push({ product: item, quantity: 1 });
            }
        }
    }

    reduceQuantity(productId: number): void {
        const availabile = this._items.find(thing => thing.product.id === productId);
        if (availabile && !availabile.product.unit) {
            availabile.quantity -= 1;
            if (availabile.quantity <= 0) {
                this.removeProduct(productId);
            }
        }
    }

    get items(): CartItem[] {
        return [...this._items]; 
    }

    totalPrice(): number {
        return this._items.reduce((acc, cur) => acc + cur.product.price * cur.quantity, 0); 
    }

    discountedPrice(discount: number): number {
        const difference: number = this.totalPrice() * discount / 100;
        return this.totalPrice() - difference;
    }

    removeProduct(id: number): void {
        this._items = this._items.filter(item => item.product.id !== id);
    }
}