import React from "react";
import './Table.css';
function Table({ table_data }) {
  return (
      <table className="content-table">
        <thead>
          <tr>
            <th>collection</th>
            <th>datetime</th>
            <th>sitename</th>
            <th>url</th>
            <th>height</th>
            <th>image_url</th>
            <th>thumbnail_url</th>
            <th>width</th>
          </tr>
        </thead>
      <tbody>
        {table_data.map((document, index) => (
          <tr key={index}>
            <td>{document.collection}</td>
            <td>{document.datetime}</td>
            <td>{document.display_sitename}</td>
            <td>{document.doc_url}</td>
            <td>{document.height}</td>
            <td>{document.image_url}</td>
            <td>{document.thumbnail_url}</td>
            <td>{document.width}</td>
          </tr>
          ))}
        </tbody>
      </table>        
  );
}
export default Table;