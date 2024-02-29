import React, { useState, useEffect } from "react";
import { Accordion, AccordionItem, AccordionItemHeading, AccordionItemButton, AccordionItemPanel } from 'react-accessible-accordion';
import "./Accordian.css"; // Import CSS file

export const Accordian = () => {
    const [data, setData] = useState([]);
    const [expandedItems, setExpandedItems] = useState([]);

    const fetchData = async () => {
        try {
            const res = await fetch(`http://localhost:3000/mandy`);
            const data = await res.json();
            setData(data);
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {
        const storedExpandedItems = localStorage.getItem('expandedItems');
        if (storedExpandedItems) {
            setExpandedItems(JSON.parse(storedExpandedItems));
        }
    }, []);

    const handleAccordionChange = (expandedItems) => {
        setExpandedItems(expandedItems);
        localStorage.setItem('expandedItems', JSON.stringify(expandedItems));
    };

    return (
        <>
            <div>
                <div>
                    <Accordion allowZeroExpanded onChange={handleAccordionChange} preExpanded={expandedItems}>
                        {data.map((item) => (
                            <AccordionItem key={item.id} className="accordian-item">
                                <AccordionItemHeading className="accordian-heading">
                                    <AccordionItemButton className="accordian-button">
                                        {item.name}
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel className="accordian-panel">
                                    {item.title}
                                </AccordionItemPanel>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </div>
        </>
    )
}
