function ClozeCard (text, cloze) {
  if (this instanceof ClozeCard) {
    this.fullText = text;
    this.cloze = cloze;
    this.partial = '';
    if (text.toUpperCase().indexOf(cloze.toUpperCase()) !== -1) {
      this.partial = text.replace(new RegExp(cloze, 'ig'), '...');
    }
    this.logError();
  } else {
    return new ClozeCard(text, cloze);
  }
}

ClozeCard.prototype.logError = function () {
  if (this.partial === '') {
    console.log(`Error: '${this.cloze}' is not in '${this.fullText}'`);
  }
};

module.exports = ClozeCard;
