import { Launch } from '../../types/types';
import styles from './launch-card.module.css';

interface LaunchCardProps {
  launch: Launch;
}

export const LaunchCard: React.FC<LaunchCardProps> = ({ launch }) => {
  const formattedDate = new Date(launch.date_utc).toLocaleString();

  return (
    <div className={styles.card} data-testid="launch-card">
      <img src={launch.links.patch.small} alt={launch.name}/>
      <p>{launch.name} - {formattedDate}</p>

      <p>Core: </p>
      <ul>
        <li>Serial: {launch.cores[0].core.serial}</li>
        <li>id: {launch.cores[0].core.id}</li>
      </ul>

      <p>Payloads:</p>
      <ul>
        {launch.payloads.map(payload => <li key={payload.id}>{payload.id} - {payload.type}</li>)}
      </ul>

      {
        !launch.success &&
        <>
          <p>Launch failure reasons:</p>
          <ul>
            {launch.failures.map(failure => <li key={failure.reason}>{failure.reason}</li>)}
          </ul>
        </>
      }
      {launch.success && <p>Launch successful!</p>}
    </div>
  );
}

export default LaunchCard;