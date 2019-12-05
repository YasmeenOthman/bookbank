import * as React from 'react';
import Item from './item'

const book:Array<book> = [
    {
    bookName: 'Programming',
    userName: "Alaa",
    bookDescription: 'Very important book',
    bookCover:"https://www.packtpub.com/media/catalog/product/cache/e4d64343b1bc593f1c5348fe05efa4a6/9/7/9781838641443-original.jpeg",
    universityName:'AlAzhar'
    },
    {
    bookName: 'Programming',
    userName: 'Alaa',
    bookDescription: 'Very important book',
    bookCover:'https://en.wikibooks.org/wiki/Java_Programming#/media/File:Java_Programming_Cover.jpg',
    universityName:'Berzit'
    }
  ]
  
  const ItemHome: React.FC = () => {
    return (
      
      <div>
        <Item book={book[0]}/>
      </div>
      
    );
  
  }
  
  export default ItemHome;