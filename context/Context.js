import { create } from "@mui/material/styles/createTransitions";
import { useNavigate } from 'react-router-dom';
import { createContext, useContext, useState, useEffect } from "react";
import axios from 'axios';

const Context = createContext();

export const Provider = ({ children }) => {
  const navigate = useNavigate();
  const [profile,setProfile] = useState([]);
  const [btn,setBtn] = useState("Submit");
  const [query,setQuery] = useState({
    nama:"",
    kelas:"",
    usia:"",
    skills:"",
    foto:""
  });

  const filter_user = (e) => {
    if(e.target.value === "") {
      get_endpoint();
    } else {
       const filter = profile.filter(item => item.nama.toLowerCase().includes(e.target.value));
       setProfile(filter);
    }
  }

  const get_endpoint = async () => {
    try {
      const req = await axios.get(`http://127.0.0.1:8000/api/users`)      
      const { data } = await req;
      let arr = data.slice(0 , 5);
      arr = arr.sort(() => Math.random() - 0.5);
      setProfile(arr); 
    } catch(error) {
      return error;
    }
  }

  const delete_handle = async (id) => {
     try {
       const posted = await axios({
          method:'delete', 
          url:`http://127.0.0.1:8000/api/users/${id}`
       });

       get_endpoint();
     } catch(err) {
      return err;
     }
  }

  const post_handle = async () => {
     try {
      if(btn === "Submit") {
         const posted = await axios({
         method:"post",
         url:"http://127.0.0.1:8000/api/users",
         data:query 
       });
      } else {
        console.log(query);
         const posted = await axios({
         method:"put",
         url:"http://127.0.0.1:8000/api/users",
         data:query 
       });
      }

        get_endpoint();
        setQuery({
    nama:"",
    kelas:"",
    usia:"",
    skills:"",
    foto:""
  }); 

        setBtn('Submit');
        navigate('/');
     } catch(err) {
      return err;
     }
  }

  const put_handle = (data) => {
     setQuery(data)
     setBtn('Update');
     navigate('/admin');
  }

  useEffect(() => {
   get_endpoint();
  },[]);

    const init = {
    profile  ,
    query,
    setQuery,
    post_handle,
    delete_handle,
    put_handle,
    btn,
    filter_user
  }


  return <Context.Provider value={init}>{children}</Context.Provider>;
};

export const useContextHandle = () => useContext(Context);
