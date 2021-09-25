import React from 'react';
import './JudgeCard.css';

const JudgeCard = (props) => {
  const { name, img, country, star, salary } = props.judge;
  return (
    <div className="col">
      <div className="card shadow p-3 mb-5 bg-body rounded">
        <img src={img} className="card-img-top judge-img shadow" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <table className="table table-hover">
            <tbody>
              <tr>
                <td>Counter</td>
                <td>{country}</td>
              </tr>
              <tr>
                <td>Michelin stars</td>
                <td>{star}</td>
              </tr>
              <tr>
                <td>Salary</td>
                <td>{salary}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="card-footer">
          <button
            type="button"
            className="btn btn-dark"
            onClick={() => props.handleAddToPanel(props.judge)}
          >
            <i className="fas fa-user-plus"></i> Add To Panel
          </button>
        </div>
      </div>
    </div>
  );
};

export default JudgeCard;
