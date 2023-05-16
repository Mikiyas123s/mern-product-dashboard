import React from 'react'

const AddProduct = () => {

    const[name,setName]=React.useState("");
    const[price,setPrice]=React.useState("");
    const[category,setCategory]=React.useState("");
    const[company,setCompany]=React.useState("");
    const[error,setError]=React.useState("false");

const addProduct= async () => {

   console.warn(!name);
   if(!name || !price || !category || !company) {

    setError(true);
    return false;
   }



    console.warn(name,price,category,company);
    const userId=JSON.parse(localStorage.getItem('user'))._id;
    const result= await fetch("http://localhost:5009/add-product",{
        method:'post',
        body:JSON.stringify({name,price,category,company,userId}),
        headers:{
            "Content-Type":"application/json"
        }
    });
    result = await result.json();
    console.warn(result);
    
}


  return (
    <div className='product'>
        <h1>Add Product</h1>

        <input className='inputBox' type='text' placeholder='enter product name'
          onChange={(e)=>setName(e.target.value)} value={name}/>

       {error && !name && <span className='invalid'>Enter Valid Name</span>}
        <input className='inputBox' type='text' placeholder='enter product price'
         onChange={(e)=>setPrice(e.target.value)} value={price} />
           {error && !price && <span className='invalid'>Enter Valid Price</span>}
        <input className='inputBox' type='text' placeholder='enter product category'
          onChange={(e)=>setCategory(e.target.value)} value={category}/>
            {error && !category && <span className='invalid'>Enter Valid category</span>}
        <input className='inputBox' type='text' placeholder='enter product company'
          onChange={(e)=>setCompany(e.target.value)} value={company}/>
            {error && !company && <span className='invalid'>Enter Valid company</span>}

        <button onClick={addProduct}  className='appButton'>Add Product</button>
    </div>
  )
}

export default AddProduct