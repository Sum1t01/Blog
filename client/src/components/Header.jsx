import React from 'react'
import { Button, Navbar, TextInput } from 'flowbite-react';
import { Link, useLocation } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';

function Header() {

    const path = useLocation().pathname;

    return (
        <Navbar className='border-b-2'>
            <Link to={'/'} className='text-sm sm:text-xl self-center whitespace-nowrap font-semibold text-white bg-gradient-to-r from-blue-700 via-purple-700 to-pink-700 rounded px-2 py-1'>
                Blogger
            </Link>

            <form>
                <TextInput
                    type='text'
                    placeholder='Search'
                    rightIcon={SearchIcon}
                    className='hidden lg:inline'
                />
            </form>


            <Button
                className='h-10 w-12 lg:hidden'
                color='gray'
                pill
            >
                <SearchIcon />
            </Button>


            <div className='flex gap-4 md:order-2'>
                <Button
                    className='h-10 w-12 hidden sm:inline'
                    color='gray'
                    pill
                >
                    <DarkModeOutlinedIcon />
                </Button>

                <Link to={'/sign-in'}>
                    <Button className='bg-gradient-to-r from-blue-700 to-purple-700'>
                        Sign In
                    </Button>
                </Link>
                <Navbar.Toggle />
            </div>


            <Navbar.Collapse>
                <Navbar.Link active={path==='/'} as={'div'}>
                    <Link to='/'>
                        Home
                    </Link>
                </Navbar.Link>

                <Navbar.Link active={path==='/about'} as={'div'}>
                    <Link to='/about'>
                        About
                    </Link>
                </Navbar.Link>

                <Navbar.Link active={path==='/projects'} as={'div'}>
                    <Link to='/projects'>
                        Projects
                    </Link>
                </Navbar.Link>
            </Navbar.Collapse>


        </Navbar>

    )
}

export default Header;