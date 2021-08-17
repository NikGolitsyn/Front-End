function createLogger() {
  const memory = [];

  function warn(str) {
    memory.push({ message: str, type: 'warn', dateTime: new Date() });
  }
  function error(str) {
    memory.push({ message: str, type: 'error', dateTime: new Date() });
  }
  function log(str) {
    memory.push({ message: str, type: 'log', dateTime: new Date() });
  }

  function getRecords(str) {
    if (str === 'log') {
      return memory
        .filter(el => el.type === 'log')
        .sort((currentEl, nextEl) => nextEl.dateTime - currentEl.dateTime);
    }
    if (str === 'error') {
      return memory
        .filter(el => el.type === 'error')
        .sort((currentEl, nextEl) => nextEl.dateTime - currentEl.dateTime);
    }
    if (str === 'warn') {
      return memory
        .filter(el => el.type === 'warn')
        .sort((currentEl, nextEl) => nextEl.dateTime - currentEl.dateTime);
    }
    return memory.sort((currentEl, nextEl) => nextEl.dateTime - currentEl.dateTime);
  }

  return { warn, error, log, getRecords };
}

const log1 = createLogger();
const log2 = createLogger();
log1.log('User logged in');
log1.warn('User tried to restricted page');
log1.log('User logged out');
console.log(log1.getRecord('log'));
console.log(log1.getRecord('error'));
console.log(log1.getRecord());
console.log(log2.getRecord());
