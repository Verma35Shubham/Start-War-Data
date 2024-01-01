import React, { useEffect, useState } from "react";
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

const Table = () =>{
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://swapi.dev/api/people/')
        .then(response => response.json())
        .then(data => setUsers(data.results))
        .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <div className="table-container">
            <h2 className="table-header">Star Wars Characters</h2>
            <DataTable value={users} className="datatable">
                <Column field="name" header="Name" className="datatable-column" />
                <Column field="gender" header="Gender" className="datatable-column" />
                <Column field="height" header="Height" className="datatable-column" />
                <Column field="mass" header="Mass" className="datatable-column" />
                <Column field="birth_year" header="Birth_Year" className="datatable-column" />
            </DataTable>
      </div>
    );
}
export default Table;