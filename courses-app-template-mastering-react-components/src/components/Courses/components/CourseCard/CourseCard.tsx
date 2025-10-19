import Button from '../../../../common/Button/Button';
import IconButton from '../../../../common/IconButton/IconButton';

import type { Course, Author } from '../../../../constants';
import { BUTTON_TEXT } from '../../../../constants/uiText';
import { getCourseDuration } from '../../../../helpers/getCourseDuration';
import { formatCreationDate } from '../../../../helpers/formatCreationDate';
import { getAuthorNames } from '../../../../helpers/authors';

import EditIcon from '../../../../assets/icons/Icon-Edit.svg';
import TrashIcon from '../../../../assets/icons/Icon-Trash.svg';

import './courseCard.css';

type Props = {
  course: Course;
  allAuthors: Author[];
  onShow: (id: string) => void;
};

const CourseCard = ({ course, allAuthors, onShow }: Props) => {
  const authorNames = getAuthorNames(course.authors, allAuthors).join(', ');

  return (
    <article className="c-card">
      {/* Left column: title + description */}
      <div className="c-card__left">
        <h3 className="c-card__title">{course.title}</h3>
        <p className="c-card__desc">{course.description}</p>
      </div>

      {/* Right column: meta */}
      <div className="c-card__right">
        <dl className="c-card__meta">
          <div className="c-card__row">
            <dt>Authors:</dt>
            <dd className="c-card__authors" title={authorNames}>{authorNames}</dd>
          </div>
          <div className="c-card__row">
            <dt>Duration:</dt>
            <dd>{getCourseDuration(course.duration)}</dd>
          </div>
          <div className="c-card__row">
            <dt>Created:</dt>
            <dd>{formatCreationDate(course.creationDate)}</dd>
          </div>
        </dl>
      </div>

      {/* Bottom row: actions aligned to the right (Show course + edit + delete) */}
      <div className="c-card__actions">
        <div className="c-card__actions-right">
          <Button
            buttonText={BUTTON_TEXT.SHOW_COURSE}
            onClick={() => onShow(course.id)}
            className="c-card__show"
          />
          <IconButton icon={TrashIcon} alt="Delete course" aria-label="Delete course" />
          <IconButton icon={EditIcon} alt="Edit course" aria-label="Edit course" />
        </div>
      </div>
    </article>
  );
};

export default CourseCard;

