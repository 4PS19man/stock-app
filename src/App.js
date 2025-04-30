// // src/App.js
// import React, { useEffect, useState } from 'react';
// import Papa from 'papaparse';
// import Sidebar from './components/Sidebar';
// import ChartDisplay from './components/ChartDisplay';
// import './App.css';
// import './components/ChartDisplay.css'; // ensure chart-message styles are applied

// function App() {
//   const [allData, setAllData] = useState([]);
//   const [selectedIndex, setSelectedIndex] = useState(null);
//   const [filteredData, setFilteredData] = useState([]);

//   useEffect(() => {
//     Papa.parse('/dump.csv', {
//       header: true,
//       download: true,
//       complete: (results) => {
//         setAllData(results.data);
//       },
//     });
//   }, []);

//   useEffect(() => {
//     if (selectedIndex) {
//       const filtered = allData.filter(row => row.index_name === selectedIndex);
//       setFilteredData(filtered);
//     }
//   }, [selectedIndex, allData]);

//   const indexNames = [...new Set(allData.map(row => row.index_name))];

//   return (
//     <div className="app-container">
//       <Sidebar indexes={indexNames} onSelect={setSelectedIndex} />
//       <div className="main-content">
//   {!selectedIndex && (
//     <div className="chart-message">
//       Select an index to view chart
//     </div>
//   )}
//   {selectedIndex && (
//     <>
//       <h2>{selectedIndex}</h2>
//       <div className="chart-card">
//         <ChartDisplay data={filteredData} />
//       </div>
//     </>
//   )}
// </div>

//     </div>
//   );
// }

// export default App;



import React, { useEffect, useState } from 'react';
import Papa from 'papaparse';
import Sidebar from './components/Sidebar';
import ChartDisplay from './components/ChartDisplay';
import './App.css';

function App() {
  const [allData, setAllData] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    Papa.parse('/dump.csv', {
      header: true,
      download: true,
      complete: (results) => {
        setAllData(results.data);
      },
    });
  }, []);

  useEffect(() => {
    if (selectedIndex) {
      const filtered = allData.filter(row => row.index_name === selectedIndex);
      setFilteredData(filtered);
    }
  }, [selectedIndex, allData]);

  const indexNames = [...new Set(allData.map(row => row.index_name))];

  return (
    <div className="app-container">
      <Sidebar indexes={indexNames} onSelect={setSelectedIndex} />
      <div className="main-content">
        {!selectedIndex && (
          <div className="chart-message">Select an index to view chart</div>
        )}
       
        <div className="chart-card">
          <ChartDisplay data={selectedIndex ? filteredData : []} />
        </div>
      </div>
    </div>
  );
}

export default App;

