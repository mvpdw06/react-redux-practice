import React, { Component } from 'react';

const Timer = ({
    timespan    
}) => (
    <div>
        <h2>This is a Timer</h2>
        <h3>{timespan}</h3>
    </div>
);

module.exports = Timer;