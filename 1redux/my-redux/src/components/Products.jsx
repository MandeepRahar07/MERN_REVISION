import axios from 'axios';
import React, { useEffect, useState } from 'react'

function Product() {
   const[data, setData] = useState([]);
   const[sort , setSort] = useState('');
   const [filter , setFilter] = useState('');
   const[search , setSearch] = useState('');
   const [totalpage  , setTotal] = useState(0);
   const [currentpage , setCurrent] = useState(1);


   const fetchdata = async()=>{
        
    const data = sort ? `&_sort=rate&_order=${sort}` : "";
    const ceta = filter ?  `&cat=${filter}` : "";
    const name = search ? `&name_like=${search}` : '';
    console.log(ceta);

         try{
         const res = await axios.get(`http://localhost:8080/mandy?_page=${currentpage}&_limit=1${ceta}${data}${name}`);
         setData(res.data);
         console.log(res.data);
         console.log(ceta);
         }catch(err){
           console.log(err);
         }
   }


  
console.log(data);
useEffect(() => {
  fetchdata();
}, [sort, filter,currentpage]);

useEffect(() => {
  const debounceTimeout = setTimeout(() => {
    fetchdata();
  }, 2000);
  return () => clearTimeout(debounceTimeout);

}, [search]);

  return (

    <div>
      
      <div>
        
        <button onClick={()=> {setSort('asc')}}>ASC</button>
        <button onClick={()=> {setSort('desc')}}>DESC</button>

        <select onChange={(e)=>{setFilter(e.target.value)}}>
        <option value="" >
          ALL
          </option>
          <option value="bad" >
          bad
          </option>
          <option value="sad" >
          sad
          </option>
        </select>
      </div>
      <div>
        <input type="text" onChange={(e)=> setSearch(e.target.value)} />
      </div>

      {
      data.map((e)=>{
        return <div key={e.id}>
          <h1>{e.name}</h1>
          <h3>{e.status}</h3>
          <h1>{e.rate}</h1>
          <button>DELETE</button>
          
        </div>
      })
      }
      <div>
        <button onClick={()=> setCurrent(currentpage+1) }>Next</button>
        <button onClick={()=> setCurrent(currentpage-1) }>Previos</button>
        </div></div>
    
  )
}
export default Product;
