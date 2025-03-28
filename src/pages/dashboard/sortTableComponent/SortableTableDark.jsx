import React, { useEffect, useState } from "react";

{
  /* ONLY FOR 4 COLUMNS */
}
const SortableTableDark = ({ data, columns }) => {
  const [tableData, setTableData] = useState(data);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });

  useEffect(() => {
    setTableData(data);
  }, [data]);

  const handleSort = (key) => {
    let direction =
      sortConfig.key === key && sortConfig.direction === "asc" ? "desc" : "asc";
    const sortedData = [...tableData].sort((a, b) => {
      if (a[key] < b[key]) return direction === "asc" ? -1 : 1;
      if (a[key] > b[key]) return direction === "asc" ? 1 : -1;
      return 0;
    });
    setSortConfig({ key, direction });
    setTableData(sortedData);
  };

  const getArrowIcons = (key) => {
    if (sortConfig.key === key) {
      return sortConfig.direction === "asc" ? "▲" : "▼";
    }
    return (
      <>
        <p className="m-0" style={{ fontSize: "7px" }}>
          ▲
        </p>
        <p className="m-0" style={{ fontSize: "7px" }}>
          ▼
        </p>
      </>
    );
  };

  return (
    <div
      className="text-center scrollable-tbody"
      style={{ width: "100%", maxHeight: "400px", overflowY: "scroll" }}
    >
      <table
        className="text-white"
        style={{ width: "100%", fontSize: "16px", backgroundColor: "#202020" }}
      >
        <thead
          className="text-white text-center"
          style={{
            backgroundColor: "#5b5b5b",
            fontSize: "12px",
            cursor: "pointer",
            position: "sticky",
            top: "0",
            zIndex: "1",
          }}
        >
          <tr>
            {columns.map((col) => (
              <th
                key={col.key}
                className="fw-medium"
                onClick={() => handleSort(col.key)}
              >
                <div className="d-inline-flex flex-row py-1">
                  <div>{col.label}</div>
                  <div className="ms-2">{getArrowIcons(col.key)}</div>
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="text-center">
          {tableData.map((row, index) => (
            <tr key={index}>
              <td className="py-2">
                <div className="card p-0 mx-3">
                  <span className="text-dark fw-medium">{row.symbol}</span>
                </div>
              </td>
              <td>{row.name}</td>
              <td>
                <div
                  className="card p-0 border border-light border-2 rounded-3"
                  style={{ backgroundColor: "#01fd1f" }}
                >
                  <span className="text-dark fw-medium">{row.exchange}</span>
                </div>
              </td>
              <td>
                <div
                  className="card p-0 border border-light border-2 mx-3 rounded-3"
                  style={{ backgroundColor: "#8677FF" }}
                >
                  <span className="text-dark fw-medium">{row.volume}</span>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SortableTableDark;
