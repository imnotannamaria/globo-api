export function formatStartAndEndTime(time : string) {
  const formattedTime = time.substring(0, time.length - 9);
  return formattedTime;
}
