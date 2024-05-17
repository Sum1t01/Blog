import { Footer } from 'flowbite-react';
import React from 'react';
import { Link } from 'react-router-dom';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import XIcon from '@mui/icons-material/X';
import YouTubeIcon from '@mui/icons-material/YouTube';

function FooterCom() {
    return (
        <Footer container className='border border-t-8 border-teal-400'>
            <div className='w-full max-w-7xl mx-auto'>
                <div className='grid w-full justify-between sm:flex md:grid-cols-1'>
                    <div className='mt-5'>
                        <Link to={'/'} className='font-bold text-white bg-gradient-to-r from-blue-700 via-purple-700 to-pink-700 rounded px-2 py-1 text-lg'>
                            Blogger
                        </Link>
                    </div>

                    <div className='grid grid-cols-2 gap-8  mt-4 sm:grid-cols-3 sm:gap-6'>
                        <div>

                            <Footer.Title title='About' />
                            <Footer.LinkGroup col>
                                <Footer.Link
                                    href='https://youtube.com'
                                    target='_blank'
                                    rel='noopener noreferrer'>
                                    Learn Blogging
                                </Footer.Link>

                                <Footer.Link
                                    href='https://youtube.com'
                                    target='_blank'
                                    rel='noopener noreferrer'>
                                    Donate
                                </Footer.Link>
                            </Footer.LinkGroup>
                        </div>

                        <div>

                            <Footer.Title title='Follow Us' />
                            <Footer.LinkGroup col>
                                <Footer.Link
                                    href='https://youtube.com'
                                    target='_blank'
                                    rel='noopener noreferrer'>
                                    Github
                                </Footer.Link>

                                <Footer.Link
                                    href='https://youtube.com'
                                    target='_blank'
                                    rel='noopener noreferrer'>
                                    Linkedin
                                </Footer.Link>
                            </Footer.LinkGroup>
                        </div>

                        <div>

                            <Footer.Title title='Legal' />
                            <Footer.LinkGroup col>
                                <Footer.Link
                                    href='https://youtube.com'
                                    target='_blank'
                                    rel='noopener noreferrer'>
                                    Privacy Policy
                                </Footer.Link>

                                <Footer.Link
                                    href='https://youtube.com'
                                    target='_blank'
                                    rel='noopener noreferrer'>
                                    Terms of Use
                                </Footer.Link>
                            </Footer.LinkGroup>
                        </div>
                    </div>
                </div>

                <Footer.Divider />

                <div className='w-full sm:flex sm:items-center sm:justify-between'>
                    <Footer.Copyright href='https://youtube.com' by='Meta' year={new Date().getFullYear()} />
                    <div className='flex gap-6 sm:mt-0 mt-4 sm:justify-center'>
                        <Footer.Icon href='https://youtube.com' icon={FacebookIcon} />
                        <Footer.Icon href='https://youtube.com' icon={InstagramIcon} />
                        <Footer.Icon href='https://youtube.com' icon={GitHubIcon} />
                        <Footer.Icon href='https://youtube.com' icon={XIcon} />
                        <Footer.Icon href='https://youtube.com' icon={YouTubeIcon} />
                    </div>
                </div>
            </div>
        </Footer>
    )
}


export default FooterCom;
