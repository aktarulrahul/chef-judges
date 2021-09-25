import React from 'react';
import './PanelCard.css';

const PanelCard = (props) => {
  const { addToPannel } = props;
  const salaryReducer = (previous, addToPannel) =>
    previous + addToPannel.salary;
  const totalSalary = addToPannel.reduce(salaryReducer, 0);
  return (
    <div className="row shadow-sm p-3 bg-body rounded panel-card text-center">
      <div className="col-4">
        <div className="bg-dark shadow-sm py-3 rounded opacity-75 h-100">
          <p className="text-white">Chef Added {addToPannel.length}</p>
          <p className="text-white">Total Salary ${totalSalary} </p>
        </div>
      </div>
      <div className="col-8">
        <div className="row bg-dark shadow-sm py-3 rounded opacity-75 h-100">
          {addToPannel.map((jaduge) => (
            <div key={jaduge.name + Math.random(1, 100)} className="col-4">
              <p className="text-white">{jaduge.name} </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PanelCard;
