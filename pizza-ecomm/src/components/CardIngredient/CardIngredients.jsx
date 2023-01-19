import { Add, KeyboardArrowRightOutlined, RemoveOutlined } from '@mui/icons-material';
import React from 'react';
import { Link } from 'react-router-dom';
import './CardIngredients.scss';

export default function CardIngredients() {
  return (
    <div className='card-ingredient'>
        <div className='card-img-wrapper'>
          <img className='card-img' src="https://images.pexels.com/photos/845811/pexels-photo-845811.jpeg" alt="img" />
          <div className='type'>
            <img className='icon' src='https://media.dominos.ua/icon/svg_file/2018/02/23/new.svg' alt='new'/>
          </div>
        </div>
        <div className='ingredients'>
          <h1 className='card-title'>Pizza Title</h1>
          <span className='card-ingredients-title'>Ingredients</span>
          <div className='card-ingredients-wrapper'>
            <div className='card-ingredients'>
              <img src="https://images.pexels.com/photos/4202502/pexels-photo-4202502.jpeg" alt="" />
              <span className='title-ingredient'>onion</span>
              <div className='card-ingredients-calculator-wrapper'>
                <div className='card-ingredients-calculator'>
                  <button className='card-ingredients-calculator-btn'>
                    <RemoveOutlined style={{fontSize: '13px'}}/>
                    </button>
                  <span className='card-ingredients-calculator-count'>0</span>
                  <button className='card-ingredients-calculator-btn'>
                    <Add style={{fontSize: '13px'}}/>
                  </button>
                </div>
              </div>
            </div>
            <div className='card-ingredients'>
              <img src="https://images.pexels.com/photos/4202502/pexels-photo-4202502.jpeg" alt="" />
              <span className='title-ingredient'>onion</span>
              <div className='card-ingredients-calculator-wrapper'>
                <div className='card-ingredients-calculator'>
                  <button className='card-ingredients-calculator-btn'>
                    <RemoveOutlined style={{fontSize: '13px'}}/>
                    </button>
                  <span className='card-ingredients-calculator-count'>0</span>
                  <button className='card-ingredients-calculator-btn'>
                    <Add style={{fontSize: '13px'}}/>
                  </button>
                </div>
              </div>
            </div>
            <div className='card-ingredients'>
              <img src="https://images.pexels.com/photos/4202502/pexels-photo-4202502.jpeg" alt="" />
              <span className='title-ingredient'>onion</span>
              <div className='card-ingredients-calculator-wrapper'>
                <div className='card-ingredients-calculator'>
                  <button className='card-ingredients-calculator-btn'>
                    <RemoveOutlined style={{fontSize: '13px'}}/>
                    </button>
                  <span className='card-ingredients-calculator-count'>0</span>
                  <button className='card-ingredients-calculator-btn'>
                    <Add style={{fontSize: '13px'}}/>
                  </button>
                </div>
              </div>
            </div>
            <div className='card-ingredients'>
              <img src="https://images.pexels.com/photos/4202502/pexels-photo-4202502.jpeg" alt="" />
              <span className='title-ingredient'>onion</span>
              <div className='card-ingredients-calculator-wrapper'>
                <div className='card-ingredients-calculator'>
                  <button className='card-ingredients-calculator-btn'>
                    <RemoveOutlined style={{fontSize: '13px'}}/>
                    </button>
                  <span className='card-ingredients-calculator-count'>0</span>
                  <button className='card-ingredients-calculator-btn'>
                    <Add style={{fontSize: '13px'}}/>
                  </button>
                </div>
              </div>
            </div>
            <div className='card-ingredients'>
              <img src="https://images.pexels.com/photos/4202502/pexels-photo-4202502.jpeg" alt="" />
              <span className='title-ingredient'>onion</span>
              <div className='card-ingredients-calculator-wrapper'>
                <div className='card-ingredients-calculator'>
                  <button className='card-ingredients-calculator-btn'>
                    <RemoveOutlined style={{fontSize: '13px'}}/>
                    </button>
                  <span className='card-ingredients-calculator-count'>0</span>
                  <button className='card-ingredients-calculator-btn'>
                    <Add style={{fontSize: '13px'}}/>
                  </button>
                </div>
              </div>
            </div>
            <div className='card-ingredients'>
              <img src="https://images.pexels.com/photos/4202502/pexels-photo-4202502.jpeg" alt="" />
              <span className='title-ingredient'>onion</span>
              <div className='card-ingredients-calculator-wrapper'>
                <div className='card-ingredients-calculator'>
                  <button className='card-ingredients-calculator-btn'>
                    <RemoveOutlined style={{fontSize: '13px'}}/>
                    </button>
                  <span className='card-ingredients-calculator-count'>0</span>
                  <button className='card-ingredients-calculator-btn'>
                    <Add style={{fontSize: '13px'}}/>
                  </button>
                </div>
              </div>
            </div>
                        
          </div>

          <Link className='card-constructor' to='/pizza-constructor/:id'>
            <div className='card-constructor-btn' > 
              <Add className='card-constructor-icon'/> 
            </div>
            <span className='card-constructor-text'>Add to constructor</span>
          </Link>

          <div className='card-ingredients-additional-wrapper'>
            <span className='card-ingredients-additional'>Additions</span>
            <div className='card-ingredients-additional'>
              <img  src="https://images.pexels.com/photos/3622479/pexels-photo-3622479.jpeg" alt="" />
              <h4>sauce title</h4>
            </div>
          </div>

          <span className='card-type'>Crust</span>

          <div className='card-final-price-wrapper'> 
            <div className='card-final-price'>
              from <span className='card-final-price-count'>231</span> uah
            </div>
            <button className='card-final-price-btn'>Add to cart</button>
          </div>
        </div>

        <div className='other-products'>
          <h1>
            Other products
          </h1>
          <div className='other-products-wrapper'>
            <Link className='other-products-item' to='/product/:id'>
              <div className='other-products-item-img-wrapper'>
                <img className='other-products-item-img' src="https://images.pexels.com/photos/1146760/pexels-photo-1146760.jpeg" alt="" />
              </div>
              <span>pizza title</span>
            </Link>
            <Link className='other-products-item' to='/product/:id'>
              <div className='other-products-item-img-wrapper'>
                <img className='other-products-item-img' src="https://images.pexels.com/photos/1146760/pexels-photo-1146760.jpeg" alt="" />
              </div>
              <span>pizza title</span>
            </Link>
            <Link className='other-products-item' to='/product/:id'>
              <div className='other-products-item-img-wrapper'>
                <img className='other-products-item-img' src="https://images.pexels.com/photos/1146760/pexels-photo-1146760.jpeg" alt="" />
              </div>
              <span>pizza title</span>
            </Link>
            <Link className='other-products-item' to='/product/:id'>
              <div className='other-products-item-img-wrapper'>
                <img className='other-products-item-img' src="https://images.pexels.com/photos/1146760/pexels-photo-1146760.jpeg" alt="" />
              </div>
              <span>pizza title</span>
            </Link>
            <Link className='other-products-item' to='/product/:id'>
              <div className='other-products-item-img-wrapper'>
                <img className='other-products-item-img' src="https://images.pexels.com/photos/1146760/pexels-photo-1146760.jpeg" alt="" />
              </div>
              <span>pizza title</span>
            </Link>
            <button className='other-products-next-btn'>
              <KeyboardArrowRightOutlined style={{fontSize: '16px'}}/>
              </button>
          </div>

        </div>
        
    </div>
  )
}
