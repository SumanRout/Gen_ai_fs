import axios from "axios"
import React,{useState} from "react"

export async function register({username,email,password}){
    try{
    const response = await axios.post('http://localhost:3000/api/auth/register',{username,email,password},{
        /* axios will not store tokens in the db by default
            we need to store  
        */
        withCredentials:true
        })
        return response.data

    }
    catch(err){
        console.log(err)
    }

}

export async function login({email,password}){
    try{
        const response=await axios.post("http://localhost:3000/api/auth/login",{email,password},{
            
        withCredentials:true

        })
        return response.data
    }
    catch(err){
        console.log(err)

    }

}


export async function logout(){
    try{
        const respone=await axios.get("http://localhost:3000/api/auth/logout",{
            withCredentials:true
        })
        return respone.data
    }
    catch(err){
        console.log(err)
    }
}

export async function getMe(){
    try{
        const response=await axios.get("http://localhost:3000/api/auth/get-me",{
            withCredentials:true
        })
        return response.data
    }
    catch(err){
        console.log(err)
    }
}