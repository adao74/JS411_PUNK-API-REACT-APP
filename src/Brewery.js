import React from 'react';

function Brewery(props) {

    const {brewery, clickToLike, index, liked} = props
    return (
        <>
            <div style={{ fontSize: "12px", lineHeight: "1.2", textAlign: "left" }}>
            {Object.entries(brewery).map(([key, value]) => (
                <p key={`brew-${key}`} style={{ margin: "4px 0" }}>
                {key}: {value}
                </p>
            ))}
            </div>
        
            <button
                style={{ fontSize: "12px" }} // Corrected "font-size" to "fontSize"
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
