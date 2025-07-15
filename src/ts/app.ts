import Cart from './service/Cart';
import Book from './domain/Book';
import MusicAlbum from './domain/MusicAlbum';
import Gadget from './domain/Gadget';
import Movie from './domain/Movie';

const cart = new Cart();
console.log(cart.items);

cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
cart.add(new Movie(1,'Мстители','The Avengers', 2012, 'США', 'Avengers Assemble!', ['фантастика', 'боевик'], '137 мин', 100, true ));
cart.add(new Gadget(4, 'Наушники JBL Tour One M2 Gold', 30380, false ));
cart.add(new Gadget(4, 'Наушники JBL Tour One M2 Gold', 30380, false ));

console.log(cart.items);
console.log(cart.totalPrice());
console.log(cart.discountedPrice(10));

