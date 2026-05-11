import type { SrpScenario } from '@taipa-poker/shared';
import styles from './ScenarioBar.module.css';

const SCENARIOS: { value: SrpScenario; label: string }[] = [
  { value: 'UTG_vs_CO', label: 'UTG vs CO' },
];

interface Props {
  selected: SrpScenario;
  onChange: (scenario: SrpScenario) => void;
}

export function ScenarioBar({ selected, onChange }: Props) {
  return (
    <div className={styles.scenarioBar}>
      {SCENARIOS.map((s) => (
        <button
          key={s.value}
          className={`${styles.btn}${selected === s.value ? ` ${styles.active}` : ''}`}
          onClick={() => onChange(s.value)}
        >
          {s.label}
        </button>
      ))}
    </div>
  );
}
