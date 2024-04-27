import Image from 'next/image'
import React from 'react'

function About() {
    return (
        <section className='text-center'>
            <div className='md:grid md:grid-clos-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16'>
                <Image
                    src={"/about-pic.jpeg"}
                    width={500}
                    height={500}
                    alt="about-pic.jpeg"
                />
                <div>
                    <h2 className='text-4xl font-bold text-white mb-4'>About me</h2>
                    <p className='text-base md:text-lg'>
                        A backend developer proficient in Java and Java EE, with a focus on Spring Boot, plays a crucial role in building the server-side components of modern web applications. Java serves as the primary programming language, while frameworks like Java EE and Spring Boot provide a robust foundation for developing scalable, maintainable, and efficient backend systems.
                    </p>
                    <div className='flex flex-row mt-8'>
                       <span className='mr-3 font-semibold hover:text-white text-[#ADB7BE] border-b border-purple-500'>Skills</span>
                       <span>Education</span>
                       <span>Experience</span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About