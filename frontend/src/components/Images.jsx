import React, { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'

const url = "http://localhost:5000/image/add"

const Images = () => {

    const [postImage, setPostImage] = useState({ images: "" })

    const createPost = async (newImage) => {
        try {
            await axios.post(url, newImage)
            Swal.fire({
                icon: 'success',
                title: 'Success',
                text: 'Submission Successful'
            })
        
        } catch (error) {
            console.log(error)
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Something went wrong'
            })
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        createPost(postImage)
        console.log("Uploaded")
    }

    const handleFileUpload = async (e) => {
        const file = e.target.files[0];
        const base64 = await convertToBase64(file);
        console.log(base64)
        setPostImage({ ...postImage, images: base64 })
    }


    return (
        <div className='container mt-5 text-center'>
            <div className="my-5">
                <h1>UPLOAD IMAGE</h1>
            </div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="file-upload" className='custom-file-upload'>
                    <img src={postImage.images} alt="" />
                </label>

                <input type="file"
                    label='Image'
                    name='images'
                    id='file-upload'
                    accept='.jpeg, .png, .jpg'
                    onChange={(e) => handleFileUpload(e)} />
                <button className='btn btn-primary' type='submit'>Submit</button>

            </form>
            <div className='text-center my-5'>
                <Link to='/list'>View All Profiles</Link>
            </div>
        </div>
    )
}

export default Images


function convertToBase64(file) {
    return new Promise((resolve, reject) => {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);
        fileReader.onload = () => {
            resolve(fileReader.result)
        };
        fileReader.onerror = (error) => {
            reject(error)
        }
    })
}