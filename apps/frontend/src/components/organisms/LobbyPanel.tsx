import { useState } from 'react';
import type { SrpScenario } from '@taipa-poker/shared';
import { ScenarioBar } from '../molecules/ScenarioBar';
import { Button } from '../atoms/Button';
import styles from './LobbyPanel.module.css';

interface Props {
  scenario: SrpScenario;
  onScenarioChange: (scenario: SrpScenario) => void;
  onCreateRoom: () => void;
  onJoinRoom: (roomId: string) => void;
  error: string | null;
}

export function LobbyPanel({ scenario, onScenarioChange, onCreateRoom, onJoinRoom, error }: Props) {
  const [joinRoomIdInput, setJoinRoomIdInput] = useState('');

  const handleJoin = () => {
    if (!joinRoomIdInput.trim()) return;
    onJoinRoom(joinRoomIdInput.trim());
  };

  return (
    <div className={styles.lobby}>
      <ScenarioBar selected={scenario} onChange={onScenarioChange} />

      <div className={styles.lobbyActions}>
        <div className={styles.lobbySection}>
          <h2>ルームを作成する</h2>
          <p className={styles.lobbyDesc}>あなたが UTG（オリジナルレイザー）になります</p>
          <Button onClick={onCreateRoom}>ルームを作成</Button>
        </div>

        <div className={styles.lobbyDivider}>または</div>

        <div className={styles.lobbySection}>
          <h2>ルームに参加する</h2>
          <p className={styles.lobbyDesc}>あなたが CO（コーラー）になります</p>
          <input
            className={styles.roomIdInput}
            type="text"
            placeholder="ルームIDを入力"
            value={joinRoomIdInput}
            onChange={(e) => setJoinRoomIdInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleJoin()}
          />
          <Button onClick={handleJoin} disabled={!joinRoomIdInput.trim()}>
            参加する
          </Button>
        </div>
      </div>

      {error && <p className={styles.error}>エラー: {error}</p>}
    </div>
  );
}
