import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import NavHome from '../home/NavHome'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import NoteService from '../../services/NoteService'

const AddNote = () => {
    let navigate = useNavigate();

    const [note, setNote] = useState({
        content: '',
        author: '',
    });

    //Destructuration of object
    const { content, author} = note

    //Function set to state Note
    const onInputChange = e => {
        setNote({ ...note, [e.target.name]: e.target.value })
    }

    //Add new note
    const onSubmit = async e => {
        e.preventDefault()
        await NoteService.create(note)
        navigate('/note/list', {replace: true});
    }

    return (
        <div className='container'>
            <NavHome></NavHome>
            <br></br>
            <center>
                <Card border="dark" style={{ width: '22rem' }}>
                    <Card.Body>
                        <Card.Title>New Note</Card.Title>
                        <Card.Text>
                            <Form onSubmit={e => onSubmit(e)}>
                                <Form.Group className="mb-3">
                                    <Form.Text className="text-muted">
                                        Write the content
                                    </Form.Text>
                                    <Form.Control type="text" placeholder="" name="content" value={content} onChange={e=> onInputChange(e)}/>
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Text className="text-muted">
                                        Write the author
                                    </Form.Text>
                                    <Form.Control type="text" placeholder="" name="author" value={author} onChange={e=> onInputChange(e)}/>
                                </Form.Group>
                                <Button variant="dark" type="submit">
                                    Saved
                                </Button>
                            </Form>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </center>
        </div>
    )
}
export default AddNote