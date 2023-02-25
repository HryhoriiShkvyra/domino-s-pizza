import { Add, Remove } from '@mui/icons-material';
import React from 'react';
// import useFetch from '../Hooks/useFetch';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
// import { addItem, removeItem, increaseQuantity, decreaseQuantity } from '../redux/cartReducer'
import { addToCart,  incrementQuantity, decrementQuantity, removeItem } from '../redux/cartReducer';
// import { decrementQuantity } from '../redux/cartReducer';
// import { incrementQuantity } from '../redux/cartReducer'
import './CardQuantity.scss';

export default function CardQuantity({ item, priceValue, cathegory, isSize, isCrust }) {

    const [quantity, setQuantity] = React.useState(0);
    const [isActiveBtn, setIsActiveBtn] = React.useState(true)
    const products = useSelector(state => state.cart.products);
    const dispatch = useDispatch();


    function activeBtn() {
        setIsActiveBtn(false)
    }

    React.useEffect(() => {
        console.log(quantity)
    }, [quantity])

//     const cartItems = useSelector(state => state.cart.items);

//   const handleAddToCart = () => {
//     dispatch(addItem({ id: product.id, name: product.name, price: product.price }));
//   }

//   const handleRemoveFromCart = () => {
//     dispatch(removeItem({ id: product.id }));
//   }

//   const handleIncreaseQuantity = () => {
//     dispatch(increaseQuantity({ id: product.id }));
//   }

//   const handleDecreaseQuantity = () => {
//     dispatch(decreaseQuantity({ id: product.id }));
//   }

//   const cartItem = cartItems.find(item => item.id === product.id);

    function upload () {
        return(
            dispatch(addToCart({
                id: item.id,
                title: item.attributes.title,
                description: item.attributes.description,
                price: price(),
                img: item.attributes.img.data.attributes.url,
                size: `${isSize}, ${isCrust}`,
                quantity
            })),
            setQuantity((action) => action += 1)
        );
    };

    function increaseQuantity () {
        return(
            dispatch(incrementQuantity({
                quantity,
            })),
            setQuantity((action) => action += 1),
            console.log('increase' + quantity)
        );
    };

    function decreaseQuantity () {
        return(
            dispatch(decrementQuantity({
                quantity,
            })),
            setQuantity((action) => action -= 1),
            console.log('decrease' + quantity)
        );
    };

    

    // function upload () {
    //     if (cathegory === 'pizza') {
    //         return(
    //             dispatch(addToCart({
    //                 id: item.id,
    //                 title: item.attributes.title,
    //                 description: item.attributes.description,
    //                 price: price(),
    //                 img: item.attributes.img.data.attributes.url,
    //                 size: `${isSize}, ${isCrust}`,
    //                 quantity: quantity
    //             })),
    //             setQuantity((action) => action + 1)
    //         )
    //     } else {
    //         return(
    //             dispatch(addToCart({
    //                 id: item.id,
    //                 title: item.attributes.title,
    //                 description: item.attributes.description,
    //                 price: price(),
    //                 img: item.attributes.img.data.attributes.url,
    //                 size: isSize,
    //                 quantity: quantity
    //             })),
    //             setQuantity((action) => action + 1)

    //         )
    //     }
    // };

    function price() {
        if (cathegory === 'pizza') {
            if (`${priceValue}` === 'standard-size,thick') {
                return (
                    (item.attributes.price_1)
                )
                } else if (`${priceValue}` === 'standard-size,thin') {
                return (
                    (item.attributes.price_2)
                )
                } else if (`${priceValue}` === 'standard-size,philadelphia') {
                return (
                    (item.attributes.price_3)
                )
                } else if (`${priceValue}` === 'standard-size,hot-dog') {
                    return(
                        (item.attributes.price_4)
                    )
                } else if (`${priceValue}` === 'large,thick') {
                    return(
                        (item.attributes.price_5)
                    )
                } else if (`${priceValue}` === 'large,thin') {
                    return(
                        (item.attributes.price_6)
                    )
                } else if (`${priceValue}` === 'large,philadelphia') {
                    return (
                        (item.attributes.price_7)
                    )
                } else if (`${priceValue}` === 'large,hot-dog') {
                    return(
                        (item.attributes.price_8)
                    )
                } else if (`${priceValue}` === 'extra,thick') {
                    return(
                        (item.attributes.price_9)
                    )
                } else if (`${priceValue}` === 'extra,thin') {
                    return(
                        (item.attributes.price_10)
                    )
                } else if (`${priceValue}` === 'extra,philadelphia') {
                    return(
                        (item.attributes.price_11)
                    )
                } else if (`${priceValue}` === 'extra,hot-dog') {
                    return(
                        (item.attributes.price_12)
                    )
                // } else if (`${priceValue}` === 'xxl,thick') {
                //     return(
                //         (item.attributes.price_13)
                //     ) 
                } else if (`${priceValue}` === 'xxl,thin') {
                    return(
                    (item.attributes.price_14)
                )
                } else if (`${priceValue}` === 'xxl,philadelphia') {
                    return(
                        (item.attributes.price_15)
                    )
                } else if (`${priceValue}` === 'xxl,hot-dog') {
                    return (
                        (item.attributes.price_16)
                        )
                    }
            }

        if (cathegory === 'sides') {
            if (`${isSize}` === 'standard-size') {
                return (
                    (item.attributes.price_1)
                )
            } else if (`${isSize}` === 'double') {
                return (
                    (item.attributes.price_2)
                )
            } else if (item.attributes.size_2 == null) {
                return (
                    (item.attributes.price_1)
                )
            }
        }   

        if (cathegory === 'drinks') {
            if (`${isSize}` === 'standard-size') {
            return (
                (item.attributes.price_1)
            )
            } else if (`${isSize}` === 'large') {
                return (
                    (item.attributes.price_2)
                )
            } else if (`${isSize}` === 'extra') {
                return (
                    (item.attributes.price_3)
                )
            }
        }

        if (cathegory === 'dessert') {
            if (`${isSize}` === 'double') {
                return(
                    (item.attributes.price_2)
                )
            } else {
                return(
                    (item.attributes.price_1)
                )
            }
        }   
    }



    return (
        <div className='card-quantity'>
            <div className='card-price'>
                {price()}
                <span>uah</span>
            </div>

            {   isActiveBtn === true ?
                <div className='card-add-to-cart' 
                    onClick={() => {upload(); activeBtn();}}>
                    To cart
                </div>
            :
                <div className='increase-decrease-quantity'>
                    <button className='quantity-btn' onClick={() => {{decreaseQuantity()}}} style={{marginLeft: '-1px'}} >
                        <Remove className='quantity'/>
                    </button>
                    
                    <div className='count'>
                        {quantity} 
                    </div>
                    <button className='quantity-btn' onClick={() => {increaseQuantity()}} style={{margin: '-1px'}}>
                        <Add/>
                    </button>
                </div> 
            }           
        </div>
    )
}
