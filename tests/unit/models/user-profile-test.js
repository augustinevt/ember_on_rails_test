import { moduleForModel, test } from 'ember-qunit';

moduleForModel('user-profile', 'Unit | Model | user profile', {
  // Specify the other units that are required for this test.
  needs: ['model:request']
});

test('it exists', function(assert) {
  let model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});
