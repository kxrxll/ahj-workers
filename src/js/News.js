export default class News {
  constructor(el) {
    this.el = el;
    this.field = el.querySelector('.news_field');
    this.refresh = el.querySelector('.news_update');
    this.labels = el.querySelectorAll('.post_label');
    this.descriptions = el.querySelectorAll('.post_description');
    this.images = el.querySelectorAll('.post_image');
    this.url = 'https://news-kxrxll.herokuapp.com/messages/unread';
    this.messages = [];
  }

  init() {
    this.request();
    this.refresh.addEventListener('click', this.reload);
  }

  reload() {
    this.messages = [];
    document.location.reload();
  }

  async request() {
    const request = await fetch(this.url);
    const response = await request.json();
    const { messages } = response;
    this.messages = messages;
    this.drawMessages();
  }

  drawMessages() {
    for (let i = 0; i < 3; i += 1) {
      this.labels[i].textContent = this.messages[i].subject;
      this.labels[i].classList.remove('hidden');
      this.descriptions[i].textContent = this.messages[i].description;
      this.descriptions[i].classList.remove('hidden');
      this.images[i].src = this.messages[i].image;
      this.images[i].classList.remove('hidden');
    }
  }
}
