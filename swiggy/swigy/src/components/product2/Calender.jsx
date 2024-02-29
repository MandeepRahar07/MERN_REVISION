import React, { useEffect, useState } from 'react';

function Calendar() {
    const [data, setData] = useState([]);
    const [year, setYear] = useState("2022"); 
    const [year1, setYear1] = useState("2030");// Default year
    const [calendarData, setCalendarData] = useState(Array.from({ length: 7 }, () => []));
   let yearsArray = new Array(30).fill(0).map((_,i)=> 2000+i);
   const fetchdata = async () => {
    const res = await fetch(`http://localhost:3000/calender`);
    const data1 = await res.json();
    const filteredData = data1.filter(person => {
        const personYear = new Date(person.birthday).getFullYear();
        console.log(personYear)
        console.log(year1)
        return personYear ==year1;
    });

    setData(filteredData);
    console.log(filteredData);
};


    useEffect(() => {
        fetchdata();
    }, [year1]);

    useEffect(() => {
        updateCalendar(year);
    }, [year1, data]);

    const updateCalendar = (selectedYear) => {
        // Ensure data is available
        if (!data || data.length === 0) {
            console.log("Data is empty or undefined");
            setCalendarData([]);
        }
    
        // Create an array to hold 7 arrays, each representing a day of the week
        const days = Array.from({ length: 7 }, () => []);
        console.log("Days:", days);
    
        // Iterate through the data and place each person in the appropriate day of the week
        data.forEach(person => {
            const birthdayDate = new Date(`${person.birthday}`);
            const dayIndex = birthdayDate.getDay(); // 0 = Sunday, 1 = Monday, ..., 6 = Saturday
            days[dayIndex].push(person);
        });
    
        // Sort each day's array by age (youngest to oldest)
        days.forEach(day => day.sort((a, b) => new Date(a.birthday) - new Date(b.birthday)));
    
        // Set the updated calendar data
        setCalendarData(days);
    };
    
    
    return (
        <div>
            <select value={year} onChange={(e) => setYear(e.target.value)}>
                {Array.from({ length: 25 }, (_, i) => 2000 + i).map(year => (
                    <option key={year} value={year}>{year}</option>
                ))}
            </select>

            <select value={year1} onChange={(e) => setYear1(e.target.value)}>
      {yearsArray.map((year) => (
        <option key={year} value={year}>{year}</option>
      ))}
    </select>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day, index) => (
                    <div key={day} style={{ width: 'calc(100% / 7)', border: '1px solid black' }}>
                        <h3>{day}</h3>
                        {calendarData[index].map((person, personIndex) => (
                            <div key={personIndex} style={{ backgroundColor: getColor(personIndex), width: '100%', textAlign: 'center' }} title={person.name}>
                                {person.name}
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    )
}



const getColor = (index) => {
    const colors = ['#545D79', '#8AB721', '#C77D99', '#78CAE3', '#E64A33'];
    return colors[index % colors.length];
};

export default Calendar;
