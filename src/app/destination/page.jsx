'use client'
import { useRouter } from "next/navigation";
import React from "react";

function Destination() {
  const router=useRouter()
  const location = ["Butwal", "Chitwan", "Kathmandu"];
  return (
    <div className="flex justify-center items-center text-white h-full flex-col gap-5">
      <div className="font-bold">Choose your Destination</div>
      <div className="space-y-5">
        {location.map((loc, id) => (
          <div
            key={id}
            className="font-bold text-2xl flex items-center justify-center rounded-2xl w-[200px] h-[100px] hover:opacity-[0.5] transition-all cursor-pointer bg-white text-black" onClick={()=>router.push(`/destination/${loc}`)}
           >{loc}</div>
        ))}
      </div>
    </div>
  );
}

export default Destination;
