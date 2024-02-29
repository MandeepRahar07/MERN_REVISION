import React, { useEffect, useState } from 'react'

function Calender2() {

    let [data,setData] = useState([]);
    let[selectYear, setSelectedYear] = useState(2022);
    const FilterbyYear = new Array(30).fill(0).map((_,i)=> 2000+i);
    const DaysArray = new Array(7).fill([]);
    
    const fetchdata = async()=>{
       try{
         const res = await fetch(`http://localhost:3000/calender`)
         const res2 = await res.json();
         console.log(res2);
         const filterday = res2.filter((e)=>{
             const day2 = new Date(`${e.birthday}`).getFullYear();
             console.log(day2);
             console.log(selectYear);
             return day2 === selectYear
            })
            setData(filterday);
            console.log(filterday);

       }catch(err){
        console.log(err);
       }
    }

    const PutNamebyDays=()=>{
        const DaysArray = new Array(7).fill([]);

       const days = data.map((e)=>{
        const BrithdayData = new Date(`${e.birthday}`).getDay(); 
        DaysArray[BrithdayData].push(e.person);
    })
    setSelectedYear(DaysArray);
    }

    useEffect(()=>{
        fetchdata();
    },[selectYear])

    useEffect(()=>{
        PutNamebyDays();
    },[selectYear])


    return (
    <div>Calender2

        <div>
            <select name="" id="" value={selectYear} onChange={(e)=> setSelectedYear(e.target.value)}>
             
             {
                FilterbyYear.map((year)=>{
            return(
                <option key={year} value={year}>{year}</option>
            )
                })
             }
                
            </select>
        </div>
    </div>
  )
}

export default Calender2