import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from "../actions/auth";

export const LoginPage = ({ startLogin }) => (
    <div className="login-layout">
        <div className='login-layout__box'>
            <h1 className="login-layout__title">Expensify</h1>
            <p>It's time to get your expenses under control.</p>
            <button className="button" onClick={startLogin}>Login with Google</button>
        </div>
    </div>
);

const mapDispatchToProps = (dispatch) => ({
    startLogin: () => dispatch(startLogin())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);
