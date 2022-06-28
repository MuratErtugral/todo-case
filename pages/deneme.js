import { useEffect, useState } from 'react'

function Blog({ items }) {

    const [todoItem, setTodoItem] = useState("");
    const handleAdd = ()=>{
        console.log(todoItem);
      }

    return (
        <div className="w-3/4 mx-auto bg-blue-500 text-center">
        <h1 className="text-5xl" >ToDo List</h1>
      <div>
        <input 
        type="text"
        value= {todoItem}
        onChange={(e) => setTodoItem(e.target.value)}
        />
        <button type="button" onClick={handleAdd}>  Add</button>
      </div>
      <ul>
        {items.filter(item => !item.checked )
        .map(({id,title,checked})=>(
          <li key={id} 
          > 
          {title}
          </li>
        ))}
      </ul>
      </div>
    )
  }
  
  // This function gets called at build time on server-side.
  // It won't be called on client-side, so you can even do
  // direct database queries.
  export async function getStaticProps() {
    // Call an external API endpoint to get posts.
    // You can use any data fetching library
    const res = await fetch('http://localhost:3000/api/todos')
    const items = await res.json()
  
    // By returning { props: { posts } }, the Blog component
    // will receive `posts` as a prop at build time
    return {
      props: {
        items,
      },
    }
  }
  
  export default Blog