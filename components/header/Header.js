import Link from 'next/link'
import React from 'react'
import CategoryList from '../CategoryList'


function Header({category}) {
  return (
    <header className='header shadow'>
        <div className="header__inner py-4 flex max-w-5xl mx-auto justify-between align-middle">
            <h1 className='header__logo'>世界一周</h1>
            <ul className="header__nav flex">
                <li className='header__nav__item'>
                    <Link href={"/profile"}>プロフィール</Link>
                </li>
                <li className='header__nav__item group'>
                    <span>一覧</span>
                    <div className="category__list hidden group-hover:block">
                        <CategoryList category={category} />
                    </div>
                </li>
            </ul>
            
        </div>
    </header>
  )
}

export default Header