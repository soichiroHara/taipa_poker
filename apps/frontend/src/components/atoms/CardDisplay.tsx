import styles from './CardDisplay.module.css';

const SUIT_META: Record<string, { symbol: string; colorClass: string }> = {
  s: { symbol: '♠', colorClass: styles.black },
  h: { symbol: '♥', colorClass: styles.red },
  d: { symbol: '♦', colorClass: styles.red },
  c: { symbol: '♣', colorClass: styles.black },
};

interface Props {
  card: string; // e.g. 'Ah', 'Kd'
}

export function CardDisplay({ card }: Props) {
  const rank = card.slice(0, -1);
  const suit = card.slice(-1);
  const { symbol, colorClass } = SUIT_META[suit] ?? { symbol: suit, colorClass: styles.black };
  return (
    <span className={`${styles.card} ${colorClass}`}>
      {rank}{symbol}
    </span>
  );
}
