import { CartState } from "./cart/cart.reducer";
import { counterState } from "./counter/counter.reducers";

export interface AppState {
    counter: counterState,
    cart:CartState;
}
