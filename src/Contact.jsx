import React, { useState } from 'react';

const Contact = () =>{
  const [input,setInput] = useState({
    fullName:'',
    email:'',
    phone:'',
    address:'',
    message:''
  });

  const InputEvent = (event) =>{
    const {name,value} = event.target;

    setInput((preVal)=>{
      return {
        ...preVal,
        [name]:value
      }
    })
  }

  const FormSubmit = (e) =>{
    e.preventDefault();
    alert(`My Name is ${input.fullName} My mobile Number ${input.phone} my address is ${input.address}`);
  }
  return(
    <>
      <h1 className="text-center">Contact Us</h1>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
          <form onSubmit={FormSubmit}>
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Full Name</label>
                <input type="text" class="form-control" id="exampleFormControlInput1" name="fullName" value={input.fullName} onChange={InputEvent} placeholder="Full Name"/>
              </div>

              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Email address</label>
                <input type="email" class="form-control" id="exampleFormControlInput1" name="email" value={input.email} onChange={InputEvent} placeholder="name@example.com"/>
              </div>

              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Address</label>
                <input type="text" class="form-control" id="exampleFormControlInput1" name="address" value={input.address} onChange={InputEvent} placeholder="Enter your address"/>
              </div>

              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Phone</label>
                <input type="text" class="form-control" id="exampleFormControlInput1" name="phone" value={input.phone} onChange={InputEvent} placeholder="+91-9876543210"/>
              </div>

              <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Message</label>
                <textarea class="form-control" onChange={InputEvent} id="exampleFormControlTextarea1" value={input.message} name="message" rows="3"></textarea>
              </div>

              <div class="col-auto">
                <button type="submit" class="btn mb-3 btn-outline-primary">Submit</button>
              </div>
            </form>
            </div>
        </div>
      </div>
    </>
  )
}

export default Contact;