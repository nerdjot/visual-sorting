import React from 'react'

function Bar(props) {
    let width = 100 / props.len;
    let maxHeight = props.maxHeight;
    let minHeight = props.minHeight;
    let height = 100 * (props.height - minHeight)/(maxHeight - minHeight);
    let colorContrast = 255;
    let redComponent = colorContrast* Math.min(1,  Math.max(0, ((height/100) - 0.5))*4.4);
    let blueComponent = colorContrast* Math.min(1, Math.max(0, ((100 - height)/100) - 0.5) *5);
    let greenComponent = colorContrast* Math.min(1, (1 - Math.abs(height - 50)/50) *2);
    let htH = props.htmlHeight


    let color = "" + redComponent +", " + greenComponent + ", " + blueComponent;
    let barStyle = {'height': `${height}%`, 'marginTop':`${Math.floor(htH*0.8) *(100-height)/100}px`, 
    'width': `${width}%`, 'backgroundColor':`rgb(${color})`}
  return (
    <div className="bar" style={barStyle}>
    </div>
  );
}

export default Bar;