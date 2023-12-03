import React from 'react';
import './Footer.css';
import Api from './Api';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

export default function Footer() {
  const reviews = Api().slice(0, 3); // Obtenha os primeiros três itens da API
  
  const renderStars = (numStars) => {
    const fullStars = Math.floor(numStars);
    const hasHalfStar = numStars % 1 >= 0.5;

    return (
      <>
        {[...Array(fullStars)].map((_, index) => (
          <FaStar className='yellow-star' key={index} />
        ))}
        {hasHalfStar && <FaStarHalfAlt />}
        {[...Array(5 - fullStars - (hasHalfStar ? 1 : 0))].map((_, index) => (
          <FaRegStar key={`${index}-empty`} />
        ))}
      </>
    );
  };

  return (
    <div className="container-footer">
      <form>
        <table>
          <thead>
            <tr>
              <th>Data</th>
              <th>Contato</th>
              <th>Avaliação</th>
              <th>Comentário</th>
              <th>Profissional</th>
              <th>Serviço</th>
              <th>Unidade</th>
            </tr>
          </thead>
          <tbody>
            {reviews.map((review, index) => (
              <tr key={index}>
                <td>{review.data}</td>
                <td>{review.contato}</td>
                <td>{review.avaliacao} <span className='silver-star'>{renderStars(review.avaliacao)}</span></td>
                <td>{review.comentario}</td>
                <td>{review.profissional}</td>
                <td>{review.servico}</td>
                <td>{review.unidade}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </form>
    </div>
  );
}