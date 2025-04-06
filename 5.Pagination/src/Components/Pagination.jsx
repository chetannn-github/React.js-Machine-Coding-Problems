import React, { useEffect, useState } from 'react'

function Pagination() {
  let [currentPage, setCurrentPage] = useState(1);
  let [currentPageData, setCurrentPageData] = useState([]);

  let fetchData = async () =>{
    let res = await fetch(`https://jsonplaceholder.typicode.com/posts?_page=${currentPage}&_limit=10`)
    let data = await res.json()
    setCurrentPageData(data);
    console.log(data);
  }

  useEffect(()=>{fetchData()},[currentPage])


  return (
    <>
    <div style={{display:"flex" , backgroundColor:"lightblue",}}>
      {currentPage}
      {currentPageData.length>0 && currentPageData.map((item) =>(
        <div key={item.id} style={{border:"1px solid black", margin:"10px", padding:"10px",width:"500px"}}>
          <div>{item.title}</div>
          <div>{item.body}</div>
        </div>
      ))}

      
    </div>
    <div>
        <button onClick={()=>{setCurrentPage(currentPage-1)}} disabled={currentPage===1}>Prev</button>
        {[1,2,3,4,5,6,7,8,9,10].map((item) =>(
          <button key={item} onClick={()=>{setCurrentPage(item)}}>{item}</button>
        ))
        }
         
        <button onClick={()=>{setCurrentPage(currentPage+1)}} disabled={currentPage===10}>Next</button>
    </div>
    </>
  )
}

export default Pagination