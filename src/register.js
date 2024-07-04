import React, { useState } from "react";
import { Button, Paper, TextField, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [email, setEmail] = useState("");
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [department, setDepartment] = useState("");
  const [role, setRole] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const memei = { email, id, name, department, role };
    fetch("http://localhost:3000/employee", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(memei),
    })
      .then((res) => {
        alert("Saved successfully");
        navigate("/manage");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
 
  return (
  
    <div  style={{  maxWidth: "1000px",
      margin:"40px",
        padding: "20px",
        marginLeft:"80px"}}>
          <h1>New Battery</h1>


     
      <Paper elevation={3} style={{ padding: "20px", marginTop: "40px"}}>
        <Grid container spacing={2}>
          
          <Grid item xs={12} sm={6}>
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Customer No"
              variant="outlined"
              fullWidth
              value={id}
              onChange={(e)=> setId(e.target.value)}
              
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Name"
              variant="outlined"
              fullWidth
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Department"
              variant="outlined"
              fullWidth
              value={department}
              onChange={(e) => setDepartment(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={6} >
            <TextField
            style={{alignItems:"center"}}
              label="Role"
              variant="outlined"
              fullWidth
              value={role}
              onChange={(e) => setRole(e.target.value)}
            />
          </Grid>
        </Grid>
        <div style={{ marginTop: "50px", textAlign: "center" }}>
          <Button onClick={handleSubmit} variant="contained">
            Add
          </Button>
        </div>
      </Paper>
    </div>
  );
};

export default Register;
