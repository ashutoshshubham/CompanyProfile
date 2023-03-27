import React, { useState } from 'react'
import { Formik, useFormik } from 'formik'
import { Link, useNavigate } from 'react-router-dom'
import Swal from "sweetalert2"



const Pro_entry = () => {




    const profile_submit = async (formdata, { resetForm }) => {
        console.log(formdata)
        resetForm()

        const res = await fetch('http://localhost:5000/company/add', {
            method: 'POST',
            body: JSON.stringify(formdata),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (res.status === 200) {
            Swal.fire({
                icon: 'success',
                title: 'Success',
                text: 'Submission Successful'
            })
        }
        else {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Something went wrong'
            })
        }
    }







    return (
        <div>
            <div className="container">
                <h1 className='text-center my-5'>COMPANY PROFILE</h1>
                <div className="row">

                    <div className="col-md-6 my-auto mx-auto">
                        <img src="https://images.pexels.com/photos/269077/pexels-photo-269077.jpeg?cs=srgb&dl=pexels-pixabay-269077.jpg&fm=jpg" alt="" className='img-fluid mb-3' />
                    </div>
                </div>
                <div className="row">


                    <div className="col-md-6 mx-auto">

                        <Formik initialValues={{ name: "", type: "", departments: "", working: '', address: '', contact: '', email: '' }} onSubmit={profile_submit}>
                            {({ values, handleSubmit, handleChange }) =>
                            (


                                < form onSubmit={handleSubmit}>

                                    < div className="">
                                        <label className="form-label text-dark" for="form12"><b>Company Name</b></label>
                                        <input name='name' type="text" id="form12" className="form-control mb-3" onChange={handleChange} value={values.name} />
                                    </div>
                                    <div className="">
                                        <label className="form-label text-dark" for="form12"><b>Company Type</b></label>
                                        <input name='type' type="text" id="form12" className="form-control mb-3" onChange={handleChange} value={values.type} />
                                    </div>
                                    <div className="">
                                        <label className="form-label text-dark" for="form12"><b>Name Of Departments</b></label>
                                        <input name='departments' type="text" id="form12" className="form-control mb-3" onChange={handleChange} value={values.departments} />
                                    </div>
                                    <div className="">
                                        <label className="form-label text-dark" for="form12"><b>Email</b></label>
                                        <input name='email' type="email" id="form12" className="form-control mb-3" onChange={handleChange} value={values.email} />
                                    </div>
                                    <div className="">
                                        <label className="form-label text-dark" htmlFor="typePhone">
                                            <b>Contact</b>
                                        </label>
                                        <input name='contact' type="number" id="typePhone" className="form-control mb-3" onChange={handleChange} value={values.contact} />
                                    </div>

                                    <div className="">
                                        <label className="form-label text-dark" htmlFor="textAreaExample"><b>Address</b>
                                        </label>
                                        <textarea
                                            name='address'
                                            className="form-control mb-3"
                                            id="textAreaExample"
                                            rows={4}
                                            defaultValue={""}
                                            onChange={handleChange}
                                            value={values.address}
                                        />

                                    </div>
                                    <div className="">
                                        <label className="form-label text-dark" htmlFor="textAreaExample"><b>Description of Company</b>
                                        </label>
                                        <textarea
                                            name='working'
                                            className="form-control  mb-3"
                                            id="textAreaExample"
                                            rows={4}
                                            defaultValue={""}
                                            onChange={handleChange}
                                            value={values.working}
                                        />

                                    </div>
                                    <button required type="submit" className="btn btn-primary w-100 mb-3" data-mdb-ripple-color="dark"><b>Submit</b></button>
                                    <Link to='/images'><button type="button" className="btn btn-success w-100 mb-3" data-mdb-ripple-color="dark"><b>Next</b></button></Link>





                                </form>



                            )}



                        </Formik>
                        {/* <div className='text-center my-3'>
                            <Link to='/list'>View All Profiles</Link>
                        </div> */}

                    </div>

                </div >
            </div >
        </div >
    )

}

export default Pro_entry


function convertToBase64(file) {
    return new Promise((resolve, reject) => {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);
        fileReader.onload = (result) => {
            resolve(fileReader.result)
        };
        fileReader.onerror = (err) => {
            reject(err)
        }
    })
}






