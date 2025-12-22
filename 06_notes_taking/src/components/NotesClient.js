"use client"
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import Image from 'next/image'

const NotesClient = () => {
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    const [notes, setNotes] = useState([])
    const [loading, setLoading] = useState(false)
    const [load, setLoad] = useState(false)
    const [editId, setEditId] = useState(null)
    const [editTitle, setEditTitle] = useState("")
    const [editContent, setEditContent] = useState("")

    const createNote = async (e) => {
        e.preventDefault();

        if (!title || !content) {
            return;
        }
        setLoading(true);
        try {
            const response = await fetch("/api/notes", {
                method: 'POST',
                headers: { 'Content-Type': "application/json" },
                body: JSON.stringify({ title, content })
            })

            const result = await response.json();
            // console.log(result);
            toast.success("New note created!");
            setLoading(false)
            setTitle("")
            setContent("")


        } catch (error) {
            toast.error("Something went wrong!")
            console.log("Error while creating note : ", error);

        }

    }

    const getNotes = async () => {
        try {
            setLoad(true);
            const response = await fetch("/api/notes", {
                method: "GET",
            })
            const data = await response.json();
            setNotes(data.data)
            // console.log(data);
        } catch (error) {
            console.log("Error while fetching notes : ", error);
        } finally {
            setLoad(false)
        }
    }

    const deleteNote = async (id) => {

        if (!id) {
            return;
        }
        try {
            const response = await fetch(`/api/notes/${id}`, {
                method: "DELETE",
            })
            // console.log(response)
            if (response.ok) {
                setNotes((prev) => prev.filter((note) => note._id !== id));
                toast.success("Notes deleted successfully");
            }
        } catch (error) {
            toast.error("Error in deleting notes")
            console.log("Error while deleting : ", error);

        }
    }

    const updateNote = async (id) => {

        if (!editTitle || !editContent) {
            return;
        }
        setLoading(true);
        try {
            const response = await fetch(`/api/notes/${id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ title: editTitle, content: editContent })
            })

            if (response.ok) {
                const result = await response.json();
                toast.success("Edited successfull");
                // setNotes(notes.map((note) => (note._id === id ? result.data : note)))
                setNotes((prev) =>
                    prev.map((note) =>
                        note && note._id === id ? result.data : note
                    )
                );

                setEditId(null)
                setEditTitle("")
                setEditContent("")
            }
            setLoading(false)

        } catch (error) {
            toast.error("Something went wrong");
            console.log("Error in editing : ", error);
        }
    }

    const startEdit = (note) => {
        setEditId(note._id);
        setEditTitle(note.title);
        setEditContent(note.content);
    }
    const cancelEdit = (note) => {
        setEditId(null);
        setEditTitle("");
        setEditContent("");
    }




    useEffect(() => {
        getNotes();
    }, [loading])

    return (
        <div className='space-y-6'>
            <form onSubmit={createNote}
                className='p-6 bg-white rounded-lg shadow'>
                <h2 className='text-xl font-semibold text-black'>Create New Note</h2>
                <div className='space-y-4'>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                        placeholder='Note Title'
                        className='w-full text-gray-900 py-1.5 px-3 border border-gray-600 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500'
                    />

                    <textarea name="" id=""
                        placeholder='Note content'
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        rows={4}
                        required
                        className='w-full text-gray-900 py-1.5 px-3 border border-gray-600 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500'
                    ></textarea>

                    <button
                        type='Submit'
                        disabled={loading}
                        className='bg-blue-700 text-white px-5 py-1.5 rounded-md hover:bg-blue-900 font-semibold text-sm cursor-pointer disabled:opacity-40'>
                        {loading ? "Creating..." : "Create"}
                    </button>
                </div>
            </form>

            <div className='flex gap-3 flex-wrap'>
                {load ? "Loading Notes....." : (
                    notes.map((note) => (
                        <div key={note._id} className='bg-white min-h-[20vh] min-w-[25vw] px-4 py-2 w-fit rounded-lg hover:ring-2 hover:ring-red-600 '>
                            <div className='space-y-2'>
                                {editId === note._id ? (
                                    <>
                                        <input
                                            type="text"
                                            value={editTitle}
                                            onChange={(e) => setEditTitle(e.target.value)}
                                            required
                                            placeholder='Note Title'
                                            className='w-full text-gray-900 py-1.5 px-3 border border-gray-600 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500'
                                        />
                                        <textarea name="" id=""
                                            placeholder='Note content'
                                            value={editContent}
                                            onChange={(e) => setEditContent(e.target.value)}
                                            rows={4}
                                            required
                                            className='w-full text-gray-900 py-1.5 px-3 border border-gray-600 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500'
                                        ></textarea>

                                        <div className='space-x-3'>
                                            <button
                                                onClick={() => updateNote(note._id)}
                                                disabled={loading}
                                                className='bg-green-500 text-white px-5 py-1.5 rounded-md hover:bg-green-700 font-semibold text-sm cursor-pointer disabled:opacity-40'>
                                                {loading ? "Saving..." : "Save"}
                                            </button>
                                            <button
                                                onClick={() => cancelEdit(note)}
                                                disabled={loading}
                                                className='bg-red-500 text-white px-5 py-1.5 rounded-md hover:bg-red-700 font-semibold text-sm cursor-pointer disabled:opacity-40'>
                                                Cancel
                                            </button>

                                        </div>

                                    </>
                                ) : (<>
                                    <h1 className='text-black text-xl font-semibold w-fit'>{note.title}</h1>
                                    <p className='mt-3 text-sm text-gray-700 w-2/3'>{note.content}</p>
                                    <div className='flex flex-row-reverse gap-3 mt-3'>
                                        <button onClick={() => deleteNote(note._id)} className='cursor-pointer'><Image src={"/trash.gif"} alt="Trash Img" height={25} width={25} /></button>
                                        <button onClick={() => startEdit(note)} className='cursor-pointer'><Image src={"/edit.gif"} alt="Edit Img" height={25} width={25} /></button>
                                    </div>
                                </>)}
                            </div>

                        </div>
                    ))
                )}
            </div >
        </div >
    )
}

export default NotesClient
