import Buyable from './Buyable';

export default class Gadget implements Buyable {
    constructor(
        readonly id: number,
        readonly title: string,
        readonly price: number,
        readonly unit?: boolean
    ) { }
}

