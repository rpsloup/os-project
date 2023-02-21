import Taskbar from '../Taskbar';

import './Desktop.styles.scss';

interface IProps {
  showTaskbar?: boolean;
}

const Desktop = ({ showTaskbar = true }: IProps): JSX.Element => (
  <div className="desktop">{showTaskbar ? <Taskbar /> : null}</div>
);

export default Desktop;
