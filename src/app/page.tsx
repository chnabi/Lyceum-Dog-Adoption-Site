'use client'
import {useRouter} from "next/navigation";

export default function Home() {
    const router = useRouter()
  return (
    <div className="flex-wrap justify-center bg-lime-50">
        <button type="button" onClick={() => router.push('/catalog')}>
           <a className="text-lime-300 text-6xl text-bold">Meet Our Crew</a>
        </button>
        <input
         type = 'text'
         placeholder="type in a dog breed"
         ></input>
        <div className= "space-x-100">
      <img
      src ={"/corgi-dog-clipart.png"}
      alt = "No image"
      ></img>
        </div>
    </div>
  );
}
