import { Info } from '@mui/icons-material';
import React from 'react';
import Card from '../Card/Card';
import './CardList.scss';
import axios from 'axios'

export default function CardList() {

  const [data, setData] = React.useState([]);
  console.log(data[0].attributes)

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          process.env.REACT_APP_API_URL + '/products', 
            {
            headers: {
              Authorization: 'bearer' + process.env.REACT_APP_API_TOKEN,
            },         
          }
        )
        setData(res.data.data)
      } catch(err) {
        console.log(err);
      }
    };
    fetchData();
  }, [])


  return (
    <div className='card-list'>
        <div className='container'>
            <div className='list-title'>
              Pizza List 
              <span>
                <Info className='icon'/>
              </span>
            </div>
            <div className='card-list-block'>
                {data.map(item => 
                  <Card key={item.id} item={item}/>
                )}
            </div>

        </div>
       
    </div>
  )
}
