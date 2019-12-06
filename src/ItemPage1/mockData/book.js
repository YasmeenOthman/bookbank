import Book from "../item";

 function getAll(){
    return Promise.resolve(Book);
}

export default {
    getAll
}