type RoomCard = {
    name:string,
    charge:number,
    slug:string,
    image:string,
    description:string,
    beds:number,
    baths:number
}

type User = {
    email?:string,
    joined?:Date,
    uid?:string
}