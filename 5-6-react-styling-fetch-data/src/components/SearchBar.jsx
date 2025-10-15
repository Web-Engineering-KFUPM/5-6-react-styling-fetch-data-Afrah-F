import React from 'react'
import { Form } from 'react-bootstrap'

function SearchBar({ onSearch }) {
    return (
        <div className="mb-4">
            <Form.Control
                type="text"
                placeholder="Search users by name..."
                onChange={(e) => onSearch(e.target.value)}
            />
        </div>
    )
}

export default SearchBar
