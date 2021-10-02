// Higher Order Component (HOC) - A component (HOC) that renders another component.
// Reuse code
// Render hijacking
// Prop manipulation
// Abstract state

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The info is: {props.isAuthenticated ? props.info : 'sorry this is priviledged information.'}</p>
    </div>
)

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            { props.isAdmin && <p>This is private info, please don't share.</p> }
            <WrappedComponent {...props}></WrappedComponent>
        </div>
    );
};

const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            { props.isAuthenticated ? <WrappedComponent {...props}/> : <p>Please login to view this page.</p>}
        </div>
    )
}

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

// ReactDOM.render(<AdminInfo isAdmin={false} info='my name is Shane Kobylecky'/>, document.getElementById(`app`))
ReactDOM.render(<AuthInfo isAuthenticated={false} info='my name is Shane Kobylecky'/>, document.getElementById(`app`));