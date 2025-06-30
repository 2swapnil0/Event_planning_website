import React from 'react';

const BillTemplate: React.FC = () => {
  const billData = {
    client: {
      name: 'Amit Sharma',
      email: 'amit.sharma@example.com',
      phone: '+91-9876543210',
    },
    event: {
      type: 'Wedding Reception',
      date: '2025-12-15',
      venue: 'The Grand Palace, Delhi',
    },
    items: [
      { description: 'Venue Decoration', qty: 1, rate: 25000 },
      { description: 'Catering (100 people)', qty: 100, rate: 800 },
      { description: 'Photography Package', qty: 1, rate: 12000 },
    ],
    gstPercent: 18,
  };

  const subtotal = billData.items.reduce((sum, item) => sum + item.qty * item.rate, 0);
  const gstAmount = subtotal * (billData.gstPercent / 100);
  const grandTotal = subtotal + gstAmount;

  const tableStyle: React.CSSProperties = {
    width: '100%',
    borderCollapse: 'collapse',
    marginTop: '1rem',
  };

  const thTdStyle: React.CSSProperties = {
    border: '1px solid #ccc',
    padding: '0.75rem',
    textAlign: 'left',
  };

  return (
    <div style={{ maxWidth: '800px', margin: '2rem auto', padding: '2rem', background: '#fff', boxShadow: '0 0 12px rgba(0,0,0,0.1)' }}>
      <div
  style={{
    border: '1px solid #eee',
    borderRadius: '8px',
    padding: '1rem',
    marginBottom: '1.5rem',
    background: '#FFF8E1',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    gap: '10rem' // <-- This adds a 3rem gap between columns
  }}
>
  {/* Left: Company Info */}
  <div>
    <div style={{ fontWeight: 600, color: '#FF8F00', marginBottom: '0.5rem' }}>
      From: Vidya Events
    </div>
    <div style={{ color: '#2C3E50', marginBottom: '0.3rem' }}>
      House No 1427, Room No 203, Bhagwan Niwas, Sec 1, near Shiv Sena Shaka,
      Sector 1, Shiravane, Nerul, Navi Mumbai, Maharashtra 400706
    </div>
    <div style={{ color: '#2C3E50', marginBottom: '0.3rem' }}>
      Contact No: 8879741987
    </div>
    <div style={{ color: '#2C3E50', marginBottom: '0.3rem' }}>
      Alternate Contact: 8779757109
    </div>
    <div style={{ color: '#2C3E50' }}>
      Mail: info.vidyaevents@gmail.com
    </div>
  </div>
  {/* Right: Dates */}
  <div style={{ minWidth: 200 }}>
    <div style={{ color: '#FF8F00', fontWeight: 500, marginBottom: '0.5rem' }}>Invoice Details</div>
    <div style={{ color: '#2C3E50', marginBottom: '0.3rem' }}>
      <strong>Invoice Date:</strong>{' '}
      {new Date().toLocaleDateString('en-GB')}
    </div>
    <div style={{ color: '#2C3E50' }}>
      <strong>Due Date:</strong>{' '}
      {new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toLocaleDateString('en-GB')}
    </div>
  </div>
</div>


      <div style={{ marginBottom: '1.5rem' }}>
        <strong>Client:</strong> {billData.client.name}<br />
        <strong>Email:</strong> {billData.client.email}<br />
        <strong>Phone:</strong> {billData.client.phone}
      </div>

      <div style={{ marginBottom: '1.5rem' }}>
        <strong>Event:</strong> {billData.event.type}<br />
        <strong>Date:</strong> {billData.event.date}<br />
        <strong>Venue:</strong> {billData.event.venue}
      </div>

      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thTdStyle}>Service</th>
            <th style={thTdStyle}>Qty</th>
            <th style={thTdStyle}>Rate</th>
            <th style={thTdStyle}>Amount</th>
          </tr>
        </thead>
        <tbody>
          {billData.items.map((item, index) => (
            <tr key={index}>
              <td style={thTdStyle}>{item.description}</td>
              <td style={thTdStyle}>{item.qty}</td>
              <td style={thTdStyle}>₹{item.rate.toFixed(2)}</td>
              <td style={thTdStyle}>₹{(item.qty * item.rate).toFixed(2)}</td>
            </tr>
          ))}
          <tr>
            <td colSpan={3} style={thTdStyle}><strong>Subtotal</strong></td>
            <td style={thTdStyle}>₹{subtotal.toFixed(2)}</td>
          </tr>
          <tr>
            <td colSpan={3} style={thTdStyle}><strong>GST ({billData.gstPercent}%)</strong></td>
            <td style={thTdStyle}>₹{gstAmount.toFixed(2)}</td>
          </tr>
          <tr>
            <td colSpan={3} style={thTdStyle}><strong>Total</strong></td>
            <td style={{ ...thTdStyle, fontWeight: 'bold' }}>₹{grandTotal.toFixed(2)}</td>
          </tr>
        </tbody>
      </table>

      <p style={{ textAlign: 'center', marginTop: '2rem', color: '#666' }}>
        Thank you for choosing our services!
      </p>
    </div>
  );
};

export default BillTemplate;
