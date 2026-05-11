import { CardDisplay } from '../atoms/CardDisplay';
import styles from './HandDisplay.module.css';

interface Props {
  label: string;
  hand: [string, string];
}

export function HandDisplay({ label, hand }: Props) {
  return (
    <div className={styles.handCard}>
      <div className={styles.handLabel}>{label}</div>
      <div>
        {hand.map((card) => (
          <CardDisplay key={card} card={card} />
        ))}
      </div>
    </div>
  );
}
