import React from 'react'
import {useState} from 'react'
import Client from './component/clint'
import Editor from "./component/editor"

function Edditorpage () {
  const [clients1,setclients]=useState([
    {socker:1 ,username:'vikram'},
    {socker:2 ,username:'mahesh'}
    
  ])
  return (
    <div className='mainwrap'>
      <div className='sidewrap'>

        

        <div className='asidelogo'><img className='logo' src="/code-sync.png" alt="Logo1"/></div>
        <div className='asidemiddle'>
          connected person
          <div className='clintlist'>
            
              <Client 
            key={clients1.socker}
            username={clients1.username}
              />
           
          </div>
        </div>
              

        <div className='asidedown'>
          <button className='btn1'>room id</button>
          <button className='btn1' id='leave'>leave room</button>
        </div>
        </div>
      

      
      <div className='editorwrap'><Editor/></div>
    </div>
  )
}

export default Edditorpage
