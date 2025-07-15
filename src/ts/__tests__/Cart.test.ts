import Cart from '../service/Cart';
import Buyable from '../domain/Buyable';
import Movie from '../domain/Movie';
import Book from '../domain/Book';
import MusicAlbum from '../domain/MusicAlbum';
import Gadget from '../domain/Gadget';

describe('Cart', () => {
    let cart: Cart;
    let movie: Movie;
    let book: Book;
    let album: MusicAlbum;
    let gadget: Gadget;

    beforeEach(() => {
        cart = new Cart();
        movie = new Movie(1,'Мстители','The Avengers', 2012, 'США', 'Avengers Assemble!', ['фантастика', 'боевик'], '137 мин', 100, true );
        book = new Book(2, 'На дне', 'М.Горький', 100, 300, true );
        album = new MusicAlbum(3, 'Brand New Day', 'Sting', 100, true);
        gadget = new Gadget(4, 'Смартфон', 80000, false );
    });

    test('add items to the cart', () => {
        cart.add(movie);
        cart.add(book);
        cart.add(album);
        cart.add(gadget);
        expect(cart.items.length).toBe(4);
        const expectedTotal = book.price + gadget.price + movie.price + album.price;
        expect(cart.totalPrice()).toBe(expectedTotal);
    });

    test('add identical products', () => {
        cart.add(gadget);
        cart.add(gadget);
        expect(cart.items[0]).toEqual({ product: gadget, quantity: 2 });
        expect(cart.totalPrice()).toBe(gadget.price * 2);
    });

    test('add products with unit=true', () => {
        cart.add(movie);
        cart.add(movie); 
        expect(cart.items.length).toBe(1);
        expect(cart.items[0]).toEqual({ product: movie, quantity: 1 });
        expect(cart.totalPrice()).toBe(movie.price);
    });

    test('reduce quantity and remove product', () => {
        cart.add(gadget);
        cart.add(gadget);
        expect(cart.items[0].quantity).toBe(2);
        cart.reduceQuantity(gadget.id);
        expect(cart.items[0].quantity).toBe(1);
        cart.reduceQuantity(gadget.id);
        expect(cart.items.length).toBe(0);
        cart.add(movie);
        cart.reduceQuantity(movie.id);
        expect(cart.items[0].quantity).toBe(1);
    });

    test('calculation of the final amount with a discount', () => {
        cart.add(book);
        cart.add(gadget);
        expect(cart.discountedPrice(10)).toBeCloseTo(72090);
        expect(cart.discountedPrice(25)).toBeCloseTo(60075);
    });
});
