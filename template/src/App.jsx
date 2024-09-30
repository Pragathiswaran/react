import { useState } from 'react'

function App() {

  return (
    <>
      <header className="bg-emerald-700 text-white p-3">
        <nav className='flex justify-around px-4 cus-range:justify-center cus-range:flex-col'>
          <div className='w-1/3 flex justify-start cus-range:justify-center'>
            <h1>Logo</h1>
          </div>
          <div className='flex justify-between w-96 cus-range:flex-col cus-range:justify-center'>
            <div>
              <h1>Home</h1>
            </div>
            <div>
              <h1>About</h1>
            </div>
            <div>
              <h1>Contact</h1>
            </div>
          </div>
          <div className='w-1/3 flex justify-end cus-range:justify-center'>
            <h1>Profile</h1>
          </div>
        </nav>
      </header>
    </>
  )
}

export default App
