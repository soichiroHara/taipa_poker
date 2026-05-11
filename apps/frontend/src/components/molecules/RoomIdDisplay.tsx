import { useState } from 'react';
import { Button } from '../atoms/Button';
import styles from './RoomIdDisplay.module.css';

interface Props {
  roomId: string;
}

export function RoomIdDisplay({ roomId }: Props) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(roomId).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className={styles.roomIdDisplay}>
      <span className={styles.label}>ルームID</span>
      <span className={styles.value}>{roomId}</span>
      <Button variant="secondary" onClick={handleCopy}>
        {copied ? 'コピー済み ✓' : 'コピー'}
      </Button>
    </div>
  );
}
