import React from 'react'
import Image from 'next/image';
function HeroSection() {
    return (
        <section>
            <div className='grid grid-cols-1 lg:grid-cols-12'>
                <div className='col-span-7 place-self-center text-center sm:text-left'>
                    <h1 className='text-white mb-4 text  lg:text-6xl sm:text-5xl text-4xl lg:text-6xl '>
                        Hello I'm Abdelhadi ElBcir software engineer
                    </h1>
                    <p className='text-[#ADB7BE] text-base sm:text-lg lg:text-xl'>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non aperiam, ut maxime harum ipsam, voluptates, quis amet impedit earum nulla sint distinctio ex soluta repellat architecto? Consequatur soluta quod voluptate?
                    </p>
                    <div className='mt-4'>
                        <button className='px-6 w-full py-3 sm:w-fit rounded-full mr-4 bg-white hover:bg-slate-200 text-black'>Contact Me</button>
                        <button className='px-6 w-full py-3 sm:w-fit rounded-full mr-4 bg-transparent hover:bg-slate-800 text-white border border-white mt-3'>Download CV</button>
                    </div>
                </div>
                <div className='col-span-5 place-self-center mt-4 lg:mt-0'>
                    <div className='rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px]  relative'>
                        <Image
                            src="/Abdelhadi_El_Bcir.jpeg"
                            alt="hero section"
                            className='rounded-full absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
                            width={300}
                            height={300}
                            
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection;