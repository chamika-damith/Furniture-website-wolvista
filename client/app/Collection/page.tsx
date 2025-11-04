import React from 'react'
import Navbar from '../component/Navbar/Navbar'
import Footer from '../component/Footer/Footer'
import Image from 'next/image'
import Collection1 from '@/public/image/Collection/Collection1.png'
import Collection2 from '@/public/image/Collection/Collection2.png'
import Collection3 from '@/public/image/Collection/Collection3.png'
import Collection4 from '@/public/image/Collection/Collection4.png'
import Section08 from '../component/Home/Section08'

function page() {
    return (
        <div className='containerpaddin container mx-auto'>
            <Navbar />
            <div className='margin-y'>
                <div className="lg:flex flex-row items-center justify-between gap-4">
                    <div className="subtitle text-left">
                        Curated Creations for the Modern  <span className="hidden lg:block" /> Home
                    </div>
                    <div className="description w-auto ">
                        Every piece in The Everwood Collection tells a story of beauty, purpose, <span className="hidden lg:block" /> and enduring quality. Designed with modern sophistication and built  <span className="hidden lg:block" /> by skilled artisans, our collections bring warmth and character into
                        <span className="hidden lg:block" />every space.
                    </div>
                </div>

                <div className='margin-y'>
                    <div className='grid grid-cols-1  lg:grid-cols-3 gap-4'>
                        <div>
                            <Image src={Collection1} alt="Collection" className="w-full h-auto object-cover" />
                        </div>
                        <div>
                            <Image src={Collection2} alt="Collection" className="w-full h-auto object-cover" />
                        </div>
                        <div className='flex flex-col gap-4'>
                            <div>
                                <Image src={Collection3} alt="Collection" className="w-full h-auto object-cover" />
                            </div>
                            <div>
                                <Image src={Collection4} alt="Collection" className="w-full h-auto object-cover" />
                            </div>
                        </div>
                    </div>

                </div>
                <div className='margin-y'>
            <div className="small-text">
            Our Collections
            </div>
            <div className="lg:flex flex-row items-center justify-between gap-4">
                <div className="subtitle text-left">
                Curated Collections
                </div>
                
            </div>
            <Section08 />
        </div>
            </div>

        </div>
    )
}

export default page