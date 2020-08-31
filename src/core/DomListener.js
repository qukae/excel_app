import {capitalize} from './utils';

export class DomListener {
  constructor($root, listeners = []) {
    if (!$root) {
      throw new Error('no root provided for DomListener');
    }
    this.$root = $root;
    this.listeners = listeners;
  }
  initDomListeners() {
    // console.log(this.listeners, this.$root);
    this.listeners.forEach((listener) => {
      const method = getMethodName(listener);
      if (!this[method]) {
        throw new Error(`Method ${method} has no implementation in ${this.name} component`);
      }
      // same as addEventListener
      this.$root.on(listener, this[method].bind(this));
    });
  }

  removeDomListeners() {

  }
}

// input => onInput
function getMethodName(eventName) {
  return 'on' + capitalize(eventName);
}
