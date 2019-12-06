import {createStore} from "redux";

const initialState = {
    book: [
          {
            "Bookname": "The Sun In His EYES",
            "Bookcover": "https://marketplace.canva.com/MADSMNPt8uA/3/0/thumbnail_large/canva-green-beach-photo-book-cover-MADSMNPt8uA.jpg"
          }
    ]
};

function reducers(state){ //this is just initially
    return state;
}

const store = createStore(reducers, initialState);

export default store;