import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('ngo-profile-detail', 'Integration | Component | ngo profile detail', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{ngo-profile-detail}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#ngo-profile-detail}}
      template block text
    {{/ngo-profile-detail}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
