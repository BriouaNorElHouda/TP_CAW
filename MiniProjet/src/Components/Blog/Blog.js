import React, { useContext }  from 'react'
import {useState} from 'react';
// import {Routes, Route, useNavigate} from 'react-router-dom';
import './Blog.css';
import { VscHome} from "react-icons/vsc";
import { themeContext } from "../../Context";
import SearchBar from './SearchBarb';
import { blogList } from './myposts';

const Blog = () =>{
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const [inputarr,setInputarr] = useState([])
  const [openD, setOpenD] = useState("false");
  const [openC, setOpenC] = useState("false");
  const [searchKey, setSearchKey] = useState('');
  const [posts, setPosts] = useState(blogList); 
  // const navigate = useNavigate();
  const [inputdata,SetInputdata] = useState({subject: "" , description: "" , date: "" })
  const hanldleOpenD=()=>{
      setOpenD(!openD);
  }
  const hanldleOpenC=()=>{
      setOpenC(!openC);
  }

  // const navigateHome = () => {
  //     navigate('/');
  //   };
  

  const handleSearchBar = (e) => {
      e.preventDefault();
      handleSearchResults();
    };
  
    // Search for blog by date
    const handleSearchResults = () => {
      const allPosts = blogList;
      const filteredPosts = allPosts.filter((post) =>
        post.date.toLowerCase().includes(searchKey.toLowerCase().trim())
      );
      setPosts(filteredPosts);
    };
  
    // Clear search and show all contacts
    const handleClearSearch = () => {
      setPosts(blogList);
      setSearchKey('');
    };
  function changehandle(e) {

      SetInputdata({...inputdata, [e.target.name]: e.target.value })
}
let {subject,description,date} = inputdata;
  function changhandle() {
      setInputarr([...inputarr, {subject,description, date  }])
      
      SetInputdata({subject: "", description: "", date:""})
  }
  let delethandle =(i)=>{
      let newdataArr=[...inputarr]
      newdataArr.splice(i,1)
      setInputarr(newdataArr)
  }
  
  return (
      <div className="blog">
        <div className="form">
        {/* <label style={{ color: darkMode ? "white" : "" }}><b>Contacts: </b></label> */}

        
    <header className='home-header'>
  <h1 style={{ color: darkMode ? "white" : "" }}>
    <span>“</span> Blog <span>”</span>
  </h1>
    </header>

        <button className="c-button"  onClick={hanldleOpenD}>List All Posts</button>
        <button className="c-button" onClick={hanldleOpenC}>Create Post</button>
        <SearchBar
      value={searchKey}
      clearSearch={handleClearSearch}
      formSubmit={handleSearchBar}
      handleSearchKey={(e) => setSearchKey(e.target.value)}
    />
        {openC?"": <div className="form">
        <label style={{ color: darkMode ? "white" : "" }}><b>Please fill in Post Information Form: </b></label>
         <label style={{ color: darkMode ? "white" : "" }} ><b>subject: </b></label>
          <input
              type="text"
              autoComplete='off'
              name='subject'
              value={inputdata.subject}
              onChange={changehandle}
              placeholder="Enter subject" required/>
         <label style={{ color: darkMode ? "white" : "" }}><b>Description: </b></label>
          <input
              type="text"
              autoComplete='off'
              name='description'
              value={inputdata.description}
              onChange={changehandle}
              placeholder="Enter description" required/>
          <label style={{ color: darkMode ? "white" : "" }}><b>date: </b></label>
          <input
              type="text"
              autoComplete='off'
              name='date'
              value={inputdata.date}
              onChange={changehandle}
              placeholder="Enter date" required />
          
          <button className="c-button" onClick={changhandle}>Add New Post</button>
      
         </div>
          
          }
        
       
       {openD?"": <div id="display"> <table style={{ color: darkMode ? "white" : "" }}  width="40%" cellPadding={10}>
              
                  <tr>
                      <td>No.</td>
                      <th>Subject </th>
                      <th>Description</th>
                      <th>Date</th>
                      <th>Options</th>
                  </tr>
                  {inputarr.length < 1 ?
                      <tr>
                          <td colSpan={4}>NO Posts yet !</td>
                      </tr>:
                  inputarr.map((info, ind) => {
                      return (
                          <tr key={ind}>
                              <td>{ind + 1}</td>
                              <td>{info.subject}</td>
                              <td>{info.description}</td>
                              <td>{info.date}</td>
                              <td><button className="c-button" onClick={()=>delethandle(ind)}>Delete</button></td>
                          </tr>
                      )
                  })
}

              
          </table> </div> }
          
         
          </div>
          
          <VscHome  id="svg1" />
          {/* <Routes>
        
        <Route path="/" element={<Home />} />
      </Routes> */}
          </div>
      
  );
}
export default Blog;