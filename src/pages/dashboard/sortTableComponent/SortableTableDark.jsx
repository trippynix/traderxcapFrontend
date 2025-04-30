import React, { useEffect, useState } from "react";

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
        <p className="m-0 text-[5px] md:text-[6px] lg:text-[7px]">▲</p>
        <p className="m-0 text-[5px] md:text-[6px] lg:text-[7px]">▼</p>
      </>
    );
  };

  return (
    <div className="w-full max-h-[400px] overflow-y-scroll text-center">
      <table className="w-full text-white text-[10px] md:text-[10px] lg:text-sm bg-[#202020]">
        <thead className="text-white text-center text-[6px] md:text-[10px] lg:text-sm sticky top-0 z-10 cursor-pointer bg-[#5b5b5b]">
          <tr>
            {columns.map((col) => (
              <th
                key={col.key}
                className="font-medium"
                onClick={() => handleSort(col.key)}
              >
                <div className="inline-flex flex-row items-center justify-center py-1">
                  <div>{col.label}</div>
                  <div className="ml-2">{getArrowIcons(col.key)}</div>
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="text-center text-[10px] md:text-[10px] lg:text-sm">
          {tableData.map((row, index) => (
            <tr key={index}>
              {columns.map((col) => (
                <td key={col.key} className="py-2">
                  {col.key === "exchange" ||
                  col.key === "vol_spike" ||
                  col.key === "previousHigh" ||
                  col.key === "previousLow" ? (
                    <div className="p-0 border-2 border-white rounded-lg bg-[#01fd1f]">
                      <span className="text-black font-medium">
                        {row[col.key]}
                      </span>
                    </div>
                  ) : null}
                  {col.key === "volume" ||
                  col.key === "iv_change" ||
                  col.key === "priceDifference" ||
                  col.key === "momentum_score" ? (
                    <div className="p-0 border-2 border-white rounded-lg bg-[#8677FF] mx-3">
                      <span className="text-black font-medium">
                        {row[col.key]}
                      </span>
                    </div>
                  ) : null}
                  {col.key !== "exchange" &&
                    col.key !== "volume" &&
                    col.key !== "vol_spike" &&
                    col.key !== "iv_change" &&
                    col.key !== "previousHigh" &&
                    col.key !== "priceDifference" &&
                    col.key !== "previousLow" &&
                    col.key !== "momentum_score" && (
                      <div className="p-0 mx-3 bg-white rounded">
                        <span className="text-black font-medium">
                          {row[col.key]}
                        </span>
                      </div>
                    )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SortableTableDark;
