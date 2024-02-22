import {auth , googleProvider} from "../config/firebase.js";
import {createUserWithEmailAndPassword, signInWithPopup,signOut, signInWithEmailAndPassword} from "firebase/auth";
import { collection, addDoc , getDocs } from "firebase/firestore";
import { db } from "../config/firebase.js";
import {useState,useEffect} from "react";
import { NavLink } from "react-router-dom";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import InputGroup from 'react-bootstrap/InputGroup';

export function Header(){
  const [load,setLoad] = useState(false)
  const [sign,setSign] = useState(""); 
  const [show, setShow] = useState(false);
  const [users,setUsers] = useState([]);
  const [user,setUser] = useState({});
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function SignUpPopUp(){
      const [registerEmail, setRegisterEmail] = useState(""); 
      const [registerPassword, setRegisterPassword] = useState(""); 
      const [registerFirstName, setRegisterFirstName] = useState(""); 
      const [registerLastName, setRegisterLastName] = useState(""); 
      const [registerDateOfBirth, setRegisterDateOfBirth] = useState(0);
      const createUser = async (email, password, firstName, lastName) => {
        try { 
          await createUserWithEmailAndPassword(auth, email, password);
          const user = auth.currentUser; const userId = user.uid; // Store names in Firestore
          await addDoc(collection(db, "users"), {
            uid: userId,
            firstName: firstName,
            lastName: lastName
          }
          );
          console.log("User created and names stored successfully!"); 
          setLoad(!load);
          if(load==false){
            handleClose();
          }
        }
        catch (error) {
          console.error("Error creating user:", error); 
        }           
      }
      const signUpWithGoogle = async () => {
        try {
          googleProvider.addScope('https://www.googleapis.com/auth/user.birthday.read');
          const userCredential = await signInWithPopup(auth, googleProvider);
          

          const user = userCredential.user;   
          if (user) {
            const name = user.displayName;
            const firstName = user.displayName.split(" ")[0];
            const lastName = user.displayName.split(" ").toSpliced(0, 1).join(" ");
      
            // If consent is granted, user.birthday will be available:
            const dateOfBirth = user.birthday ? new Date(user.birthday.seconds * 1000) : null;
      
            await addDoc(collection(db, "users"), {
              uid: userCredential.user.uid,
              firstName: firstName,
              lastName: lastName,
              //dateOfBirth: dateOfBirth // Store the dateOfBirth if available
            });
          }
      
          setLoad(!load);
          if(load==false){
            handleClose();
          }
        } catch (err) {
          console.error(err);
        }
      };

      return(
        <div id="sign-up-form">
          <div className="mb-3 mt-3">
            <label htmlFor="fname" className="form-label">First name:</label>
              <input type="fname" className="form-control" id="fname" placeholder="Enter first name" name="fname" onChange={(e)=>setRegisterFirstName(e.target.value)}/>
          </div>
          <div className="mb-3 mt-3">
            <label htmlFor="lname" className="form-label">Last name:</label>
              <input type="lname" className="form-control" id="lname" placeholder="Enter last name" name="lname" onChange={(e)=>setRegisterLastName(e.target.value)}/>
          </div>
          <div className="mb-3 mt-3"> 
            <div className="mb-3 mt-3">
              <label htmlFor="date-of-birth">Date of Birth:</label>
              <input type="date" className="form-control" id="date-of-birth" name="date-of-birth"onChange={(e)=>{setRegisterDateOfBirth(e.target.value)}}/>
            </div>
          </div>
          <div className="mb-3 mt-3">
            <label htmlFor="email" className="form-label">Email:</label>
              <input type="email" className="form-control" id="register-email" placeholder="Enter email" name="email" onChange={(e)=>setRegisterEmail(e.target.value)}/>
          </div>
          <div className="mb-3 mt-3">
            <label htmlFor="pwd" className="form-label">Password:</label>
              <input type="password" className="form-control" id="register-pwd" placeholder="Enter password" name="pswd" onChange={(e)=>setRegisterPassword(e.target.value)}/>
          </div>
          <Modal.Footer className="sign-btn">
            <button className="btn btn-success" onClick={()=>createUser(registerEmail,registerPassword,registerFirstName,registerLastName)}>Sign up
            </button>
            <button className="btn btn-success" onClick={signUpWithGoogle}>Sign Up with google</button>  
          </Modal.Footer>
          </div> 
      ) 
  } 
  function SignInPopUp(){
      const [message,setMessage] = useState("");
      const [loginEmail, setLoginEmail] = useState("");
      const [loginPassword, setLoginPassword] = useState("");
      const signIn = async () =>{
        try{
          await signInWithEmailAndPassword(auth,loginEmail,loginPassword);
          setLoad(!load);
          if(load==false){
      handleClose();
    }
        }
        catch(err){
          console.log("wrong email password combination, or the account doesn't exist");
          setMessage("wrong email password combination, or the account doesn't exist") }
        };
      const signInWithGoogle = async () =>{
        try{ 
          await signInWithPopup(auth,googleProvider);
          setLoad(!load);
          if(load==false){
            handleClose();
          }
        }
        catch(err){
          console.error(err);
        }
      }
      return(
        <div id="sign-in-form">
          <div className="mb-3 mt-3">
            <label htmlFor="email" className="form-label">Email:</label>
              <input type="email" className="form-control" id="login-email" placeholder="Enter email" name="email" onChange={(e)=>setLoginEmail(e.target.value)}/>
          </div>
          <div className="mb-3">
            <label htmlFor="pwd" className="form-label">Password:</label>
              <input type="password" className="form-control" id="login-pwd" placeholder="Enter password" name="pswd" onChange={(e)=>setLoginPassword(e.target.value)}/>
          </div>
          <Modal.Footer className="sign-btn">
            <button className="btn btn-success center" onClick={()=>signIn(loginEmail,loginPassword)}>Sign in</button>
            <button className="btn btn-success center" onClick={signInWithGoogle}>Sign in with google</button>
          </Modal.Footer>
            <p>{message}</p>
         </div>
      )
  }
  const userCollections = collection(db,"users")
  const getUsersList = async () =>{
      try{
        const data = await getDocs(userCollections);
        const filteredData = data.docs.map((doc)=>({
          ...doc.data(),
          id:doc.id
        }));
        setUsers(filteredData);
        setUser(filteredData.find((user)=>user.uid==auth?.currentUser?.uid));

      }
      catch(err){
        console.error(err);
      }

    }
  useEffect(()=>{
    getUsersList()  
  }
  ,[load])

  const logOut = async () =>{
    try{
      await signOut(auth);
      setLoad(!load);
      if(load==false){
        handleClose();
      }
    }
    catch(err){
      console.error(err)
    }
  } 


  return( 
    <Navbar expand="lg" className="bg-body-tertiary" id="header">
      <Container fluid>
        <Navbar.Brand href="/" id="website-title">ROUTE TRACER</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav id="middle-section" className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll >
            <NavLink to="/About" className="nav-link">Forum</NavLink>
            <InputGroup>
              <Form.Control
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <Button variant="outline-info"><i className="fa fa-search"></i></Button>
            </InputGroup>
          
          </Nav>
          <Form className="d-flex">
            
            
            <Container fluid className="sign-btn">
              {!auth.currentUser && 
                <>
                  <Button variant="secondary" onClick={()=>{setSign("up");handleShow()}} type="button" className="btn btn-primary active">
                    Sign Up
                  </Button>
                  <Button variant="secondary" onClick={()=>{setSign("in");handleShow()}} type="button" className="btn btn-primary active">Sign In</Button>
                </>
              }
              {auth.currentUser && user?.firstName!=undefined &&
                <div id="profile" className="d-flex d-*-flex align-items-center ">
                  <div id="profile-name" >
                    {user?.firstName+" "+user?.lastName}  
                  </div>
                  <button id="logout-button" className="btn btn-outline-dark .mt-3" onClick={()=>logOut()}>Log out</button>
                </div>
              }
            </Container>
          </Form>
        </Navbar.Collapse>
      </Container>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title id="modal-header">{sign=="up"&&"Sign Up"}{sign=="in"&&"Sign In"}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {sign=="up"&&<SignUpPopUp/>}{sign=="in"&&<SignInPopUp/>}
        </Modal.Body>
      </Modal>
    </Navbar>
  )
}