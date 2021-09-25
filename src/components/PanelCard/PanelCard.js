import React from 'react';
import './PanelCard.css';

const PanelCard = (props) => {
  const { addToPannel } = props;
  const salaryReducer = (previous, addToPannel) =>
    previous + addToPannel.salary;
  const totalSalary = addToPannel.reduce(salaryReducer, 0);
  return (
    <div className="chef-judge-bg rounded py-2  shadow-sm panel-position">
      <p className="text-white fw-bold">
        Chef Added <i class="fas fa-chevron-right"></i>
        {addToPannel.length}
      </p>
      <p className="text-white fw-bold">
        Total Salary <i class="fas fa-dollar-sign"></i>
        {totalSalary}{' '}
      </p>
      {addToPannel.map((judge) => (
        <div key={judge.name + Math.random(1, 100)}>
          <p className="text-white rounded p-2 mx-4 my-2 shadow-lg">
            {judge.name}{' '}
          </p>
        </div>
      ))}
    </div>
  );
};

export default PanelCard;
