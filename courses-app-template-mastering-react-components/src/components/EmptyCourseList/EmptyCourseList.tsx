/*import React from 'react';

import Button from '../../common/Button/Button';
import { BUTTON_TEXT, EMPTY_LIST } from '../../constants/uiText';

import './emptyCourseList.css';

const EmptyCourseList: React.FC = () => {
  return (
    <section className="empty">
      <h2>{EMPTY_LIST.TITLE}</h2>
      <p>{EMPTY_LIST.SUBTITLE}</p>
      <Button buttonText={BUTTON_TEXT.ADD_NEW_COURSE} onClick={() => { /* no-op */ /*}} />
    </section>
  );
};

export default EmptyCourseList;*/

import React from 'react';

const EmptyCourseList: React.FC = () => {
  return (
    <section>
      <h2>Your List Is Empty</h2>
      <p>Please use "Add New Course" button to add your first course</p>
      <button>Add New Course</button>
    </section>
  );
};

export default EmptyCourseList;
