import React from 'react'

interface ChevronDownIconProps {
  className?: string
}

export const ChevronDownIcon: React.FC<ChevronDownIconProps> = ({
  className
}) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 21 20'
      className={className}
    >
      <path
        fill='currentColor'
        d='M10.75 12.4791c-.1112 0-.2153-.0172-.3125-.0516-.0973-.0345-.1875-.0936-.2709-.1775L6.33329 8.41665c-.15278-.15278-.22916-.34723-.22916-.58334s.07638-.43055.22916-.58333c.15278-.15278.34722-.22917.58334-.22917.23611 0 .43055.07639.58333.22917L10.75 10.5 14 7.24998c.1527-.15278.3472-.22917.5833-.22917.2361 0 .4305.07639.5833.22917.1528.15278.2292.34722.2292.58333 0 .23611-.0764.43056-.2292.58334L11.3333 12.25c-.0833.0833-.1736.1425-.2708.1775-.0973.035-.2014.0522-.3125.0516Z'
      />
    </svg>
  )
}
