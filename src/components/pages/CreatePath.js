import React, { useEffect, useState } from "react";
import { db } from "../../config/firebase";
import { addDoc, collection, setDoc, doc, updateDoc, arrayUnion } from "firebase/firestore";
import { useParams } from "react-router-dom";
import Select from "react-select";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import { v4 as uuidv4 } from 'uuid';

const CreatePath = ({ refresh,steps, user }) => {
  const options = steps?.map((step) => ({ value: step, label: step }));
  const page = useParams().id; 
  const [path, setPath] = useState([]);
  const [resources, setResources] = useState([]);
  const [step, setStep] = useState("");
  const [resource, setResource] = useState("");
  const [suffix, setSuffix] = useState("");
  const [message,setMessage] = useState("")
  const submitStep = () => {
    if (step !== "") {
      setPath((prev) => [...prev, step]);
    }
    setResources((prev) => [...prev, resource]);
    setStep("");
    setResource("");
  };
  const removeStep = (index) => {
    const updatedPath=[...path];
    const updatedResources=[...resources];
    updatedPath.splice(index,1)
    updatedResources.splice(index,1)
    setPath(updatedPath);
    setResources(updatedResources)
    
  }

  useEffect(() => {
    if (path.length + 1 == 1) {
      setSuffix("first");
    } else if (path.length + 1 == 2) {
      setSuffix("second");
    } else if (path.length + 1 == 3) {
      setSuffix("third");
    } else {
      setSuffix(`${path.length+1}th`);
    }
  }, [path.length]);
  const submitPath = async () => {
    try{
      await updateDoc(doc(db,'pages',page),{publicPaths:arrayUnion({id:uuidv4(),steps:path,resources:resources,voteCount:0,pathBuilder:user})});
      refresh((prev)=>!prev)
      setPath([]);
      setResource([]);
      setStep("");
      setResource("");
      setMessage('path posted successfully');
    }catch(err){
      setMessage('something went wrong');
      console.error(err);
    }
  }
  return (
    <div>
      <div>

        <Form className="adding-path ">
          <Form.Label htmlFor="path"><h6 className="inputLabels">share your path</h6></Form.Label>
          <Select
            value={step}
            options={options}
            isSearchable={true}
            placeholder={`Select your ${suffix} step...`}
            onChange={(e) => {
              setStep(e.value);
              setMessage("")
            }}
          />
          <Form.Group className="mb-3">
            <Form.Label htmlFor="sourceInput"><h6 className="inputLabels">Add your resource</h6></Form.Label>
            <Form.Control value={resource} onChange={(e) => setResource(e.target.value)} id="sourceInput"placeholder={`Add your ${suffix} path's resource`} />
          </Form.Group>
          <div className="d-flex some-gap justify-content-center">
            <Button className="btn btn-success" onClick={submitStep}>Add step</Button>

            {path.length!=0 &&
                <Button className="btn btn-primary" onClick={submitPath}>Submit Path</Button>
              }
          </div>
          <h4 className="text-center">{message}</h4>
          

        </Form>
      </div>
      <div>
        {path.length!=0 &&
          <h5 className="text-center">
            your path
          </h5>
        }
        <Tab.Container id="list-group-tabs-example">
          <Row>
            <Col sm={12}>
              <ListGroup as="ol" numbered className="some-gap">
                {path?.map((step, index) => (
                  <div className="d-flex">
                    <Button variant="danger" onClick={()=>{removeStep(index)}}>
                      <i className="fa fa-solid fa-trash"></i>
                    </Button>
                    <ListGroup.Item  className="btn btn-light w-100 rounded-0 shadow-sm border-bottom-0 px-4 py-2 fw-boldbtn-carat-container"
                    aria-controls="collapseExample"
                    aria-expanded={false}  
                    key={index}
                    action
                    href={`#${step}`}>
                    {step}
                    <span className={`btn-carat-icon fas fa-caret-right`}></span>
                    </ListGroup.Item>
                  </div>
                ))}
              </ListGroup>
            </Col>
            <Col sm={16}>
              <Tab.Content>
                {resources?.map((resource, index) => (
                  <Tab.Pane key={index} eventKey={`#${path[index]}`}>
                    {resource}
                  </Tab.Pane>
                ))}
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </div>
    </div>
  );
};

export default CreatePath;
