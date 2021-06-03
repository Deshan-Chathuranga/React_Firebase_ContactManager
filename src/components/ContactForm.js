import React, { useState, useEffect } from "react";

const ContactForm = (props) => {
  const initialFieldValues = {
    fullName: "",
    mobile: "",
    email: "",
    address: "",
  };
  const [values, setValues] = useState(initialFieldValues);

  useEffect(()=>{
      if(props.currentId==='')
      setValues({
          ...initialFieldValues
      })
      else
         setValues({...props.contactObjects[props.currentId]})

  },[props.currentId,props.contactObjects])

  const handleInputChange = (e) => {
    var { name, value } = e.target;

    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleFormSubmitt = e =>{
      e.preventDefault();
      props.addOrEdit(values)
      alert('Success!')
  }

  return (
    <form autoComplete="off" onSubmit={handleFormSubmitt}>
      <div className="form-group input-group">
        <div className="input-group-prepend">
          <div className="input-group-text">
            <i className="fas fa-user"></i>
          </div>
        </div>
        <input
          className="form-control"
          name="fullName"
          placeholder="Full Name"
          value={values.fullName}
          onChange={handleInputChange}
        />
      </div>
      <div className="form-row">
        <div className="form-group input-group col-md-6">
          <div className="input-group-prepend">
            <div className="input-group-text">
              <i className="fas fa-mobile-alt"></i>
            </div>
          </div>
          <input
            className="form-control"
            name="mobile"
            placeholder="Mobile Number"
            value={values.mobile}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-group input-group col-md-6">
          <div className="input-group-prepend">
            <div className="input-group-text">
              <i className="fas fa-envelope"></i>
            </div>
          </div>
          <input
            className="form-control"
            name="email"
            placeholder="Email"
            value={values.email}
            onChange={handleInputChange}
          />
        </div>
      </div>
      <div className="form-group">
        <input
          className="form-control"
          name="address"
          placeholder="Address"
          value={values.address}
          onChange={handleInputChange}
        />
      </div>
      <div className="form-group">
                <input type="submit" value={props.currentId===''?'Save':'Update'} className="btn btn-primary btn-block" />
            </div>
    </form>
  );
};

export default ContactForm;
