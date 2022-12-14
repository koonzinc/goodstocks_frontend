import React from 'react'

const Section3_Testimonial = () => {
  return (
    <section class="bg-white ">
        <div class="max-w-[70%] px-4 py-8 mx-auto text-center lg:py-16 lg:px-6 bg-white rounded-lg shadow-2xl mb-20">
            <figure class="max-w-screen-md mx-auto">
                <svg class="h-12 mx-auto mb-3 text-gray-400 " viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor"/>
                </svg> 
                <blockquote>
                    <p class="text-2xl font-medium text-gray-900 ">"My first thought when I laid eyes on this application was wow, I bet whoever made this is a highly-skilled developer. And if they're not already employed, whoever's looking at this should hire them"</p>
                </blockquote>
                <figcaption class="flex items-center justify-center mt-6 space-x-3">
                    <img class="w-6 h-6 rounded-full" src="https://upload.wikimedia.org/wikipedia/commons/d/d1/Brendan_Eich_Mozilla_Foundation_official_photo.jpg" alt="profile picture"/>
                    <div class="flex items-center divide-x-2 divide-gray-500 ">
                        <div class="pr-3 font-medium text-gray-900 ">Brendan Eich</div>
                        <div class="pl-3 text-sm font-light text-gray-500 ">Creator of JavaScript</div>
                    </div>
                </figcaption>
            </figure>
        </div>
    </section>
  )
}

export default Section3_Testimonial