import React, { useState } from 'react';
import Heading from './Heading';
import CreateNote from './CreateNote';
import Note from './Note';
import Footer from './Footer';
const App = () => {
  const [addItem, setAddItem] = useState([]);

  const addedNote = note => {
    setAddItem(oldDat => {
      return [...oldDat, note];
    });
    console.log(note);
  };
  const onDelete = id => {
    setAddItem(oldData =>
      oldData.filter((currData, index) => {
        return index !== id;
      })
    );
  };
  return (
    <>
      <Heading />
      <CreateNote passNote={addedNote} />
      <div className='set_note'>
        {addItem.map((val, index) => {
          return (
            <Note
              key={index}
              id={index}
              title={val.title}
              content={val.content}
              deleteItem={onDelete}
            />
          );
        })}
      </div>

      <Footer />
    </>
  );
};

export default App;
