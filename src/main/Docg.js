import React, { useState } from "react";
import Sidenav from "./Sidenav";
import bgImg from "../assets/doc.gif";
import { useForm } from "react-hook-form";
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./Docg.css";
export default function Docg(props) {
 const [ayush,setAyush]=React.useState("C1");
 const [ayush1,setAyyush]=React.useState("C2");
 
const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  // console.log(watch('username'));
  React.useEffect(()=>{
    console.log(props.user);
  })
	function hidee(e){
    let namee=e.target.name;
    let u=e.target.value;
    console.log(u);
    setUserData(()=>{return{ ...userData, [namee]: u }});
	if (u==="offline"){
    console.log("C2");
		setAyyush("C2");	
	}
  else{
    console.log("C1");
    setAyush("C1");
  }
}
const [userData, setUserData] = useState({
  Name: "",
  PhoneNumber: "",
  location: "",
  Date1:"",
    Time1:"",
    Option: ""
});

let date, value;
const postUserData = (event) => {
  // date = event.target.date;
  date=event.target.name;
  value = event.target.value;
  console.log("name "+date);
  setUserData(()=>{return{ ...userData, [date]: value }});
};

const submitData = async(event) =>{
  event.preventDefault();
  const { Name,
  PhoneNumber,
  location,
  Date1,
    Time1,Option} = userData;
    console.log(userData);
  if(Name && PhoneNumber && location && Date1 && Time1 ){
  const res = fetch("https://doctor-abc30-default-rtdb.firebaseio.com/userDataRecords.json",{
  method : "POST",
  headers: {
    "Content-Type" : "application/json",
  },
  body:JSON.stringify({
    Name,
    PhoneNumber ,
    location,
    Date1,
    Time1,
    Option
    }),
  });
  if(res){
    setUserData({
      Name,
  PhoneNumber,
  location,
  Date1,
  Time1,
  Option 
    });
    alert("Form Submitted");
  }
  else{
    alert("Plz fill the data");
  }
}else{
  alert("Plz fill the data");
}
};

  return (
    <div>
      <div>
      <Sidenav Pic="https://tse1.mm.bing.net/th?id=OIP.Z5BlhFYs_ga1fZnBWkcKjQHaHz&pid=Api&rs=1&c=1&qlt=95&w=110&h=116" /> 
      </div>
      <section className="sec12">
        <div className="register">
          <div className="col-1">
          <div className="e">
            <h2 className="">Doctor Appointment</h2>
            <span>Fill up the form to get the service</span>
            </div>
            <form
              id="form"
              className="flex flex-col"
              onSubmit={handleSubmit(onSubmit)}
            >
              <input type="text" name="Name" {...register("Name")} placeholder="Name" value={userData.Name}
                onChange={postUserData} />
              <input
                name="PhoneNumber"
                type="text"
                {...register("PhoneNumber")}
                placeholder="Phone Number"
                value={userData.PhoneNumber}
                onChange={postUserData}
              />
              <input
                type="text"
                name="location"
                {...register("location", { required: true, maxLength: 10 })}
                placeholder="location"
                value={userData.location}
                onChange={postUserData}
              />
              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>Service</Form.Label>
                <Form.Select defaultValue="Choose" name="Option" {...register("Option")} onChange={hidee}>
 			            <option value="">Option</option>
                  <option value="virtually">Virtually</option>
                  <option value="offline">Offline</option>
                </Form.Select>
              </Form.Group>
              <Form.Label>pick your date</Form.Label>
              <input
                name="Date1"
                type="date"
                {...register("Date1")}
                value={userData.Date1}
                onChange={postUserData}
              />
              {/* <DatePicker
                    name="Date1"
                    {...register("Date1")}
                    value={userData.Date1}
                    onChange={postUserData}
                   placeholderText="MM/DD/YYYY"
                  selectsStart */}
                  {/* // startDate={startDate}
                  // excludeDates={datesBlock.map((ele)=>{return(new Date(ele))})}
                  // endDate={endDate}
                  // minDate={startDate2}
                // /> */}
              <Form.Label>time</Form.Label>
              <input
              name="Time1"
                type="time"
                {...register("Time1")}
                value={userData.Time1}
                onChange={postUserData}
              />
              <button className="btn" onClick={submitData}>Booking</button>
            </form>
          </div>
          <div className="col-2">
            <img src={bgImg} alt="" />
          </div>
        </div>
      </section>
    </div>
  );
}