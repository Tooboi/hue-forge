import React from 'react';

class SaturationValuePicker extends React.Component {
  constructor(props) {
    super(props);
    this.canvasRef = React.createRef();
    this.state = {
      saturation: 0.5,
      value: 0.5,
    };
  }

  componentDidMount() {
    const canvas = this.canvasRef.current;
    const ctx = canvas.getContext('2d');

    // Draw the circle
    const radius = canvas.width / 2;
    const center = { x: radius, y: radius };
    ctx.beginPath();
    ctx.arc(center.x, center.y, radius, 0, 2 * Math.PI);
    ctx.stroke();

    // Fill the circle with the selected color
    const hue = this.props.hue || 0;
    const color = `hsl(${hue}, ${this.state.saturation * 100}%, ${this.state.value * 100}%)`;
    ctx.fillStyle = color;
    ctx.fill();

    // Add event listeners to handle mouse interactions
    canvas.addEventListener('mousedown', this.handleMouseDown);
    canvas.addEventListener('mousemove', this.handleMouseMove);
    document.addEventListener('mouseup', this.handleMouseUp);
  }

  componentWillUnmount() {
    const canvas = this.canvasRef.current;
    canvas.removeEventListener('mousedown', this.handleMouseDown);
    canvas.removeEventListener('mousemove', this.handleMouseMove);
    document.removeEventListener('mouseup', this.handleMouseUp);
  }

  handleMouseDown = (event) => {
    this.updateSaturationAndValue(event);
    this.isDragging = true;
  };

  handleMouseMove = (event) => {
    if (this.isDragging) {
      this.updateSaturationAndValue(event);
    }
  };

  handleMouseUp = () => {
    this.isDragging = false;
  };

  updateSaturationAndValue(event) {
    const canvas = this.canvasRef.current;
    const rect = canvas.getBoundingClientRect();
    const radius = canvas.width / 2;
    const center = { x: radius, y: radius };
    const x = event.clientX - rect.left - center.x;
    const y = -(event.clientY - rect.top - center.y);
    const distanceFromCenter = Math.sqrt(x ** 2 + y ** 2);
    let saturation = distanceFromCenter / radius;
    if (saturation > 1) {
      saturation = 1;
    }
    let value = (radius - distanceFromCenter) / radius;
    if (value < 0) {
      value = 0;
    }
    this.setState({ saturation, value });
    if (this.props.onChange) {
      const hue = this.props.hue || 0;
      const color = `hsl(${hue}, ${saturation * 100}%, ${value * 100}%)`;
      this.props.onChange(color);
    }
  }

  render() {
    return (
      <canvas
        ref={this.canvasRef}
        width={200}
        height={200}
        style={{ border: '1px solid black' }}
      />
    );
  }
}

export default SaturationValuePicker;
