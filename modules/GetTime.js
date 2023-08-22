import { DateTime } from './Luxon.js';

export default function GetTime() {
  const time = document.getElementById('time');

  const now = DateTime.now();
  const formattedTime = now.toLocaleString(DateTime.DATETIME_MED);

  time.innerHTML = formattedTime;
}
