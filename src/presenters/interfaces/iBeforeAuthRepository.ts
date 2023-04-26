export default interface IBeforeAuthRepository {
  signIn(
    email: string,
    password: string
  ): Promise<{
    Authorization: string;
  }>;
}
