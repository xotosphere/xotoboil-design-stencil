import { Component, Host, Prop, h } from '@stencil/core';

@Component({
  tag: 'ui-button',
  styleUrl: 'ui-button.scss',
  shadow: true,
})
export class UiButton {
  @Prop() text: string;

  render() {
    return (<Host><button>{(this.text || '')}</button></Host>);
  }
}
