import React from 'react';
import {useSelector} from 'react-redux';
import Addblog from './Addblog.js';

const HomePage = () => {

    const blogs = useSelector(state => state.blogs);
    // console.log(blogs)

//     Arial, Helvetica, sans-serif
// Times New Roman, Times, serif
// Courier New, Courier, monospace
// Georgia, serif
// Palatino Linotype, Book Antiqua, Palatino, serif
// Verdana, Geneva, sans-serif
// Tahoma, Geneva, sans-serif
// Trebuchet MS, Helvetica, sans-serif
// Impact, Charcoal, sans-serif
// Lucida Sans Unicode, Lucida Grande, sans-serif

    const renderBlogs = blogs.map((blog) => (
        <div key={blog.id} className=' relative font-[Lucida Grande]'>
            <div className='bg-no-repeat bg-cover h-full z-0'>
                <img className='h-full rounded' alt='blog image' src={blog.imgUrl} />
            </div>
            <div className='absolute font-thin bottom-0 backdrop-blur-sm backdrop-opacity-60 w-full text-white z-10 py-3 px-2 text-left'>
                <div className='mb-1 '>
                    <h1 className='text-2xl font-bold '>{blog.title}</h1>
                </div>
                <div>
                    <p>{blog.content}</p>
                </div>
            </div>
        </div>
    ))

  return (
    <div>
        <div className='px-10 py-10 h-fit bg-black'>
            <div>
                <h1 className='text-5xl mb-10 text-left text-white'>Blogs</h1>
            </div>
            <div className='flex gap-8'>
                {renderBlogs}
            </div>
            <div>
                <Addblog />
            </div>
        </div>
    </div>
  )
}

export default HomePage