import './TechLogo.css'

const technologies = {
  React: 'react.svg',
  TypeScript: 'typescript.svg',
  'Node.js': 'nodejs.svg',
  Vite: 'vite.svg',
  Python: 'python.svg',
  Django: 'django.svg',
  Speedtest: '../speedtest.png',
  'Internal tooling': 'internal-tooling.svg',
  Testing: 'testing.svg',
  Refactoring: 'refactoring.svg',
  QA: 'qa.svg',
} as const

type TechLogoProps = {
  technology: keyof typeof technologies
}

function TechLogo({ technology }: TechLogoProps) {
  const modifier = technology === 'Django'
    ? ' tech-logo--django'
    : technology === 'Speedtest'
      ? ' tech-logo--speedtest'
      : ''

  return (
    <div className={`tech-logo${modifier}`}>
      <span className="tech-logo__icon">
        <img src={`/images/tech/${technologies[technology]}`} alt="" />
      </span>
      <span>{technology}</span>
    </div>
  )
}

export default TechLogo
