import React, { useState, useEffect } from 'react';
import axios from 'axios';
import * as d3 from 'd3';

const Dashboard = () => {
  // State for filters
  const [endYearFilter, setEndYearFilter] = useState('');
  const [topicFilter, setTopicFilter] = useState('');
  const [sectorFilter, setSectorFilter] = useState('');
  const [regionFilter, setRegionFilter] = useState('');
  const [pestleFilter, setPestleFilter] = useState('');
  const [sourceFilter, setSourceFilter] = useState('');
  const [data, setData] = useState([]);

  // Fetch data using Axios on component mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8080/products'); // Replace with your actual API endpoint
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures the effect runs once on mount

  // Filtered data based on current filter values
  const filteredData = data.filter(item =>
    item.end_year.includes(endYearFilter) &&
    item.topic.includes(topicFilter) &&
    item.sector.includes(sectorFilter) &&
    item.region.includes(regionFilter) &&
    item.pestle.includes(pestleFilter) &&
    item.source.includes(sourceFilter)
  );

  // D3.js chart or visualization code goes here
  // Ensure data is available and not empty
  if (data.length === 0) {
    return <p>No data available.</p>;
  }

  // Ensure the expected structure of the data
  if (!data[0].sector || !data[0].topic || !data[0].intensity) {
    return <p>Invalid data structure.</p>;
  }

  const margin = { top: 20, right: 30, bottom: 30, left: 40 };
  const width = 400 - margin.left - margin.right;
  const height = 200 - margin.top - margin.bottom;

  // Filter data for the "Energy" sector
  const energyData = data.filter(item => item.intensity  === 'intensity');

  const svg = d3.select('#visualization');

  // Use D3.js to create or update the visualization
  const chart = svg.selectAll('g.chart').data([1]); // Bind data to a single element

  // Enter: create new elements
  const enter = chart.enter().append('g').attr('class', 'chart').attr('transform', `translate(${margin.left},${margin.top})`);

  // Update: handle existing elements
  const update = enter.merge(chart);

  const xScale = d3.scaleBand()
    .domain(energyData.map(d => d.topic))
    .range([0, width])
    .padding(0.1);

  const yScale = d3.scaleLinear()
    .domain([0, d3.max(energyData, d => d.intensity)])
    .range([height, 0]);

  update.selectAll('rect')
    .data(energyData)
    .enter().append('rect')
    .merge(update.select('rect')) // Merge enter and update selections
    .attr('x', d => xScale(d.topic))
    .attr('y', d => yScale(d.intensity))
    .attr('width', xScale.bandwidth())
    .attr('height', d => height - yScale(d.intensity))
    .attr('fill', 'steelblue');

  update.select('g.axis-x')
    .attr('transform', `translate(0,${height})`)
    .call(d3.axisBottom(xScale));

  update.select('g.axis-y')
    .call(d3.axisLeft(yScale));

  // Exit: remove any unnecessary elements
  chart.exit().remove();

  return (
    <div>
      {/* Dashboard Filters */}
      <div>
        <label>End Year:</label>
        <input type="text" value={endYearFilter} onChange={(e) => setEndYearFilter(e.target.value)} />

        <label>Topic:</label>
        <input type="text" value={topicFilter} onChange={(e) => setTopicFilter(e.target.value)} />

        <label>Sector:</label>
        <input type="text" value={sectorFilter} onChange={(e) => setSectorFilter(e.target.value)} />

        <label>Region:</label>
        <input type="text" value={regionFilter} onChange={(e) => setRegionFilter(e.target.value)} />

        <label>Pestle:</label>
        <input type="text" value={pestleFilter} onChange={(e) => setPestleFilter(e.target.value)} />

        <label>Source:</label>
        <input type="text" value={sourceFilter} onChange={(e) => setSourceFilter(e.target.value)} />
      </div>

      {/* Display D3.js chart or visualization */}
      <div id="visualization">
        <svg width={width + margin.left + margin.right} height={height + margin.top + margin.bottom}>
          <g className="axis-x"></g>
          <g className="axis-y"></g>
        </svg>
      </div>

      {/* Display Filtered Data */}
      <div>
        <h2>Filtered Data</h2>
        <ul>
          {filteredData.map(item => (
            <li key={item.id}>
              <strong>Title:</strong> {item.title} <br />
              <strong>Country:</strong> {item.country} <br />
              <strong>Year:</strong> {item.year} <br />
              <strong>Intensity:</strong> {item.intensity} <br />
              <strong>Likelihood:</strong> {item.likelihood} <br />
             
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
