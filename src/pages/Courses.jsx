import { ContentWrapper, CoursesIntro, CourseGrid } from '../styles/courses.styles';
import CourseCard from '../components/Courses/CourseCard';
import { coursesData } from '../data/coursesData';

const Courses = () => {
  return (
    <ContentWrapper>
      <CoursesIntro>
        <h1>Courses</h1>
        <p>
          Our senior tracks are hand-picked by industry experts. You will learn all you need 
          to start a new career in the data science field as a beginner. In the end of these 
          courses you will have a strong foundation to go to new heights.
        </p>
      </CoursesIntro>

      <CourseGrid>
        {coursesData.map((course, index) => (
          <CourseCard
            key={index}
            title={course.title}
            skills={course.skills}
            path={course.path}
          />
        ))}
      </CourseGrid>
    </ContentWrapper>
  );
};

export default Courses; 