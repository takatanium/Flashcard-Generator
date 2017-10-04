function ClozeCard (text, cloze) {
  if (this instanceof ClozeCard) {
    this.fullText = text;
    this.cloze = cloze !== undefined ? cloze.trim() : '';
    if (this.cloze !== '' &&
        text.toUpperCase().indexOf(cloze.toUpperCase()) !== -1) {
      this.partial = text.replace(new RegExp(cloze, 'ig'), '...');
    } else {
      this.logError();
    }
  } else {
    return new ClozeCard(text, cloze);
  }
}

ClozeCard.prototype.logError = function () {
  if (this.partial === undefined) {
    if (this.cloze === '') console.log('Cloze cannot be empty');
    else console.log(`Error: '${this.cloze}' is not in '${this.fullText}'`);
  }
};

module.exports = ClozeCard;
