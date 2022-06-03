    import React, { useEffect, useState } from 'react'
    import NavHome from '../home/NavHome'
    import Card from 'react-bootstrap/Card'


    import NoteService from '../../services/NoteService'

    const ListNote = () => {

        const [notes, setNotes] = useState([])

        useEffect(() => {
            getNoteAll()
        }, [])

        const getNoteAll = async () => {
            const result = await NoteService.getAll()
            console.log(result.data)
            setNotes(result.data)
        }

        return (

            <div className='container'>
                <NavHome></NavHome>
                <center>
                    {notes.map((note, index) => {

                        return (

                            <div key={note._id}>
                                <br></br>
                                <Card border="dark" style={{ width: '20rem' }}>
                                    <Card.Body key={note._id}>
                                        <Card.Text>
                                        {note.content}
                                        </Card.Text>
                                        <footer className="blockquote-footer">
                                            By: <cite title="Source Title">{note.author}</cite>
                                        </footer>
                                    </Card.Body>
                                </Card>
                            </div>

                        )
                    })}
                </center>
            </div>
        )
    }

    export default ListNote;