import { useRef, useEffect } from 'react'
import p5 from 'p5'

const FractalTree = () => {
  const sketch = useRef((p) => {
    let angle = 0
    let angleDirection = 1

    p.setup = () => {
      p.createCanvas(400, 400)
    }

    p.draw = () => {
      p.background('#121B32')
      //p.background(255)

      p.stroke(225)
      p.translate(200, 400)

      // Adjust the angle increment to make rotation slower
      const rotationSpeed = p.radians(0.3) // Adjust the value for

      // Check if the angle exceeds a particular value
      if (p.degrees(angle) >= 90 || p.degrees(angle) <= -90) {
        // If it exceeds, change the direction of rotation
        angleDirection = -angleDirection
      }

      angle += angleDirection * rotationSpeed

      branch(p, 70, angle)
    }

    function branch(p, len, a) {
      p.line(0, 0, 0, -len)
      p.translate(0, -len)
      if (len > 4) {
        p.push()
        p.rotate(a)
        branch(p, len * 0.67, a)
        p.pop()
        p.push()
        p.rotate(-a)
        branch(p, len * 0.67, a)
        p.pop()
      }
    }
  }).current

  const sketchRef = useRef()

  useEffect(() => {
    // Create the p5 instance on component mount
    sketchRef.current = new p5(sketch, 'sketch-container')

    // Clean up on component unmount
    return () => {
      sketchRef.current.remove()
    }
  }, [sketch])

  return (
    <div>
      {/* Create a container for your p5 sketch */}
      <div id='sketch-container'></div>
    </div>
  )
}

export default FractalTree
