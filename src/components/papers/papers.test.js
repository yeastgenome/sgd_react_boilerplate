import assert from 'assert';
import React from 'react';
import TestUtils from 'react-addons-test-utils';

import PapersIndex from './index';

describe('PapersIndex', () => {
  const renderer = TestUtils.createRenderer();
  renderer.render(<PapersIndex />);
  const output = renderer.getRenderOutput();
  const children = output.props.children;

  it('should be able to render two immediate child nodes', () => {
    assert.equal(children.length, 2);
  });

  it('should be able to render one <h1> node', () => {
    assert.equal(children[0].type, 'h1');
  });
});
