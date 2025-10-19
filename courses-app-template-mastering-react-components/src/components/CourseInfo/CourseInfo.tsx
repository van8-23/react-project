

import React from 'react';

import type { Course, Author } from '../../constants';
import Button from '../../common/Button/Button';                
import { BUTTON_TEXT } from '../../constants/uiText';
import { getAuthorNames } from '../../helpers/authors';
import { getCourseDuration } from '../../helpers/getCourseDuration';
import { formatCreationDate } from '../../helpers/formatCreationDate';

import './courseInfo.css';

type Props = {
  course: Course;
  authors: Author[];
  onBack: () => void;
};

const CourseInfo: React.FC<Props> = ({ course, authors, onBack }) => {
  const authorNames = getAuthorNames(course.authors, authors).join(', ');

  return (
    <section aria-label="Course info">
      <Button buttonText={BUTTON_TEXT.BACK_TO_COURSES} onClick={onBack} />
      <h2 className="course-info__title">{course.title}</h2>
      <p className="course-info__desc">{course.description}</p>
      <ul className="course-info__list">
        <li><strong>ID:</strong> {course.id}</li>
        <li><strong>Duration:</strong> {getCourseDuration(course.duration)}</li>
        <li><strong>Creation date:</strong> {formatCreationDate(course.creationDate)}</li>
        <li><strong>Authors:</strong> {authorNames}</li>
      </ul>
    </section>
  );
};

export default CourseInfo;

