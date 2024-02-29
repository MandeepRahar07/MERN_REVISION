
// import React, { useState,useEffect } from 'react'

// function Product() {
//     const [data, setData] = useState([]);
//     const [sort, setSort] = useState('')
//     const [search, setSearch] = useState('');
//     const [cat, setCat] = useState("");
//     console.log(cat)
//     const fetchData = async () => {
//         const sorting = sort ? `&_sort=age&_order=${sort}` : "";
//         const searching = search ? `&name_like=${search}`: "";
//         const catagary = cat ? `&cat=${cat}` : '';
//         try {
//             const res = await fetch(`http://localhost:3000/mandy?${sorting}${searching}${catagary}`);
//             const data = await res.json();
//             setData(data);
//         } catch (err) {
//             console.log(err);
//         }
//     }

//     useEffect(() => {
//         fetchData();
//     }, [sort,search,cat]);
//   return (
//     <div>
//       <div>
//         <select name="" id="" onChange={(e)=>setCat(e.target.value)}>
//             <option value="">All</option>
//             <option value="man">Man</option>
//             <option value="women">Women</option>
//         </select>
//       </div>
//       <div>
//         <input type="text"  onChange={(e)=> setSearch(e.target.value)} />
//       </div>
//       <div>
//           <select onChange={(e)=> setSort(e.target.value)}>
//             <option value="">Default</option>
//             <option value="asc">High to Low</option>
//              <option value="desc">Low to High</option>
//           </select>
//       </div>
//          <div>
//             {
//                 data.map((e)=>{
//                     return (
//                         <div key={e.id} style={{border : "solid" , margin : "10px"}}>
//                             <h1>{e.name}</h1>
//                             <h2>{e.title}</h2>
//                             <h3>{e.age}</h3>
//                         </div>
//                     )
//                 })
//             }
//          </div>
//     </div>
//   )
// }

// export default Product

// import React, { useEffect, useState } from 'react'

// function Calender() {
//     let[data2,setData] = useState([]);
//     let[birthday, setBrithdaty] = useState("");
// console.log(birthday);

//     const fetchdata = async()=>{
//         let birthdate = birthday ? `&brithday=${birthday}` : "";
//         const res = await fetch(`http://localhost:3000/calender?&${birthdate}`);
//         const data = await res.json();
//         setData(data);
//         console.log(data2);
//     }

//     useEffect(()=>{
//         fetchdata();
//     },[birthday]);

//   return (
//     <div>Calender

//         <select name="" typeof='' id="" onChange={(e)=> setBrithdaty(e.target.value)}>
//             <option value="1990">1990</option>
//             <option value="1991">1991</option>
//             <option value="1992">1992</option>
//             <option value="1993">1994</option>
//             <option value="1994">1995</option>
//             <option value="1975">1975</option>
//         </select>

//         <div>
//             {data2.map((e,i)=>{
//                 return(
//                     <div key={i} style={{width : '300px' , border :"solid",height : '100px'}}>
//             {e.name}
//             {
//                 e.birthday
//             }
//                     </div>
//                 )
//             })}
//         </div>
//     </div>
//   )
// }

// export default Calender