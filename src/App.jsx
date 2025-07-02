import React from 'react'

const App = () => {
  return (
    <div>
      <h1>Hello World</h1>
      <img src="https://picsum.photos/200/300" alt="" />
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <button onClick={() => alert('Hello World')}>Click me</button>
      </ul>
    </div>
  )
}

export default App