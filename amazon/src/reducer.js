import { AmpStoriesOutlined } from "@material-ui/icons";

export const initialState = {
    basket: [
        // {
        //     id:"123456",
        //     title:"Bose Noise Cancelling Wireless Bluetooth Headphones 700, with Alexa Voice Control, Soapstone",
        //     price:500,
        //     rating:5,
        //     image:"https://images-na.ssl-images-amazon.com/images/I/61mq3DocJ1L._AC_SL1500_.jpg",
        // }
    ],
    user: null
};

export const getBasketTotal = (basket) =>
    basket?.reduce((amount,item) => item.price + amount, 0);

const reducer = (state, action) => {
    switch(action.type){
        case 'ADD_TO_BASKET':
            return {
                ...state, 
                 basket: [ ...state.basket, action.item ]
            };
        case 'REMOVE_FROM_BASKET':
            console.log('Hello');
            let newBasket = [...state.basket];
            const index = state.basket.findIndex((basketItem)=>basketItem.id===action.id)
            if(index>=0)
                newBasket.splice(index,1)   // remov e at index
            else
                console.warn(`Can't remove {id:${action.id}} as it's not available`)
            return {
                ...state, 
                basket: newBasket
            };
        default:
            return state;
    }
}

export default reducer;