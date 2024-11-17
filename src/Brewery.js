import React from 'react';
import LikeButton from './LikeButton';

function Brewery(props) {

    const {brewery, clickToLike, index, liked} = props

    const isLiked = liked.includes(index)

    return (
        <>
            <div style={{ fontSize: "12px", lineHeight: "1.2", textAlign: "left" }}>
            {Object.entries(brewery).map(([key, value]) => (
                <p key={`brew-${key}`} style={{ margin: "4px 0" }}>
                {key}: {value}
                </p>
            ))}
            </div>

            <LikeButton clickToLike={clickToLike} isLiked={isLiked} index={index}></LikeButton>

            {/* <button
                style={{ fontSize: "12px", backgroundColor: isLiked? "pink": "transparent" }}
                onClick={() => {
                    console.log(`Button was clicked at index: ${index}`);
                    clickToLike(index);
                }}
            >
                Button to like <i className="fa fa-thumbs-up"></i>
            </button> */}

            {/* <iframe src={brewery.websiteurl}></iframe> */}
        </>
    );
}

export default Brewery;
