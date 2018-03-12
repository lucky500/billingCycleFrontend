import React from 'react';

export default ({title, small}) => (
    <section className="content-header">
        <h1>{title} <small>{small}</small></h1>
    </section>
);