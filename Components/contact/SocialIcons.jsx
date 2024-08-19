import React from 'react'
import {BsFacebook, BsInstagram, BsLinkedin, BsTelegram, BsTiktok, BsWhatsapp} from 'react-icons/bs'

import {FaLinkedin} from 'react-icons/fa';
import {SiGmail} from 'react-icons/si'

    const SocialIcons = () => {
        return (
          <div className='flex justify-center items-center gap-2'>
             <a href='https://www.facebook.com/profile.php?id=100002232553764&mibextid=ZbWKwL' target='_blank' className='text-3xl hover:opacity-70' >
              <BsFacebook/>
              </a> 
              <a href='https://whatsapp.com/channel/0029VaeREowFHWq9Z4MIyO08' target='_blank' className='text-3xl hover:opacity-70' >
              <BsWhatsapp/>
              
              </a>
              <a href='https://www.instagram.com/doaa_real_estate?igsh=NGVhN2U2NjQ0Yg==' target='_blank' className='text-3xl hover:opacity-70' >
              <BsInstagram/>
              
              </a>
              <a href='https://www.linkedin.com/in/doaa-osman-418669301?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' target='_blank' className='text-3xl hover:opacity-70' >
              <BsLinkedin/>
              </a>
          
             <a target='_blank' href='mailto:osmandoaa71@gmail.com' className='text-3xl hover:opacity-70'>
              <SiGmail/>
              </a>
          </div>
        )
      }

export default SocialIcons