import * as React from 'react'

interface ArrowIconProps {
  className?: string
}

export const ArrowIcon: React.FC<ArrowIconProps> = ({ className }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      className={className}
    >
      <path
        fill='currentColor'
        d='m7.825 13 4.9 4.9c.2.2.296.4333.288.7-.008.2667-.1123.5-.313.7-.2.1833-.4333.2793-.7.288-.2667.0087-.5-.0873-.7-.288l-6.6-6.6c-.1-.1-.171-.2083-.213-.325-.042-.1167-.06266-.2417-.062-.375 0-.1333.021-.2583.063-.375.042-.1167.11267-.225.212-.325l6.6-6.60001c.1833-.18334.4127-.275.688-.275.2753 0 .5127.09166.712.275.2.2.3.43766.3.713 0 .27533-.1.51266-.3.712L7.825 11H19c.2833 0 .521.096.713.288.192.192.2877.4293.287.712 0 .2833-.096.521-.288.713-.192.192-.4293.2877-.712.287H7.825Z'
      />
    </svg>
  )
}
