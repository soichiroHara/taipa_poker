// ゲームのビジネスロジック
// カードを配る、アクションを処理する、
// ポットを計算する等の処理を書く場所
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
