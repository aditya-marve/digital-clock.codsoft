const updateClock = () => {
  const now = new Date();
  const day = now.getDate().toString().padStart(2, '0');
  const month = (now.getMonth() + 1).toString().padStart(2, '0');
  const year = now.getFullYear();

  const weekday = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][now.getDay()];

  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const seconds = now.getSeconds().toString().padStart(2, '0');

  const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

  document.getElementById('date').textContent = `${day}-${month}-${year} ${weekday}`;
  document.getElementById('time').textContent = `${hours}:${minutes}:${seconds}`;
  document.getElementById('timezone').textContent = `Time Zone: ${timezone}`;
};

updateClock();
setInterval(updateClock, 1000);
