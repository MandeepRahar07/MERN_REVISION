import axios from 'axios';
import React, { useEffect, useState } from 'react';

function Short() {
    const [sort, setSort] = useState("");
    const [data, setData] = useState([]);

    const fetchdata = async () => {
        try {
            const res = await axios.get(`http://localhost:8080/dummyData`);
            setData(res.data);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        fetchdata();
    }, []);

    const getSortedData = () => {
        if (sort === "asc") {
            return [...data].sort((a, b) => a.age - b.age);
        } else if (sort === "desc") {
            return [...data].sort((a, b) => b.age - a.age);
        }
        return data;
    };

    return (
        <div>
            <h2>Short</h2>
            <div>
                <button onClick={() => setSort("asc")}>Asc</button>
                <button onClick={() => setSort("desc")}>Desc</button>
            </div>
            <div>
                {getSortedData().map((e) => (
                    <div key={e.id} style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <h1>{e.name}</h1>
                        <h2>{e.age}</h2>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Short;
