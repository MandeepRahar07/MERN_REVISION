import axios from 'axios';
import React, { useEffect, useState } from 'react';

function ImageGalary() {
    const [Image, setImage] = useState([]);
    const [next, setnext] = useState(0);

    const fetchData = async () => {
        try {
            const res = await axios.get(`http://localhost:8080/Image`);
            setImage(res.data);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const handlePrev = () => {
        if (next > 0) setnext(next - 1);
    };

    const handleNext = () => {
        if (next < Image.length - 1) setnext(next + 1);
    };

    return (
        <div>
            <h1>Image Gallery</h1>
            <div>
                {Image.length > 0 && (
                    <img src={Image[next]?.url} alt="gallery" width="300" height="300px" />
                )}
            </div>
            <div>
                <button onClick={handlePrev} disabled={next === 0}>Previous</button>
                <button onClick={handleNext} disabled={next === Image.length - 1}>Next</button>
            </div>
        </div>
    );
}

export default ImageGalary;
