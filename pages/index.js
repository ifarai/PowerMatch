import Head from 'next/head'
// import styles from '../styles/globals.css'
import Button from '../components/Button'
import ButtonList from '../components/ButtonList'
import { useAutoAnimate } from '@formkit/auto-animate/react'
import { useState } from 'react'


export default function Match() {

  const data1 = ['word1eee', 'word2e', 'word3e', 'word4e', 'word5e', 'word6e']
  const data2 = ['word1s', 'word2s', 'word3s', 'word4s', 'word5s', 'word6s']
  //state to come
  const [parent] = useAutoAnimate(/* optional config */)
  const [languageOneWords, setLanguageOneWords] = useState(data1)
  const [languageTwoWords, setLanguageTwoWords] = useState(data2)
  const [selectedLanguageOne, setSelectedLanguageOne] = useState("")
  const [selectedLanguageTwo, setSelectedLanguageTwo] = useState("")

  const checkSelected = (e) => {
    // e.preventDefault();
    console.log(e.target.innerHTML);
    console.log("poop");
    // setSelectedLanguageOne(e.target.innerHTML);
    setTimeout(console.log(selectedLanguageOne),2000)
    console.log(selectedLanguageOne);
  }
	
  

  return (
    <div className="flex flex-col flex-w items-center justify-center content-center">
      <Head>
        <title>Power Match</title>
        <meta name="description" content="Match common words from two different languages" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="prose flex flex-col flex-w items-center justify-center text-center">
        <h1 className="mt-4 px-8 ">
          Bienvenido a espnanol
        </h1>

        <p className="text-2xl font-medium mt-0">
          Select difficulty and then match corresponding pairs
        </p>

        <input type="range" min="0" step="50" max="750"  className="range range-xs range-accent mb-4 px-2" />

        <div className=" px-4 space-x-4 flex flex-row">
          <ButtonList ref={parent}>
            {languageOneWords.map((word, index) => {
              return (<Button key={index} word={word} onClick={(e)=>{
                setSelectedLanguageOne(e.target.innerHTML);
                checkSelected(e);
              }} />)
              // return (<button key={index} onClick={checkSelected} >{word}</button>)
            })}
          </ButtonList>

          <ButtonList ref={parent}>
            {languageTwoWords.map((word, index) => {
              return (<Button key={index} word={word} />)
            })}
          </ButtonList>
        </div>
      </main>

     
    </div>
  )
}
