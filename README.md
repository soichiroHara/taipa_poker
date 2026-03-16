# taipa_poker

任意のスポット（例: UTG vs CO SRP）を指定して、複数人間プレイヤーでポストフロップからプレイするポーカーWebアプリ。

## 技術スタック

| 役割 | 技術 |
|------|------|
| フロントエンド | React + TypeScript + Vite |
| バックエンド | NestJS + TypeScript + Socket.io |
| 状態管理 | Zustand |
| リアルタイム通信 | Socket.io (WebSocket) |
| DB（ゲーム状態） | Redis |
| DB（永続化） | PostgreSQL |
| モノレポ管理 | Turborepo |

## プロジェクト構造

```
taipa_poker/
├── apps/
│   ├── frontend/          # React + Vite + TypeScript
│   │   └── src/
│   │       ├── lib/
│   │       │   └── socket.ts       # Socket.ioクライアント
│   │       └── store/
│   │           └── gameStore.ts    # Zustandストア
│   └── backend/           # NestJS + Socket.io + TypeScript
│       └── src/
│           ├── game/
│           │   ├── game.gateway.ts  # WebSocketイベントハンドラ
│           │   ├── game.service.ts  # ゲームロジック
│           │   └── game.module.ts
│           ├── app.module.ts
│           └── main.ts
├── packages/
│   └── shared/            # フロント・バック共通型定義
│       └── src/
│           └── types/
│               ├── card.ts         # Card, Suit, Rank
│               ├── player.ts       # Player, Position, Hand
│               ├── action.ts       # PlayerAction, ActionType
│               ├── spot.ts         # Spot, PotType
│               ├── game.ts         # GameState, Street
│               └── socket.ts       # Socket.ioイベント型
├── turbo.json
└── package.json
```

## セットアップ

```bash
# 依存関係のインストール
npm install

# 環境変数の設定
cp apps/frontend/.env.example apps/frontend/.env
cp apps/backend/.env.example apps/backend/.env

# 開発サーバー起動（フロント・バック同時）
npm run dev
```

## 開発サーバー

- フロントエンド: http://localhost:5173
- バックエンド: http://localhost:3001
