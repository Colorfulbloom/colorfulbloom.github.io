import React from 'react';

export interface GridProps {
  /** Show column numbers */
  showNumbers?: boolean;
}

export const Grid = ({ showNumbers = true }: GridProps) => {
  const columnStyle = {
    backgroundColor: '#0070BD',
    color: '#fff',
    padding: '1rem',
    textAlign: 'center' as const,
    borderRadius: '4px',
    marginBottom: '1rem',
    fontFamily: "'Noto Sans', sans-serif",
  };

  const gutterStyle = {
    backgroundColor: 'rgba(0, 112, 189, 0.1)',
    border: '1px dashed #0070BD',
    padding: '1rem',
    textAlign: 'center' as const,
    borderRadius: '4px',
    marginBottom: '1rem',
  };

  return (
    <div>
      <h1 style={{ fontFamily: "'Questrial', sans-serif" }} className="mb-4">Grid System</h1>
      <p className="text-muted mb-4" style={{ fontFamily: "'Noto Sans', sans-serif" }}>
        Bootstrap 5 - 12 column, mobile-first responsive grid
      </p>

      {/* 12 Column Display */}
      <section className="mb-5">
        <h5 className="text-muted mb-3">12 Column Grid</h5>
        <div className="row">
          {[...Array(12)].map((_, i) => (
            <div key={i} className="col">
              <div style={columnStyle}>{showNumbers ? i + 1 : ''}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Common Layouts */}
      <section className="mb-5">
        <h5 className="text-muted mb-3">Common Layouts</h5>

        {/* Full Width */}
        <p className="small text-muted mb-2">Full Width (col-12)</p>
        <div className="row mb-3">
          <div className="col-12">
            <div style={columnStyle}>col-12</div>
          </div>
        </div>

        {/* Two Columns */}
        <p className="small text-muted mb-2">Two Columns (col-6)</p>
        <div className="row mb-3">
          <div className="col-6">
            <div style={columnStyle}>col-6</div>
          </div>
          <div className="col-6">
            <div style={columnStyle}>col-6</div>
          </div>
        </div>

        {/* Three Columns */}
        <p className="small text-muted mb-2">Three Columns (col-4)</p>
        <div className="row mb-3">
          <div className="col-4">
            <div style={columnStyle}>col-4</div>
          </div>
          <div className="col-4">
            <div style={columnStyle}>col-4</div>
          </div>
          <div className="col-4">
            <div style={columnStyle}>col-4</div>
          </div>
        </div>

        {/* Four Columns */}
        <p className="small text-muted mb-2">Four Columns (col-3)</p>
        <div className="row mb-3">
          <div className="col-3">
            <div style={columnStyle}>col-3</div>
          </div>
          <div className="col-3">
            <div style={columnStyle}>col-3</div>
          </div>
          <div className="col-3">
            <div style={columnStyle}>col-3</div>
          </div>
          <div className="col-3">
            <div style={columnStyle}>col-3</div>
          </div>
        </div>

        {/* Sidebar + Content */}
        <p className="small text-muted mb-2">Sidebar + Content (col-3 + col-9)</p>
        <div className="row mb-3">
          <div className="col-3">
            <div style={columnStyle}>col-3</div>
          </div>
          <div className="col-9">
            <div style={columnStyle}>col-9</div>
          </div>
        </div>
      </section>

      {/* Responsive Breakpoints */}
      <section className="mb-5">
        <h5 className="text-muted mb-3">Responsive Breakpoints (Mobile First)</h5>
        <div className="row mb-3">
          <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
            <div style={columnStyle}>
              <small>col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2</small>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
            <div style={columnStyle}>
              <small>col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2</small>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
            <div style={columnStyle}>
              <small>col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2</small>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
            <div style={columnStyle}>
              <small>col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2</small>
            </div>
          </div>
        </div>

        <div className="table-responsive">
          <table className="table table-bordered small">
            <thead>
              <tr>
                <th>Breakpoint</th>
                <th>Class Prefix</th>
                <th>Min Width</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Extra small</td>
                <td><code>col-</code></td>
                <td>&lt;576px</td>
              </tr>
              <tr>
                <td>Small</td>
                <td><code>col-sm-</code></td>
                <td>≥576px</td>
              </tr>
              <tr>
                <td>Medium</td>
                <td><code>col-md-</code></td>
                <td>≥768px</td>
              </tr>
              <tr>
                <td>Large</td>
                <td><code>col-lg-</code></td>
                <td>≥992px</td>
              </tr>
              <tr>
                <td>Extra large</td>
                <td><code>col-xl-</code></td>
                <td>≥1200px</td>
              </tr>
              <tr>
                <td>XXL</td>
                <td><code>col-xxl-</code></td>
                <td>≥1400px</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Gutters */}
      <section className="mb-5">
        <h5 className="text-muted mb-3">Gutters</h5>

        <p className="small text-muted mb-2">Default Gutters (g-3)</p>
        <div className="row g-3 mb-4">
          <div className="col-4">
            <div style={gutterStyle}>col-4</div>
          </div>
          <div className="col-4">
            <div style={gutterStyle}>col-4</div>
          </div>
          <div className="col-4">
            <div style={gutterStyle}>col-4</div>
          </div>
        </div>

        <p className="small text-muted mb-2">No Gutters (g-0)</p>
        <div className="row g-0 mb-4">
          <div className="col-4">
            <div style={{ ...gutterStyle, borderRadius: 0 }}>col-4</div>
          </div>
          <div className="col-4">
            <div style={{ ...gutterStyle, borderRadius: 0 }}>col-4</div>
          </div>
          <div className="col-4">
            <div style={{ ...gutterStyle, borderRadius: 0 }}>col-4</div>
          </div>
        </div>
      </section>
    </div>
  );
};
