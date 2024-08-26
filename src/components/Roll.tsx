import Dice from 'react-dice-roll';

const Roll: React.FC = () => {
  return (
    <div>
        <Dice onRoll={(value) => console.log(value)} />
    </div>
  )
}

export default Roll