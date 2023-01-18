import React,{useState,useEffect} from 'react'
import Input from './Input';
import Option from './Option';
import { useAppContext } from '../context/appContext';

function SearchBoxes() {
    const {getAllData,ActionType,ApplicationType } = useAppContext();

    const [formData, setFormData] = useState({
      logId: "",
      actionType: "",
      applicationType: "",
      creationTimestamp: "",
      creationTimestamp2: "",
      applicationId: "",
    })
    
    useEffect(() => {
          getAllData(formData);
    }, []);

    const handleClear = () => {
      setFormData({
        logId: "",
        actionType: "",
        applicationType: "",
        creationTimestamp: "",
        creationTimestamp2: "",
        applicationId: "",
      })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        getAllData(formData);
        handleClear();
    }
  return (
    <div>
     <form onSubmit={handleSubmit} className="flex gap-1 items-center mb-5 flex-col md:flex-row">
        <Input type={"text"} label={"Log Id"}  identity={"logId"} setFormData={setFormData} formData={formData} /> 
        <Option label={"Action Type"}  identity={"actionType"} values={ActionType} setFormData={setFormData} formData={formData}/>   
        <Option label={"Application Type"}  identity={"applicationType"} values={ApplicationType} setFormData={setFormData} formData={formData} /> 
        <Input type={"date"} label={"From Date"}  identity={"creationTimestamp"} setFormData={setFormData} formData={formData}/>    
        <Input type={"date"} label={"To Date"}  identity={"creationTimestamp2"} setFormData={setFormData} formData={formData}/>    
        <Input type={"text"} label={"Application Id"}  identity={"applicationId"} setFormData={setFormData} formData={formData}/>    
        <button className='bg-blue-600 text-white w-28 h-8 rounded-md'>Search Logger</button>
     </form>
    </div>

  )
}

export default SearchBoxes