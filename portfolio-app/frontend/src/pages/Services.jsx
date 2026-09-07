const services = [
  {
    title: 'Application support',
    body: 'Diagnosing and resolving production issues across Windows Server, IIS, .NET, and SQL-backed systems.'
  },
  {
    title: 'API & systems integration',
    body: 'Tracing and fixing issues across API gateways, webhooks, and financial/payment integrations.'
  },
  {
    title: 'Database troubleshooting',
    body: 'Query tuning, correlated subqueries, and diagnosing cross-database reference errors.'
  },
  {
    title: 'Cloud & DevOps fundamentals',
    body: 'Building toward Azure certification and containerized deployments with Docker.'
  }
];

export default function Services() {
  return (
    <section className="section services">
      <p className="section-label">Services</p>
      <h2>Where I can help</h2>
      <div className="services-grid">
        {services.map((s) => (
          <div className="service-card" key={s.title}>
            <h3>{s.title}</h3>
            <p>{s.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
