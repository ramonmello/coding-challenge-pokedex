import * as React from "react";

interface SendIconProps {
  className?: string;
}

export const SendIcon: React.FC<SendIconProps> = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 20 20"
      className={className}
    >
      <path
        fill="currentColor"
        d="M16.5 10.7708 3.66667 16.1875c-.27778.1111-.54167.0867-.79167-.0733s-.375-.3925-.375-.6975V4.58333c0-.30555.125-.53805.375-.6975.25-.15944.51389-.18388.79167-.07333L16.5 9.22917c.3472.15278.5208.40972.5208.77083 0 .3611-.1736.6181-.5208.7708ZM4.16667 14.1667 14.0417 10 4.16667 5.83333V8.75l5 1.25-5 1.25v2.9167Z"
      />
    </svg>
  );
};
