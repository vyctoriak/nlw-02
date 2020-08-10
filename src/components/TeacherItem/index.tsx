import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

const TeacherItem = () => {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://avatars2.githubusercontent.com/u/39565771?s=460&u=4fb83552311c3fe251632b206e8b76e3b8cd31d4&v=4"
          alt="Vyctoria Karina" />

        <div>
          <strong>Vyctoria Karina</strong>
          <span>Química</span>
        </div>
      </header>

      <p>
        Entusiasta das melhores tecnologias de química avançada.
      <br />
        <br />
      Apaixonado por explodir coisas em laboratório e por mudar a vida
      das pessoas através de experiências. Mais de 200.000 pessoas já
      passaram por uma das minhas explosões.
    </p>

      <footer>
        <p>
          Preço/hora
        <strong>R$ 80,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="whatsapp" />
        Entrar em contato
      </button>
      </footer>

    </article>
  )
}

export default TeacherItem;