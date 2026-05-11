import { RoomIdDisplay } from '../molecules/RoomIdDisplay';
import { Button } from '../atoms/Button';
import styles from './WaitingPanel.module.css';

interface Props {
  roomId: string;
  onBack: () => void;
  error: string | null;
}

export function WaitingPanel({ roomId, onBack, error }: Props) {
  return (
    <div className={styles.waiting}>
      <p className={styles.msg}>相手の参加を待っています...</p>
      <RoomIdDisplay roomId={roomId} />
      <p className={styles.hint}>このIDを相手に共有してください</p>
      <Button variant="secondary" onClick={onBack}>戻る</Button>
      {error && <p className={styles.error}>エラー: {error}</p>}
    </div>
  );
}
