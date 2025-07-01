import React, { useState } from 'react';
import BillTemplate from './BillTemplate.tsx';

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

const BillForm: React.FC = () => {
  const [client, setClient] = useState<BillClient>({
    name: '',
    email: '',
    phone: '',
    billingAddress: '',
  });

  const [items, setItems] = useState<BillItem[]>([
    { description: '', qty: 1, rate: 0 }
  ]);

  const [preview, setPreview] = useState(false);
  const [gstEnabled, setGstEnabled] = useState(true);

  // Handlers for form fields
  const handleClientChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setClient({ ...client, [e.target.name]: e.target.value });
  };

  const handleItemChange = (
    idx: number,
    field: keyof BillItem,
    value: string | number
  ) => {
    const updated = items.map((item, i) =>
      i === idx ? { ...item, [field]: field === 'description' ? value : Number(value) } : item
    );
    setItems(updated);
  };

  const addItem = () => {
    setItems([...items, { description: '', qty: 1, rate: 0 }]);
  };

  const removeItem = (idx: number) => {
    setItems(items.filter((_, i) => i !== idx));
  };

  return (
    <div style={{ maxWidth: 1500, margin: '2rem auto', padding: '2rem', background: '#FFF8E1', borderRadius: 12 }}>
      {!preview ? (
        <form
          onSubmit={e => {
            e.preventDefault();
            setPreview(true);
          }}
        >
          <h3 style={{ color: '#FF8F00', textAlign: 'center' }}>Fill Bill Details</h3>
          <label>
            Bill To (Name):<br />
            <input
              name="name"
              value={client.name}
              onChange={handleClientChange}
              style={{ width: '100%', padding: 8, margin: '6px 0 12px 0', borderRadius: 6, border: '1px solid #ccc' }}
              required
            />
          </label>
          <br />
          <label>
            Client Email:<br />
            <input
              name="email"
              type="email"
              value={client.email}
              onChange={handleClientChange}
              style={{ width: '100%', padding: 8, margin: '6px 0 12px 0', borderRadius: 6, border: '1px solid #ccc' }}
              required
            />
          </label>
          <br />
          <label>
            Client Phone:<br />
            <input
              name="phone"
              value={client.phone}
              onChange={handleClientChange}
              style={{ width: '100%', padding: 8, margin: '6px 0 12px 0', borderRadius: 6, border: '1px solid #ccc' }}
              required
            />
          </label>
          <br />
          <label>
            Billing Address:<br />
            <textarea
              name="billingAddress"
              value={client.billingAddress}
              onChange={handleClientChange}
              style={{ width: '100%', padding: 8, margin: '6px 0 0px 0', borderRadius: 6, border: '1px solid #ccc', minHeight: 48 }}
              required
            />
          </label>
          
        <div style={{
  margin: '18px 0',
  display: 'flex',
  alignItems: 'center',
  gap: 12
}}>
  <label style={{
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    fontWeight: 600,
    color: '#2C3E50',
    fontSize: '1.08rem',
    letterSpacing: '0.5px'
  }}>
    <input
      type="checkbox"
      checked={gstEnabled}
      onChange={e => setGstEnabled(e.target.checked)}
      style={{
        width: 22,
        height: 22,
        accentColor: '#FF8F00', // this works in all modern browsers
        marginRight: 12,
        cursor: 'pointer'
      }}
    />
    Include GST (18%)
  </label>
</div>

          <h4 style={{ color: '#2C3E50', marginTop: 18 }}>Bill Table Entries</h4>

          {/* Table Layout for Headings and Entries */}
          <div style={{ display: 'grid', gridTemplateColumns: '3fr 1fr 1.5fr 60px', gap: '8px', alignItems: 'center', fontWeight: 600, color: '#FF8F00', background: '#FFE0B2', borderRadius: 6, padding: '8px 0', marginBottom: 6 }}>
            <div style={{ paddingLeft: 6 }}>Description</div>
            <div style={{ textAlign: 'center' }}>Qty</div>
            <div style={{ textAlign: 'center' }}>Rate</div>
            <div></div>
          </div>
          {items.map((item, idx) => (
            <div key={idx} style={{ display: 'grid', gridTemplateColumns: '3fr 1fr 1.5fr 60px', gap: '8px', alignItems: 'center', marginBottom: 8 }}>
              <input
                placeholder="Description"
                value={item.description}
                onChange={e => handleItemChange(idx, 'description', e.target.value)}
                style={{ padding: 6, borderRadius: 4, border: '1px solid #ccc', width: '100%' }}
                required
              />
              <input
                placeholder="Qty"
                type="number"
                min={1}
                value={item.qty}
                onChange={e => handleItemChange(idx, 'qty', e.target.value)}
                style={{ padding: 6, borderRadius: 4, border: '1px solid #ccc', width: '100%', textAlign: 'center' }}
                required
              />
              <input
                placeholder="Rate"
                type="number"
                min={0}
                value={item.rate}
                onChange={e => handleItemChange(idx, 'rate', e.target.value)}
                style={{ padding: 6, borderRadius: 4, border: '1px solid #ccc', width: '100%', textAlign: 'center' }}
                required
              />
              {items.length > 1 && (
                <button type="button" onClick={() => removeItem(idx)} style={{
                  background: '#FF8F00',
                  color: '#fff',
                  border: 'none',
                  borderRadius: 4,
                  padding: '0.35em 0.7em',
                  cursor: 'pointer'
                }}>×</button>
              )}
            </div>
          ))}
          <button type="button" onClick={addItem} style={{
            background: '#2C3E50',
            color: '#fff',
            border: 'none',
            borderRadius: 4,
            padding: '0.5em 1em',
            margin: '0 0 14px 0',
            cursor: 'pointer'
          }}>
            + Add Row
          </button>
          <br />
          <button
            type="submit"
            style={{
              background: '#FF8F00',
              color: '#fff',
              border: 'none',
              borderRadius: 4,
              padding: '0.7em 2em',
              marginTop: '1em',
              cursor: 'pointer'
            }}
          >
            Preview
          </button>
        </form>
      ) : (
       <BillTemplate client={client} items={items} gstEnabled={gstEnabled} />
      )}
    </div>
  );
};

export default BillForm;
