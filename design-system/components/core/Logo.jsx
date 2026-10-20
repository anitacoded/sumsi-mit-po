import React from 'react';

export function Logo({ variant = 'horizontal', size = 48, basePath = '', style }) {
  const bee = basePath + 'assets/logo/sumsi-bee-transparent.png';
  const word = basePath + 'assets/logo/sumsi-wordmark-transparent.png';
  const full = basePath + 'assets/logo/sumsi-logo-transparent.png';
  const img = { display: 'block' };
  if (variant === 'bee') return <img src={bee} width={size} height={size} alt="SUMSI MIT PO" style={{ ...img, ...style }} />;
  if (variant === 'full') return <img src={full} width={size} height={size} alt="SUMSI MIT PO" style={{ ...img, ...style }} />;
  if (variant === 'wordmark') return <img src={word} height={size * 0.5} alt="SUMSI MIT PO" style={{ ...img, ...style }} />;
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: size * 0.12, ...style }}>
      <img src={bee} width={size} height={size} alt="" style={img} />
      <img src={word} height={size * 0.36} alt="SUMSI MIT PO" style={img} />
    </span>
  );
}
