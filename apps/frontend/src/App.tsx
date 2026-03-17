import { useEffect, useRef } from 'react';
import type { SrpScenario } from '@taipa-poker/shared';
import { socket } from './lib/socket';
import { useSrpStore } from './store/srpStore';
import './App.css';

const SCENARIOS: { value: SrpScenario; label: string }[] = [
  { value: 'UTG_vs_CO', label: 'UTG vs CO' },
];

const SUIT_META: Record<string, { symbol: string; colorClass: string }> = {
  s: { symbol: '♠', colorClass: 'black' },
  h: { symbol: '♥', colorClass: 'red' },
  d: { symbol: '♦', colorClass: 'red' },
  c: { symbol: '♣', colorClass: 'black' },
};

function CardDisplay({ card }: { card: string }) {
  const rank = card.slice(0, -1);
  const suit = card.slice(-1);
  const { symbol, colorClass } = SUIT_META[suit] ?? { symbol: suit, colorClass: 'black' };
  return (
    <span className={`card ${colorClass}`}>
      {rank}{symbol}
    </span>
  );
}

export default function App() {
  const { scenario, dealResult, error, setScenario, setDealResult, setError } = useSrpStore();

  // storeのsetterをrefで保持して依存配列から除外
  const setDealResultRef = useRef(setDealResult);
  const setErrorRef = useRef(setError);
  setDealResultRef.current = setDealResult;
  setErrorRef.current = setError;

  useEffect(() => {
    socket.connect();

    const onDealt = (result: Parameters<typeof setDealResult>[0]) => {
      setDealResultRef.current(result);
    };
    const onError = (payload: { message: string }) => {
      setErrorRef.current(payload.message);
    };

    socket.on('srp:dealt', onDealt);
    socket.on('srp:error', onError);

    return () => {
      socket.off('srp:dealt', onDealt);
      socket.off('srp:error', onError);
      socket.disconnect();
    };
  }, []); // マウント時のみ

  const handleDeal = () => {
    socket.emit('srp:deal', { scenario });
  };

  return (
    <div className="srp-container">
      <h1 className="srp-title">SRP ハンドドリル</h1>

      {/* シナリオ選択バー */}
      <div className="scenario-bar">
        {SCENARIOS.map((s) => (
          <button
            key={s.value}
            className={`scenario-btn${scenario === s.value ? ' active' : ''}`}
            onClick={() => setScenario(s.value)}
          >
            {s.label}
          </button>
        ))}
      </div>

      {/* ディールボタン */}
      <button className="deal-btn" onClick={handleDeal}>
        ディール
      </button>

      {/* エラー表示 */}
      {error && <p className="srp-error">エラー: {error}</p>}

      {/* ハンド表示 */}
      {dealResult && (
        <div className="hand-area">
          <div className="hand-card">
            <div className="hand-label">
              {dealResult.originalRaiser.position}（オリジナルレイザー）
            </div>
            <div>
              {dealResult.originalRaiser.hand.map((card) => (
                <CardDisplay key={card} card={card} />
              ))}
            </div>
          </div>

          <div className="hand-card">
            <div className="hand-label">
              {dealResult.caller.position}（Call）
            </div>
            <div>
              {dealResult.caller.hand.map((card) => (
                <CardDisplay key={card} card={card} />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
