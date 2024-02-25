import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import {auth} from "../../config/firebase.js";

import { collection, addDoc , getDocs,doc,setDoc,getDoc , updateDoc ,arrayUnion, arrayRemove} from "firebase/firestore";
import { db } from '../../config/firebase';
import { useParams } from 'react-router';
import { useEffect, useState } from 'react';

export function PersonalPath({page,userId}){
  const [user,setUser]=useState("")
  const [path,setPath]=useState("")
  const getUser = async () =>{
    try{
      const data = await getDocs(collection(db,"users"));
      const filteredData = data.docs.map((doc)=>({
        ...doc.data(),
        id:doc.id
      }));
      setUser(filteredData.find((user)=>user.uid==auth?.currentUser?.uid));
      console.log(user)
    }
    catch(err){
      console.error(err);
    }
  }
  
  useEffect(()=>{
      getUser();
      setPath(user.personalPaths[page])
    },[])
    return(
    <div className='d-flex justify-content-center align-items-center'>
      <div className='btn-group-vertical align-items-center'>
        <button className='btn'>
          <i className="fa fa-solid fa-arrow-up"></i>
        </button>
        {path.voteCount}
        <button className='btn'><i className="fa fa-solid fa-arrow-down"></i></button>
        </div>
        <div>
          <ListGroup>
            {path?.steps?.map((step)=>(
            <ListGroup.Item
              className="btn text-center btn-light w-100 rounded-0 shadow-sm border-bottom-0 px-4 py-2fw-boldbtn-carat-container"
              aria-controls="collapseExample"
              aria-expanded={false}  
              action href={`#${step}`}
              >
              {step}
              <span className={`btn-carat-icon fas fa-caret-right`}></span>
            </ListGroup.Item>
            ))}
          </ListGroup>
          <Tab.Content>
            {path?.resources?.map((resource,index)=>{  
              <Tab.Pane eventKey={`#${path.steps[index]}`}>
                {resource}
              </Tab.Pane>
            })}
          </Tab.Content>                   
        </div>
    </div>
    );
}