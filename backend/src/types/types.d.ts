type ContactRequest = {
    name:string,
    phone:string,
    email:string,
    query:string
}

type InfoRequest = {
    name:string,
    url:string
}

type ReviewRequest = {
    name:string,
    image:string,
    text:string
}

type SignupRequest = {
    email:string,
    password:string
}

type LoginRequest = {
    email:string,
    password?:string
}

type RoomRequest = {
    name:string,
    desc:string,
    bed:number,
    bath:number,
    price:number
}