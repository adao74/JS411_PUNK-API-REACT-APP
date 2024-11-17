import React from "react";

const LikeButton = ({ clickToLike, isLiked, index }) => {
    const styles = {
        fontSize: '12px',
        backgroundColor: isLiked ? 'pink' : 'transparent'
    };  
  
    return (
    <button
      onClick={ () => clickToLike(index)}
      style={styles}
    >
      <i className="fa fa-thumbs-up"></i>
    </button>
  );
};

export default LikeButton;
