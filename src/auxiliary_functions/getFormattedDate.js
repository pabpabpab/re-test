export default function getFormattedDate(ctime) {
  const d = new Date(ctime * 1000);
  const day = String(d.getDate()).length > 1 ? d.getDate() : `0${d.getDate()}`;
  const month = String(d.getMonth()).length > 1 ? d.getMonth() : `0${d.getMonth()}`;
  const year = String(d.getFullYear());
  const hour = String(d.getHours()).length > 1 ? d.getHours() : `0${d.getHours()}`;
  const minute = String(d.getMinutes()).length > 1 ? d.getMinutes() : `0${d.getMinutes()}`;
  return `${day}.${month}.${year} ${hour}:${minute}`;
}
