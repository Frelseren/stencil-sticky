import { r as registerInstance, h, a as Host } from './index-c0f353a6.js';

const stickyContainerCss = ".sticky-container{position:sticky;display:block;bottom:-1px;margin-bottom:1px}.sticky-container--stuck{box-shadow:0 -8px 20px rgba(0, 0, 0, 0.1)}";

const StickyContainer = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.stuck = false;
    }
    componentDidLoad() {
        this.observer = new IntersectionObserver(([e]) => {
            this.stuck = e.intersectionRatio < 1;
        }, {
            threshold: 1,
        });
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
        return (h(Host, { key: 'd7ba70daa76f1c4210459f5d248e2fd5245143b1', ref: (el) => (this.containerElement = el), class: {
                'sticky-container': true,
                'sticky-container--stuck': this.stuck,
            } }, h("slot", { key: 'bde180f532511d7b615598598dc4efed5bb95204' })));
    }
};
StickyContainer.style = stickyContainerCss;

export { StickyContainer as sticky_container };

//# sourceMappingURL=sticky-container.entry.js.map