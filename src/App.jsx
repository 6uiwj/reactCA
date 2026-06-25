import './App.css'  
import {useState} from 'react';

function App() {
  let [logo, setLogo] = useState('블로그임');
  let [blogTitle, setBlogTitle] = useState(['남자 코트 추천', '강남 우동 맛집', '파이썬 독학']);
  let [like, setLike] = useState(0);
  let [modal, setModal] = useState(false); //create a dynamic UI Step2 

  const handleLike = () =>  {
    setLike(like+1);
  };
 //데이터만 변경되면, 주소가 변경되지 않았으므로(데이터만 변경)), state가 변경을 인식하지 못함(배열이니까!) 
  const changeTitle = () => {
    let titleCopy = [...blogTitle]; //이렇게하면 배열을 쪼갠후 다시 합쳐서 주소가 변경됨
    titleCopy[0] = '여성 코트 추천'; //변경된 주소에 데이터 변경
    setBlogTitle(titleCopy);  //주소가 변경되었으므로, stste가 변경을 인식함  
    }
  const align = () => {
    let blogCopy = [...blogTitle];
    blogCopy.sort();
    setBlogTitle(blogCopy);
  }

  return (
    <div className ="App">
      <div className = "black-nav">
        <h4>{logo}</h4>
      </div>
      <button onClick= {align}>가나다순 정렬</button>
      <div className = "list">
        <h4>{blogTitle[0]}
            <span onClick={handleLike}>👍</span> {like}
            <button onClick = {changeTitle}>변경</button>
        </h4>
        <p>2월 17일 발행</p>
      </div>  
      <div className = "list">
        <h4>{blogTitle[1]}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className='list'>
        <h4 onClick = {() => { setModal(!modal) }}>{blogTitle[2]}</h4>
        <p>2월 17일 발행</p>
      </div>

      {
        //html 내에 스크립트코드 작성 불가 -> 조건문 대신 삼항연산자 사용
         modal == true ? <Modal/> : ''
      }

    </div>
  );
}

function Modal() { //create a dynamic UI Step1
  return(
      <div className = "modal">
        <h4>제목</h4>
        <p>날짜</p>
        <p>상세내용</p>
      </div>
  )
}

/**
 * how to create components
 * 1. create function
 * 2. Placing html inside return()
 * 3. use <function name></function name>
 */


/**
 * When should something be extracted into a component?
 * 1. When shortening repetitive HTML
 * 2. Large pages
 * 3. Frequently changing UIs
 */

/**
 * Steps to create a dynamic UI (create Modal)
 * 1. complete the design in advance using Html and Css
 * 2. Store the current state of the UI as state
 * 3. Write how the UI will look based on the state
 */
export default App
