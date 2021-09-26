import React from 'react';
import './PanelCard.css';

const PanelCard = (props) => {
  const { addToPanel } = props;
  // Judge salary calculation
  const salaryReducer = (previous, addToPanel) => previous + addToPanel.salary;
  const totalSalary = addToPanel.reduce(salaryReducer, 0);
  return (
    <div className="chef-judge-bg rounded py-2  shadow-sm panel-position">
      <h3 className="text-white">
        Judge Panel
        <br />
        Summary
      </h3>
      <hr className="text-white w-75 mx-auto" />
      <p className="text-white fw-bold">
        Chef Added <i className="fas fa-chevron-right"></i>
        {addToPanel.length}
      </p>
      <p className="text-white fw-bold">
        Total Salary <i className="fas fa-dollar-sign"></i>
        {totalSalary}{' '}
      </p>
      {addToPanel.map((judge) => (
        <div key={judge.name + Math.random(1, 100)}>
          <div className="conatiner text-white rounded py-2 mx-4 mb-2 shadow-lg">
            {judge.name}
          </div>
        </div>
      ))}
    </div>
  );
};

export default PanelCard;
