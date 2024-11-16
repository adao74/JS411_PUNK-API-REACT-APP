import React from 'react';

function Brewery(props) {
    return (
        <>
            <li>
                {Object.entries(props.brewery).map(([key, value]) => (
                    <ol key={key}>{key}:{value}</ol>
                ))}
            </li>
            <button
                style={{ fontSize: "24px" }} // Corrected "font-size" to "fontSize"
                onClick={() => {
                    console.log(`Button was clicked at index: ${props.index}`);
                    props.clickToLike(props.index);
                }}
            >
                Button <i className="fa fa-thumbs-up"></i>
            </button>

            {props.liked? <p>Liked! <i className="fa fa-thumbs-up"></i></p>: <p></p>}


            {/* <iframe src={props.brewery.websiteurl}></iframe> */}
        </>
    );
}

export default Brewery;
