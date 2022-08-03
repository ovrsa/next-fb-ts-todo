import React from 'react'
import { useRecoilState } from 'recoil';
import {postState} from "../../components/atoms"

function postData() {
  return (
    <div>
      <postInput/>
    </div>
  );
}

function postInput() {
  const [text, setText] = useRecoilState(postState);

  const onChange = (event:any) => {
    setText(event.target.value);
  };


  return (
    <div>
      <input type="text" value={text} onChage={onChange} />
      <br />
      Echo: {text}
    </div>
  );
}

export default postState