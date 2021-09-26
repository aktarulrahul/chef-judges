import React from 'react';
import './JudgeCard.css';

const JudgeCard = (props) => {
  const { name, img, country, star, salary, dishes, age } = props.judge;
  return (
    <div className="col">
      <div className="card shadow p-3 bg-body rounded">
        <img
          src={img}
          className="card-img-top judge-img shadow border"
          alt={name}
        />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <table className="table table-hover text-start">
            <tbody>
              <tr>
                <td>Age</td>
                <td>{age}</td>
              </tr>
              <tr>
                <td>country</td>
                <td>{country}</td>
              </tr>
              <tr>
                <td>
                  Signature <br /> Dish
                </td>
                <td>{dishes}</td>
              </tr>
              <tr>
                <td>
                  Michelin
                  <br />
                  stars
                </td>
                <td className="">{star}</td>
              </tr>
              <tr>
                <td>Salary</td>
                <td>$ {salary}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="card-footer">
          <button
            type="button"
            className="btn text-white chef-judge-bg"
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
