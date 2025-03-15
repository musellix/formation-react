import React from 'react'

export default function ModalContent({closeModal}) {



  return (
    // le fond gris fullscreen de la modal
    <div 
        onClick={closeModal}
        className='fixed inset-0 bg-slate-800/75 flex items-center justify-center'
    >
        
        {/* la popup modal */}
        <div 
            className='bg-slate-300 text-slate-900 p-10 rounded relative mb-[10vh]'
            onClick={e => e.stopPropagation()}    
        >
            <p>Here is the content</p>

            {/* la croix pour fermer */}
            <button
                onClick={closeModal}
                className='absolute top-1 right-1 w-7 h-7 bg-red-600 text-slate-100 rounded flex justify-center items-center'
            >
                X
            </button>
        </div>
    </div>
  )
}
