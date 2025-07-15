import Buyable from './Buyable';

export default class Movie implements Buyable {
    constructor(
        readonly id: number,
        readonly title: string,
        readonly originalTitle: string,
        readonly year: number,
        readonly country: string,
        readonly slogan: string,
        readonly genres: string[],
        readonly time: string,
        readonly price: number,
        readonly unit?: boolean
    ) { }
}
