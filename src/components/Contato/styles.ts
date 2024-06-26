import styled from 'styled-components'
import variaveis from '../../styles/variaveis'
import { Botao } from '../../styles'

export const Card = styled.div`
  background-color: #fcfcfc;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  border-radius: 16px;
  padding: 16px;
  width: 60%;
  min-width: 300px;
  margin-top: 2em;
  margin-bottom: 32px;
  transition: box-shadow 0.9s ease;

  &:hover {
    transform: scale(1.01);
  }

  @media (max-width: 768px) {
    width: 80%;
  }
`

export const Titulo = styled.h3`
  font-weight: bold;
  font-size: 18px;
`

export const Input = styled.input`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 1em 0em 1em;
  width: 80%;
  height: 30px;
  border-radius: 10px;
  border: none;
  background: linear-gradient(
    to right,
    ${variaveis.roxoclaro},
    ${variaveis.roxoescuro}
  );
`

export const Descricao = styled.textarea`
  color: #8b8b8b;
  font-size: 14px;
  line-height: 24px;
  font-family: 'Roboto Mono', monospace;
  display: block;
  width: 100%;
  margin-bottom: 16px;
  resize: none;
  border: none;
  background-color: transparent;
`

export const BarraAcoes = styled.div`
  border-top: 1px solid #8b8b8b;
  padding-top: 16px;
`

export const BotaoCancelar = styled(Botao)`
  background-color: ${variaveis.vermelho};
`
