'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import { CgProfile } from 'react-icons/cg'
import { FiSettings } from 'react-icons/fi'
import { AiOutlineHome } from 'react-icons/ai'
import { Routes } from '../constants'

type TNavigationProps = {
  tabs: string[]
}

export default function Navigation({ tabs }: TNavigationProps) {
  const pathname = usePathname()

  const { HOMEPAGE, PATIENTS, ACCOUNT, SETTINGS } = Routes

  return (
    <div className="flex h-[5rem]">
      <h1 className="font-semibold text-4xl leading-[5rem] hover:text-yellow-400 duration-200 ease-in-out">
        <Link href={HOMEPAGE}>Harmonia</Link>
      </h1>
      <nav className="flex items-center grow">
        <ul className="flex gap-10 w-full justify-end items-center">
          {pathname !== HOMEPAGE && (
            <Link href={HOMEPAGE}>
              <AiOutlineHome size={20} />
            </Link>
          )}
          {tabs?.map((tab, index) => (
            <li key={index}>
              <Link href={PATIENTS}>{tab}</Link>
            </li>
          ))}
          <li>
            <Link href={ACCOUNT}>
              <CgProfile className="" />
            </Link>
          </li>
          <li>
            <Link href={SETTINGS}>
              <FiSettings />
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}
