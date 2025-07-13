
import { createRoot } from 'react-dom/client'
import App from './App'

// const _anotherElement=( <a href='https://google.com'>Visit Google</a>)


// const reactElement= React.createElement(
//   'a',
//   {
//     href:'https://google.com', target:'_blank'
//   },
//   'Click me to visit google'
// )

createRoot(document.getElementById('root')).render(

  // reactElement

  <App/>
)
