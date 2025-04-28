import React, { useState } from 'react'

function CounterApp() {
    const [count, setCount] = useState(0);
    const Increse = () => {
        setCount(count + 1);
    }

    const dicrease = () => {
        setCount(count - 1)
    }
    return (
        <div>
            <div>
                <h2>Counter Application</h2>
            </div>
            <div style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            }}>


                <div style={{
                    display: "flex",
                    justifyContent: "space-around",
                    alignItems: "center",
                    width: "20%"

                }}>
                    <button onClick={dicrease}> -</button>
                    <h3> {count}</h3>
                    <button onClick={Increse}>+</button>
                </div>


            </div>
            <div onClick={() => setCount(0)}>
                <button
                    style={{
                        width: "100px",
                        height: "30px",
                        fontSize: "16px",
                        fontWeight: "800",
                        color: "red",
                        border: "2px solid green", // Correct border
                        borderRadius: "6px" // (optional) thoda curve chahiye to
                    }}
                >
                    Reset
                </button>
            </div>

        </div>
    )
}

export default CounterApp;