import FormField from '../components/FormField';
import '../components/FormField.css';

export default function FormStepTwo({ data, errors, onChange }) {
  return (
    <>
      <FormField
        label="Company"
        name="company_id"
        type="select"
        value={data.company_id}
        onChange={onChange}
        required
        options={[
          { label: 'Select company', value: '' },
          { label: 'Meta', value: '1' },
          { label: 'Google', value: '2' },
          { label: 'Stripe', value: '3' },
        ]}
        error={errors.company_id}
      />

      <FormField
        label="Role"
        name="role"
        value={data.role}
        onChange={onChange}
        required
        placeholder="e.g. Frontend Engineer"
        error={errors.role}
      />

      <FormField
        label="Job Type"
        name="job_type"
        type="select"
        value={data.job_type}
        onChange={onChange}
        required
        options={[
          { label: 'Select job type', value: '' },
          { label: 'Full-time', value: 'Full-time' },
          { label: 'Contract', value: 'Contract' },
          { label: 'Part-time', value: 'Part-time' },
          { label: 'Internship', value: 'Internship' },
        ]}
        error={errors.job_type}
      />

      <FormField
        label="Location"
        name="location"
        value={data.location}
        onChange={onChange}
        required
        error={errors.location}
      />
    </>
  );
}
