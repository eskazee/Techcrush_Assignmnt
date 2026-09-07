const skills = [
  'Windows Server',
  'SQL',
  'APIs',
  'Docker',
  'Azure',
  '.NET',
  'DevOps',
  'CI/CD'
];

export default function Marquee() {
  const track = [...skills, ...skills];
  return (
    <div className="marquee">
      <div className="marquee-track">
        {track.map((skill, i) => (
          <span key={i} className="marquee-item">
            {skill} <span className="marquee-dot">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
