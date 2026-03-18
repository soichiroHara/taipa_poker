import { HandDisplay } from '../molecules/HandDisplay';
import { Button } from '../atoms/Button';
import styles from './DealtPanel.module.css';

interface Props {
  myPosition: string;
  myHand: [string, string];
  onRedeal: () => void;
  onLeave: () => void;
  error: string | null;
}

export function DealtPanel({ myPosition, myHand, onRedeal, onLeave, error }: Props) {
  return (
    <div className={styles.dealt}>
      <p className={styles.position}>
        あなたのポジション: <strong>{myPosition}</strong>
      </p>
      <div className={styles.handArea}>
        <HandDisplay label="あなたのハンド" hand={myHand} />
      </div>
      <div className={styles.actions}>
        <Button onClick={onRedeal}>再ディール</Button>
        <Button variant="secondary" onClick={onLeave}>退出</Button>
      </div>
      {error && <p className={styles.error}>エラー: {error}</p>}
    </div>
  );
}
