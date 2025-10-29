class Message {
  constructor(text) {
    this.text = text;
  }

  getText() {
    return this.text;
  }
}

class MessageDecorator {
  constructor(message) {
    this.message = message;
  }

  getText() {
    return this.message.getText();
  }
}

class PositiveMessageDecorator extends MessageDecorator {
  getText() {
    return this.message.getText().replace("horrível", "incrível");
  }
}

const msg = new Message("hoje o dia está horrível");
const positiveMsg = new PositiveMessageDecorator(msg);

console.log(msg.getText());
console.log(positiveMsg.getText());
