import axios from 'axios';
import React, { useEffect, useState } from 'react';

function Carousel() {
    const [data, setData] = useState([]);
    const [activeIndex, setActiveIndex] = useState(0);

    const fetchdata = async () => {
        try {
            const res = await axios.get(`http://localhost:8080/Image`);
            setData(res.data);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        fetchdata();
    }, []);

    useEffect(() => {
        if (data.length === 0) return;

        const interval = setInterval(() => {
            setActiveIndex((prevIndex) => (prevIndex + 1) % data.length);
        }, 3000); // Change image every 3 seconds

        return () => clearInterval(interval);
    }, [data]);

    return (
        <div style={{ textAlign: "center", marginTop: "20px" }}>
            <h2>Image Carousel</h2>
            {data.length > 0 && (
                <img
                    src={data[activeIndex]?.url}
                    alt="carousel"
                    style={{ width: '400px', height: '300px', borderRadius: '8px', objectFit: 'cover' }}
                />
            )}
        </div>
    );
}

export default Carousel;
