import SortRoundedIcon from '@mui/icons-material/SortRounded';
import React from 'react';
import './Filter.scss';

export default function Filter({setIsSorting}) {

  const [isActiveSort, setIsActiveSort] = React.useState(false)
  
  function isClick () {
    setIsActiveSort((active) => !active)
  }

  return (
    <div className='filter-container'>
      <div className='filter' >
        <div className='filter-wrapper' >
          <span className='filter-btn' onClick={isClick}>Filter</span>
          <SortRoundedIcon className='icon'/>
        </div>

        { isActiveSort === true 
          ? 

          <div className='checkbox-wrapper'>
            <input className='checkbox' type='checkbox'/>
            <label className='label' onClick={() => setIsSorting('low')}>Tea</label>
          </div>
          :
          null
        }
      </div>
    </div>
    
  );
};
