import React, { useEffect } from 'react'
import { Icon, InlineIcon } from '@iconify/react';
import linkedinFilled from '@iconify/icons-ant-design/linkedin-filled';
import instagramFilled from '@iconify/icons-ant-design/instagram-filled';
const footer = () => {
  return (
    <div className="footer w-100">
      <div className="footer-links">
        <a href="https://www.linkedin.com/in/matan-nahmani"><Icon icon={linkedinFilled} /></a>
        <a href="https://www.instagram.com/matannahamani/"><Icon icon={instagramFilled}/></a>
      </div>
      <div className="footer-copyright">
        Matan Nahmani 2020©
      </div>
    </div>
  )
}
export default footer;