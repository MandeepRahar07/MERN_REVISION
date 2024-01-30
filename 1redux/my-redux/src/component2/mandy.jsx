import React, { useEffect, useState } from 'react'

function Mandy() {

    const[data,setData] = useState([]);
    const[sort, setSort] = useState("");
    const fetchdata = async () => {
        const sorting = sort ? `&_sort=id&_order=${sort}` : "";
    try {
      const res = await fetch(`http://localhost:3000/mandy?&${sorting}`);
      const data1 = await res.json();
      setData(data1);
    //   console.log(data);
    } catch (err) {
      console.log(err);
    }
  };
  
    useEffect(()=>{
        fetchdata();
    },[sort]);
  return (
    <div>mandy
     <div>
        <select name="sort" id="sort" onChange={(e)=> setSort(e.target.value)}>
            <option value="">Default</option>
            <option value="asc">Asc</option>
            <option value="desc">Desc</option>
        </select>
     </div>

        <div>
            {
                data.map((e)=>{
            return(
                <div key={e.id}>
                     <h1>{e.name}</h1>
                </div>
            )
                })
            }
        </div>
    </div>
  )
}

export default Mandy;