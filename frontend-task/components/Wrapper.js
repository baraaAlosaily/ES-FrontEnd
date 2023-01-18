import React from 'react'
import SearchBoxes from './SearchBoxes'
import TableWrapper from './TableWrapper'
import Title from './Title'

function Wrapper() {
  return (
    <>
     <div className='ml-5 mr-5 mt-5'>
       <Title/>
       <SearchBoxes/>
       <TableWrapper/> 
    </div>
    </>
  )
}

export default Wrapper