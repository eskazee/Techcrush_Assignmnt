import { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState('');

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setError('');

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setError('Fill in every field before sending.');
      return;
    }

    setStatus('sending');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });
      if (!res.ok) throw new Error('Request failed');
      setStatus('sent');
      setForm({ name: '', email: '', message: '' });
    } catch (err) {
      setStatus('idle');
      setError("Couldn't send that. Try again in a moment.");
    }
  }

  return (
    <section className="section contact">
      <p className="section-label">Contact</p>
      <h2>Got a project, or just want to talk shop?</h2>

      {status === 'sent' ? (
        <p className="contact-success">Message sent — I'll get back to you soon.</p>
      ) : (
        <form className="contact-form" onSubmit={handleSubmit} noValidate>
          <label>
            Name
            <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="Your name" />
          </label>
          <label>
            Email
            <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="you@example.com" />
          </label>
          <label>
            Message
            <textarea name="message" rows="5" value={form.message} onChange={handleChange} placeholder="What are you working on?" />
          </label>
          {error && <p className="contact-error">{error}</p>}
          <button type="submit" className="btn btn-solid" disabled={status === 'sending'}>
            {status === 'sending' ? 'Sending…' : 'Send message'}
          </button>
        </form>
      )}
    </section>
  );
}
