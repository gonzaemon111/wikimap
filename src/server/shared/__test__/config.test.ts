import { getServerEnv } from '../config'; // このファイルのパスを正しく指定してください

describe('getServerEnv', () => {
  // テスト前に環境変数を設定します
  const originalEnv = process.env;

  beforeEach(() => {
    jest.resetModules(); // モジュールをリセットして環境変数をクリアします

    // // 必要な環境変数を設定します
    // process.env = {
    //   NODE_ENV: 'test',
    //   TZ: 'Asia/Tokyo',
    //   API_BASE_URL: 'https://api.example.com',
    //   AUTH0_SECRET: 'test_auth0_secret',
    //   AUTH0_BASE_URL: 'https://auth0.example.com',
    //   AUTH0_ISSUER_BASE_URL: 'https://auth0-issuer.example.com',
    //   AUTH0_CLIENT_ID: 'test_auth0_client_id',
    //   AUTH0_CLIENT_SECRET: 'test_auth0_client_secret',
    // };
  });

  afterEach(() => {
    // テスト後に元の状態に戻します
    process.env = originalEnv;
  });

  test('should parse serverEnv correctly', () => {
    // 期待される値と一致するかどうかを確認します
    expect(getServerEnv).toEqual({
      TZ: 'Asia/Tokyo',
      API_BASE_URL: 'https://api.example.com',
      AUTH0_SECRET: 'test_auth0_secret',
      AUTH0_BASE_URL: 'https://auth0.example.com',
      AUTH0_ISSUER_BASE_URL: 'https://auth0-issuer.example.com',
      AUTH0_CLIENT_ID: 'test_auth0_client_id',
      AUTH0_CLIENT_SECRET: 'test_auth0_client_secret',
    });
  });

  // 他にも必要に応じてテストを追加できます
});
