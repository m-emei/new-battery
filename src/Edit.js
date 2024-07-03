import { Button, Grid, Paper, TextField } from "@mui/material";

import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Edit = () => {
    const{empid}=useParams();
   
    useEffect(() => {
       
        fetch("http://localhost:3000/employee/"+empid).then((res)=> {
            return res.json();
        }).then((resp)=> {
          setEmail(resp.email);
          setId(resp.id);
          setName(resp.name);
          setDepartment(resp.department);
          setRole(resp.role);
            
                    }).catch((err)=> {
            console.log(err.message)
        })
      }, [empid]);
  const [email, setEmail] = useState("");
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [department, setDepartment] = useState("");
  const [role, setRole] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const memei = { email, id, name, department, role };
    fetch("http://localhost:3000/employee/"+empid, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(memei),
    })
      .then((res) => {
        alert("Saved successfully");
        navigate('/manage');
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

    return ( 
        <div style={{  maxWidth: "1000px",
          margin:"40px",
            padding: "20px",
            marginLeft:"80px"}}>
        <Paper elevation={3} style={{ padding: "20px" }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                id="email"
                label="Email"
                variant="outlined"
                fullWidth
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="customer-no"
                label="Customer No"
                variant="outlined"
                fullWidth
                value={id}
                onChange={(e) => setId(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="name"
                label="Name"
                variant="outlined"
                fullWidth
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="department"
                label="Department"
                variant="outlined"
                fullWidth
                value={department}
                onChange={(e) => setDepartment(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6} container textAlign="center" >
              <TextField
              
                id="role"
                label="Role"
                variant="outlined"
                fullWidth
                value={role}
                onChange={(e) => setRole(e.target.value)}
              />
            </Grid>
          </Grid>
          <div style={{ marginTop: "50px", textAlign: "center" }}>
            <Button onClick={handleSubmit} variant="contained" >
              Save
            </Button>
          </div>
        </Paper>
      </div>
     );
}
 
export default Edit;