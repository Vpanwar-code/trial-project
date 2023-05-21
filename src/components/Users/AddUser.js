import React , {useState , useRef} from 'react';
import classes from './Add.module.css';
import Card from '../UI/Card';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';
const AddUser = (props) =>{

    const nameInputRef = useRef();
    const ageInputRef = useRef();   
     const [enteredName,setEnteredName]=useState('');
     const [enteredAge,setEnteredAge]=useState('');
     const [enteredCollege , setEnteredCollege]=useState('');
     const [error, setError]=useState();

    const addUserHandler = event => {
        event.preventDefault();
        if(enteredName.trim().length === 0 || enteredAge.trim().length ===0){
            setError({title : "error in name or age" , message : "please enter valid  age and name "});
            return;
        }
        if(+enteredAge<1){
            setError({title : "error in age", message : "please enter age greater than 1"})
          return;
        }
        console.log(nameInputRef,ageInputRef);
        props.addUserToList(enteredName,enteredAge,enteredCollege);
        
        setEnteredAge('');
        setEnteredName('');
    }

   const nameHandler = (event) =>{
    setEnteredName(event.target.value);
   } 

   const ageHandler = (event) =>{
      setEnteredAge(event.target.value);
   }

   const errorHandler = () =>{
    setError();
   }

   const collegeHandler =  (event) =>{
    setEnteredCollege(event.target.value);
   } 


    return (
        <React.Fragment>
          {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/>}  
        <Card className={classes.input}>
             <form onSubmit={addUserHandler}>
                <label htmlFor='username'>Username</label>
                <input id="username" type="text" value={enteredName} onChange={nameHandler} ref={nameInputRef}/>
                <label htmlFor='age'>Age(Years)</label>
                <input id="age" type="number" value={enteredAge} onChange={ageHandler} ref={ageInputRef}/>
                <label htmlFor='collegeName'>College Name</label>
                <input id="collegeName" type="text" value={enteredCollege} onChange={collegeHandler} />
                <Button type="submit">Add User</Button>
            </form>
        </Card>
        </React.Fragment>
           
    );
}

export default AddUser;