import { useEffect, useRef } from 'react';
import type { DealResult } from '@taipa-poker/shared';
import { socket } from '../../lib/socket';
import { useSrpStore } from '../../store/srpStore';
import { LobbyPanel } from '../organisms/LobbyPanel';
import { WaitingPanel } from '../organisms/WaitingPanel';
import { ReadyPanel } from '../organisms/ReadyPanel';
import { DealtPanel } from '../organisms/DealtPanel';
import styles from './SrpDrillPage.module.css';

export function SrpDrillPage() {
  const {
    scenario, setScenario,
    roomPhase, roomId, myPosition, myHand, roomError,
    setRoomCreated, setRoomJoined, setRoomReady, setRoomDealt, setRoomError, resetRoom,
  } = useSrpStore();

  // storeのsetterをrefで保持（useEffect依存配列から除外するため）
  const setRoomCreatedRef = useRef(setRoomCreated);
  const setRoomJoinedRef = useRef(setRoomJoined);
  const setRoomReadyRef = useRef(setRoomReady);
  const setRoomDealtRef = useRef(setRoomDealt);
  const setRoomErrorRef = useRef(setRoomError);
  setRoomCreatedRef.current = setRoomCreated;
  setRoomJoinedRef.current = setRoomJoined;
  setRoomReadyRef.current = setRoomReady;
  setRoomDealtRef.current = setRoomDealt;
  setRoomErrorRef.current = setRoomError;

  useEffect(() => {
    socket.connect();

    socket.on('room:created', ({ roomId, position }) => {
      setRoomCreatedRef.current(roomId, position);
    });
    socket.on('room:joined', ({ position }) => {
      setRoomJoinedRef.current(position);
    });
    socket.on('room:ready', ({ roomId }) => {
      setRoomReadyRef.current(roomId);
    });
    socket.on('room:dealt', (result: DealResult) => {
      setRoomDealtRef.current(result);
    });
    socket.on('room:error', ({ message }) => {
      setRoomErrorRef.current(message);
    });

    return () => {
      socket.off('room:created');
      socket.off('room:joined');
      socket.off('room:ready');
      socket.off('room:dealt');
      socket.off('room:error');
      socket.disconnect();
    };
  }, []);

  const handleCreateRoom = () => {
    console.log("send room")
    socket.emit('room:create', { scenario });
  };

  const handleJoinRoom = (roomId: string) => {
    socket.emit('room:join', { roomId });
  };

  const handleDeal = () => {
    if (!roomId) return;
    socket.emit('room:deal', { roomId });
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>SRP ハンドドリル</h1>

      {roomPhase === 'lobby' && (
        <LobbyPanel
          scenario={scenario}
          onScenarioChange={setScenario}
          onCreateRoom={handleCreateRoom}
          onJoinRoom={handleJoinRoom}
          error={roomError}
        />
      )}

      {roomPhase === 'waiting' && roomId && (
        <WaitingPanel
          roomId={roomId}
          onBack={resetRoom}
          error={roomError}
        />
      )}

      {roomPhase === 'ready' && myPosition && (
        <ReadyPanel
          myPosition={myPosition}
          onDeal={handleDeal}
          onLeave={resetRoom}
          error={roomError}
        />
      )}

      {roomPhase === 'dealt' && myPosition && myHand && (
        <DealtPanel
          myPosition={myPosition}
          myHand={myHand}
          onRedeal={handleDeal}
          onLeave={resetRoom}
          error={roomError}
        />
      )}
    </div>
  );
}
