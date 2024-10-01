import React, { useState } from 'react'
import { useLoaderData, useParams } from 'react-router-dom'
import { Button, Checkbox, Label, TextInput,Textarea } from "flowbite-react";

const EditBooks=()=> {
  const {id} = useParams();
  const {bookTitle,authorName,imageURL,category,bookDescription,bookPDFURL} = useLoaderData() || {};


  const bookCategories =[
    "Fiction",
    "Non-Fiction",
    "Mistery",
    "Programming",
    "Science Fiction",
    "Fantasy",
    "Horror",
    "Bibliography",
    "Autobiography",
    "History",
    "Self-help",
    "Memoir",
    "Business",
    "Children Books",
    "Travel",
    "Religion",
    "Arts and Design"
  ]

  const[selectedBookCategory,setselectedBookCategory]=useState(bookCategories[0])

  const handleChangeSelectValue = (event)=>{
    console.log(event.target.value);
    setselectedBookCategory(event.target.value);
  }

 // handle book submission
 const handleUpdate = (event)=>{
     event.preventDefault();
     const form=event.target;

     const bookTitle = form.bookTitle.value;
      const authorName = form.authorName.value;
      const imageURL = form.imageURL.value;
      const category = form.categoryName.value;
      const bookDescription =form.bookDescription.value;
      const bookPDFURL= form.bookPDFURL.value;
     
      const updateBookObj = {
        bookTitle,authorName,imageURL,category,bookDescription,bookPDFURL
      }
      //console.log(bookObj)

      //update book
      fetch(`https://book-backend-ny.onrender.com//book/${id}`,{
        method:"PATCH",
        headers:{
          "Content-type":"application/json"
        },
        body:JSON.stringify(updateBookObj)
      }).then(res=>res.json()).then(data=>{
        alert("Book is updated successfully!!")
        
      })

 }
  return (
    <div className='px-4 my-12'>
      <h2 className='mb-8 text-3xl font-bold'>Update the Book data</h2>
      <form onSubmit={handleUpdate} className="flex  flex-col flex-wrap gap-4">
        {/*first row*/}
      <div className='flex gap-8'>
        <div className='lg:w-1/2'>
        <div className="mb-2 block">
          <Label 
          htmlFor="bookTitle"
           value="bookTitle" 
           />
        </div>
        <TextInput id="bookTitle"
        name='bookTitle'
         type="text"
          placeholder="Book Name"
          defaultValue={bookTitle}  />
      </div>
    
{/*author name */}

      <div className='lg:w-1/2'>
        <div className="mb-2 block">
          <Label 
          htmlFor="authorName"
           value="authorName" 
           />
        </div>
        <TextInput id="authorName"
        name='authorName'
         type="text"
          placeholder="Author Name" 
          defaultValue={authorName}  />
      </div>
  
      </div>
      {/*2 */}
      <div>
      <div className='flex gap-8'>
        <div className='lg:w-1/2'>
        <div className="mb-2 block">
          <Label 
          htmlFor="imageURL"
           value="imageURL" 
           />
        </div>
        <TextInput id="imageURL"
        name='imageURL'
         type="text"
          placeholder="Book Image URL" 
           defaultValue={imageURL} />
      </div>
{/* category*/}

      <div className='lg:w-1/2'>
      <div className="mb-2 block">
          <Label 
          htmlFor="inputState"
           value="Book Category" 
           />
        </div>

        <select id='inputState' name='categoryName' className='w-full rounded' value={selectedBookCategory}
          onchange={handleChangeSelectValue}>
          {
            bookCategories.map((option)=><option key={option} value={option}>{option}</option>)
          }
            

        </select>
        
      </div>

      </div>
      </div>

{/*book description */}
<div>
        <div className="mb-2 block">
          <Label
           htmlFor="bookDescription" 
           value="bookDescription" />
        </div>
        <Textarea
         id="bookDescription" 
        name="bookDescription"
         placeholder="Write your book decription..." 
          defaultValue={bookDescription} 
         
         className='w-full'
          rows={6} />
      
      </div>
      {/*book pdf link */}
      <div>
        <div className="mb-2 block">
          <Label
           htmlFor="bookPDFURL" 
           value="bookPDFURL" />
        </div>
        <TextInput
         id="bookPDFURL" 
         name="bookPDFURL"
         type="text"
          placeholder="Book PDF URL" 
           defaultValue={bookPDFURL}  />
      </div>
      <button type='submit' className='mt-5 bg-green-600 p-2 rounded'>
        Update Book

      </button>
    
    </form>

    </div>
  )
}

export default EditBooks