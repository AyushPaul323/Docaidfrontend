import Sidenav from "./Sidenav";
import Table from "react-bootstrap/Table";
import { data1 } from "./data1.js";
import { useState } from "react";
import './Hospital.css'
import { useNavigate } from 'react-router-dom';
function Hospital(props) {
  const [search, setSearch] = useState("");
  console.log(search);
  const Navigate = useNavigate();
  function handleClick (){
    Navigate ("/Booknow")
  }

  return (
    <div>
      <Sidenav Pic={props.user.picture} />
      <div className="liss">
        <Table striped bordered hover variant="dark" className="hello">
          <thead>
            <tr>
              <th><h3>Profile</h3></th>
              <th><h3>Name</h3></th>
              <th className="s1w"><h3>Known For</h3></th>
              <th className="s1w"><h3>Location</h3></th>
              <th className="s1w"><h3>Beds</h3></th>
              <th className="s1w"><h3>Modified</h3></th>
              <div class="serc">
        <input
          type="search"
          class="search11"
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search for specialization"
          aria-label="Search"
          aria-describedby="search-addon"
        />
      </div>
            </tr>
          </thead>
          <tbody>
            {data1
              .filter((item) => {
                return search.toLowerCase() === ''
                  ? item
                  : item.Center_for.toLowerCase().includes(search);
              })
              .map((item) => (
                <tr>
                  <td>
                  {item.Profile1}
                  </td>
                  <td>{item.Name1}</td>
                  <td>{item.Center_for}</td>
                  <td>{item.location1}</td>
                  <td>{item.bdss}</td>
                  <td>{item.lm}</td>
                  <td ><a href={item.url}><button className="a11" >
                    Book Now</button></a></td>
                </tr>   
              )
              )
              }
          </tbody>
        </Table>
      </div>
    </div>
  );
}
export default Hospital;
