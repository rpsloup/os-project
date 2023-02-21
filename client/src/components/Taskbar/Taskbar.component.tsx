import type { TaskbarPosition } from '../../typings/taskbarTypes';

import './Taskbar.styles.scss';

interface IProps {
  position?: TaskbarPosition;
}

const Taskbar = ({ position }: IProps): JSX.Element => (
  <div className={`taskbar${position ? ` taskbar--${position}` : ''}`} />
);

export default Taskbar;
