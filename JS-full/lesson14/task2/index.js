export default function createMessenger() {
  let message = 'Just learn it';
  let sender = 'Gromcode';

  function sendMessage(name) {
    console.log(`${name}, ${message}! Your ${sender}`);
  }

  function setMessage(textMessage) {
    message = textMessage;
  }

  function setSender(senderName) {
    sender = senderName;
  }

  return { sendMessage, setMessage, setSender };
}

const message1 = createMessenger();
console.log(message1.sendMessage('Nikita'));
console.log(message1.setMessage('Good job'));
console.log(message1.sendMessage('Nikita'));
