import './art.css'
import _ from 'lodash'
import { useState } from 'react';
const user = "jerry";
const list = [
  {id : 1 , name : "jack" , content : "hello world" , date : "2023-01-01" , like : 100},
  {id : 2 , name : "jane" , content : "hello react" , date : "2023-01-05" , like : 400},
  {id : 3 , name : "jim" , content : "hello node" , date : "2023-01-03" , like : 500}
]
function App() {
  const [commentList , setCommentList] = useState(list)
  function Datesorted(){
    var ad = document.getElementById("date");
    var al = document.getElementById("like");
    ad.className = "targetOn";
    al.className = "targetOff";
    setCommentList(_.orderBy(commentList , "date" , "desc"))
    return false;
  }
  function Favouritesorted(){
    var ad = document.getElementById("date");
    var al = document.getElementById("like");
    ad.className = "targetOff";
    al.className = "targetOn";
    setCommentList(_.orderBy(commentList , "like" , "desc"))
    return false;
  }
  function Addcomment(){
      var content = document.getElementById("content").value;
      if(content === ""){
        alert("Please input the comment");
        return false;
      }
      setCommentList([...commentList , {id : commentList.length + 1 , name : user , content : content , date : "2023-01-04" , like : 0}])
      document.getElementById("content").value = "";
  }
 const DeleteComment = (id) =>{
    setCommentList(commentList.filter(item => item.id !== id))
    return false;
  }
  return (
    <div className="App">
      <div>
        <h1>Comment List</h1>
        <ul className="nav">
          <li>
            <a id="date" className="targetOff" href="#" onClick={Datesorted}>The newest comment</a>
          </li>
          <li>
            <a id="like" className="targetOff" href="#" onClick={Favouritesorted}>The favourite comment</a>
          </li>
        </ul>
      </div>
      <div>
        <input type="text" placeholder="Send comment" id="content"></input>
        <button id="send" onClick={Addcomment}>Send</button>
      </div>
      <div>
        {commentList.map((item) => <div key={item.id}>
          {item.name}
          <p className="content">{item.content}</p>
          <p>{item.date} , {item.like} <a href="#" onClick={() => DeleteComment(item.id)}>Delete</a></p>
        </div>)}
      </div>
    </div>
  );
}

export default App;
