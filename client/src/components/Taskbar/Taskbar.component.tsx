import type { TaskbarPosition } from '../../typings/taskbarTypes';

import './Taskbar.styles.scss';

interface IProps {
  position?: TaskbarPosition;
  children?: React.ReactNode;
}

const Taskbar = ({ position, children }: IProps): JSX.Element => (
  <div className={`taskbar${position ? ` taskbar--${position}` : ''}`}>
    {children ?? null}
  </div>
);

export default Taskbar;
