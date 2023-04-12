import React from 'react'

import { Button } from 'lupinui'
import 'lupinui/dist/index.css'

const App = () => {
  return (
    <>
      <div className='container'>
        <Button text={'Primary'} type={'primary'} />
        <Button text={'Dashed'} type={'dashed'} />
        <Button text={'Text'} type={'text'} />
        <Button text={'Link'} type={'link'} />
      </div>
    </>
  )
}

export default App
