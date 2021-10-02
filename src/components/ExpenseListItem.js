import React from 'react';
import { Link } from 'react-router-dom';

export default ({description, amount, createdAt, id, dispatch}) => (
    <div>
        <h2>
            <Link to={`/edit/${id}`}>{description}</Link>
        </h2>
        <p>{amount} - {createdAt.format('MMMM Mo')}</p>
    </div>
)