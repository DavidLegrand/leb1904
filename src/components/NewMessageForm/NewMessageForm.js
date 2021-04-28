import React, { useState } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";
import { useSocket } from 'contexts/Socket'

const NewMessageForm = () => {
  const [messageText, setMessageText] = useState('')
  const socket = useSocket()

  const handleSubmit = event => {
    event.preventDefault();

    // Modifier mon store

    // Emettre le message sur la socket
    socket.emit('send', { conversation: null, message: messageText })
    setMessageText('')
  }

  return <Form onSubmit={handleSubmit}>
    <Form.Group>
      <InputGroup>
        <Form.Control
          required
          value={messageText}
          onChange={event => setMessageText(event.target.value)}
        />
        <InputGroup.Append>
          <Button type="submit">Envoyer</Button>
        </InputGroup.Append>
      </InputGroup>
    </Form.Group>
  </Form>;
};

export default NewMessageForm;
