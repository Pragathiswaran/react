import React from 'react';
import AppleIcon from '@mui/icons-material/Apple';
import SearchIcon from '@mui/icons-material/Search';
import WorkOutlineRoundedIcon from '@mui/icons-material/WorkOutlineRounded';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import products from './contents/products';

function App() {
  return (
    <>
      <header className="relative">
        <nav className="w-full px-64 py-3 bg-transparent p-3 z-50">
          <ul className="flex justify-between text-xs text-neutral-700 hover:text-black">
            <li><a href="/"><AppleIcon style={{fontSize : '15px'}}/></a></li>
            <li><a href="/">Store</a></li>
            <li><a href="/">Mac</a></li>
            <li><a href="/">iPad</a></li>
            <li><a href="/">iPhone</a></li>
            <li><a href="/">Watch</a></li>
            <li><a href="/">AirPods</a></li>
            <li><a href="/">Tv & Home</a></li>
            <li><a href="/">Entertainment</a></li>
            <li><a href="/">Accessories</a></li>
            <li><a href="/">Support</a></li>
            <li><a href="/"><SearchIcon style={{fontSize : '15px'}}/></a></li>
            <li><a href="/"><WorkOutlineRoundedIcon style={{fontSize : '15px'}}/></a></li>
          </ul>
        </nav>

        <nav className="sticky text-center text-sm py-4 p-4 bg-white text-black z-10 ">
          <p>Get up to 24 months No Cost EMI on all iPhone models from most leading banks.‡ <a href='/' className='text-blue-700'> Shop Now <ChevronRightRoundedIcon /></a></p>
        </nav>
      </header>
      <section className='px-36 w-full'>
      <aside className="flex justify-between mt-20">
        <div className='w-3/5 text-5xl font-semibold font-sans leading-tight tracking-tight inline'>
          <article>Store.<span className='text-neutral-500'>The best way to buy the products you love.</span></article>
        </div>
        <div>
          <div>
            <div className='flex'>
              <div className='mr-2'>
                {/* <img alt='img'/> */}
                <AccountCircleRoundedIcon />
              </div>
              <div>
                <h5 className='text-normal font-bold'>Need Shopping help?</h5>
                <a className='text-sm text-blue-600'>Ask a Specialist</a>
              </div>
            </div>
            <div className='flex mt-5'>
              <div className='mr-2'>
                {/* <img alt='img'/> */}
                <LocationOnOutlinedIcon />
              </div>
              <div>
                <h5 className='text-normal font-bold'>Vist an Apple Store</h5>
                <a className='text-xs text-blue-600'>Find one near you</a>
              </div>
            </div>
          </div>
        </div>
       {/* <img src='https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-13-mac-nav-202310?wid=400&hei=260&fmt=png-alpha&.v=1696964122666'/> */}
      </aside>
      <aside className='mt-20 flex gap-2'>
        {
          products.map((item,index)=>(
            <div className='w-36' key={index}>
          <img src={item.image}
            height='130px' width='130px'/>
          <h5 className='text-center mt-3'>{item.name}</h5>
        </div>
          ))
        }
      </aside>
      <aside className='mt-20'>
        <div className='text-2.5xl font-semibold font-sans'>
          <h3>The latest.<span>Take a look at what's new right now.</span></h3>
        </div>
        <div className='mt-3 w-1/2 inline-block '>
        <div className='absolute p-6'>
          <h5>hello</h5>
          <h2>NewPhoria</h2>
          <h4>From ₹3320.</h4>
        </div>
            <img className='w-4/6 h-4/5 rounded-3xl tease-in duration-300' 
                 src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-40-macbook-air-202402?wid=800&hei=1000&fmt=p-jpg&qlt=95&.v=1707259289595"
            />
        </div>
      </aside>
      </section>
      {/*  */}
      
    </>
  );
}

export default App;
