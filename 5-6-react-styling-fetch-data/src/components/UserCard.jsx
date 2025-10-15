import React from 'react'
import { Card, Button } from 'react-bootstrap'

function UserCard({ user, onUserClick }) {
    return (
        <Card className="user-card">
            <Card.Body>
                <div className="d-flex align-items-center mb-3">
                    <div className="user-avatar me-3">{user.name.charAt(0)}</div>
                    <div>
                        <Card.Title>{user.name}</Card.Title>
                        <Card.Subtitle className="text-muted">@{user.username}</Card.Subtitle>
                    </div>
                </div>

                <Card.Text>
                    <strong>Email:</strong> {user.email}<br />
                    <strong>Phone:</strong> {user.phone}
                </Card.Text>

                <Button variant="primary" onClick={() => onUserClick(user)}>
                    View Details
                </Button>
            </Card.Body>
        </Card>
    )
}

export default UserCard
