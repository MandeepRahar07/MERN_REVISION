import axios from 'axios';
import React, { useEffect, useState } from 'react';

function Pagination() {
    const [data, setData] = useState([]);
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);

    const fetchData = async () => {
        try {
            const res = await axios.get(`https://dummyjson.com/products?limit=${limit}&skip=${(page - 1) * limit}`);
            setData(res.data.products);
            console.log(res.data.products);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        fetchData();
    }, [page, limit]);

    const next = () => setPage(prev => prev + 1);
    const prev = () => {
        if (page > 1) setPage(prev => prev - 1);
    };

    return (
        <div>
            <h2>Pagination Functionality</h2>
            <div>
                {data.map((e) => (
                    <div key={e.id}>
                        <h4>{e.title}</h4>
                    </div>
                ))}
            </div>
            <div>
                <button onClick={prev} disabled={page === 1}>Prev</button>
                <button onClick={next}>Next</button>
            </div>
        </div>
    );
}

export default Pagination;
