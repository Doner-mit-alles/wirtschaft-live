declare module 'bootstrap' {
  export class Offcanvas {
    constructor(element: HTMLElement);
    show(): void;
    hide(): void;
  }

  export const Offcanvas: {
    getInstance(element: HTMLElement): Offcanvas | null;
  };
}