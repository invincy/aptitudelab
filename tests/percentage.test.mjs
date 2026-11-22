import test from 'node:test';
import assert from 'node:assert/strict';
import {percentageChange} from '../dist/percentage-math.js';
test('increase and decrease use the starting value',()=>{assert.equal(percentageChange(400,25).final,500);assert.equal(percentageChange(400,25,'decrease').final,300);});
test('equal opposite percentages use a new base and do not cancel',()=>{const c=percentageChange(500,20,'increase',20,'decrease');assert.equal(c.afterFirst,600);assert.equal(c.secondChange,120);assert.equal(c.final,480);assert.equal(c.net,-20);assert.equal(c.netPercent,-4);});
test('two increases compound and two decreases compound',()=>{assert.equal(percentageChange(400,25,'increase',20,'increase').final,600);assert.equal(percentageChange(400,25,'decrease',20,'decrease').final,240);});
test('zero percent and complete decrease remain defined',()=>{assert.equal(percentageChange(400,0).final,400);const c=percentageChange(400,100,'decrease',100,'increase');assert.equal(c.final,0);assert.equal(c.secondChange,0);assert.equal(c.netPercent,-100);});
test('the displayed net percentage uses the original base',()=>{const c=percentageChange(400,25,'increase',25,'decrease');assert.equal(c.final,375);assert.equal(c.netPercent,-6.25);});
