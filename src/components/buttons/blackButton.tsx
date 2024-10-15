import React from 'react'

interface Props {
 text: string;
}

export default function BlackButton({ text }: Props) {
  return (
    <button type='button' className='cursor-pointer w-fit rounded-lg py-1 px-5 flex items-center justify-center text-50 text-xl font-medium border border-500 bg-gradientBlack'>
      {text}
    </button>
  )
}
