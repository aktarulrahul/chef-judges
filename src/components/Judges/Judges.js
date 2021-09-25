import React, { useState, useEffect } from 'react';
import JudgeCard from '../JudgeCard/JudgeCard';
import './Judges.css';

const Judges = () => {
  const [judges, setJudges] = useState([]);
  useEffect(() => {
    fetch('./data.json')
      .then((res) => res.json())
      .then((data) => setJudges(data));
  }, []);
  return (
    <div className="row row-cols-1 row-cols-md-3 g-4">
      {judges.map((judge) => (
        <JudgeCard key={judge.id} judge={judge} />
      ))}
    </div>
  );
};

export default Judges;
