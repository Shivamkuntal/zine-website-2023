import Image from 'next/image';

// Update the path to match where your images are stored in the public directory
const teamMembers = [
  { name: 'Member 1', role: 'Role 1', imgSrc: '/self-photo.jpg' },
  // Add more members as needed
];

const Team = () => (
  <div className="team-section">
    {teamMembers.map((member, index) => (
      <div key={index} className="team-member">
        <Image src={member.imgSrc} alt={member.name} width={150} height={150} />
        <h3>{member.name}</h3>
        <p>{member.role}</p>
      </div>
    ))}
  </div>
);

export default Team;

