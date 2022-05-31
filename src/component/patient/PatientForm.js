import * as React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useEffect, useState} from 'react';
import axios from 'axios';
import {AddPatient} from '../action/AddPatient'
export default function PatientForm() {
    const initialValues = {
        firstname: "",
        lastname: "",
        address: "",
        city: "",
        state: "",
        zipcode: "",
        phonenumber: "",
        email: ""


    };
    const [values, setValues] = useState(initialValues);
    const handleInputChange = e => {
        let data = values;
        data[e.target.name] = e.target.value;
        setValues(data);
    }
    const saveForm = (e) => {
        e.preventDefault();
        const response = AddPatient(values)
        e.target.reset();
    };
  return (
    <Container component="main" maxWidth="sm">
        <div><h3>Add New Patient</h3></div>
        <form className="form-submit" onSubmit={saveForm}>
            <Grid container spacing={1}>
                <Grid item xs={8} sm={6}>
                    <TextField
                        autoComplete="firstname"
                        name="firstname"
                        variant="outlined"
                        required
                        fullWidth
                        id="firstname"
                        label="First Name"
                        autoFocus
                        margin="dense"
                        onChange={handleInputChange}
                   
                    />
                </Grid>
                <Grid item xs={8} sm={6}>
                    <TextField
                        autoComplete="lastname"
                        name="lastname"
                        variant="outlined"
                        required
                        fullWidth
                        id="lastname"
                        label="Last Name"
                        autoFocus
                        margin="dense"
                        onChange={handleInputChange}
                   
                    />
                </Grid>
                <Grid item xs={8} sm={12}>
                    <TextField
                        autoComplete="address"
                        name="address"
                        variant="outlined"
                        required
                        fullWidth
                        id="address"
                        label="Address"
                        autoFocus
                        margin="dense"
                        onChange={handleInputChange}
                   
                    />
                </Grid>
                <Grid item xs={8} sm={6}>
                    <TextField
                        autoComplete="city"
                        name="city"
                        variant="outlined"
                        required
                        fullWidth
                        id="city"
                        label="City"
                        autoFocus
                        margin="dense"
                        onChange={handleInputChange}
                   
                    />
                </Grid>
                <Grid item xs={8} sm={6}>
                    <TextField
                        autoComplete="state"
                        name="state"
                        variant="outlined"
                        required
                        fullWidth
                        id="state"
                        label="State"
                        autoFocus
                        margin="dense"
                        onChange={handleInputChange}
                   
                    />
                </Grid>
                <Grid item xs={8} sm={4}>
                    <TextField
                        autoComplete="zipcode"
                        name="zipcode"
                        variant="outlined"
                        required
                        fullWidth
                        id="zipcode"
                        label="ZipCode"
                        autoFocus
                        margin="dense"
                        type="number"
                        onChange={handleInputChange}
                   
                    />
                </Grid>
                <Grid item xs={8} sm={8}>
                    <TextField
                        autoComplete="phonenumber"
                        name="phonenumber"
                        variant="outlined"
                        required
                        fullWidth
                        id="phonenumber"
                        label="Phone Number"
                        autoFocus
                        margin="dense"
                        type="number"
                        onChange={handleInputChange}
                   
                    />
                </Grid>
                <Grid item xs={8} sm={12}>
                    <TextField
                        autoComplete="email"
                        name="email"
                        variant="outlined"
                        required
                        fullWidth
                        id="email"
                        label="Email"
                        autoFocus
                        margin="dense"
                        onChange={handleInputChange}
                   
                    />
                </Grid>
                
            </Grid>
            <Grid item xs={8} sm={12}>
                <Button
                    fullWidth
                    variant="contained"
                    color="primary"
                    type="submit"
                    className="form-submit"
                >
                    Submit
                </Button>
            </Grid>
        </form>
    </Container>
  );
}