import React, { useState } from 'react'

function Accordion() {
    const [activeId, setActiveId] = useState(null);

    const accordionData = [
        {
            id: 1,
            question: "What is React?",
            answer: "React is a JavaScript library for building user interfaces."
        },
        {
            id: 2,
            question: "What is a component?",
            answer: "A component is a reusable piece of UI logic in React."
        },
        {
            id: 3,
            question: "What is useState?",
            answer: "useState is a Hook that lets you add React state to function components."
        },
        {
            id: 4,
            question: "What is useEffect?",
            answer: "useEffect is a Hook that lets you perform side effects in function components."
        },
        {
            id: 5,
            question: "How does props work?",
            answer: "Props are arguments passed into React components, used to pass data from parent to child."
        }
    ];

    const toggleAccordion = (id) => {
        setActiveId(prev => (prev === id ? null : id));
    };

    return (
        <div>
            <h2>Accordion</h2>
            {
                accordionData.map((item) => (
                    <div key={item.id} style={{ borderBottom: "1px solid #ccc", padding: "10px 0" }}>
                        <div
                            style={{ display: "flex", justifyContent: "space-between", cursor: "pointer" }}
                            onClick={() => toggleAccordion(item.id)}
                        >
                            <h4>{item.question}</h4>
                            <p>{activeId === item.id ? "-" : "+"}</p>
                        </div>
                        {activeId === item.id && (
                            <div style={{ marginTop: "5px" }}>
                                <p>{item.answer}</p>
                            </div>
                        )}
                    </div>
                ))
            }
        </div>
    )
}

export default Accordion;
