import React from 'react'
import Header from '../Components/Header'
import Newsletter from '../Components/Newsletter'
import Actions from '../Components/Actions'

const Home = () => {
  return (
    <>
    <section className='m-0'>
        <Header/>
    </section>
    <section className='bg-slate-200 p-4 flex justify-center'>
        <Actions/>
    </section>
    <section className='flex justify-center m-5'>
      <Newsletter/>
        
    </section>
    </>
  )
}

export default Home