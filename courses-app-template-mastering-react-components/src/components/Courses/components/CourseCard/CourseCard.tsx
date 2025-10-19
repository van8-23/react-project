import React from 'react';                                   

import type { Course, Author } from '../../../../constants';  
import { getCourseDuration } from '../../../../helpers/getCourseDuration';
import { formatCreationDate } from '../../../../helpers/formatCreationDate'; 

type Props = {
  course: Course;
  allAuthors: Author[];
  onShow: (id: string) => void;
};

const CourseCard: React.FC<Props> = ({ course, allAuthors, onShow }) => {
  
  const authorNames = course.authors
    .map((id) => allAuthors.find((a) => a.id === id)?.name)
    .filter(Boolean)
    .join(', ');

  return (
    <article>
      {/* course title */}
      <h3>{course.title}</h3>

      {/* course description */}
      <p>{course.description}</p>

      {/* meta info */}
      <dl>
        <dt>Duration</dt>
        <dd>{getCourseDuration(course.duration)}</dd>

        <dt>Created</dt>
        <dd>{formatCreationDate(course.creationDate)}</dd>

        <dt>Authors</dt>
        <dd
          title={authorNames}
          style={{
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          }}
        >
          {authorNames}
        </dd>
      </dl>

      {/* Show course button */}
      <button onClick={() => onShow(course.id)}>Show course</button>
    </article>
  );
};

export default CourseCard;


