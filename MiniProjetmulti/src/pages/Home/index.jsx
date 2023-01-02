import React, { useState } from 'react';
import Blog from '../../components/Blog';
import SearchBar from '../../components/SearchBar';
import { blogList } from './myposts';
import { VscHome} from "react-icons/vsc";
import './styles.css';
import {Switch, Route,useHistory} from 'react-router-dom';


const Home = () => {
  const [posts, setPosts] = useState(blogList);
  const [searchKey, setSearchKey] = useState('');
  const [openD, setOpenD] = useState("false");
  const [openC, setOpenC] = useState("false");
 
    // const darkMode = theme.state.darkMode;
    const [inputarr,setInputarr] = useState([])
    const [inputdata,SetInputdata] = useState({subject: "" , description: "" , date: "" })
    
    let history = useHistory();
    const navigateHome = () => {
      history.push("/home");
      };
    
    function changehandle(e) {

      SetInputdata({...inputdata, [e.target.subject]: e.target.value })
}
let {subject, description, date} = inputdata;
  function changhandle() {
      setInputarr([...inputarr, {subject,description, date  }])
      
      SetInputdata({subject: "", description: "", date:""})
  }

  const hanldleOpenD=()=>{
    setOpenD(!openD);
}
const hanldleOpenC=()=>{
    setOpenC(!openC);
}

  // Search submit
  const handleSearchBar = (e) => {
    e.preventDefault();
    handleSearchResults();
  };

  // Search for post by date
  const handleSearchResults = () => {
    const allPosts = blogList;
    const filteredPosts = allPosts.filter((post) =>
      post.date.toLowerCase().includes(searchKey.toLowerCase().trim())
    );
    setPosts(filteredPosts);
  };

  // Clear search and show all posts
  const handleClearSearch = () => {
    setPosts(blogList);
    setSearchKey('');
  };

  const BlogList = ({ posts }) => {
    return (
      <div className='blogList-wrap'>
        {posts.map((post) => (
          <Blog post={post} />
        ))}
      </div>
    );
  };

  return (
    <div>
      <div className="form">
      <header className='home-header'>
    <h1>
      <span>“</span> Blog <span>”</span>
    </h1>
      </header>
      <button className="b-button"  onClick={hanldleOpenD}>List All Posts</button>
      <button className="b-button" onClick={hanldleOpenC}>Create Post</button>
          

      {/* Search Bar */}
      <SearchBar
        value={searchKey}
        clearSearch={handleClearSearch}
        formSubmit={handleSearchBar}
        handleSearchKey={(e) => setSearchKey(e.target.value)}
      />
      {openC?"": <div className="form">
          <label ><b>Please fill in Post Information Form: </b></label>
           <label  ><b>Subject: </b></label>
            <input
                type="text"
                autoComplete='off'
                name='subject'
                value={inputdata.subject}
                onChange={changehandle}
                placeholder="Enter Subject" required/>
           <label ><b>Description: </b></label>
            <input
                type="text"
                autoComplete='off'
                name='description'
                value={inputdata.description}
                onChange={changehandle}
                placeholder="Enter description" required/>
            <label ><b>Date: </b></label>
            <input
                type="text"
                autoComplete='off'
                name='date'
                value={inputdata.date}
                onChange={changehandle}
                placeholder="Enter date" required />
            
            <button className="b-button" onClick={changhandle}>Add New Post</button>
        
           </div>
            
            }
            </div>
{openD?"": <BlogList posts={posts} /> }
     
  
  
<br></br><br></br>
      
    
    <div className="home-b">
    <VscHome id="svg1" onClick={navigateHome} />
    <Switch>
          
          <Route path="/" element={<Home />} />
    </Switch>
    </div>
    </div>
    

  );
};

export default Home;
