import { useNavigate } from 'react-router-dom';
import { getData } from '../../context/DataContext'

const Category = () => {
    // const {categoryOnlyData}=getData();
  const navigate=useNavigate();

  const {data} = getData();

 const getUniqueCategory=(data,property)=>{
        let newVal= data?.map((curElem)=>{
            return curElem[property]
        })
        newVal=[...new Set(newVal)]
        return newVal;
    }

    const categoryOnlyData = getUniqueCategory(data,"category");

  return (
    <div className='bg-black'>
<div className='max-w-7xl mx-auto gap-4 flex flex-wrap items-center  justify-center md:justify-around py-7 px-4'>
    {categoryOnlyData?.map((item,index)=>{
        return (
            <div key={index}>
               <button onClick={()=>navigate(`category/${item}`)}
               className='uppercase bg-gradient-to-r from-orange-500 to-red-500 text-white px-3 py-1 rounded-md cursor-pointer'>{item}</button>
            </div>
        )
    })}
</div>
    </div>
  )
}

export default Category