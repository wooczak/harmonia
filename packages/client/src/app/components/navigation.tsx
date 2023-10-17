import React from 'react'

type TNavigationProps = {
  tabs: string[];
}

export default function Navigation({ tabs }: TNavigationProps) {
  return (
    <nav>{tabs?.map(tab => <li className="text-3xl">{tab}</li>)}</nav>
  )
}