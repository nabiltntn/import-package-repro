import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
// Importing modules from this package this way causes problems
import { TweenMax, CSSPlugin } from 'gsap/all';
import './main.html';

Template.hello.onCreated(function helloOnCreated() {
  // counter starts at 0
  this.counter = new ReactiveVar(0);
});

Template.hello.helpers({
  counter() {
    return Template.instance().counter.get();
  },
});