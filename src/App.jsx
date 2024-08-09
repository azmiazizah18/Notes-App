
import { Routes, Route } from 'react-router-dom'
import { Home }  from './components/Home'
import { Create } from './components/CreatePage'
import { Update } from './components/UpdatePage'

import './styles/main.css'

function App() {

  return (
    <>
    <div className='relative'>
      <div className='absolute top-0 left-1/2 -translate-x-1/2 w-screen px-4 lg:px-20 py-4 sm:py-10'>
        {/* card */}
        <div className='card bg-white shadow-xl'>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/create' element={<Create/>} />
            <Route path='/update/:id' element={<Update/>} />
          </Routes>

          </div>
          {/* card */}
        </div>
      </div>
    </>
  )
}

export default App
