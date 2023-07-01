export default interface IBeforeAuthRepository {
  signIn(accessKey: string, secretKey: string): Promise<string>;
}
