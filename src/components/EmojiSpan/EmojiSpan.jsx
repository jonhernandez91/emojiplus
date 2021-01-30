import React from "react";

function EmojiSpan(props) {
  const {
    role = 'img',
    ariaLabel = 'sunglasses emoji',
    children = '😎'
  } = props
  return (
    <span role={role} aria-label={ariaLabel}>
      {children}
    </span>
  );
}

export default EmojiSpan;