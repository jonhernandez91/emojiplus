import React from "react";

function EmojiSpan(props) {
  return (
    <span role={props.role} aria-label={props.ariaLabel}>
      {props.children}
    </span>
  );
}

export default EmojiSpan;