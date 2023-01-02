
import React  from 'react'
import {useState} from 'react';
// import {Routes, Route, useNavigate} from 'react-router-dom';
import './Contact.css';
import { VscHome} from "react-icons/vsc";
// import { themeContext } from "../../Context";
import SearchBar from './SearchBarc';
import { contactList } from './ContactList';
import {Switch, Route,useHistory} from 'react-router-dom';

const Contact = () => {
    // const theme = useContext(themeContext);
    // const darkMode = theme.state.darkMode;
    const [inputarr,setInputarr] = useState([])
    const [openD, setOpenD] = useState("false");
    const [openC, setOpenC] = useState("false");
    const [searchKey, setSearchKey] = useState('');
    const [contacts, setContacts] = useState(contactList); 
    
    const [inputdata,SetInputdata] = useState({name: "" , phonenumber: "" , email: "" })
    const hanldleOpenD=()=>{
        setOpenD(!openD);
    }
    const hanldleOpenC=()=>{
        setOpenC(!openC);
    }

    let history = useHistory();
    const navigateHome = () => {
      history.push("/home");
      };
    

    const handleSearchBar = (e) => {
        e.preventDefault();
        handleSearchResults();
      };
    
      // Search for blog by category
      const handleSearchResults = () => {
        const allContacts = contactList;
        const filteredContacts = allContacts.filter((contact) =>
          contact.name.toLowerCase().includes(searchKey.toLowerCase().trim())
        );
        setContacts(filteredContacts);
      };
    
      // Clear search and show all contacts
      const handleClearSearch = () => {
        setContacts(contactList);
        setSearchKey('');
      };
    function changehandle(e) {

        SetInputdata({...inputdata, [e.target.name]: e.target.value })
}
let {name, phonenumber, email} = inputdata;
    function changhandle() {
        setInputarr([...inputarr, {name,phonenumber, email  }])
        
        SetInputdata({name: "", phonenumber: "", email:""})
    }
    let delethandle =(i)=>{
        let newdataArr=[...inputarr]
        newdataArr.splice(i,1)
        setInputarr(newdataArr)
    }
    
    return (
        <div className="contact">
          <div className="form">
          {/* <label style={{ color: darkMode ? "white" : "" }}><b>Contacts: </b></label> */}

          
      <header className='home-header'>
    <h1 >
      <span>“</span> Contacts <span>”</span>
    </h1>
      </header>

          <button className="c-button"  onClick={hanldleOpenD}>Display Contacts</button>
          <button className="c-button" onClick={hanldleOpenC}>Create Contact</button>
          <SearchBar
        value={searchKey}
        clearSearch={handleClearSearch}
        formSubmit={handleSearchBar}
        handleSearchKey={(e) => setSearchKey(e.target.value)}
      />
          {openC?"": <div className="form">
          <label ><b>Please fill in Contact Information Form: </b></label>
           <label ><b>Name: </b></label>
            <input
                type="text"
                autoComplete='off'
                name='name'
                value={inputdata.name}
                onChange={changehandle}
                placeholder="Enter Name" required/>
           <label ><b>Phone Number: </b></label>
            <input
                type="text"
                autoComplete='off'
                name='phonenumber'
                value={inputdata.phonenumber}
                onChange={changehandle}
                placeholder="Enter Phone Number" required/>
            <label ><b>Email: </b></label>
            <input
                type="text"
                autoComplete='off'
                name='email'
                value={inputdata.email}
                onChange={changehandle}
                placeholder="Enter Email" required />
            
            <button className="c-button" onClick={changhandle}>Add New Contact</button>
        
           </div>
            
            }
          
         
         {openD?"": <div id="display"> <table   width="40%" cellPadding={10}>
                
                    <tr>
                        <td>No.</td>
                        <th>Name </th>
                        <th>Phone Number</th>
                        <th>Email</th>
                        <th>Options</th>
                    </tr>
                    {inputarr.length < 1 ?
                        <tr>
                            <td colSpan={4}>NO Contacts yet !</td>
                        </tr>:
                    inputarr.map((info, ind) => {
                        return (
                            <tr key={ind}>
                                <td>{ind + 1}</td>
                                <td>{info.name}</td>
                                <td>{info.phonenumber}</td>
                                <td>{info.email}</td>
                                <td><button className="c-button" onClick={()=>delethandle(ind)}>Delete</button></td>
                            </tr>
                        )
                    })
}

                
            </table> </div> }
            
           
            </div>
            <div className="home-b">
            <VscHome  onClick={navigateHome} />
            <Switch>
          
               <Route path="/" element={<Contact />} />
            </Switch>
            </div>
        </div>
    );
}

export default Contact;
