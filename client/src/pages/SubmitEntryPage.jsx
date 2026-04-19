import axios from 'axios';
import { ArrowLeft, ArrowRight, Send } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Button from '../components/Button';
import Stepper from '../components/Stepper';
import FormStepOne from './FormStepOne';
import FormStepThree from './FormStepThree';
import FormStepTwo from './FormStepTwo';
import FormSummary from './FormSummary';
import './SubmitEntryPage.css';

const STEPS = [
  { label: 'Start' },
  { label: 'Company' },
  { label: 'Details' },
  { label: 'Review' },
];
export default function SubmitEntryPage() {
  const navigate = useNavigate();

  const [step, setStep] = useState(1);
  const [errors, setErrors] = useState({});

  const [formData, setFormData] = useState({
    user_id: 1,
    company_id: '',
    role: '',
    job_type: '',
    location: '',
    layoff_date: '',
    severance_weeks: '',
    job_search_weeks: '',
    is_anonymous: false,
    summary: '',
  });

  const handleChange = (name, value) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  function validateStep() {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const next = {};

    if (step === 2) {
      if (!formData.company_id) next.company_id = 'Company is required';
      if (!formData.role.trim()) next.role = 'Role is required';
      if (!formData.job_type) next.job_type = 'Please select a job type';
    }

    if (step === 3) {
      if (!formData.layoff_date) next.layoff_date = 'Date is required';
      else if (new Date(formData.layoff_date) >= today)
        next.layoff_date = 'Date must be before today';
      if (formData.severance_weeks && Number(formData.severance_weeks) < 0)
        next.severance_weeks = 'Cannot be negative';
      if (!formData.job_search_weeks)
        next.job_search_weeks = 'Please select a duration';
      if (!formData.summary.trim()) next.summary = 'Summary is required';
    }

    setErrors(next);
    return Object.keys(next).length === 0;
  }

  function handleNext() {
    if (!validateStep()) return;
    setStep((prev) => Math.min(STEPS.length, prev + 1));
  }

  function handleBack() {
    setStep((prev) => Math.max(1, prev - 1));
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await axios.post('http://localhost:3001/api/entries', {
        ...formData,
        company_id: Number(formData.company_id),
        severance_weeks: Number(formData.severance_weeks),
        job_search_weeks: Number(formData.job_search_weeks),
      });

      navigate('/');
    } catch (error) {
      console.error('Error submitting entry:', error);
    }
  };

  return (
    <div className="wrapper">
      <h1>Submit Entry</h1>
      <p>
        A safe space to share what happened. Your story can offer comfort,
        context, and clarity to others going through the same.
      </p>
      {/* Step progress indicator */}
      <div className="stepperWrapper">
        <Stepper steps={STEPS} currentStep={step} />
      </div>
      <div className="card">
        <div className="card-content">
          {step === 1 && <FormStepOne />}
          {step === 2 && (
            <FormStepTwo
              data={formData}
              errors={errors}
              onChange={handleChange}
            />
          )}

          {step === 3 && (
            <FormStepThree
              data={formData}
              errors={errors}
              onChange={handleChange}
            />
          )}
          {step === 4 && <FormSummary data={formData} />}
        </div>

        <div className="card-actions">
          {/* Back button */}
          <Button variant="ghost" onClick={handleBack} disabled={step === 1}>
            <ArrowLeft size={25} />
            Back
          </Button>

          {/* Next OR Submit button */}
          {step < STEPS.length ? (
            <Button onClick={handleNext}>
              {step === 1 ? 'Get started' : 'Next'}
              <ArrowRight size={25} />
            </Button>
          ) : (
            <Button onClick={handleSubmit} className="submit-button">
              <Send size={25} />
              Submit story
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
