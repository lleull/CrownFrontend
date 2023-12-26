import React from 'react'
import './suc.css'


const Successmoda = () => {
    // const navigate = useNavigate()

    const change = () => {
    window.location.reload(false)
    }

  return (
    <div>
        <div className='modals'>
            <div className="suc">
                <h1>Thanks for Your Support</h1>
                <p>Your pledge brings us to one step closer to sharing MastrCraft Bamboo Monitor Riser Worldwide. you will get an email onceour campaign is completed</p>
               <button onClick={change}>Got it</button>
            </div>
        </div>
    </div>
  )
}

export default Successmoda