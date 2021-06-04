import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

const CreateNote = props => {
  const [expand, setExpand] = useState(false);
  const [note, setNote] = useState({
    title: '',
    content: '',
  });

  const chnEvent = e => {
    const { name, value } = e.target;
    setNote(oldData => {
      return {
        ...oldData,
        [name]: value,
      };
    });
  };

  const addEvent = () => {
    props.passNote(note);
    setNote({
      title: '',
      content: '',
    });
  };
  const expandIt = () => {
    setExpand(true);
  };
  const btoN = () => {
    setExpand(false);
  };
  return (
    <>
      <div className='main_note' onDoubleClick={btoN}>
        <form>
          {expand ? (
            <input
              type='text'
              placeholder='Title'
              autoComplete='off'
              onChange={chnEvent}
              value={note.title}
              name='title'
            />
          ) : null}
          <textarea
            placeholder='Write a note ...'
            rows=''
            columns=''
            onChange={chnEvent}
            value={note.content}
            name='content'
            onClick={expandIt}
          ></textarea>
          {expand ? (
            <Button
              className='chn_btn'
              onClick={addEvent}
              style={{
                borderRadius: '70%',
                boxShadow: '5px 5px 15px -5px black',
                float: 'right',
              }}
            >
              <AddIcon className='plus_sign' />
            </Button>
          ) : null}
        </form>
      </div>
    </>
  );
};
export default CreateNote;
