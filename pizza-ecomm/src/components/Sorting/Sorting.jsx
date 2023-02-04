import { Sort } from '@mui/icons-material';
import React from 'react';
import './Sorting.scss';

export default function Sorting() {

  const [isActiveSort, setIsActiveSort] = React.useState(false)
  function click () {
    setIsActiveSort((active) => !active)
  }

  console.log(isActiveSort)
  return (
    <div className='sort'>
        <div className='sort-wrapper' >
          <span className='sorting' onClick={click}>Sort</span>
          <Sort className='icon'/>
        </div>

        { isActiveSort === true ? 
          <div className='labels'>
            <label className='label'>Price low-high</label>
            {/* <span className='label-border'></span> */}
            <label className='label'>Price high-low</label>
          </div>
          :
          null
        }
        
    </div>
  );
};
