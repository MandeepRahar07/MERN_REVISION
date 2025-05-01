import axios from 'axios';
import React, { useEffect, useState } from 'react';

function Table() {
    const [data, setData] = useState([]);
    const [sort, setSort] = useState(null);

    const fetchdata = async () => {
        try {
            const res = await axios.get(`http://localhost:8080/table`);
            setData(res.data);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        fetchdata();
    }, []);

    // ✅ Sort data whenever `sort` changes
    useEffect(() => {
        if (sort === "asc") {
            const newData = [...data].sort((a, b) => a.age - b.age);
            setData(newData);
        } else if (sort === "desc") {
            const newData = [...data].sort((a, b) => b.age - a.age);
            setData(newData);
        }
    }, [sort]);

    const handleSelect = (e) => {
        setSort(e.target.value);
    };

    return (
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", margin: "auto" }}>
            <h2>Sortable Table</h2>
            <div>
                <select onChange={handleSelect}>
                    <option value="">Sort by age</option>
                    <option value="asc">Ascending</option>
                    <option value="desc">Descending</option>
                </select>
            </div>
            <table border="1" cellPadding="10" cellSpacing="0">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((e) => (
                        <tr key={e.id}>
                            <td>{e.name}</td>
                            <td>{e.age}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Table;
