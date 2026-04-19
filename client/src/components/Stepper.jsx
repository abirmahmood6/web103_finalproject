export default function Stepper({ steps, currentStep }) {
  return (
    <div style={{ display: 'flex', alignItems: 'flex-start', width: '100%' }}>
      {steps.map((step, index) => {
        const stepNum = index + 1;
        const isCompleted = stepNum < currentStep;
        const isActive = stepNum === currentStep;

        const circleStyle = {
          width: 32,
          height: 32,
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 13,
          fontWeight: 600,
          flexShrink: 0,
          backgroundColor: isCompleted ? '#4767d2' : isActive ? '#4767d2' : '#fff',
          color: isCompleted || isActive ? '#fff' : '#aaa',
          border: isCompleted || isActive ? '2px solid #4767d2' : '2px solid #ccc',
          transition: 'all 0.2s',
        };

        const labelStyle = {
          fontSize: 12,
          marginTop: 6,
          fontWeight: isActive ? 600 : 400,
          color: isActive ? '#4767d2' : isCompleted ? '#555' : '#aaa',
          textAlign: 'center',
          whiteSpace: 'nowrap',
        };

        return (
          <div key={stepNum} style={{ display: 'flex', alignItems: 'flex-start', flex: index < steps.length - 1 ? 1 : 'none' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <div style={circleStyle}>
                {isCompleted ? (
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M2.5 7L5.5 10L11.5 4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                ) : (
                  stepNum
                )}
              </div>
              <span style={labelStyle}>{step.label}</span>
            </div>
            {index < steps.length - 1 && (
              <div style={{
                flex: 1,
                height: 2,
                marginTop: 15,
                marginLeft: 4,
                marginRight: 4,
                backgroundColor: isCompleted ? '#4767d2' : '#e0e0e0',
                transition: 'background-color 0.2s',
              }} />
            )}
          </div>
        );
      })}
    </div>
  );
}
