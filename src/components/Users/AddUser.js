import React , {useState} from 'react';
import classes from './Add.module.css';
import Card from '../UI/Card';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';
const AddUser = (props) =>{
        
     const [enteredName,setEnteredName]=useState('');
     const [enteredAge,setEnteredAge]=useState('');
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
        props.addUserToList(enteredName,enteredAge);
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


    return (
        <React.Fragment>
          {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/>}  
        <Card className={classes.input}>
             <form onSubmit={addUserHandler}>
                <label htmlFor='username'>Username</label>
                <input id="username" type="text" value={enteredName} onChange={nameHandler}/>
                <label htmlFor='age'>Age(Years)</label>
                <input id="age" type="number" value={enteredAge} onChange={ageHandler}/>
                <Button type="submit">Add User</Button>
            </form>
        </Card>
        </React.Fragment>
           
    );
}

export default AddUser;