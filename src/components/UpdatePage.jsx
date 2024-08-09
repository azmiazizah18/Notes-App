import { useEffect } from "react"
import { useState } from "react"
import { useParams, Link } from "react-router-dom"

export const Update = () => {
    const {id}  = useParams()
    const [formData, setFormData] = useState({
        title: '', body: ''
    })
    // console.log(id)

    useEffect(() => { 
        const getData = JSON.parse(localStorage.getItem('notesData') || '[]')
        const selectData = getData.find((data) => data.id === parseInt(id))

        setFormData(selectData)
    }, [id])

    const handleChange = (e) => {
        const { name, value } = e.target 
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }))
    }

    const handleClick = () => {
        const getData = JSON.parse(localStorage.getItem('notesData'))
        
        const updateData = getData.map(item => {
            if (item.id === parseInt(id)){
                return formData
            }
            return item
        })

        localStorage.setItem('notesData', JSON.stringify(updateData))

        alert("Data changed successfully!")
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
