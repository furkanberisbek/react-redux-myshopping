import { data } from "../data";

const INITIAL_STATE = {
    bookList: data,
    cart: []
};

export const reducer = (state = INITIAL_STATE, Action) => {
    return state;
}