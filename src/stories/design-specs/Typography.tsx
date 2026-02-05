import React from 'react';

export interface NotoSansProps {
  /** Font weight */
  fontWeight?: 400 | 700;
}

export const NotoSans = ({ fontWeight = 400 }: NotoSansProps) => {
  const fontFamily = "'Noto Sans', sans-serif";

  return (
    <div style={{ fontFamily }}>
      <h1 className="mb-4" style={{ fontFamily }}>Noto Sans</h1>
      <p className="text-muted mb-4">Primary font for headings and body text - clean, calm, and friendly</p>

      <div className="mb-5">
        <h5 className="text-muted mb-3">Headings</h5>
        <h1 style={{ fontFamily }}>H1 - Senior Full Stack Developer</h1>
        <h2 style={{ fontFamily }}>H2 - Software Architect</h2>
        <h3 style={{ fontFamily }}>H3 - Solution Design</h3>
        <h4 style={{ fontFamily }}>H4 - Unity3D & Unreal Engine</h4>
        <h5 style={{ fontFamily }}>H5 - Web & Mobile Development</h5>
        <h6 style={{ fontFamily }}>H6 - Agile & Story Writing</h6>
      </div>

      <div className="mb-5">
        <h5 className="text-muted mb-3">Body Text</h5>
        <p style={{ fontFamily, fontWeight: 400 }}>
          Regular 400 - Building scalable solutions with modern web technologies.
          Exploring potential architectures and reporting back with actionable insights.
        </p>
        <p style={{ fontFamily, fontWeight: 700 }}>
          Bold 700 - Code reviews, technical documentation, and system design are my daily bread.
        </p>
      </div>

      <div className="mb-5">
        <h5 className="text-muted mb-3">Character Set</h5>
        <p style={{ fontFamily, fontSize: '1.25rem' }}>
          ABCDEFGHIJKLMNOPQRSTUVWXYZ<br />
          abcdefghijklmnopqrstuvwxyz<br />
          0123456789
        </p>
      </div>
    </div>
  );
};

export interface JetBrainsMonoProps {
  /** Font weight */
  fontWeight?: 400 | 700;
}

export const JetBrainsMono = ({ fontWeight = 400 }: JetBrainsMonoProps) => {
  const fontFamily = "'JetBrains Mono', monospace";
  const primaryFont = "'Noto Sans', sans-serif";

  return (
    <div>
      <h1 className="mb-4" style={{ fontFamily }}>JetBrains Mono</h1>
      <p className="text-muted mb-4" style={{ fontFamily: primaryFont }}>Code font for code samples and technical content</p>

      <div className="mb-5">
        <h5 className="text-muted mb-3">Code Sample</h5>
        <pre className="p-3 rounded" style={{
          fontFamily,
          backgroundColor: '#1A1A1A',
          color: '#E2E2E2'
        }}>
{`const developer = {
  name: 'Jorge Calderon',
  role: 'Sr. Full Stack Developer',
  skills: ['React', 'Node.js', 'Unity3D', 'Unreal'],
  current: 'Software Architecture'
};`}
        </pre>
      </div>

      <div className="mb-5">
        <h5 className="text-muted mb-3">Inline Code</h5>
        <p style={{ fontFamily: primaryFont }}>
          Use <code style={{ fontFamily, backgroundColor: '#f4f4f4', padding: '2px 6px', borderRadius: '4px' }}>npm install</code> to install dependencies,
          then run <code style={{ fontFamily, backgroundColor: '#f4f4f4', padding: '2px 6px', borderRadius: '4px' }}>docker compose up</code> to start the container.
        </p>
      </div>

      <div className="mb-5">
        <h5 className="text-muted mb-3">Character Set</h5>
        <p style={{ fontFamily, fontSize: '1.25rem' }}>
          ABCDEFGHIJKLMNOPQRSTUVWXYZ<br />
          abcdefghijklmnopqrstuvwxyz<br />
          0123456789<br />
          {`!@#$%^&*()_+-=[]{}|;':",.<>?/~\``}
        </p>
      </div>
    </div>
  );
};

export interface ManropeProps {
  /** Show character set */
  showCharacterSet?: boolean;
}

export const Manrope = ({ showCharacterSet = true }: ManropeProps) => {
  const fontFamily = "'Manrope', sans-serif";

  return (
    <div>
      <h1 className="mb-4" style={{ fontFamily }}>Manrope</h1>
      <p className="text-muted mb-4">Header font - clean, modern, and geometric</p>

      <div className="mb-5">
        <h5 className="text-muted mb-3">Headings</h5>
        <h1 style={{ fontFamily }}>H1 - Senior Full Stack Developer</h1>
        <h2 style={{ fontFamily }}>H2 - Software Architect</h2>
        <h3 style={{ fontFamily }}>H3 - Solution Design</h3>
        <h4 style={{ fontFamily }}>H4 - Unity3D & Unreal Engine</h4>
        <h5 style={{ fontFamily }}>H5 - Web & Mobile Development</h5>
        <h6 style={{ fontFamily }}>H6 - Agile & Story Writing</h6>
      </div>

      <div className="mb-5">
        <h5 className="text-muted mb-3">Display Sizes</h5>
        <p style={{ fontFamily, fontSize: '4rem', lineHeight: 1.2 }}>jorgecalderon.codes</p>
        <p style={{ fontFamily, fontSize: '2.5rem', lineHeight: 1.2 }}>Full Stack Developer</p>
        <p style={{ fontFamily, fontSize: '1.5rem', lineHeight: 1.2 }}>Software Architecture & Solution Design</p>
      </div>

      {showCharacterSet && (
        <div className="mb-5">
          <h5 className="text-muted mb-3">Character Set</h5>
          <p style={{ fontFamily, fontSize: '1.25rem' }}>
            ABCDEFGHIJKLMNOPQRSTUVWXYZ<br />
            abcdefghijklmnopqrstuvwxyz<br />
            0123456789
          </p>
        </div>
      )}
    </div>
  );
};
