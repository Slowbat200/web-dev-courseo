import { useState } from 'react';
import { Button } from './ui/button';

type Reward = {
  title: string;
  isPremium: boolean;
};

type BattlePassLevel = {
  level: number;
  pointsRequired: number;
  freeReward: Reward;
  premiumReward: Reward;
};

type BattlePassProps = {
  levels: BattlePassLevel[];
};

export const BattlePass = ({levels}:BattlePassProps) => {
    const [currentPoints, setCurrentPoints] = useState<number>(0);
    const [isPremium, setIsPremium] = useState<boolean>(false)

    const currentLevel = levels.find(level => level.pointsRequired <= currentPoints)

    return(
        <div className='p-4 border rounded'>
            <h1 className='text-xl font-bold'>Battle Pass</h1>
            <p>Points: {currentPoints}</p>
            <p>Level: {currentLevel ? currentLevel.level : 0}</p>
            <div className='mt-4'>
                <h2 className='text-lg font-bold'>Current Rewards</h2>
                <p>Free: {currentLevel ? currentLevel.freeReward.title : 'None'}</p>
                <p>Premium: {isPremium ? (currentLevel ? currentLevel.premiumReward.title : 'None') : 'Purchase Premium to unlock'}</p>
            </div>
            <Button onClick={() => setIsPremium(!isPremium)} variant='premium'>{isPremium ? 'Switch to free' : 'Upgrade to premium'}</Button>
        </div>
    )

}
