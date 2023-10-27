import { CgProfile } from 'react-icons/cg'
import { FiSettings } from 'react-icons/fi'

export const Heading = {
  AppName: 'Harmonia'
}

export const Routes = {
  HOMEPAGE: '/',
  PATIENTS: '/patients',
  CALENDAR: '/calendar',
  NOTES: '/notes',
  CHAT: '/chat',
  ACCOUNT: '/acccount',
  SETTINGS: '/settings'
}

export const NavigationTabs = {
  [Routes.PATIENTS]: 'Pacjenci/Pacjentki',
  [Routes.CALENDAR]: 'Kalendarz',
  [Routes.NOTES]: 'Notatki',
  [Routes.CHAT]: 'Czat',
  [Routes.ACCOUNT]: <CgProfile />,
  [Routes.SETTINGS]: <FiSettings />
}
