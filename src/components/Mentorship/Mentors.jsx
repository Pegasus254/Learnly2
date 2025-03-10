import styled from 'styled-components';

const MentorsSection = styled.section`
  margin-bottom: 4rem;
`;

const MentorsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
`;

const MentorCard = styled.div`
  background: white;
  border-radius: 10px;
  padding: 2rem;
  text-align: center;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const mentors = [
  {
    image: 'mentor1.jpg',
    name: 'Gabriel Gichuru',
    title: 'Data Scientist',
    description: 'Experienced in Machine learning and AI & Big Data Analytics',
    contact: {
      phone: '0715851288',
      email: 'gabrielgichuru1@gmail.com'
    }
  },
  {
    image: 'mentor2.jpg',
    name: 'Euclid Mwendwa',
    title: 'Data Scientist',
    description: 'Experienced in Data Engineering & Data visualization',
    contact: {
      phone: '0742757528',
      email: 'euclidmwendwa@gmail.com'
    }
  }
];

const Mentors = () => {
  return (
    <MentorsSection>
      <h2 className="section-title">Featured Mentors</h2>
      <MentorsGrid>
        {mentors.map((mentor, index) => (
          <MentorCard key={index}>
            <img
              src={`${process.env.PUBLIC_URL}/assets/${mentor.image}`}
              alt={mentor.name}
              className="mentor-image"
            />
            <h3 className="mentor-name">{mentor.name}</h3>
            <p className="mentor-title">{mentor.title}</p>
            <p className="mentor-description">{mentor.description}</p>
            <div className="mentor-contact">
              <p>Contact: {mentor.contact.phone}</p>
              <p>{mentor.contact.email}</p>
            </div>
          </MentorCard>
        ))}
      </MentorsGrid>
    </MentorsSection>
  );
};

export default Mentors; 