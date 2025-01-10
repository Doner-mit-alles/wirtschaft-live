declare module 'bootstrap' {
  export class Offcanvas {
    constructor(element: HTMLElement)
    show(): void
    hide(): void

    static getInstance(element: HTMLElement): Offcanvas | null
  }
}
