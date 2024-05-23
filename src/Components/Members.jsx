import React, { useEffect, useState } from 'react'

import NewCard from './NewCard';

export default function Members() {
    const [members,setMembers] = useState([])
    const loadData = async () => {
        let response = await fetch("http://localhost:8008/api/members", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        });
        response = await response.json();
        setMembers(response[0]);
      };
    
      useEffect(() => {
        loadData();
      }, []);
  return (
    <div>
        <h1 className='text-5xl flex justify-center text-center text-white py-10  ' >Members of Governning Council</h1>
         {members != []
          ? members.map((data) => {
              return (
                <div className='px-20 mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8' >
                    <NewCard name = {data.name} post = {data.post} posting = {data.posting} />
                    <NewCard name = {data.name} post = {data.post} posting = {data.posting} />
                    <NewCard name = {data.name} post = {data.post} posting = {data.posting} />
                    <NewCard name = {data.name} post = {data.post} posting = {data.posting} />
                    <NewCard name = {data.name} post = {data.post} posting = {data.posting} />
                    <NewCard name = {data.name} post = {data.post} posting = {data.posting} />
                    <NewCard name = {data.name} post = {data.post} posting = {data.posting} />

                </div>
              );
            })
          : ""}
    </div>
  )
}
