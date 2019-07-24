import React, { useState } from 'react'


export default function MemberForm({ list, setList, memberToEdit, setMemberToEdit, editMember }) {
    const [member, setMember] = useState({ name: '', email: '', role: ''});
   
    useEffect(() => {
        if (memberToEdit) {
            setMember(memberToEdit)
        }
    }, [memberToEdit])

    function handleChange(event) {
        const updatedMember= {...member, [event.target.name]: event.target.value};
        setMember(updatedMember);
    }

    const addPerson = () => {
        setMemberList([...memberList, member])
    }

    function handleSubmit(event) {
        event.preventDefault();
        if (memberToEdit) {
            editMember(member);
            setMemberToEdit(null)
        } else if (
            member.name !=='' &&
            member.email!=='' &&
            member.role !==''
        ) {
            setList ([...list, member])
        }
        setMember({name: '', email: '', role: ''})
    }

    return (
        <form onSubmit={handleSubmit}>
            <fieldset>
                <legend>Add a Team Member</legend>
                <div className='form-group row'>
                    <label for='name' className='form-label'>
                        Name
                    </label>
                    <div className = 'form-input'>
                        <input
                            type='text'
                            className='input-box'
                            name='name'
                            placeholder='Team Member Name'
                            value={member.name}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className='form-group'>
                    <label for='email' className='form-label'>
                        Email
                    </label>
                    <div className = 'form-input'>
                        <input
                            type='email'
                            className='input-box'
                            name='email'
                            placeholder='Team Member Email'
                            value={member.email}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className='form-group row'>
                    <label for='Role' className='form-label'>
                        Role
                    </label>
                    <div className = 'form-input'>
                        <input
                            type='text'
                            className='input-box'
                            name='role'
                            placeholder='Team Member Role'
                            value={member.role}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <button onClick={addPerson} type='submit' className='btn btn-primary'>
                    Submit
                </button>
            </fieldset>
        </form>
    )
}