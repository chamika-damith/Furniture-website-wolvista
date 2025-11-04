import React from 'react'
import Image from 'next/image'
function Section08() {
    return (
        <div className='margin-y'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                <div className='relative'>
                    <Image src="/image/Home/Rectangle.png" alt="Section08" width={1920} height={500} className='w-full' />
                    {/* Color Swatches */}
                    <div className='absolute left-2 top-1/2 -translate-y-1/2 flex flex-col gap-2'>
                        <div className='w-6 h-6 rounded-full bg-black border-2 border-white shadow-md cursor-pointer hover:scale-110 transition-transform'></div>
                        <div className='w-6 h-6 rounded-full bg-gray-700 border-2 border-white shadow-md cursor-pointer hover:scale-110 transition-transform'></div>
                        <div className='w-6 h-6 rounded-full bg-green-600 border-2 border-white shadow-md cursor-pointer hover:scale-110 transition-transform' style={{backgroundColor: '#7B8F7E'}}></div>
                    </div>
                    <div className='absolute top-0 left-0 right-0 flex  flex-col items-center justify-center h-full  '>
                        <Image src="/image/Home/Chair01.png" alt="Section08" width={350} height={350} className='w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] md:h-[250px] md:w-[250px] lg:h-[200px] lg:w-[200px]  xl:h-[250px] xl:w-[250px] 2xl:h-[350px] 2xl:w-[350px]' />
                        <div className='absolute bottom-0 left-0 right-0 flex flex-row  justify-between items-center 2xl:gap-2'>
                            <div className='text-[14px] sm:text-[25px] md:text-[16px] lg:text-[18px] xl:text-[20px] 2xl:text-[22px] font-semibold p-4 2xl:pl-12'>
                                Yellow Chair
                            </div>
                            <div className='text-[16px] sm:text-[35px] md:text-[18px] lg:text-[18px] xl:text-[24px] 2xl:text-[28px] font-semibold p-4 '>
                                $126.00
                            </div>
                            <div className='cursor-pointer transition-all duration-300 hover:scale-110 hover:rotate-12'>
                                <Image src="/image/Icon/Buttonicongray.png" alt="Section08" width={80} height={80} className='w-[60px] h-[60px] sm:w-[100px] sm:h-[100px] md:w-[64px] md:h-[64px] lg:w-[50px] lg:h-[50px]  xl:w-[60px] xl:h-[60px] 2xl:w-[80px] 2xl:h-[80px]' />
                            </div>

                        </div>
                    </div>
                </div>
                <div className='relative'>
                    <Image src="/image/Home/Rectangle.png" alt="Section08" width={1920} height={500} className='w-full' />
                    <div className='absolute left-2 top-1/2 -translate-y-1/2 flex flex-col gap-2'>
                        <div className='w-6 h-6 rounded-full bg-black border-2 border-white shadow-md cursor-pointer hover:scale-110 transition-transform'></div>
                        <div className='w-6 h-6 rounded-full bg-gray-700 border-2 border-white shadow-md cursor-pointer hover:scale-110 transition-transform'></div>
                        <div className='w-6 h-6 rounded-full bg-green-600 border-2 border-white shadow-md cursor-pointer hover:scale-110 transition-transform' style={{backgroundColor: '#7B8F7E'}}></div>
                    </div>
                    <div className='absolute top-0 left-0 right-0 flex  flex-col items-center justify-center h-full  '>
                        <Image src="/image/Home/Chair02.png" alt="Section08" width={350} height={350} className='w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] md:h-[250px] md:w-[250px] lg:h-[200px] lg:w-[200px]  xl:h-[250px] xl:w-[250px] 2xl:h-[350px] 2xl:w-[350px]' />
                        <div className='absolute bottom-0 left-0 right-0 flex flex-row  justify-between items-center 2xl:gap-2'>
                            <div className='text-[14px] sm:text-[25px] md:text-[16px] lg:text-[18px] xl:text-[20px] 2xl:text-[22px] font-semibold p-4 2xl:pl-12'>
                                Yellow Chair
                            </div>
                            <div className='text-[16px] sm:text-[35px] md:text-[18px] lg:text-[18px] xl:text-[24px] 2xl:text-[28px] font-semibold p-4 '>
                                $126.00
                            </div>
                            <div className='cursor-pointer transition-all duration-300 hover:scale-110 hover:rotate-12'>
                                <Image src="/image/Icon/Buttonicongray.png" alt="Section08" width={80} height={80} className='w-[60px] h-[60px] sm:w-[100px] sm:h-[100px] md:w-[64px] md:h-[64px] lg:w-[50px] lg:h-[50px]  xl:w-[60px] xl:h-[60px] 2xl:w-[80px] 2xl:h-[80px]' />
                            </div>

                        </div>
                    </div>
                </div>
                <div className='relative'>
                    <Image src="/image/Home/Rectangle.png" alt="Section08" width={1920} height={500} className='w-full' />
                    <div className='absolute left-2 top-1/2 -translate-y-1/2 flex flex-col gap-2'>
                        <div className='w-6 h-6 rounded-full bg-black border-2 border-white shadow-md cursor-pointer hover:scale-110 transition-transform'></div>
                        <div className='w-6 h-6 rounded-full bg-gray-700 border-2 border-white shadow-md cursor-pointer hover:scale-110 transition-transform'></div>
                        <div className='w-6 h-6 rounded-full bg-green-600 border-2 border-white shadow-md cursor-pointer hover:scale-110 transition-transform' style={{backgroundColor: '#7B8F7E'}}></div>
                    </div>
                    <div className='absolute top-0 left-0 right-0 flex  flex-col items-center justify-center h-full  '>
                        <Image src="/image/Home/Chair03.png" alt="Section08" width={350} height={350} className='w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] md:h-[250px] md:w-[250px] lg:h-[200px] lg:w-[200px]  xl:h-[250px] xl:w-[250px] 2xl:h-[350px] 2xl:w-[350px]' />
                        <div className='absolute bottom-0 left-0 right-0 flex flex-row  justify-between items-center 2xl:gap-2'>
                            <div className='text-[14px] sm:text-[25px] md:text-[16px] lg:text-[18px] xl:text-[20px] 2xl:text-[22px] font-semibold p-4 2xl:pl-12'>
                                Yellow Chair
                            </div>
                            <div className='text-[16px] sm:text-[35px] md:text-[18px] lg:text-[18px] xl:text-[24px] 2xl:text-[28px] font-semibold p-4 '>
                                $126.00
                            </div>
                            <div className='cursor-pointer transition-all duration-300 hover:scale-110 hover:rotate-12'>
                                <Image src="/image/Icon/Buttonicongray.png" alt="Section08" width={80} height={80} className='w-[60px] h-[60px] sm:w-[100px] sm:h-[100px] md:w-[64px] md:h-[64px] lg:w-[50px] lg:h-[50px]  xl:w-[60px] xl:h-[60px] 2xl:w-[80px] 2xl:h-[80px]' />
                            </div>

                        </div>
                    </div>
                </div>
                <div className='relative'>
                    <Image src="/image/Home/Rectangle.png" alt="Section08" width={1920} height={500} className='w-full' />
                    <div className='absolute left-2 top-1/2 -translate-y-1/2 flex flex-col gap-2'>
                        <div className='w-6 h-6 rounded-full bg-black border-2 border-white shadow-md cursor-pointer hover:scale-110 transition-transform'></div>
                        <div className='w-6 h-6 rounded-full bg-gray-700 border-2 border-white shadow-md cursor-pointer hover:scale-110 transition-transform'></div>
                        <div className='w-6 h-6 rounded-full bg-green-600 border-2 border-white shadow-md cursor-pointer hover:scale-110 transition-transform' style={{backgroundColor: '#7B8F7E'}}></div>
                    </div>
                    <div className='absolute top-0 left-0 right-0 flex  flex-col items-center justify-center h-full  '>
                        <Image src="/image/Home/Chair04.png" alt="Section08" width={350} height={350} className='w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] md:h-[250px] md:w-[250px] lg:h-[200px] lg:w-[200px]  xl:h-[250px] xl:w-[250px] 2xl:h-[350px] 2xl:w-[350px]' />
                        <div className='absolute bottom-0 left-0 right-0 flex flex-row  justify-between items-center 2xl:gap-2'>
                            <div className='text-[14px] sm:text-[25px] md:text-[16px] lg:text-[18px] xl:text-[20px] 2xl:text-[22px] font-semibold p-4 2xl:pl-12'>
                                Yellow Chair
                            </div>
                            <div className='text-[16px] sm:text-[35px] md:text-[18px] lg:text-[18px] xl:text-[24px] 2xl:text-[28px] font-semibold p-4 '>
                                $126.00
                            </div>
                            <div className='cursor-pointer transition-all duration-300 hover:scale-110 hover:rotate-12'>
                                <Image src="/image/Icon/Buttonicongray.png" alt="Section08" width={80} height={80} className='w-[60px] h-[60px] sm:w-[100px] sm:h-[100px] md:w-[64px] md:h-[64px] lg:w-[50px] lg:h-[50px]  xl:w-[60px] xl:h-[60px] 2xl:w-[80px] 2xl:h-[80px]' />
                            </div>

                        </div>
                    </div>
                </div>
                <div className='relative'>
                    <Image src="/image/Home/Rectangle.png" alt="Section08" width={1920} height={500} className='w-full' />
                    <div className='absolute left-2 top-1/2 -translate-y-1/2 flex flex-col gap-2'>
                        <div className='w-6 h-6 rounded-full bg-black border-2 border-white shadow-md cursor-pointer hover:scale-110 transition-transform'></div>
                        <div className='w-6 h-6 rounded-full bg-gray-700 border-2 border-white shadow-md cursor-pointer hover:scale-110 transition-transform'></div>
                        <div className='w-6 h-6 rounded-full bg-green-600 border-2 border-white shadow-md cursor-pointer hover:scale-110 transition-transform' style={{backgroundColor: '#7B8F7E'}}></div>
                    </div>
                    <div className='absolute top-0 left-0 right-0 flex  flex-col items-center justify-center h-full  '>
                        <Image src="/image/Home/Chair05.png" alt="Section08" width={350} height={350} className='w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] md:h-[250px] md:w-[250px] lg:h-[200px] lg:w-[200px]  xl:h-[250px] xl:w-[250px] 2xl:h-[350px] 2xl:w-[350px]' />
                        <div className='absolute bottom-0 left-0 right-0 flex flex-row  justify-between items-center 2xl:gap-2'>
                            <div className='text-[14px] sm:text-[25px] md:text-[16px] lg:text-[18px] xl:text-[20px] 2xl:text-[22px] font-semibold p-4 2xl:pl-12'>
                                Yellow Chair
                            </div>
                            <div className='text-[16px] sm:text-[35px] md:text-[18px] lg:text-[18px] xl:text-[24px] 2xl:text-[28px] font-semibold p-4 '>
                                $126.00
                            </div>
                            <div className='cursor-pointer transition-all duration-300 hover:scale-110 hover:rotate-12'>
                                <Image src="/image/Icon/Buttonicongray.png" alt="Section08" width={80} height={80} className='w-[60px] h-[60px] sm:w-[100px] sm:h-[100px] md:w-[64px] md:h-[64px] lg:w-[50px] lg:h-[50px]  xl:w-[60px] xl:h-[60px] 2xl:w-[80px] 2xl:h-[80px]' />
                            </div>

                        </div>
                    </div>
                </div>
                <div className='relative'>
                    <Image src="/image/Home/Rectangle.png" alt="Section08" width={1920} height={500} className='w-full' />
                    <div className='absolute left-2 top-1/2 -translate-y-1/2 flex flex-col gap-2'>
                        <div className='w-6 h-6 rounded-full bg-black border-2 border-white shadow-md cursor-pointer hover:scale-110 transition-transform'></div>
                        <div className='w-6 h-6 rounded-full bg-gray-700 border-2 border-white shadow-md cursor-pointer hover:scale-110 transition-transform'></div>
                        <div className='w-6 h-6 rounded-full bg-green-600 border-2 border-white shadow-md cursor-pointer hover:scale-110 transition-transform' style={{backgroundColor: '#7B8F7E'}}></div>
                    </div>
                    <div className='absolute top-0 left-0 right-0 flex  flex-col items-center justify-center h-full  '>
                        <Image src="/image/Home/Chair05.png" alt="Section08" width={350} height={350} className='w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] md:h-[250px] md:w-[250px] lg:h-[200px] lg:w-[200px]  xl:h-[250px] xl:w-[250px] 2xl:h-[350px] 2xl:w-[350px]' />
                        <div className='absolute bottom-0 left-0 right-0 flex flex-row  justify-between items-center 2xl:gap-2'>
                            <div className='text-[14px] sm:text-[25px] md:text-[16px] lg:text-[18px] xl:text-[20px] 2xl:text-[22px] font-semibold p-4 2xl:pl-12'>
                                Yellow Chair
                            </div>
                            <div className='text-[16px] sm:text-[35px] md:text-[18px] lg:text-[18px] xl:text-[24px] 2xl:text-[28px] font-semibold p-4 '>
                                $126.00
                            </div>
                            <div className='cursor-pointer transition-all duration-300 hover:scale-110 hover:rotate-12'>
                                <Image src="/image/Icon/Buttonicongray.png" alt="Section08" width={80} height={80} className='w-[60px] h-[60px] sm:w-[100px] sm:h-[100px] md:w-[64px] md:h-[64px] lg:w-[50px] lg:h-[50px]  xl:w-[60px] xl:h-[60px] 2xl:w-[80px] 2xl:h-[80px]' />
                            </div>

                        </div>
                    </div>
                </div>
                <div className='relative'>
                    <Image src="/image/Home/Rectangle.png" alt="Section08" width={1920} height={500} className='w-full' />
                    <div className='absolute left-2 top-1/2 -translate-y-1/2 flex flex-col gap-2'>
                        <div className='w-6 h-6 rounded-full bg-black border-2 border-white shadow-md cursor-pointer hover:scale-110 transition-transform'></div>
                        <div className='w-6 h-6 rounded-full bg-gray-700 border-2 border-white shadow-md cursor-pointer hover:scale-110 transition-transform'></div>
                        <div className='w-6 h-6 rounded-full bg-green-600 border-2 border-white shadow-md cursor-pointer hover:scale-110 transition-transform' style={{backgroundColor: '#7B8F7E'}}></div>
                    </div>
                    <div className='absolute top-0 left-0 right-0 flex  flex-col items-center justify-center h-full  '>
                        <Image src="/image/Home/Chair05.png" alt="Section08" width={350} height={350} className='w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] md:h-[250px] md:w-[250px] lg:h-[200px] lg:w-[200px]  xl:h-[250px] xl:w-[250px] 2xl:h-[350px] 2xl:w-[350px]' />
                        <div className='absolute bottom-0 left-0 right-0 flex flex-row  justify-between items-center 2xl:gap-2'>
                            <div className='text-[14px] sm:text-[25px] md:text-[16px] lg:text-[18px] xl:text-[20px] 2xl:text-[22px] font-semibold p-4 2xl:pl-12'>
                                Yellow Chair
                            </div>
                            <div className='text-[16px] sm:text-[35px] md:text-[18px] lg:text-[18px] xl:text-[24px] 2xl:text-[28px] font-semibold p-4 '>
                                $126.00
                            </div>
                            <div className='cursor-pointer transition-all duration-300 hover:scale-110 hover:rotate-12'>
                                <Image src="/image/Icon/Buttonicongray.png" alt="Section08" width={80} height={80} className='w-[60px] h-[60px] sm:w-[100px] sm:h-[100px] md:w-[64px] md:h-[64px] lg:w-[50px] lg:h-[50px]  xl:w-[60px] xl:h-[60px] 2xl:w-[80px] 2xl:h-[80px]' />
                            </div>

                        </div>
                    </div>
                </div>
                <div className='relative'>
                    <Image src="/image/Home/Rectangle.png" alt="Section08" width={1920} height={500} className='w-full' />
                    <div className='absolute left-2 top-1/2 -translate-y-1/2 flex flex-col gap-2'>
                        <div className='w-6 h-6 rounded-full bg-black border-2 border-white shadow-md cursor-pointer hover:scale-110 transition-transform'></div>
                        <div className='w-6 h-6 rounded-full bg-gray-700 border-2 border-white shadow-md cursor-pointer hover:scale-110 transition-transform'></div>
                        <div className='w-6 h-6 rounded-full bg-green-600 border-2 border-white shadow-md cursor-pointer hover:scale-110 transition-transform' style={{backgroundColor: '#7B8F7E'}}></div>
                    </div>
                    <div className='absolute top-0 left-0 right-0 flex  flex-col items-center justify-center h-full  '>
                        <Image src="/image/Home/Chair05.png" alt="Section08" width={350} height={350} className='w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] md:h-[250px] md:w-[250px] lg:h-[200px] lg:w-[200px]  xl:h-[250px] xl:w-[250px] 2xl:h-[350px] 2xl:w-[350px]' />
                        <div className='absolute bottom-0 left-0 right-0 flex flex-row  justify-between items-center 2xl:gap-2'>
                            <div className='text-[14px] sm:text-[25px] md:text-[16px] lg:text-[18px] xl:text-[20px] 2xl:text-[22px] font-semibold p-4 2xl:pl-12'>
                                Yellow Chair
                            </div>
                            <div className='text-[16px] sm:text-[35px] md:text-[18px] lg:text-[18px] xl:text-[24px] 2xl:text-[28px] font-semibold p-4 '>
                                $126.00
                            </div>
                            <div className='cursor-pointer transition-all duration-300 hover:scale-110 hover:rotate-12'>
                                <Image src="/image/Icon/Buttonicongray.png" alt="Section08" width={80} height={80} className='w-[60px] h-[60px] sm:w-[100px] sm:h-[100px] md:w-[64px] md:h-[64px] lg:w-[50px] lg:h-[50px]  xl:w-[60px] xl:h-[60px] 2xl:w-[80px] 2xl:h-[80px]' />
                            </div>

                        </div>
                    </div>
                </div>
                <div className='relative'>
                    <Image src="/image/Home/Rectangle.png" alt="Section08" width={1920} height={500} className='w-full' />
                    <div className='absolute left-2 top-1/2 -translate-y-1/2 flex flex-col gap-2'>
                        <div className='w-6 h-6 rounded-full bg-black border-2 border-white shadow-md cursor-pointer hover:scale-110 transition-transform'></div>
                        <div className='w-6 h-6 rounded-full bg-gray-700 border-2 border-white shadow-md cursor-pointer hover:scale-110 transition-transform'></div>
                        <div className='w-6 h-6 rounded-full bg-green-600 border-2 border-white shadow-md cursor-pointer hover:scale-110 transition-transform' style={{backgroundColor: '#7B8F7E'}}></div>
                    </div>
                    <div className='absolute top-0 left-0 right-0 flex  flex-col items-center justify-center h-full  '>
                        <Image src="/image/Home/Chair02.png" alt="Section08" width={350} height={350} className='w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] md:h-[250px] md:w-[250px] lg:h-[200px] lg:w-[200px]  xl:h-[250px] xl:w-[250px] 2xl:h-[350px] 2xl:w-[350px]' />
                        <div className='absolute bottom-0 left-0 right-0 flex flex-row  justify-between items-center 2xl:gap-2'>
                            <div className='text-[14px] sm:text-[25px] md:text-[16px] lg:text-[18px] xl:text-[20px] 2xl:text-[22px] font-semibold p-4 2xl:pl-12'>
                                Yellow Chair
                            </div>
                            <div className='text-[16px] sm:text-[35px] md:text-[18px] lg:text-[18px] xl:text-[24px] 2xl:text-[28px] font-semibold p-4 '>
                                $126.00
                            </div>
                            <div className='cursor-pointer transition-all duration-300 hover:scale-110 hover:rotate-12'>
                                <Image src="/image/Icon/Buttonicongray.png" alt="Section08" width={80} height={80} className='w-[60px] h-[60px] sm:w-[100px] sm:h-[100px] md:w-[64px] md:h-[64px] lg:w-[50px] lg:h-[50px]  xl:w-[60px] xl:h-[60px] 2xl:w-[80px] 2xl:h-[80px]' />
                            </div>

                        </div>
                    </div>
                </div>

            </div>
{/* gg */}
{/* test */}
        </div>
    )
}

export default Section08