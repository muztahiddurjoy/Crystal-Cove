export const ifAuthenticaed = (router:Function)=>{
    if(!localStorage.getItem("token")){
      router('/login')
    }
  }