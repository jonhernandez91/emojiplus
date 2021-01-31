import React from "react";

export const EMOJISPAN_DEFAULT = {
  role: "img",
  ariaLabel: "sunglasses emoji",
  children: "😎",
};
function EmojiSpan(props) {
  const {
    role = EMOJISPAN_DEFAULT.role,
    ariaLabel = EMOJISPAN_DEFAULT.ariaLabel,
    children = EMOJISPAN_DEFAULT.children,
  } = props;
  return (
    <span role={role} aria-label={ariaLabel}>
      {children}
    </span>
  );
}

export default EmojiSpan;
