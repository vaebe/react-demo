import { useState } from "react";
import { Button ,Input} from 'antd';

interface Props {
  addTodo: (content: string) => void;
}

export const AddTodoList = ({ addTodo }: Props) => {

  const [content,setContent, ] = useState('')

  // 设置数据
  const setData = () => {
    addTodo(content)
    setContent('')
  }

  return (
    <div className="flex gap-2">
      <Input value={content} onChange={e => setContent(e.target.value)} placeholder="请输入待办内容"></Input>
      <Button  onClick={setData}>添加</Button>
    </div>
  )
}
