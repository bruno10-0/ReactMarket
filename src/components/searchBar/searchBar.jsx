import { useEffect } from 'react';
import './searchStyles.css';
import { CiSearch } from 'react-icons/ci';
import { IoCloseOutline } from 'react-icons/io5';

export const SearchBar = () => {
    useEffect(() => {
        const search = document.querySelector('.search');
        const inputBox = document.querySelector('.input-box');
        const closeIcon = document.querySelector('.close-icon')

        search.addEventListener('click', () => inputBox.classList.add('open'));
        closeIcon.addEventListener('click', () => inputBox.classList.remove('open'));
        return () => {
            search.removeEventListener('click', () => inputBox.classList.add('open'));
        
        };
    }, []);

    return (
        <>
            <div className="input-box">
                <input
                    className=''
                    placeholder='Buscar...'
                    type="text" />
                <span className='search '>
                    <i><CiSearch className='search-icon w-6 h-6' /></i>
                </span>
                <i><IoCloseOutline className='close-icon w-6 h-6' /></i>
            </div>
        </>
    );
};
