import React, {useState} from 'react'

export default function Button(props) {
    const [active, setActive] = useState("")
	const [correct, setCorrect] = useState("correct")
  return (
    <button type='submit' onClick={props.onClick} className='btn btn-primary px-1 rounded-lg text-xs normal-case focus:bg-green-400'>
        {props.word + " Placeholder Word"}	
    </button>
  )
}
