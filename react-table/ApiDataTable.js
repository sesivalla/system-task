import React, { useState, useEffect } from "react";
import axios from "axios";
import ReactTable from "react-table-6";
import "react-table-6/react-table.css";

const ApiDataTable = () => {
  const [data, setData] = useState([]);
  const [columns, setColumns] = useState([]);

  useEffect(() => {
    // Make an API call to fetch data
    axios.get("YOUR_API_URL").then((response) => {
      const apiData = response.data;

      // Assuming the API response has an array of objects
      if (apiData.length > 0) {
        // Extract column headers dynamically from the first object in the array
        const headerKeys = Object.keys(apiData[0]);

        // Create columns for the DataTable
        const dynamicColumns = headerKeys.map((key) => ({
          Header: key,
          accessor: key,
        }));

        setData(apiData);
        setColumns(dynamicColumns);
      }
    });
  }, []);

  return (
    <div>
      <ReactTable
        data={data}
        columns={columns}
        defaultPageSize={10}
        className="-striped -highlight"
      />
    </div>
  );
};

export default ApiDataTable;
