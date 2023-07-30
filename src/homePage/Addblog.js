import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {addBlog} from './blogsSlice';
import { nanoid } from '@reduxjs/toolkit';


const Addblog = () => {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [imageUrl, setImageUrl] = useState('');

    const blogs = useSelector(state => state.blogs)

    const dispatch = useDispatch();

    const handleImageChange = (e) => {
        const selectedFile = e.target.files[0];

        if (selectedFile) {
            const fileReader = new FileReader();

            fileReader.onload = (e) => {
                const imageUrl = e.target.result;
                setImageUrl(imageUrl)
            }

            fileReader.readAsDataURL(selectedFile)
        }
    }

    // console.log(imageUrl)

    const onAddBlogClick = () => {
        dispatch(
            addBlog({
                id: nanoid(),
                imgUrl: imageUrl,
                title: title,
                content: description
            })


        )

        setTitle('')
        setDescription('')
    }

    const handleSubmit = (event) => {
        event.preventDefault();
    }

  return (
    <div className='bg-white my-10 px-10  rounded'>
        <form onSubmit={handleSubmit} className='pt-7  text-left '>
            <div>
                <h1 className='text-4xl mb-5'>Add your blog</h1>
            </div>
            <div className='flex flex-col  '>

                <label className='text-xl mb-2' >Upload Image</label>
                <input className='mb-4' type='file' accept='image/*' onChange={e => handleImageChange(e)}/>
                {imageUrl && (
                    <img
                    src={imageUrl}
                    alt="Preview Image"
                    style={{ display: 'block', maxWidth: '100%', marginTop: '20px' }}
                    />
                )}

                <label className='text-xl mb-2' id='title'>Title</label>
                <input className=' rounded  px-3 py-2 bg-black/10 mb-5 max-w-[70%]' name='title' value={title} onChange={e => setTitle(e.target.value)} />

                <label className='text-xl mb-2' id='description'>Description</label>
                <textarea className=' rounded px-3 bg-black/10 max-w-[70%] min-h-[12rem] mb-10' name='description' value={description}  onChange={e => setDescription(e.target.value)} />
                
                        
            </div>
            <button onClick={onAddBlogClick} type='submit' className='text-xl mb-10 bg-black text-white font-thin px-3 py-2 rounded'>Add blog</button>
        </form>
    </div>
  )
}

export default Addblog;