import React, { useState, useEffect } from "react";
import ContactForm from "./ContactForm";
import fireDb from "../firebase";

const Contact = () => {
  const [contactObjects, setContactObjects] = useState({});
  const [currentId,setCurrentId]=useState('');

  useEffect(() => {
    fireDb.child("contacts").on("value", (snapshot) => {
      if (snapshot.val() != null) {
        setContactObjects({
          ...snapshot.val(),
        })
        
      }else
      setContactObjects({})
    });
  }, []);

  const addOrEdit = (obj) => {
      if(currentId==='')
    fireDb.child("contacts").push(obj, (err) => {
      if (err) {
        console.log(err);
      }else
      setCurrentId('')
    });
    else
    fireDb.child(`contacts/${currentId}`).set(obj, (err) => {
        if (err) {
          console.log(err);
        }else
            setCurrentId('')
      });
    
  };

  const onDelete = id => {
    if(window.confirm('Are you sure to delete this record?')){
        fireDb.child(`contacts/${id}`).remove((err) => {
            if (err) {
              console.log(err);
            }else
                setCurrentId('')
          });
    }
}

  return (
    <div>
      <div class="jumbotron jumbotron-fluid">
        <div class="container">
          <h1 class="display-4 text-center">Contact Manager</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-md-5">
          <ContactForm {...({addOrEdit,currentId,contactObjects})} />
        </div>
        <div className="col-md-7">
          <table className="table table-borderless table-stripped">
            <thead className="thead-light">
              <tr>
                <th>Name</th>
                <th>Mobile</th>
                <th>Email</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
                {
                    Object.keys(contactObjects).map((key) => (
                        <tr key={key}>
                            <td>{contactObjects[key].fullName}</td>
                            <td>{contactObjects[key].mobile}</td>
                            <td>{contactObjects[key].email}</td>
                            <td >
                                <a className="btn text-primary" onClick={() => { setCurrentId(key) }}>
                                    <i className="fas fa-pencil-alt"></i>
                                </a>
                                <a className="btn text-danger" onClick={() => { onDelete(key) }}>
                                    <i className="far fa-trash-alt"></i>
                                </a>
                            </td>
                            <td></td>
                        </tr>
                    ))
                }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Contact;
