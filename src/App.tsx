import { useAtomValue } from 'jotai'
import { Counter } from './components/Counter'
import { ToggleTheme } from './components/ToggleTheme'
import './global.css'
import { isDarkAtom } from './atoms/theme'
import { User } from './components/User'

export function App() {
  const isDark = useAtomValue(isDarkAtom);
  const background = isDark ? 'black' : 'white';
  const color = isDark ? 'white' : 'black';

  return (
    <div className="flex flex-wrap gap-8 min-h-screen" style={{ background, color }}>
      <Counter />
      <ToggleTheme />
      <User />
    </div>
  )
}
