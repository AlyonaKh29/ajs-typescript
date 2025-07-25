import Buyable from './Buyable';

export default class MusicAlbum implements Buyable {
    constructor(
        readonly id: number,
        readonly title: string,
        readonly author: string,
        readonly price: number,
        readonly unit?: boolean
    ) { }
}