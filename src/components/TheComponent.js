import React, { useEffect, useState } from 'react';
import {auth} from "../config/firebase.js";
import { collection, addDoc , getDocs,doc,setDoc,getDoc , updateDoc } from "firebase/firestore";
import { db } from "../config/firebase.js";

import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';

import { useParams } from 'react-router-dom';    
import CreatePath from './assets/CreatePath.js';
import { PublicPath } from './assets/PublicPath.js';
{/* ADD DOCUMENTS
setDoc(doc(collection(db,"collectionName"),DocumentNameDesired),{=> YOUR DATA <=}) with a specific doc ID (UPDATES)
addDoc(collection(db,"collectionName"),{=> YOUR DATA <=}) with random doc ID (NEW DATA)
    READ DOCUMENTS
(await getDoc(doc(db,"collectionName","documentName"))).data() 
*/}




export function TheComponent(){
  const [data,setData] = useState({}); //the page document : webdev object for example
  const page=useParams().id


    
  useEffect(()=>{
    async function getData(){
      try{
        const dataRef = (await getDoc(doc(db,"pages",page))).data();
        setData(dataRef)
      }catch(err){
        console.error(err)
      }
    }
    getData();

  },[])

  return(
    <main className="page">
      {/*<button onClick={()=>{updateDoc(doc(collection(db,"pages"),"mobile-development"),{steps:steps})}}>hello</button>*/}
      {/*<button onClick={()=>console.log(data)}>hello</button>*/}
      <div className='paths-intro'>
        <h1 className='title text-center'>
          Find the best path for {data.subject} 
        </h1>  
      </div>
      {auth.currentUser &&
      <div className='personal-path d-flex justify-content-sm-center'>
        <h3>
          Based on your personality and personal preferences, we found that the best free way for you to learn  {data.subject} is this way, HAPPY LEARNING!
        </h3>
        <div className='path'>
          <h3>personalised path placeholder</h3>
        </div>
      </div>
      }
        
      <div id="public-path" className=''>
          <div className='d-flex justify-content-sm-center align-self-center'>
              <h5>What people think</h5>
          </div>
        <div className=''>
          {auth.currentUser && 
            <CreatePath steps={data.steps} user={auth?.currentUser?.uid}/>
          }
                 
          <div id="public-path-box">
            <PublicPath publicPaths={data.publicPaths}/>
          </div>
        </div>
      </div>
    </main>
    )
}
//hello