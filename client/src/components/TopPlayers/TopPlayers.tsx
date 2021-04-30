import React from 'react';
import './TopPlayers.css'

interface ITopPlayers{
    data: any,
    onClose: () => void
}

const TopPlayers: React.FC<ITopPlayers> = ({data, onClose}) => {

    const getAllPlayersProfile = (data: any) =>{
        return data.map((item: any, idx: number) => {
            return (
                <div  key={idx} className="profile-item">
                    <div className="profile-inner">
                        <span className="profile-title">ID</span>
                        <span>53116</span>
                    </div>
                    <div className="profile-inner">
                        <span className="profile-title">Real Face</span>
                        <span>No</span>
                    </div>
                    <div className="profile-inner">
                        <span className="profile-title">Body Type</span>
                        <span>Stocky (170-)</span>
                    </div>
                    <div className="profile-inner">
                        <span className="profile-title">Work Rate</span>
                        <span>High/ Low</span>
                    </div>
                    <div className="profile-inner">
                        <span className="profile-title">Preferred Foot</span>
                        <span>Right</span>
                    </div>
                    <div className="profile-inner">
                        <span className="profile-title">Age</span>
                        <span>30</span>
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