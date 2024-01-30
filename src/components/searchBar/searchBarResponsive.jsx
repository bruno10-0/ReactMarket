// SearchBarResponsive.js
import { useEffect } from 'react';
import { CiSearch } from 'react-icons/ci';
import { IoCloseOutline } from 'react-icons/io5';
import './searchResponsive.css';

export const SearchBarResponsive = () => {
    useEffect(() => {
        const search = document.querySelector('.searchResposive');
        const inputBox = document.querySelector('.input-box-responsive');
        const closeIcon = document.querySelector('.close-icon2')

        search.addEventListener('click', () => inputBox.classList.add('open'));
        closeIcon.addEventListener('click', () => {
            inputBox.classList.remove('open');
            setTimeout(() => {
                inputBox.style.position = 'fixed';
                inputBox.style.top = '50%';
                inputBox.style.left = '23%';
                inputBox.style.transform = 'translateY(-50%)';
            }, 0); 
        });

        return () => {
            search.removeEventListener('click', () => inputBox.classList.add('open'));
            closeIcon.removeEventListener('click', () => {
                inputBox.classList.remove('open');
                setTimeout(() => {
                    inputBox.style.position = 'fixed';
                    inputBox.style.top = '50%';
                    inputBox.style.left = '20%';
                    inputBox.style.transform = 'translateY(-50%)';
                }, 600);
            });
        };
    }, []);

    return (
        <>
            <div className="input-box-responsive">
                <input
                    placeholder='Buscar...'
                    type="text" />
                <span className='searchResposive top-2/4'>
                    <i><CiSearch className='search-icon2 w-4 h-4' /></i>
                </span>
                <i><IoCloseOutline className='close-icon2 w-4 h-4' /></i>
            </div>
        </>
    );
};
