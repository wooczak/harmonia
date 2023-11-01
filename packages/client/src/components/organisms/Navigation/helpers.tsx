import Link from 'next/link'
import { renderTabsFuncArgs } from './Navigation'

export function renderTabs({ renderHomePageIcon, tabs }: renderTabsFuncArgs) {
  return Object.entries(tabs)
    ?.filter(([href, tabName]) => (renderHomePageIcon ? href !== '/' : [href, tabName]))
    ?.map(([href, tabName], index) => (
      <li key={index}>
        <Link href={href}>{tabName}</Link>
      </li>
    ))
}
