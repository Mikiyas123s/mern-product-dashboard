import React, { useEffect } from 'react';
import { useParams,useNavigate } from 'react-router-dom'; 


const UpdateProduct = () => {

    

    const[name,setName]=React.useState("");
    const[price,setPrice]=React.useState("");
    const[category,setCategory]=React.useState("");
    const[company,setCompany]=React.useState("");

    const params= useParams();
    const navigate=useNavigate();


    useEffect(()=>{
        
        getProductDetails();

    },[])

    const getProductDetails = async()=>{
        console.warn(params);
        let result = await fetch(`http://localhost:5009/product/${params.id}`);
        result = await result.json();
        setName(result.name);
        setPrice(result.price);
        setCategory(result.category);
        setCompany(result.company);
    }

const updateProduct= async () => {
    console.warn(name,price,category,company);
    let result = await fetch(`http://localhost:5009/product/${params.id}`,{
        method:'Put',
        body:JSON.stringify({name,price,category,company}),
        headers:{
            'Content-Type':"application/json"
        }
    });
   result= await result.json();
   console.warn(result);
   navigate('/')
    
}


  return (
    <div className='product'>
        <h1>Update Product</h1>

        <input className='inputBox' type='text' placeholder='enter product name'
          onChange={(e)=>setName(e.target.value)} value={name}/>


        <input className='inputBox' type='text' placeholder='enter product price'
         onChange={(e)=>setPrice(e.target.value)} value={price} />
              <input className='inputBox' type='text' placeholder='enter product category'
          onChange={(e)=>setCategory(e.target.value)} value={category}/>
          <input className='inputBox' type='text' placeholder='enter product company'
          onChange={(e)=>setCompany(e.target.value)} value={company}/>
           
        <button onClick={updateProduct}  className='appButton'>Update Product</button>
    </div>
  )
}

export default UpdateProduct