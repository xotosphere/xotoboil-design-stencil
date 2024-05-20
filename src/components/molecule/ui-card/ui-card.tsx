import { Component, Host, Prop, h } from '@stencil/core';

@Component({
  tag: 'ui-card',
  styleUrl: 'ui-card.scss',
  shadow: true,
})
export class UiCard {
  @Prop() text: string;

  render() {
    return (<Host>
      <div class="ui-card">
        <div class="ui-card__header">{(this.text || '')}</div>
        <div class="ui-card__action"><slot name="action" v-bind="scope" /></div>
      </div>
    </Host>);
  }
}
