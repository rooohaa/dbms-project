import React from 'react';
import { IPlayer } from '../../types';
import './TopPlayers.css'

interface ITopPlayers{
    data: IPlayer[],
    onClose: () => void
}

const TopPlayers: React.FC<ITopPlayers> = ({data, onClose}) => {

    const getAllPlayersProfile = (data: IPlayer[]) =>{
        return data.map((item: IPlayer, idx: number) => {
            return (
                <div  key={idx} className="profile-item">
                    <div className="profile-inner">
                        <span className="profile-title">ID</span>
                        <span>{item.PLAYER_ID}</span>
                    </div>
                    <div className="profile-inner">
                        <span className="profile-title">Name</span>
                        <span>{item.PLAYER_NAME}</span>
                    </div>
                    <div className="profile-inner">
                        <span className="profile-title">Age</span>
                        <span>{item.PLAYER_AGE}</span>
                    </div>
                    <div className="profile-inner">
                        <span className="profile-title">Overall score</span>
                        <span>{item.PLAYER_OVERALL_SCORE}</span>
                    </div>
                    <div className="profile-inner">
                        <span className="profile-title">Club</span>
                        <span>{item.PLAYER_CLUB}</span>
                    </div>
                    <div className="profile-inner">
                        <span className="profile-title">Value</span>
                        <span>{item.PLAYER_VALUE}</span>
                    </div>
                </div>
            )
        })
    }

    return (
        <div className="overlay">
            <div className="profile-wrapper">
                <h1 className="profile-header">Top 10</h1>
                <div className="profile-modal">
                    {getAllPlayersProfile(data)}
                </div>
                <button className="exit-btn profile-exit-btn" onClick={onClose}>
                    &times;
                </button>
            </div>
        </div>
    );
}

export { TopPlayers };