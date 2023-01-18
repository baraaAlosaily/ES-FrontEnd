import React from 'react'

function Input({type,value,label,identity,setFormData,formData}) {
  return (
    <>
    <label className='Poppins text-sm font-semibold' htmlFor={identity}>{label}</label>
    <input className='border-2 border-black rounded-md w-[7rem] h-[2rem] ml-1 mr-1 font-semibold text-xs' id={identity} type={type} value={formData.identity} onChange={e=>setFormData({...formData,[identity]:e.target.value})}/>
    </>
  )
}

export default Input