import React, { useState } from 'react';
import MemberForm from './components/Form'
import { Header, Segment, Container } from 'semantic-ui-react'
import TeamCard from './components/TeamCard'
import './App.css';

function App() {
  const [list, setList] = useState([])
  const [memberToEdit, setMemberToEdit] = useState(null)

  const editMember = member => {
    const editIndex = list.indexOf(memberToEdit)
    setList(
      list.map((user, index) => {
        if (index === editIndex) {
          return member
        } else {
          return user
        }
      })
    )
  }
  return (
    <Container className="App">
      <MemberForm 
        list={list}
        setList={setList}
        memberToEdit={memberToEdit}
        setMemberToEdit={setMemberToEdit}
        editMember={editMember}   
      />
      {list.map((user, index) => {
        return (
          <TeamCard key={index} user={user} setMemberToEdit={setMemberToEdit} />
        )
      })}
    </Container>
  );
}

export default App;
