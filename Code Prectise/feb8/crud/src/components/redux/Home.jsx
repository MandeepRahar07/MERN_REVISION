import React, { useEffect, useState } from 'react'

function Home() {
    const [data, setData] = useState([]);

    const fetchdata = async () => {
        try {
            const request = await fetch(`http://localhost:8080/todo`);
            const res = await request.json()
            console.log(res.data);
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        fetchdata();
    }, [])
    return (
        <div>Todo Application

            <div>

            </div>
        </div>
    )
}

export default Home