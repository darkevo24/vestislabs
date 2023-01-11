import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Router from 'next/router'
import { useEffect,useState } from 'react'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [dataToken,setDataToken] = useState("");
  useEffect(function(){
    let token = sessionStorage.getItem("token")
    if (!token){
      Router.push("/signin");
    }
    setDataToken(token);
  },[])
  function Logout(){
    sessionStorage.removeItem("token");
    Router.push("/signin");
  }
  return (
    <div className='flex justify-center p-20 flex-col'>
      <p >Hello ! your Token is <span className=' underline'>{dataToken}</span></p>
      <button onClick={Logout} type="submit" class="w-40 text-white bg-blue-500 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Logout</button>
    </div>
  )
}
