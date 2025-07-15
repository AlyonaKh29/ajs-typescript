export default interface Buyable {
    readonly id: number,
    readonly title: string,
    readonly price: number,
    readonly unit?: boolean
}