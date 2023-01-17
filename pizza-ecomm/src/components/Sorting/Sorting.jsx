import { Sort } from '@mui/icons-material';
import React from 'react';
import './Sorting.scss';

export default function Sorting() {
  return (
    <div className='sort'>
        <span>Sort</span>
        <Sort className='icon'/>
    </div>
  );
};
