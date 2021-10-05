import React from 'react';
import { Link } from 'react-router-dom';
import numeral from 'numeral';

export default ({ description, amount, createdAt, id }) => (
    <div>
        <h2>
            <Link to={`/edit/${id}`}>{description}</Link>
        </h2>
        <p>
            { numeral(amount / 100).format('$0,0.00') } 
             - 
            { createdAt.format('MMMM Mo') }
        </p>
    </div>
)