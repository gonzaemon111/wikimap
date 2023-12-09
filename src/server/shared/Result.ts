export type Success<T> = {
  readonly isSucceeded: true;
  readonly data: T;
};

export type Failure<E extends Error> = {
  readonly isSucceeded: false;
  readonly data: E;
};

export type Result<T, E extends Error> = Success<T> | Failure<E>;

export function Success<T>(data: T): Success<T> {
  return {
    data,
    isSucceeded: true,
  };
}

export function Failure<E extends Error>(data: E): Failure<E> {
  return {
    data,
    isSucceeded: false,
  };
}
