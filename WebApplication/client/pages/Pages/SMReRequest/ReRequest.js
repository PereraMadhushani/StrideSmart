import React from 'react';
import './ReRequest.css';


function ReRequest() {
  return (
    <div>
      <main className="main-content">
        <h1>Re-Request</h1>
        <table className="request-table">
          <thead>
            <tr>
              <th>EMP.ID</th>
              <th>NAME</th>
              <th>MATERIALS</th>
              <th>ADDRESS</th>
              <th>STATUS</th>
            </tr>
          </thead>
          <tbody>
            {/* Table rows would be dynamically added here */}
            <tr><td></td><td></td><td></td><td></td><td></td></tr>
            <tr><td></td><td></td><td></td><td></td><td></td></tr>
            <tr><td></td><td></td><td></td><td></td><td></td></tr>
            <tr><td></td><td></td><td></td><td></td><td></td></tr>
            <tr><td></td><td></td><td></td><td></td><td></td></tr>
            <tr><td></td><td></td><td></td><td></td><td></td></tr>
            <tr><td></td><td></td><td></td><td></td><td></td></tr>
            <tr><td></td><td></td><td></td><td></td><td></td></tr>
          </tbody>
        </table>
      </main>
    </div>
  );
}

export default ReRequest;
