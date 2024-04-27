import Link from 'next/link';
import React from 'react';

interface LinkItem {
    title: string;
    link: string;
}

function NavLink({ item }: { item: LinkItem }) {
    return (
        <Link className='block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white' href={item.link}>
            {item.title}
        </Link>
    );
}

export default NavLink;
