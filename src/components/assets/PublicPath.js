import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';

import { collection, addDoc , getDocs,doc,setDoc,getDoc } from "firebase/firestore";
import { useParams } from 'react-router';
export function PublicPath({publicPaths}) {
  const paths = publicPaths?.map((path)=>JSON.parse(path))
  return (
    paths?.map((path)=>
      (
      <div className='col-md-6 offset-md-4'>

        <Tab.Container>
          <Row>
            <Col sm={2}>
              <div className='btn-group-vertical align-items-center'>
                <button className='btn'><i className="fa fa-solid fa-arrow-up"></i></button>
                {path.voteCount}
                <button className='btn'><i className="fa fa-solid fa-arrow-down"></i></button>
              </div>
            </Col>
            <Col sm={5}>
              <ListGroup>
                {path?.steps?.map((step)=>(
                  <ListGroup.Item
                    className="btn btn-light w-100 rounded-0 shadow-sm border-bottom-0 px-4 py-2 fw-boldbtn-carat-container"
                    aria-controls="collapseExample"
                    aria-expanded={false}  
                    action href={`#${step}`}
                    >
                    {step}
                    <span className={`btn-carat-icon fas fa-caret-right`}></span>
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </Col>
            <Col sm={16}>
              <Tab.Content>
                {path?.resources?.map((resource,index)=>{  
                  <Tab.Pane eventKey={`#${path.steps[index]}`}>
                    {resource}
                  </Tab.Pane>
                })}
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </div>
    ))
    
  );
}