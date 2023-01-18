import React from 'react'

export default function Option({label,identity,values,setFormData,formData}) {
  return (
    <>
    <label htmlFor={identity}>{label}</label>
      <select className='border-2 border-black rounded-md w-[10rem] h-[2rem] ml-1 mr-1 font-semibold text-xs' name={identity} id={identity} onChange={e=>setFormData({...formData,[identity]:e.target.value})}>
      {
      values.map((value,index)=>{
        return (
          <option className='Poppins font-semibold text-xs' key={index} value={value}>{value}</option>
        )
      }
      )
    }
    </select>
   </>
  )
}
