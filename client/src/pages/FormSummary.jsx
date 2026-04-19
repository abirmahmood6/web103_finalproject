import {
  Briefcase,
  Building2,
  Calendar,
  Clock,
  EyeOff,
  FileText,
  Link2,
} from 'lucide-react';
import './FormSummary.css';

function SummaryRow({ icon, label, value }) {
  return (
    <div className="summary-row">
      <div className="summary-icon-wrap">{icon}</div>
      <div className="summary-field">
        <span className="summary-label">{label}</span>
        <span className="summary-value">{value}</span>
      </div>
    </div>
  );
}

export default function FormSummary({ data }) {
  return (
    <div className="summary-container">
      <div className="summary-header">
        <span className="summary-title">Story preview</span>
        {data.is_anonymous && (
          <span className="summary-anon-badge">
            <EyeOff size={14} />
            Anonymous
          </span>
        )}
      </div>

      <div className="summary-list">
        <SummaryRow
          icon={<Building2 size={18} />}
          label="Company"
          value={data.company_id}
        />
        <SummaryRow
          icon={<Briefcase size={18} />}
          label="Role"
          value={[data.role, data.job_type].filter(Boolean).join(' • ')}
        />
        <SummaryRow
          icon={<Calendar size={18} />}
          label="Date of Layoff"
          value={data.layoff_date}
        />
        <SummaryRow
          icon={<Link2 size={18} />}
          label="Severance"
          value={data.severance_weeks ? `${data.severance_weeks} weeks` : '—'}
        />
        <SummaryRow
          icon={<Clock size={18} />}
          label="Job Search Duration"
          value={data.job_search_weeks}
        />
        {data.summary && (
          <SummaryRow
            icon={<FileText size={18} />}
            label="Experience"
            value={data.summary}
          />
        )}
      </div>
    </div>
  );
}
