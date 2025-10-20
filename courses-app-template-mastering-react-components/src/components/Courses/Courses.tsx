
import React from 'react';

import type { Course, Author } from '../../constants';
import { BUTTON_TEXT } from '../../constants/uiText';

import EmptyCourseList from '../EmptyCourseList/EmptyCourseList';
import CourseCard from './components/CourseCard/CourseCard';
import SearchBar from './components/SearchBar/SearchBar';

import './courses.css';

type Props = {
  courses: Course[];
  authors: Author[];
  onShow: (id: string) => void;
};

const Courses: React.FC<Props> = ({ courses, authors, onShow }) => {
  if (!courses.length) return <EmptyCourseList />;

  return (
    <section className="courses" aria-label="Courses">
      <div className="courses__toolbar">
        <SearchBar />
        <button className="btn btn--primary">{BUTTON_TEXT.ADD_NEW_COURSE}</button>
      </div>

      <div className="courses__list">
          {courses.map((course) => (
            <CourseCard
              key={course.id}
              course={course}
              allAuthors={authors}
              onShow={onShow}
            />
        ))}
      </div>
    </section>
  );
};

export default Courses;




