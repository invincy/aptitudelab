import test from 'node:test';
import assert from 'node:assert/strict';
import {touchState,touchObject} from '../dist/kids-interaction.js';
test('answer unlock requires each object once, including out-of-order touches',()=>{
 let touched=[];
 for(const i of [3,0,3,2]) touched=touchObject(4,touched,i);
 assert.deepEqual(touched,[3,0,2]);
 assert.equal(touchState(4,touched).ready,false);
 touched=touchObject(4,touched,1);
 assert.equal(touchState(4,touched).ready,true);
 assert.deepEqual(touched,[3,0,2,1]);
});
test('invalid touches never unlock an answer and empty scenes need no touches',()=>{
 assert.deepEqual(touchState(4,[0,0,-1,4,NaN,1.5]),{touched:[0],count:1,ready:false});
 assert.equal(touchState(0).ready,true);
});
