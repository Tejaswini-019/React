// Wizard.js
import React, { useState } from 'react';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';

const Wizard = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const nextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    setCurrentStep(currentStep - 1);
  };

  return (
    <div>
      <div className="wizard-navigation">
        <button onClick={prevStep} disabled={currentStep === 1}>Previous</button>
        <button onClick={nextStep} disabled={currentStep === 3}>Next</button>
      </div>

      {currentStep === 1 && <Step1 />}
      {currentStep === 2 && <Step2 />}
      {currentStep === 3 && <Step3 />}
    </div>
  );
};

export default Wizard;
