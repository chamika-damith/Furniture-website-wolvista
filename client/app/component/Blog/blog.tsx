import React from 'react'
import Image from 'next/image'
import Blog1 from '@/public/image/Blog/Blog1.png'
import Blog2 from '@/public/image/Blog/Blog2.png'
import Blog3 from '@/public/image/Blog/Blog3.png'
import blogData from '@/data/blog.json'

function blog() {
    return (
        <div className='margin-y'>
            <div>
                <div className='subtitle pb-8'>
                    Our Blog
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                    {blogData.blog.map((blog) => (
                        <div key={blog.id} className='rounded-2xl overflow-hidden'>
                            <div className='relative'>
                                <Image src={Blog1} alt="Blog" className="w-full h-64 object-cover" />
                                <div className='absolute top-4 left-4'>
                                    <span className='bg-white text-button px-4 py-2 rounded-full text-sm font-medium'>
                                        {blog.category}
                                    </span>
                                </div>
                            </div>
                            <div className='p-2'>
                                <h3 className='text-2xl font-bold text-black mb-3'>
                                    {blog.title}
                                </h3>
                                <p className='text-gray-500 description mb-2 line-clamp-3'>
                                    {blog.description}
                                </p>
                                <p className='text-gray-400 text-sm'>
                                    {blog.time}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
           
        </div>
    )
}

export default blog