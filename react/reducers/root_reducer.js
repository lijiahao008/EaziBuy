import {combineReducers} from 'redux';
import ItemsReducer from './items_reducer';


const RootReducer = combineReducers({
    items: ItemsReducer
});

export default RootReducer;
