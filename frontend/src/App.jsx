import './App.css'

function App() {


  return (
    <>
    <h1>My first API</h1>
    <article>
      <h2>Endpoints for my API</h2>
      <ul>
        <li>
          /api/hello - Returns a simple greeting message. Also takes a query parameter <code>name</code> to personalize the greeting.
        </li>
        <li>
          /api/brooklyn_hangs - Returns an array of objects of places that are cool to visit or hang out at.
        </li>
      </ul>
    </article>
     <footer>
      <p>
        copyright &copy; {new Date().getFullYear()} - My First API. All rights reserved.
      </p>
     </footer>
    </>
  )
}

export default App