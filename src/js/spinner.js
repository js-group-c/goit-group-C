import { Spinner } from 'spin.js';

let opts = {
    lines: 13,
    length: 38,
    width: 17,
    radius: 45,
    scale: 1,
    corners: 1,
    speed: 1,
    rotate: 0,
    animation: 'spinner-line-fade-quick',
    direction: 1,
    color: '#ffffff',
    fadeColor: 'transparent',
    top: '50%',
    left: '50%',
    shadow: '0 0 1px transparent',
    zIndex: 2000000000,
    className: 'spinner',
    position: 'absolute',
};

const spinner = new Spinner(opts);

export const spinnerPlay = containerRef => {
  spinner.spin(containerRef);
};

export const spinnerStop = () => {
  spinner.stop();
};