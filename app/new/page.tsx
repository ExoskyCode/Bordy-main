import React from 'react'
import { CreateBoardForm } from '~/src/components/Board/CreateBoard/CreateBoardForm'

export default function NewBoardPage() {
  return (
    <div className='flex flex-col gap-10'>
      <h1 className="text-3xl">Create a new board</h1>
      <CreateBoardForm />
    </div>
    
  )
}
