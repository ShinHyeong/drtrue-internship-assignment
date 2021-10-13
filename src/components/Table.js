import React, { Component } from 'react';
import {result} from '../SiteInfo';
import PropTypes from 'prop-types';

class Table extends Component {
  render() {
    const {result} = this.props;
    return (
      <table class="content-table"> 
        <thead>
          <tr>
            <th>Collection</th>
            <th>Datetime</th>
            <th>Site Name</th>
            <th>Document Url</th>
            <th>Height</th>
            <th>Image Url</th>
            <th>Thumbnail Url</th>
            <th>Width</th>
          </tr>
        </thead>
        <tbody>
          {result.map((document, index) => (
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
              )
          )}
        </tbody>
      </table>
    );
  }
}

Table.propTypes = { 
  collection: PropTypes.string.isRequired,
  datetime: PropTypes.string.isRequired,
  display_sitename: PropTypes.string.isRequired,
  doc_url: PropTypes.string.isRequired,
  height: PropTypes.number.isRequired,
  image_url: PropTypes.string.isRequired,
  thumbnail_url: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired
};
export default Table;