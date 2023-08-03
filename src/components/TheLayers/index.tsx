import './layers.scss';
import base from '../../assets/img/layer-base.png';
export function TheLayers() {
  return (
    <div className="layers">
      <div className="layers__header">
        <div className="layers__title">Welcome to parallax</div>
        <div className="layers__subtitle">Fair Forest</div>
      </div>
      <div className="layer layers__base" style={{ backgroundImage: `url(${base})` }}></div>
      <div className="layer layers__middle"></div>
      <div className="layer layers__front"></div>
    </div>
  );
}
