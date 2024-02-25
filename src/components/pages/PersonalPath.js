import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import {auth} from "../../config/firebase.js";

import { collection, addDoc , getDocs,doc,setDoc,getDoc , updateDoc ,arrayUnion, arrayRemove} from "firebase/firestore";
import { db } from '../../config/firebase';
import { useParams } from 'react-router';
import { useEffect, useState } from 'react';

export function PersonalPath({personalPath}){
  const path = personalPath
    return(
      <div className='d-flex justify-content-center align-items-center'>
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
    );
}
