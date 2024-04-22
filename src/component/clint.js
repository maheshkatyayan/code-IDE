import React from 'react';
import Avatar from 'react-avatar';

const Client = ({username}) => {
    return (
        <div className="client">
            <Avatar name={username} size={50} round="14px" />
            <h6 className='name1'>kya</h6>
            <Avatar name="mahesh" size={50} round="14px" />
            <h6 className='name1'>mahesh</h6>
            <Avatar name="satyam rathor" size={50} round="14px" />
            <h6 className='name1'>satyam</h6>
            <Avatar name="jyotish katyayan" size={50} round="14px" />
            <h6 className='name1'>jyotish</h6>
            <Avatar name="rahul katyayan" size={50} round="14px" />
            <h6 className='name1'>rahul</h6>
            <span className="userName">{username}</span>
        </div>
    );
};

export default Client;