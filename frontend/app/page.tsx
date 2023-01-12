"use client"

import { Inter } from '@next/font/google'
import { useRouter } from 'next/navigation';
const inter = Inter({ subsets: ['latin'] })

async function GetToken(router){
  var token = await sessionStorage.getItem("token");
  console.log(token);
  if (!token){
    router.push("/signin");
  }
  return token;
}

async function Logout(router){
  await sessionStorage.removeItem("token");
  router.push("/signin");
}

export default async function Home() {
  const router = useRouter();
  const token = await GetToken(router);
  return (
    <div className='flex justify-center p-20 flex-col'>
      <p >Hello ! your Token is <span className=' underline'>{token}</span></p>
      <button onClick={() => Logout(router)} type="submit" class="w-40 text-white bg-blue-500 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Logout</button>
    </div>
  )
}

