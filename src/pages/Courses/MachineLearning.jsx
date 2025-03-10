import styled from 'styled-components';
import CourseModule from '../../components/Courses/CourseModule';
import Breadcrumb from '../../components/Common/Breadcrumb';

const CourseContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

const CourseHeader = styled.section`
  margin-bottom: 3rem;
  
  h1 {
    color: var(--bg-dark);
    margin-bottom: 1rem;
  }

  .course-description {
    color: #666;
    font-size: 1.1rem;
    line-height: 1.6;
  }
`;

const mlModules = [
  {
    title: "Module 1: Introduction to Machine Learning",
    topics: [
      { name: "What is Machine Learning?", link: "module1#introduction" },
      { name: "Machine Learning Pipeline", link: "module1#ml-pipeline" },
      { name: "Supervised Learning Basics", link: "module1#supervised" },
      { name: "Model Evaluation", link: "module1#evaluation" }
    ]
  },
  {
    title: "Module 2: Supervised Learning",
    topics: [
      { name: "Linear Regression" },
      { name: "Logistic Regression" },
      { name: "Decision Trees" },
      { name: "Random Forests" },
      { name: "Support Vector Machines" }
    ]
  },
  {
    title: "Module 3: Unsupervised Learning",
    topics: [
      { name: "Clustering Algorithms" },
      { name: "Dimensionality Reduction" },
      { name: "Principal Component Analysis" },
      { name: "Association Rule Learning" }
    ]
  },
  {
    title: "Module 4: Deep Learning",
    topics: [
      { name: "Neural Networks Fundamentals" },
      { name: "Convolutional Neural Networks" },
      { name: "Recurrent Neural Networks" },
      { name: "Transfer Learning" },
      { name: "Deep Learning Frameworks" }
    ]
  },
  {
    title: "Module 5: Advanced Topics",
    topics: [
      { name: "Model Evaluation and Validation" },
      { name: "Hyperparameter Tuning" },
      { name: "Ensemble Methods" },
      { name: "Deployment and Production" },
      { name: "Ethics in Machine Learning" }
    ]
  }
];

const MachineLearning = () => {
  const breadcrumbItems = [
    { label: 'Courses', link: '/courses' },
    { label: 'Machine Learning' }
  ];

  return (
    <CourseContainer>
      <Breadcrumb items={breadcrumbItems} />
      <CourseHeader>
        <h1>Machine Learning</h1>
        <p className="course-description">
          Dive into the world of Machine Learning. Learn to build intelligent systems 
          that can learn from data, make predictions, and improve automatically through experience.
        </p>
      </CourseHeader>

      <section className="course-modules">
        <h2>Course Modules</h2>
        {mlModules.map((module, index) => (
          <CourseModule
            key={index}
            title={module.title}
            topics={module.topics}
            basePath="/courses/machine-learning"
          />
        ))}
      </section>
    </CourseContainer>
  );
};

export default MachineLearning; 