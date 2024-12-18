const LOG_PREFIX = '[@suspensive/react-query]'

export const logger = {
  log: (message: string) => console.log(LOG_PREFIX, message),
  error: (message: string) => console.error(LOG_PREFIX, message),
}
