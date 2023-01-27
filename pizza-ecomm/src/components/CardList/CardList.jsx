import { Info } from '@mui/icons-material';
import React from 'react';
import Card from '../Card/Card';
import './CardList.scss';
import useFetch from '../Hooks/useFetch';

export default function CardList({type}) {

  const {data, loading, error} = useFetch(
    `products?populate=*&[filters][type][$eq]=${type}`
  );



  return (
    <div className='card-list'>
        <div className='container'>
            <div className='list-title'>
              {type} 
              <div className='list-icon-wrapper'>
                <div className='list-about'>Here are the most affordable pizzas</div>
                <Info className='icon'/>
              </div>
            </div>
            <div className='card-list-block'>

                { error 
                  ? 'something went wrong' :
                    loading
                  ? 'loading'
                    :
                  data?.map(item => <Card key={item.id} item={item}/>)
                }
            </div>

            

        </div>
       
    </div>
  )
}
