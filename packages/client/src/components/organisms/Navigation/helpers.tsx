import Link from 'next/link'
import { NavTabs } from './Navigation'

export function renderTabs(tabs: NavTabs) {
  return Object.entries(tabs)?.map(([href, tabName], index) => (
    <li key={index}>
      <Link href={href}>{tabName}</Link>
    </li>
  ))
}
