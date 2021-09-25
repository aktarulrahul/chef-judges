import React, { useState, useEffect } from 'react';
import JudgeCard from '../JudgeCard/JudgeCard';
import PanelCard from '../PanelCard/PanelCard';
import './Judges.css';

const Judges = () => {
  const [judges, setJudges] = useState([]);
  const [addToPannel, setAddToPanel] = useState([]);
  useEffect(() => {
    fetch('./data.json')
      .then((res) => res.json())
      .then((data) => setJudges(data));
  }, []);
  const handleAddToPanel = (judge) => {
    const addedJudges = [...addToPannel, judge];
    setAddToPanel(addedJudges);
  };
  return (
    <div className="container">
      <PanelCard addToPannel={addToPannel} />
      <hr />
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {judges.map((judge) => (
          <JudgeCard
            key={judge.id}
            judge={judge}
            handleAddToPanel={handleAddToPanel}
          />
        ))}
      </div>
    </div>
  );
};

export default Judges;
