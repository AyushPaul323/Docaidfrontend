import React, { useState } from "react";
import Sidenav from "./Sidenav";
import bgImg from "../assets/ing1.gif";
import { useForm } from "react-hook-form";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import "./Bedg.css";
export default function Bedg(props) {
  const [ayush, setAyush] = React.useState("C1");

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  // console.log(watch('username'));
  React.useEffect(() => {
    console.log(props.user);
  });
  function hidee(e) {
    let u = e.target.value;
    console.log(u);
    if (u === "normal") {
      console.log("C2");
      setAyush("C2");
    } else {
      console.log("C1");
      setAyush("C1");
    }
  }
  const [File,setFile]=React.useState();
  const [userData, setUserData] = useState({
    Name: "",
    PhoneNumber: "",
    location: "",
    Phy: "",
    ppd: "",
  });
  let name, value;
  const submitNotee =async (event)=> {
    //name = event.target.name;
    // value = event.target.value;
    const data = new FormData();
    console.log("lp"+File);
    data.append("file",File)
    data.append("upload_preset","notepad")
    data.append("cloud_name","dcyfkgtgv")
    const res= await fetch("https://api.cloudinary.com/v1_1/dcyfkgtgv/image/upload",{
        method:"post",
        body:data
    })
    const fil=await res.json();
    console.log(res.json);
    setUserData({ ...userData, ppd: fil });
    // setDone(true);
    event.preventDefault();
}
  
  const postUserData = (event) => {
    name = event.target.name;
    value = event.target.value;

    setUserData({ ...userData, [name]: value });
  };

  const submitData = async(event) =>{
    event.preventDefault();
    console.log(userData);
    const { Name,
    PhoneNumber,
    location,
    Phy,
    ppd } = userData;

    if(Name && PhoneNumber && location && Phy && ppd ){
    const res = fetch("https://hospital-93273-default-rtdb.firebaseio.com/userDataRecords.json",{
    method : "POST",
    headers: {
      "Content-Type" : "application/json",
    },
    body:JSON.stringify({
      Name,
      PhoneNumber ,
      location,
      Phy,
      ppd 
      }),
    });
    if(res){
      setUserData({
        Name,
    PhoneNumber,
    location,
    Phy,
    ppd 
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
      <section className="sec1">
        <div className="register">
          <div className="col-1">
            <div className="e">
              <h2 className="">Bed Booking</h2>
              <span>Fill up the form to get the service</span>
            </div>
            <form
              id="form"
              className="flex flex-col"
              onSubmit={handleSubmit(onSubmit)}
            >
              <input
                type="text"
                name="Name"
                {...register("Name")}
                placeholder="Name"
                value={userData.Name}
                onChange={postUserData}
              />
              <input
                type="text"
                name="PhoneNumber"
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
                <Form.Select defaultValue="Choose" onChange={hidee}>
                  <option value="normal">Option</option>
                  <option value="normal">SoS</option>
                  <option value="sos">Normal</option>
                </Form.Select>
              </Form.Group>
              <input
                className={ayush}
                name="Phy"
                type="text"
                {...register("Phy")}
                placeholder="name of your physician"
                value={userData.Phy}
                onChange={postUserData}
              />
              <Form.Label class={ayush}>Upload Your Prescription</Form.Label>
              <input
                class={ayush}
                name="ppd"
                type="file"
                onChange={(e)=>setFile(e.target.files[0])}
                id="formFileMultiple"
                multiple
                value={userData.ppd}
              />
              <h1 onClick={submitNotee}>
                Add
              </h1>
              {errors.location?.type === "required" && "Location is required"}
              {errors.PhoneNumber?.type === "required" &&
                "Phone Number is required"}
              <button className="btn" onClick={submitData}>
                Booking
              </button>
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
