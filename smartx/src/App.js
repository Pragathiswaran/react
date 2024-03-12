
import './App.css';

function App() {
  return (
    <>
    <nav className='fixed flex justify-between w-full px-14 py-4 text-xl text-white bg-slate-600'>
      <div>ShopX</div>
      <div className='w-[50%]'>
        <div className='flex justify-around '>
          <a href='#'>Home</a>
          <a href='#'>About</a>
          <a href='#'>Blogs</a>
          <a href='#'>Contact</a>
          <a href='#'><span className="material-symbols-outlined">account_circle</span></a>
        </div>
      </div>
    </nav>
    </>
  );
}

export default App;
