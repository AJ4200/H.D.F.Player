import React, { useState } from 'react';
import Flash from '../game/Flash';
import Dos from '../game/Dos';
import Html5 from '../game/Html5';

const Mainpage: React.FC = () => {
  const [currentTab, setCurrentTab] = useState('flash');

  const handleTabChange = (tab: string) => {
    setCurrentTab(tab);
  };

  const renderTabContent = () => {
    if (currentTab === 'flash') {
      return <Flash />;
    } else if (currentTab === 'dos') {
      return <Dos />;
    } else if (currentTab === 'html5') {
      return <Html5 />;
    }
    return null;
  };

  return (
    <>
      <div className="tab-buttons">
        <button
          className={currentTab === 'flash' ? 'active' : ''}
          onClick={() => handleTabChange('flash')}
        >
          Flash
        </button>
        <button
          className={currentTab === 'dos' ? 'active' : ''}
          onClick={() => handleTabChange('dos')}
        >
          Dos
        </button>
        <button
          className={currentTab === 'html5' ? 'active' : ''}
          onClick={() => handleTabChange('html5')}
        >
          HTML5
        </button>
      </div>
      <div className="tab-content">{renderTabContent()}</div>
    </>
  );
};

export default Mainpage;
