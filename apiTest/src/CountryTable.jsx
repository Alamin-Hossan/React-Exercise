import React, { useEffect, useRef } from 'react';
import axios from 'axios';
import $ from 'jquery';
import 'datatables.net';
import 'datatables.net-dt/css/jquery.dataTables.css';

function CountryTable() {
  const tableRef = useRef(null);

  useEffect(() => {
    axios.get('https://restcountries.com/v3.1/all').then((response) => {
      const countries = response.data;

      if ($.fn.DataTable.isDataTable('#countryTable')) {
        // Destroy the existing DataTable instance if it already exists
        $(tableRef.current).DataTable().destroy();
      }

      $(tableRef.current).DataTable({
        data: countries,
        columns: [
          { title: 'Name', data: 'name.common' },
          { title: 'Region', data: 'region' },
          {
            title: 'Language',
            data: 'languages',
            render: (data) => {
              if (data) {
                const languages = Object.values(data);
                return languages.map((language) => language).join(', ');
              }
              return '';
            },
          },
          {
            title: 'Currency',
            data: 'currencies',
            render: (data) => {
              if (data) {
                const currencies = Object.values(data);
                return currencies.map((currency) => currency.name).join(', ');
              }
              return '';
            },
          },
          { title: 'Population', data: 'population' },
          {
            title: 'Maps',
            data: 'maps.googleMaps',
            render: (data) => `<a href="${data}">Google Maps</a>`,
          },
          {
            title: 'Flag',
            data: 'flags.svg',
            render: (data) => `<img src="${data}" alt="Flag" width="50" height="30" />`,
          },
        ],
      });
    });
  }, []);

  return (
    <div>
      <table ref={tableRef} id="countryTable" style={{ margin: '0 auto' }}>
        <thead>
          <tr>
            <th style={{ textAlign: 'center' }}>Name</th>
            <th style={{ textAlign: 'center' }}>Region</th>
            <th style={{ textAlign: 'center' }}>Language</th>
            <th style={{ textAlign: 'center' }}>Currency</th>
            <th style={{ textAlign: 'center' }}>Population</th>
            <th style={{ textAlign: 'center' }}>Maps</th>
            <th style={{ textAlign: 'center' }}>Flag</th>
          </tr>
        </thead>
        <tbody></tbody>
      </table>
    </div>
  );
}

export default CountryTable;
