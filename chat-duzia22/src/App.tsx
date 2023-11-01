import { useState } from "react"
import "./App.css"
import Input from "./Input"
import Message from "./Message"

export default () => {
  const [mensagens, setMensagem] = useState([
    { self: true, date: "04:20 2020/12/12", user: "Dunha", text: "lorem ipsum" },
    { self: false, date: "04:21 2020/12/12", user: "Dunha", text: "lorem ipsum" },
    { self: false, date: "04:22 2020/12/12", user: "Dunha", text: "lorem ipsum" },
    { self: true, date: "04:23 2020/12/12", user: "Dunha", text: "lorem ipsum" },
  ])

  return <>
    <main>
      {mensagens.map(({ self, date, user, text }, index) =>
        <Message self={self} date={date} user={user} text={text} key={index} />)
      }
    </main>
    <Input setMensagem={setMensagem} mensagens={mensagens} />
  </>
}