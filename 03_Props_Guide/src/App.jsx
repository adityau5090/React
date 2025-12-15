import BasicProps from './components/BasicProps'
import ComplexProps from './components/ComplexProps'
import RefProps from './components/RefProps'
import ThemeToggler, { ThemeProvider } 
from './components/ThemeToggler'

import ChildrenProps from './components/ChildrenProps'
// import { useContext } from 'react'

function Navigation () {
  // const isDark = true;
    
    const sections = [
        {id: 'basic',label: 'Basics Props', icon: '📦'},
        {id: 'ref',label: 'Ref Props', icon: '🐵'},
        {id: 'children',label: 'Children Props', icon: '👶'},
        {id: 'complete',label: 'Complete Props', icon: '✔️'},
        {id: 'theme',label: 'Theme Props', icon: '🎡'} 
    ]

    return (
      <nav className='sticky top-0 z-50 shadow-md'>
        <div>
          <div className='flex justify-center items-center gap-2'>
            {sections.map((section) => (
              <button key={section.id}
                className='px-3.5 py-1.5 bg-blue-600 rounded-lg font-medium text-white my-2 cursor-pointer hover:bg-blue-700'>
                <span>{section.icon}</span>
                {section.label}
              </button>
            ))}
          </div>
        </div>
      </nav>
    )
}

function AppContent () {
  const isDark = true
  // const {isDark} = useTheme()
  return (
    <div className={`min-h-screen bg-gray-900`}>
      <Navigation />
      <div className='container mx-auto px-4 py-8'>
        <header 
        className={`text-center mb-12 transition-colors ${ isDark ? "text-white" : "text-gray-800" }`}>
          <h1 className='text-4xl  font-bold mb-4'>React Props Explain</h1>
          <p className={`text-xl ${isDark ? "text-gray-300" : "text-gray-600"}`}>A comphrensive guide to understanding props in React</p>
        </header>
        <div className='space-y-8'>
          <div id='basic' className='scroll-mt-200'>
            <BasicProps />
          </div>  
          
          <div id='basic' className='scroll-mt-200'>
            <ChildrenProps />
          </div>
          
          <div id='basic' className='scroll-mt-200'>
            <ComplexProps />
          </div>

          <div id='basic' className='scroll-mt-200'>
            <RefProps />
          </div>

          <div id='basic' className='scroll-mt-200'>
            <ThemeToggler />
          </div>
        </div>
      </div>
    </div>
  )
}
function App() {
  // const [count, setCount] = useState(0)

  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  )
}

export default App
