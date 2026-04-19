import FormField from '../components/FormField';
import '../components/FormField.css';

export default function FormStepThree({ data, errors, onChange }) {
  return (
    <>
      <FormField
        label="Date of Layoff"
        name="layoff_date"
        type="date"
        value={data.layoff_date}
        onChange={onChange}
        required
        error={errors.layoff_date}
      />

      <FormField
        label="Severance Weeks"
        name="severance_weeks"
        type="number"
        value={data.severance_weeks}
        onChange={onChange}
        error={errors.severance_weeks}
      />

      <FormField
        label="Job Search Weeks"
        name="job_search_weeks"
        type="number"
        value={data.job_search_weeks}
        onChange={onChange}
        required
        error={errors.job_search_weeks}
      />

      <FormField
        label="Submit anonymously"
        name="is_anonymous"
        type="checkbox"
        value={data.is_anonymous}
        onChange={onChange}
        hint="Your name and company will be hidden from the public feed."
      />

      <FormField
        label="Summary"
        name="summary"
        type="textarea"
        value={data.summary}
        onChange={onChange}
        required
        rows={6}
        featured
        error={errors.summary}
      />
    </>
  );
}
