import "./App.css";
import axios from "axios";
import { useEffect, useState, useRef } from "react";
import { AgGridColumn, AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import "ag-grid-enterprise";

const App = () => {
  const [rowData, setRowData] = useState([]);

  const gridRef = useRef(null);

  useEffect(() => {
    axios
      .get("http://localhost:4000/")
      .then((rowData) => setRowData(rowData.data))
      .catch((err) => console.log(err));
  }, []);

  const ImageFormatter = ({ value }) => {
    return <img src={value} />;
  };

  const onButtonClick = (e) => {
    const selectedNodes = gridRef.current.api.getSelectedNodes();
    const selectedData = selectedNodes.map((node) => node.data);
    const selectedDataStringPresentation = selectedData
      .map((node) => `${node.Identification} ${node.Name}`)
      .join(", ");
    alert(`Selected nodes: ${selectedDataStringPresentation}`);
  };

  return (
    <div className="ag-theme-alpine" style={{ height: "90vh", width: "100vw" }}>
      <button onClick={onButtonClick}>Get selected rows</button>
      <AgGridReact
        ref={gridRef}
        rowData={rowData}
        rowSelection="multiple"
        groupSelectsChildren={true}
        pagination={true}
        paginationAutoPageSize={true}
        // autoGroupColumnDef={{
        //   headerName: "Identification",
        //   field: "Identification",
        //   // cellRenderer: "agGroupCellRenderer",
        //   cellRendererParams: {
        //     checkbox: true,
        //   },
        // }}
      >
        <AgGridColumn
          field="Identification"
          sortable={true}
          filter={true}
          checkboxSelection={true}
        ></AgGridColumn>
        <AgGridColumn
          field="SequenceNumber"
          sortable={true}
          filter={true}
        ></AgGridColumn>
        <AgGridColumn
          field="Name"
          sortable={true}
          filter={true}
          checkboxSelection={true}
        ></AgGridColumn>
        <AgGridColumn
          field="Type"
          sortable={true}
          filter={true}
          checkboxSelection={true}
        ></AgGridColumn>
        <AgGridColumn
          field="Photo"
          // imageUrl="http://www.barclays.co.uk/branchImages/content/dam/branchfinder/bedfordshire/UK-B-20533008.jpg"
          sortable={true}
          filter={true}
          width="500"
          checkboxSelection={true}
          cellRendererFramework={ImageFormatter}
        ></AgGridColumn>
      </AgGridReact>
    </div>
  );
};

export default App;
