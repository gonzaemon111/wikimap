import { AxiosHeaders, Method } from 'axios';
import { Failure, Success, type Result } from '@/server/shared/Result';
import { logger } from '@/server/shared/logger';
import { restAPIClient } from '../library/RestAPIClient';

interface Args<P> {
  readonly method: Method;
  readonly path: string;
  readonly params: P;
  readonly headers?: AxiosHeaders;
  readonly logName?: string;
}

export async function RestAPIClientAdapter<T, P>({
  params,
  path,
  headers,
  method,
  logName,
}: Args<P>): Promise<Result<T, Error>> {
  try {
    const response = await restAPIClient<T>({
      url: path,
      method,
      params,
      headers,
    });

    return Success(response.data);
  } catch (e) {
    const error = JSON.stringify({ name: logName, message: e });
    logger.error(error);
    return Failure(new Error(error));
  }
}
