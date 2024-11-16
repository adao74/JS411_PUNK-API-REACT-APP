import React from 'react';

function Brewery(props) {
    return (
        <>
            <li>
                {Object.entries(props.brewery).map(([key, value]) => (
                    <ol key={key}>{value}</ol>
                ))}
            </li>

            {/* <iframe src={props.brewery.websiteurl}></iframe> */}
        </>
    );
}

export default Brewery;
