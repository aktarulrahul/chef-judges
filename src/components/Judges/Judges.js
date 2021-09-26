import React, { useState, useEffect } from 'react';
import JudgeCard from '../JudgeCard/JudgeCard';
import PanelCard from '../PanelCard/PanelCard';
import './Judges.css';

const Judges = () => {
  // data for showing judges on UI
  const [judges, setJudges] = useState([]);
  // data for Add to the judge panel
  const [addToPannel, setAddToPanel] = useState([]);
  useEffect(() => {
    fetch('./data.json')
      .then((res) => res.json())
      .then((data) => setJudges(data));
  }, []);
  // Button click handler
  const handleAddToPanel = (judge) => {
    // Declear a temporary variable to add existing and new judge to the panel
    const addedJudges = [...addToPannel, judge];
    setAddToPanel(addedJudges);
  };
  return (
    <div className="ms-3">
      <div className="row">
        <div className="col-9">
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
        <div className="col-3">
          <PanelCard addToPannel={addToPannel} />
        </div>
      </div>
    </div>
  );
};

export default Judges;
