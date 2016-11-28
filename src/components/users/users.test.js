import assert from 'assert';
import React from 'react';
import TestUtils from 'react-addons-test-utils';

import UsersIndex from './index';

describe('UsersIndex', () => {
  const renderer = TestUtils.createRenderer();
  renderer.render(<UsersIndex />);
  const output = renderer.getRenderOutput();
  const children = output.props.children;

  it('should be able to render two immediate child nodes', () => {
    assert.equal(children.length, 2);
  });

  it('should be able to render one <h1> node', () => {
    assert.equal(children[0].type, 'h1');
  });

  //getting the table element
  const tableElement = children[1];
  // getting the data rows within the table
  const dataElements = tableElement.props.children[1];
  it('should have the 4 child nodes', () => {
    assert.equal(dataElements.length, 3);
  });

});
