'use strict';
const {expect} = require('chai');
const LinkedList = require('./linkedlist');
const {isLoop, findLoop} = require('./isloop');

const numbers = [0, 1,2,3,4,5,6,7,8,9,10];
const letters = ['a','b','c','d','e','f','g','h','i'];
const emojis = ['🥚','🐣','🦅 ', '👾'];



//These LLs have loops!
const test1 = new LinkedList();
test1.addToHead(-1);
numbers.forEach((val) => test1.addToTail(val));
test1.getNthNode(6).next = test1.getNthNode(3);

const test2 = new LinkedList();
test2.addToHead('z');
letters.forEach((letter) => test2.addToTail(letter));
test2.getNthNode(9).next = test2.getNthNode(1);

// This LL has no loop!
const test3 = new LinkedList();
test3.addToHead('📺');
emojis.forEach((el) => test3.addToTail(el));

describe('isLoop function', function () {
  it('returns true if linked list contains a loop', function () {
    expect(isLoop(test1)).to.equal(true);
    expect(isLoop(test2)).to.equal(true);
  });

  it('returns false if linked list contains no loop', function () {
    expect(isLoop(test3)).to.equal(false);
  });

  // OPTIONAL: WRITE YOUR OWN TESTS HERE. (Include >=1 edge case.)
});

// EXTRA CREDIT: test the findLoop function
describe('findLoop function', function () {
  it('returns beginning loop node if linked list contains a loop', function () {
    expect(findLoop(test1).value).to.equal(test1.getNthNode(6).next.value);
    expect(findLoop(test2).value).to.equal(test2.getNthNode(9).next.value);
  });

  it('returns false if linked list contains no loop', function () {
    expect(findLoop(test3)).to.equal(false);
  });
});