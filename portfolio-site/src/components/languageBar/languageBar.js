import './languageBar.css';
import React from 'react';

function LanguageBar({ percentage, language }) {

  const barStyle = {
    width: `calc(${percentage}% - 10px)`
  };

    return (
      <div id="progressbar">
        <span id="loading" style = {barStyle}></span>
        <div id="load">{language}</div>
      </div>
    )
}
export default LanguageBar;
