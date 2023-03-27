import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const Pro_list = () => {

  const [profile, setProfile] = useState([])

  const [imageData, setImageData] = useState([])


  const fetchProfiles = async () => {
    const res = await fetch('http://localhost:5000/company/getall');
    console.log(res.status)

    const data = await res.json();
    console.log(data);
    setProfile(data)
  }

  const fetchImages = async () => {
    const res = await fetch('http://localhost:5000/image/getall');
    console.log(res.status)

    const data = await res.json();
    console.log(data);
    setImageData(data)
  }

  useEffect(() => {
    fetchProfiles();
  }, [])

  useEffect(() => {
    fetchImages();
  }, [])

  const deleteProfile = async (id) => {
    console.log(id);
    const res = await fetch('http://localhost:5000/company/delete/' + id, {
      method: "DELETE",
    })
    console.log(res.status);
    if (res.status === 200) {
      fetchProfiles();
      Swal.fire({
        icon: 'success',
        title: 'Success',
        text: 'Profile Deleted Successfully'
      })
    }
  }

  const deleteImage = async (id) => {
    console.log(id);
    const res = await fetch('http://localhost:5000/image/delete/' + id, {
      method: 'DELETE',
    })
    console.log(res.status);
    if (res.status === 200) {
      fetchImages();
      Swal.fire({
        icon: 'success',
        title: 'Success',
        text: 'Image Deleted Successfully'
      })
    }
  }

  return (
    <div className='container'>
      <h1 className='text-center mt-3'>ALL PROFILES HERE</h1>
      {profile.map((profiles) => (
        <div className="card">
          <div className="card-body">
            <h5 className="card-title"><b>Company Name - </b>{profiles.name}</h5>
            <div>
              <p>
                <b>Company Type - </b>{profiles.type}
              </p>
            </div>
            <div>
              <p>
                <b>Departments - </b>{profiles.departments}
              </p>
            </div>
            <div>
              <p>
                <b>Description - </b>{profiles.working}
              </p>
            </div>
            <div>
              <p>
                <b>Email - </b>{profiles.email}
              </p>
            </div>
            <div>
              <p>
                <b>Contact - </b>{profiles.contact}
              </p>
            </div>
            <div>
              <p>
                <b>Address - </b>{profiles.address}
              </p>
            </div>


            {/* <div>{star.map(() => <i className="fas fa-star" style={{color:'green'}}></i>)}</div> */}




            <button type="button" className="btn btn-danger" onClick={() => (deleteProfile(profiles._id))}>
              Delete Profile
            </button>
          </div>
        </div>
      ))}
      {imageData.map((img) => (
        <div className="card">
          <div className="card-body">

            <img src={img.images} alt="" />

            <div>
              <button type="button" className="btn btn-primary" onClick={() => { deleteImage(img._id) }}>
                Delete Image
              </button>
            </div>
          </div>
        </div>

      ))}




      <div className='my-5'>
        <Link to='/home' className='mt-3'><b>Back</b></Link>
      </div>

    </div>
  )
}

export default Pro_list


