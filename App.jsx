import MemberCard from './MemberCard';

function App() {
  // ข้อ 2: เตรียมข้อมูลทีมในรูปแบบ Array
  const teamMembers = [
    { name: "Alice", role: "Frontend Developer", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alice" },
    { name: "Bob", role: "Backend Developer", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Bob" },
    { name: "Charlie", role: "UI/UX Designer", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Charlie" },
  ];

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>CodeVerse Studio Team</h1>
      <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
        {/* ข้อ 4: ใช้ .map() เพื่อแสดง MemberCard จากข้อมูลใน array */}
        {teamMembers.map((member, index) => (
          <MemberCard 
            key={index} 
            name={member.name} 
            role={member.role} 
            avatar={member.avatar} 
          />
        ))}
      </div>
    </div>
  );
}
export default App;
