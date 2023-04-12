import React, { useState } from 'react';
import './ThemeToggle.scss';

const ThemeToggle = () => {
  return (
    <form>
      <fieldset className="radio-switch">
        <legend>Theme Switch</legend>

        <input type="radio" name="theme-switch" id="light" checked />
        <label htmlFor="light">Light</label>

        <input type="radio" name="theme-switch" id="dark" />
        <label htmlFor="dark">Dark</label>
      </fieldset>
    </form>
  );
};

export default ThemeToggle;
