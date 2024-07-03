
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Manage = () => {
    const [data, setData] = useState([]);
    const navigate =useNavigate();

    const handleEdit=(id)=> {
        navigate('/Edit/:empid');
    }
    const handleDelete= (id)=> {
      if(window.confirm("Do you want to Delete?")){
        fetch("http://localhost:3000/employee/"+id, {
          method: "DELETE",
          
        })
          .then((res) => {
            alert("Deleted successfully");
            window.location.reload();
          })
          .catch((err) => {
            console.log(err.message);
          });

      }

    }    
  
  useEffect(() => {
    fetch("http://localhost:3000/employee").then((res)=> {
        return res.json();
    }).then((resp)=> {
        setData(resp);
    }).catch((err)=> {
        console.log(err.message)
    })
  }, []);
  return (
    <div className="app">
    <div className="container">
      
      <div className="card">
        <div className="card-title"></div>
        <div className="card-body">
          <table className="table table-bordered">
           
              <tr className="">
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Update</th>
              </tr>
        
            <tbody>
                { data &&
                    data.map(item => (
                        < tr key={item.id}>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>{item.role}</td>
                            <td>
                                <div className="button-container">
                               <button className="btn btn-danger" onClick={()=>{handleDelete(item.id)}}>Delete</button>
                               <button className="btn btn-success" onClick={()=> {handleEdit(item.id)}}>Update</button>
                              </div>
                            </td>
                    
                        </tr>
                    ))

                }
            </tbody>
          </table>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Manage;
