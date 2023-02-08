import SortRoundedIcon from '@mui/icons-material/SortRounded';
import React from 'react';
import './Sorting.scss';

export default function Sorting({setIsSorting}) {

  const [isActiveSort, setIsActiveSort] = React.useState(false)
  
  function isClick () {
    setIsActiveSort((active) => !active)
  }

  return (
    <div className='sort-container'>
      <div className='sort' >
        <div className='sort-wrapper' >
          <span className='sorting' onClick={isClick}>Sort</span>
          <SortRoundedIcon className='icon'/>
        </div>
        { isActiveSort === true ? 
          <div className='labels'>
            <label className='label' onClick={() => setIsSorting('low')}>Price low-high</label>
            {/* <span className='label-border'></span> */}
            <label className='label' onClick={() => setIsSorting('high')}>Price high-low</label>
          </div>
          :
          null
        }
      </div>
    </div>
    
  );
};
