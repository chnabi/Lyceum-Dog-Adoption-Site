'use client'
import {router} from "next/client";
import {useRouter} from "next/navigation";

export default function Header() {
    const router = useRouter()
    return (
      <div className="bg-lime-600">
          <button onClick={() => router.push('/')}>
          <h1 className="text-bold text-lime-100">FindForeverFriends</h1>
      </button>
      </div>
    );
}