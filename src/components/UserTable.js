import React from 'react';
import VisibleUserList from './VisibleUserList/index.js';

export default () => (
  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Age</th>
      </tr>
    </thead>
    <VisibleUserList />
  </table>
);
