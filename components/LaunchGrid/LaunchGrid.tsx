import { LaunchesQueryResponse } from '../../types/types';
import LaunchCard from '../LaunchCard/LaunchCard';
import styles from './launch-grid.module.css';

interface LaunchGridProps {
  launches: LaunchesQueryResponse,
};

export const LaunchGrid: React.FC<LaunchGridProps> = ({ launches }) => {
  return (
    <div className={styles.grid} data-testid="launch-grid">
      {launches.docs.map(launch => <LaunchCard launch={launch} key={launch.id} />)}
    </div>
  )
}

export default LaunchGrid;