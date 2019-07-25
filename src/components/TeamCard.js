import React from 'react'
import { Container, Header, Segment } from 'semantic-ui-react'

export default function TeamCard({ user, setMemberToEdit}) {

    return (
        <Container className='team-card'>
            <Header>{user.name}</Header>
            <Segment>
                <strong>Email: </strong>{user.email}
            </Segment>
            <Segment>
                <strong>Role: </strong>{user.role}
            </Segment>
            <button onClick={() => setMemberToEdit(user)}>Edit</button>
        </Container>
    )
} 