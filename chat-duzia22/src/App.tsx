import "./App.css"
import Message from "./Message"

export default () => {
  return <>
    <main>
      <Message self={true} date="04:20 2020/12/12" user="Dunha" text="lorem ipsum" />
      <Message self={false} date="04:21 2020/12/12" user="Dunha" text="lorem ipsum" />
      <Message self={false} date="04:22 2020/12/12" user="Dunha" text="lorem ipsum" />
      <Message self={true} date="04:23 2020/12/12" user="Dunha" text="lorem ipsum" />
    </main>
    <div className="input-area">
      <textarea placeholder="Digite sua mensagem"></textarea>
      <button type="submit">Enviar</button>
    </div>
  </>
}