import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BsGridFill } from 'react-icons/bs';
import { FaListUl, FaPen, FaTrashAlt } from 'react-icons/fa';
import { initialNotesData } from '../utils/index.js';

export const Home = () => {
    const [data, setData] = useState([]); 
    const [grid, setGrid] = useState(false);

    useEffect(() => {
        const notesData = JSON.parse(localStorage.getItem('notesData'));
        
        if (!notesData || notesData.length === 0) {
            localStorage.setItem('notesData', JSON.stringify(initialNotesData));
            setData(initialNotesData);
        } else {
            setData(notesData);
        }
    }, []); 

    const handleDelete = (id) => {
        const getData = data.filter((item) => item.id !== id);

        localStorage.setItem('notesData', JSON.stringify(getData));
        setData(getData);
    };

    const dataSort = data.sort((a, b) => b.id - a.id);

    return (
        <>
            <div className='flex justify-between gap-2 px-5 py-4'>
                <Link to="/create" className='btn btn-sm'><FaPen />Create New</Link>
                <div className='hidden md:flex gap-2'>
                    <button className={`btn btn-sm btn square ${!grid ? 'bg-accent' : ''}`} onClick={() => setGrid(false)}><BsGridFill /></button>
                    <button className={`btn btn-sm btn square ${grid ? 'bg-accent' : ''}`} onClick={() => setGrid(true)}><FaListUl /></button>
                </div>
            </div>
            
            <div className="card-body pb-20 max-6h-[80vh]">
                <h1 className="font-bold text-2xl">NOTES</h1>
                <div className={grid ? 'grid grid-cols-1 gap-2' : 'grid grid-cols-1 gap-2 md:grid-cols-4'}>
                    {/* card notes */}
                    {dataSort.length > 0 ? (
                        dataSort.map((item, index) => ( 
                            <div className='card w-full h-52 shadow-xl ease-in-out duration-300 hover:-translate-y-2' key={index}>
                                <Link to={`/update/${item.id}`} className="card-body p-5 h-full">
                                    <h2 className="card-title">{item.title}</h2>
                                    <p>{item.body.length > 52 ? item.body.substr(0, 52) + '...' : item.body.substr(0, 52)}</p>
                                    <p className='absolute bottom-4 text-neutral'>{item.createdAt}</p>
                                </Link>
                                <button className='btn btn-sm btn-error absolute bottom-3 right-3 p-2' onClick={() => handleDelete(item.id)}><FaTrashAlt /></button>
                            </div>
                        ))
                    ) : (
                        <p>No Data</p>
                    )}
                    {/* card notes */}
                </div>
            </div>
        </>
    );
};
