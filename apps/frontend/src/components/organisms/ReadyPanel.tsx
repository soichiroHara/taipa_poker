import { Button } from '../atoms/Button';
import styles from './ReadyPanel.module.css';

interface Props {
  myPosition: string;
  onDeal: () => void;
  onLeave: () => void;
  error: string | null;
}

export function ReadyPanel({ myPosition, onDeal, onLeave, error }: Props) {
  return (
    <div className={styles.ready}>
      <p className={styles.msg}>✅ 2人揃いました！</p>
      <p className={styles.position}>
        あなたのポジション: <strong>{myPosition}</strong>
      </p>
      <div className={styles.actions}>
        <Button onClick={onDeal}>ディール</Button>
        <Button variant="secondary" onClick={onLeave}>退出</Button>
      </div>
      {error && <p className={styles.error}>エラー: {error}</p>}
    </div>
  );
}
