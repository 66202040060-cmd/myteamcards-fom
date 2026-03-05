import React from 'react';

// ข้อ 3: สร้างคอมโพเนนต์รับ props (name, role, avatar) ตามโจทย์
const MemberCard = ({ name, role, avatar }) => {
  return (
    <div style={{ 
      border: '1px solid #ddd', 
      borderRadius: '12px', 
      padding: '20px', 
      margin: '10px', 
      textAlign: 'center',
      width: '200px',
      backgroundColor: '#fff',
      boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
      color: '#333'
    }}>
      <img src={avatar} alt={name} style={{ width: '100px', height: '100px', borderRadius: '50%', marginBottom: '10px' }} />
      <h3 style={{ margin: '10px 0', fontSize: '1.2rem' }}>{name}</h3>
      <p style={{ color: '#666', fontSize: '0.9rem' }}>{role}</p>
    </div>
  );
};

export default MemberCard;