import { Component, Host, h, State } from '@stencil/core';

@Component({
  tag: 'sticky-container',
  styleUrl: 'sticky-container.scss',
})
export class StickyContainer {
  @State() stuck = false;

  private containerElement?: HTMLElement;
  private observer: IntersectionObserver;

  componentDidLoad() {
    this.observer = new IntersectionObserver(
      ([e]) => {
        this.stuck = e.intersectionRatio < 1;
      },
      {
        threshold: 1,
      }
    );

    if (this.containerElement) {
      this.observer.observe(this.containerElement);
    }
  }

  disconnectedCallback() {
    if (this.containerElement) {
      this.observer.unobserve(this.containerElement);
    }
  }

  render() {
    return (
      <Host
        ref={(el) => (this.containerElement = el)}
        class={{
          'sticky-container': true,
          'sticky-container--stuck': this.stuck,
        }}
      >
        <slot />
      </Host>
    );
  }
}
