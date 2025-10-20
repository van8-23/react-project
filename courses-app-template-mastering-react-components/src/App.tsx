

import { useMemo, useState } from 'react';

import './app.css';
import Header from './components/Header/Header';
import Courses from './components/Courses/Courses';
import CourseInfo from './components/CourseInfo/CourseInfo';

import { mockedAuthorsList, mockedCoursesList, Course } from './constants';

function App() {
  const [courses] = useState(mockedCoursesList);
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const selectedCourse: Course | null = useMemo(
    () => courses.find((c) => c.id === selectedId) ?? null,
    [courses, selectedId]
  );

  return (
    <>
      <Header />
      <main className="container" style={{ padding: 16 }}>
        {!selectedCourse && (
          <Courses
            courses={courses}
            authors={mockedAuthorsList}
            onShow={(id) => setSelectedId(id)}
          />
        )}

        {selectedCourse && (
          <CourseInfo
            course={selectedCourse}
            authors={mockedAuthorsList}
            onBack={() => setSelectedId(null)}
          />
        )}
      </main>
    </>
  );
}

export default App;
