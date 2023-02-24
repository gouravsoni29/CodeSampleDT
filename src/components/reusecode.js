{
    vehicleData.map((data)=>{
       {/* console.log("id",data.id) */}
       {/* <h1 key={data.id} className='text-center'>{data.id}</h1> */}
      return (
       <h1 key={data.id} className='text-center'>{data.wheel_1}</h1>
       
      )
   })
  }