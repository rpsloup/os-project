import Taskbar from '../Taskbar';

import type { TaskbarPosition } from '../../typings/taskbarTypes';

import './Desktop.styles.scss';

interface IProps {
  showTaskbar?: boolean;
  taskbarPosition?: TaskbarPosition;
}

const Desktop = ({
  showTaskbar = true,
  taskbarPosition,
}: IProps): JSX.Element => (
  <div className="desktop">
    {showTaskbar ? <Taskbar position={taskbarPosition} /> : null}
  </div>
);

export default Desktop;
