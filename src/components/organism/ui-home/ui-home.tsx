import { Component, Host, Prop, h } from '@stencil/core';

@Component({
  tag: 'ui-home',
  styleUrl: 'ui-home.scss',
  shadow: true,
})
export class UiHome {
  @Prop() text: string;

  render() {
    return (<Host>
      <div class="ui-home">
        <div class="ui-home__header">
          {(this.text || '')}
        </div>
        <div class="ui-home__content">
          <slot name="content" v-bind="scope" />
        </div>

      </div>
    </Host>);
  }
}
