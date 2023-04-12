# lupinui

> Made with create-react-library

[![NPM](https://img.shields.io/npm/v/lupinui.svg)](https://www.npmjs.com/package/lupinui) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save lupinui
```

## Usage

```jsx
import React, { Component } from 'react'

import MyComponent from 'lupinui'
import 'lupinui/dist/index.css'

class Example extends Component {
  render() {
    return 
      <div className='container'>
        <Button text={'Primary'} type={'primary'} />
        <Button text={'Dashed'} type={'dashed'} />
        <Button text={'Text'} type={'text'} />
        <Button text={'Link'} type={'link'} />
      </div>
  }
}
```

## License

MIT © [seckinblgr](https://github.com/seckinblgr)
