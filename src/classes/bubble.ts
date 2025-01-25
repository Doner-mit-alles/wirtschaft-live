export class Bubble {
  private readonly top: number
  private readonly left: number
  private readonly width: number
  private readonly height: number
  private readonly rotation: number

  constructor() {
    this.top = Math.random() * 100
    this.left = Math.random() * 100
    this.width = Math.random() * 120 + 60
    this.height = this.width * 1.8
    this.rotation = Math.random() * 180
  }

  getTop(): number {
    return this.top
  }

  getLeft(): number {
    return this.left
  }

  getWidth(): number {
    return this.width
  }

  getHeight(): number {
    return this.height
  }

  getRotation(): number {
    return this.rotation
  }

  displayInfo(): void {
    console.log(
      `Bubble -> Top: ${this.getTop()}, Left: ${this.getLeft()}, Size: ${this.getWidth()}, Rotation: ${this.getRotation()}`
    )
  }
}
