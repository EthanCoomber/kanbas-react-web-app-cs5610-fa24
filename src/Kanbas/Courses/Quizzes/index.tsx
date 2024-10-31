import React, { useState } from 'react';
import { Form, Button, Card, Row, Col, InputGroup } from 'react-bootstrap';

export default function Quizzes() {
  const [quizTitle, setQuizTitle] = useState('');
  const [instructions, setInstructions] = useState('');
  const [quizType, setQuizType] = useState('Graded Quiz');
  const [assignmentGroup, setAssignmentGroup] = useState('ASSIGNMENTS');
  const [shuffleAnswers, setShuffleAnswers] = useState(false);
  const [timeLimit, setTimeLimit] = useState('');
  const [multipleAttempts, setMultipleAttempts] = useState(false);
  const [dueDate, setDueDate] = useState('');
  const [availableFrom, setAvailableFrom] = useState('');
  const [availableUntil, setAvailableUntil] = useState('');

  return (
    <Card className="p-4">
      <Card.Title className="mb-3">Unnamed Quiz</Card.Title>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Quiz Instructions:</Form.Label>
          <Form.Control as="textarea" rows={3} placeholder="Enter instructions here" value={instructions} onChange={(e) => setInstructions(e.target.value)} />
        </Form.Group>

        <Row className="mb-3">
          <Col>
            <Form.Group>
              <Form.Label>Quiz Type</Form.Label>
              <Form.Select value={quizType} onChange={(e) => setQuizType(e.target.value)}>
                <option>Graded Quiz</option>
                <option>Practice Quiz</option>
                <option>Survey</option>
              </Form.Select>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group>
              <Form.Label>Assignment Group</Form.Label>
              <Form.Select value={assignmentGroup} onChange={(e) => setAssignmentGroup(e.target.value)}>
                <option>ASSIGNMENTS</option>
                <option>QUIZZES</option>
                <option>HOMEWORK</option>
              </Form.Select>
            </Form.Group>
          </Col>
        </Row>

        <Form.Group className="mb-3">
          <Form.Check type="checkbox" label="Shuffle Answers" checked={shuffleAnswers} onChange={(e) => setShuffleAnswers(e.target.checked)} />
        </Form.Group>

        <InputGroup className="mb-3">
          <InputGroup.Checkbox checked={Boolean(timeLimit)} onChange={(e) => setTimeLimit(e.target.checked ? '10' : '')} />
          <Form.Control type="number" placeholder="Time Limit" value={timeLimit} onChange={(e) => setTimeLimit(e.target.value)} disabled={!timeLimit} />
          <InputGroup.Text>Minutes</InputGroup.Text>
        </InputGroup>

        <Form.Group className="mb-3">
          <Form.Check type="checkbox" label="Allow Multiple Attempts" checked={multipleAttempts} onChange={(e) => setMultipleAttempts(e.target.checked)} />
        </Form.Group>

        <Row className="mb-3">
          <Form.Label>Assign</Form.Label>
          <Col>
            <Form.Group>
              <Form.Control type="text" placeholder="Everyone" disabled />
            </Form.Group>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col>
            <Form.Group>
              <Form.Label>Due</Form.Label>
              <Form.Control type="date" value={dueDate} onChange={(e) => setDueDate(e.target.value)} />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group>
              <Form.Label>Available from</Form.Label>
              <Form.Control type="date" value={availableFrom} onChange={(e) => setAvailableFrom(e.target.value)} />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group>
              <Form.Label>Until</Form.Label>
              <Form.Control type="date" value={availableUntil} onChange={(e) => setAvailableUntil(e.target.value)} />
            </Form.Group>
          </Col>
        </Row>

        <Button variant="primary" type="submit">
          Save
        </Button>
        <Button variant="secondary" className="ms-2">
          Cancel
        </Button>
      </Form>
    </Card>
  );
}
