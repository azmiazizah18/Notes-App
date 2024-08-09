import { useState } from 'react'
import { Link } from 'react-router-dom'

export const Create = () => {
    const [formData, setFormData] = useState({
        id: '',
        title: '',
        body: '',
        createdAt: ''
    })

    const handleChange = (e) => {
        const { name, value } = e.target 
        setFormData((values) => ({
            ...values, [name]: value
        }))
    }

    const handleClick = () => {
        const getId = JSON.parse(localStorage.getItem('notesData') || '[]')
        const x = Math.max(...getId.map(item => item.id), 0)
        const newId = x + 1
        const date = new Date().toISOString().slice(0, 10);

        const newData = { ...formData, id: newId, createdAt: date }
        const pushNewData = [...getId, newData]

        localStorage.setItem('notesData', JSON.stringify(pushNewData))

        alert('Saved successfully!')
    }

    return (
        <div className="card-body">
            <Link to="/" className="btn btn-sm w-fit m-8">Back</Link>

            <input type="text" placeholder="Title" className="input w-full" name="title" value={formData.title} onChange={handleChange} />
            <textarea className="textarea h-52" placeholder="Body" name="body" value={formData.body} onChange={handleChange}></textarea>
            
            <button className='btn btn-sm w-fit' onClick={handleClick}>Save</button>
        </div>
    )
}
