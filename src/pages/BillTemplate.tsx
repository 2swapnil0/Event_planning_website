import React, { useRef } from 'react';
import html2pdf from 'html2pdf.js';

type BillClient = {
  name: string;
  email: string;
  phone: string;
  billingAddress: string;
};
type BillItem = {
  description: string;
  qty: number;
  rate: number;
};
type BillTemplateProps = {
  client: BillClient;
  items: BillItem[];
  gstPercent?: number;
  gstEnabled?: boolean;
  onEdit?: () => void;
};

const BillTemplate: React.FC<BillTemplateProps> = ({
  client,
  items,
  gstPercent = 18,
  gstEnabled = true,
  onEdit
}) => {
  const subtotal = items.reduce((sum, item) => sum + item.qty * item.rate, 0);
  const gstAmount = gstEnabled ? subtotal * (gstPercent / 100) : 0;
  const grandTotal = subtotal + gstAmount;

  const billRef = useRef<HTMLDivElement>(null);
  const filename = `Invoice_${(client.name || 'Client').replace(/\s+/g, '_').replace(/[^A-Za-z0-9_]/g, '').toUpperCase()}.pdf`;


  // Download PDF Handler
  const handleDownloadPDF = () => {
    if (billRef.current) {
      html2pdf()
        .from(billRef.current)
        .set({
          margin: 0,
          filename,
          html2canvas: { scale: 2, useCORS: true },
          jsPDF: { unit: 'pt', format: 'a4', orientation: 'portrait' },
          pagebreak: { mode: ['avoid-all', 'css', 'legacy'] }
        })
        .save();
    }
  };

  const tableStyle: React.CSSProperties = {
    width: '100%',
    borderCollapse: 'separate',
    borderSpacing: 0,
    marginTop: '0.6rem',
    border: '1px solid #FF8F00',
    borderRadius: '10px',
    overflow: 'hidden'
  };

  const thStyle: React.CSSProperties = {
    padding: '0.5rem',
    textAlign: 'left',
    background: '#FFF3E0',
    color: '#2C3E50',
    fontWeight: 700,
    borderBottom: '1px solid #FF8F00',
    fontSize: '0.95rem'
  };

  const tdStyle: React.CSSProperties = {
    padding: '0.45rem 0.5rem',
    textAlign: 'left',
    color: '#2C3E50',
    borderBottom: '1px solid #FFECB3',
    fontSize: '0.93rem'
  };

  return (
    <>
      <div
        ref={billRef}
        style={{
          width: '794px',
          // height: '1123px',
          margin: '0 auto',
          padding: '1rem 1.5rem',
          background: '#fff',
          boxShadow: '0 0 12px rgba(0,0,0,0.08)',
          boxSizing: 'border-box',
          overflow: 'hidden',
          position: 'relative',
          fontFamily: 'Segoe UI, Arial, sans-serif',
        }}
      >
        {/* Logo + Heading row */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.8rem' }}>
          <h1 style={{ margin: 0, color: '#FF8F00', fontSize: '1.8rem', letterSpacing: '0.04em' }}>Event Invoice</h1>
          <img
            src="/logo.png"
            alt="Company Logo"
            style={{
              height: '62px',
              border: '1px solid #FF8F00',
              borderRadius: '32px'
            }}
          />
        </div>

        {/* Company details block */}
        <div
          style={{
            border: '1px solid #eee',
            borderRadius: '7px',
            padding: '0.7rem',
            marginBottom: '1rem',
            background: '#FFF8E1',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            gap: '2.2rem'
          }}
        >
          {/* Left: Company Info */}
          <div style={{ fontSize: '0.97rem', minWidth: 220 }}>
            <div style={{ fontWeight: 600, color: '#FF8F00', marginBottom: '0.3rem', fontSize: '1.04rem' }}>
              From: Vidya Events
            </div>
            <div style={{ color: '#2C3E50', marginBottom: '0.2rem' }}>
              House No 1427, Room No 203, Bhagwan Niwas, Sec 1, near Shiv Sena Shaka,
              Sector 1, Shiravane, Nerul, Navi Mumbai, Maharashtra 400706
            </div>
            <div style={{ marginBottom: '0.2rem' }}>
              <span style={{ color: '#2C3E50', fontWeight: 600, fontSize: '0.93rem' }}>Contact No:</span>{' '}
              <span style={{ color: '#2C3E50' }}>8879741987</span>
            </div>
            <div style={{ marginBottom: '0.2rem' }}>
              <span style={{ color: '#2C3E50', fontWeight: 600, fontSize: '0.93rem' }}>Alternate Contact:</span>{' '}
              <span style={{ color: '#2C3E50' }}>8779757109</span>
            </div>
            <div>
              <span style={{ color: '#2C3E50', fontWeight: 600, fontSize: '0.93rem' }}>Mail:</span>{' '}
              <span style={{ color: '#2C3E50' }}>info.vidyaevents@gmail.com</span>
            </div>
          </div>
          {/* Right: Dates */}
          <div style={{ minWidth: 130, fontSize: '0.97rem' }}>
            <div style={{ color: '#FF8F00', fontWeight: 500, marginBottom: '0.4rem', fontSize: '1.01rem' }}>Invoice Details</div>
            <div style={{ color: '#2C3E50', marginBottom: '0.2rem' }}>
              <strong>Invoice Date:</strong>{' '}
              {new Date().toLocaleDateString('en-GB')}
            </div>
            <div style={{ color: '#2C3E50' }}>
              <strong>Due Date:</strong>{' '}
              {new Date(Date.now() + 1 * 24 * 60 * 60 * 1000).toLocaleDateString('en-GB')}
            </div>
          </div>
        </div>
        <div
          style={{
            borderTop: '1.5px solid #FF8F00',
            margin: '1rem 0 0.6rem 0',
            width: '100%',
            borderRadius: '2px',
          }}
        />

        {/* Bill To Section */}
        <div style={{ marginBottom: '0.7rem' }}>
          <div style={{ fontWeight: 600, fontSize: '1.01rem', color: '#2C3E50', marginBottom: '0.15rem' }}>Bill To:</div>
          <div style={{
            color: '#2C3E50',
            fontWeight: 500,
            fontSize: '1.13rem',
            letterSpacing: '1px',
            textTransform: 'uppercase'
          }}>
            {client.name}
          </div>
          <div style={{
            fontWeight: 600, fontSize: '1.01rem', color: '#2C3E50',
            marginTop: '0.36rem', marginBottom: '0.15rem'
          }}>
            Billing Address:
          </div>
          <div style={{
            color: '#2C3E50',
            fontWeight: 500,
            fontSize: '0.97rem',
            marginBottom: '0.25rem'
          }}>
            {client.billingAddress}
          </div>
          <span style={{ fontWeight: 600 }}>Email:</span> {client.email}<br />
          <span style={{ fontWeight: 600 }}>Phone:</span> {client.phone}
        </div>

        {/* Table */}
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={thStyle}>Service</th>
              <th style={thStyle}>Qty</th>
              <th style={thStyle}>Rate</th>
              <th style={thStyle}>Amount</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, index) => (
              <tr key={index}>
                <td style={tdStyle}>{item.description}</td>
                <td style={tdStyle}>{item.qty}</td>
                <td style={tdStyle}>₹{item.rate.toFixed(2)}</td>
                <td style={tdStyle}>₹{(item.qty * item.rate).toFixed(2)}</td>
              </tr>
            ))}
            <tr>
              <td colSpan={3} style={{ ...tdStyle, fontWeight: 600 }}>Subtotal</td>
              <td style={tdStyle}>₹{subtotal.toFixed(2)}</td>
            </tr>
            {gstEnabled && (
              <tr>
                <td colSpan={3} style={{ ...tdStyle, fontWeight: 600 }}>
                  GST ({gstPercent}%)
                </td>
                <td style={tdStyle}>₹{gstAmount.toFixed(2)}</td>
              </tr>
            )}
            <tr>
              <td colSpan={3} style={{ ...tdStyle, fontWeight: 'bold', color: '#FF8F00' }}>Total</td>
              <td style={{ ...tdStyle, fontWeight: 'bold', color: '#FF8F00' }}>₹{grandTotal.toFixed(2)}</td>
            </tr>
          </tbody>
        </table>

        {/* Payment Details */}
        <div
          style={{
            background: '#FFF8E1',
            border: '1px solid #eee',
            borderRadius: '7px',
            padding: '0.7rem',
            marginTop: '1.3rem',
            marginBottom: '1rem',
            maxWidth: 370,
            fontSize: '0.97rem'
          }}
        >
          <div style={{ fontWeight: 600, color: '#FF8F00', marginBottom: '0.4rem', fontSize: '1.05rem' }}>
            Payment Details:
          </div>
          <div style={{ color: '#2C3E50', marginBottom: '0.2rem' }}>
            <strong>Bank:</strong> Bank Of Baroda
          </div>
          <div style={{ color: '#2C3E50', marginBottom: '0.2rem' }}>
            <strong>Holder Name:</strong> Vidya Events
          </div>
          <div style={{ color: '#2C3E50', marginBottom: '0.2rem' }}>
            <strong>Account No:</strong> 27410200001185
          </div>
          <div style={{ color: '#2C3E50', marginBottom: '0.45rem' }}>
            <strong>IFSC Code:</strong> BARB0NERULX
          </div>
          <div style={{ color: '#2C3E50', fontWeight: 600 }}>
            UPI ID:&nbsp;
            <span style={{ color: '#FF8F00', fontWeight: 700, letterSpacing: '1px' }}>
              8879741987@barodampay
            </span>
          </div>
        </div>

        <p style={{ textAlign: 'center', marginTop: '1rem', color: '#666', fontSize: '1.01rem' }}>
          Thank you for choosing our services!
        </p>
      </div>
      
      {/* Buttons below the preview */}
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px', gap: '15px' }}>
        {onEdit && (
          <button
            onClick={onEdit}
            style={{
              background: '#2C3E50',
              color: '#fff',
              border: 'none',
              borderRadius: 6,
              padding: '0.7em 1.6em',
              fontWeight: 600,
              fontSize: '1rem',
              cursor: 'pointer'
            }}
          >
            Edit
          </button>
        )}
        <button
          onClick={handleDownloadPDF}
          style={{
            background: '#FF8F00',
            color: '#fff',
            border: 'none',
            borderRadius: 6,
            padding: '0.7em 1.6em',
            fontWeight: 600,
            fontSize: '1rem',
            cursor: 'pointer'
          }}
        >
          Download PDF
        </button>
      </div>
    </>
  );
};

export default BillTemplate;
