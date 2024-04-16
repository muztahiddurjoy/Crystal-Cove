
type User = {
    email?:string,
    joined?:Date,
    uid?:string
}
type Review = {
    id?:number|string
    name:string,
    image:string,
    text:string
}
type Room = {
    id: string,
    name:string,
    desc:string,
    bed:number,
    bath:number,
    price:number,
    image:string,
    notBookable?:boolean
}
type Booking = {
    id?:string,
    date:string,
    roomID:string,
    uid:string
}