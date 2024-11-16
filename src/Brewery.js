import React from 'react';

function Brewery(props) {

    const {brewery, clickToLike, index, liked} = props
    return (
        <>
            <li>
                {Object.entries(brewery).map(([key, value]) => (
                    <ol key={`brew-${key}`}>{key}:{value}</ol>
                ))}
            </li>
        
            <button
                style={{ fontSize: "24px" }} // Corrected "font-size" to "fontSize"
                onClick={() => {
                    console.log(`Button was clicked at index: ${index}`);
                    clickToLike(index);
                }}
            >
                Button to like <i className="fa fa-thumbs-up"></i>
            </button>

            {liked? <p>Liked! <i className="fa fa-thumbs-up"></i></p>: <p></p>}


            {/* <iframe src={brewery.websiteurl}></iframe> */}
        </>
    );
}

export default Brewery;
