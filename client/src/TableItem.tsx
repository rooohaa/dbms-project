import React from 'react';
import './TableItem.css';

interface TableItemProps{
    item?: any
}

const TableItem: React.FC<TableItemProps> = ({item}) => {
    return (
        <li className="item">
            <div className="main">
                <img className="man-img" src="https://cdn.sofifa.com/players/259/081/21_60.png" alt=""/>
                <div>
                    <div className="name">
                        <img src="https://cdn.sofifa.com/flags/ro.png" alt=""/>
                        <span>richars</span>
                    </div>
                    <div className="pos">
                        <span>LF SFA</span>
                    </div>
                </div>
            </div>
            <div className="secondary">
                <div className="ova"><span>16</span></div>
            </div>
            <div className="secondary">
                <div className="pot"><span>54</span></div>
            </div>
            <div className="secondary">
                <span>80</span>
            </div>
            <div className="team">
                <div className="name team-name">
                    <img className="team-img" src="https://cdn.sofifa.com/teams/19/30.png" alt=""/>
                    <span>West bromowich</span>
                </div>
                <div>
                    <span>2020</span>
                </div>
            </div>
            <div  className="secondary">
                <span>€425K</span>
            </div>
            <div  className="secondary">
                <span>€1K</span>
            </div>
            <div  className="secondary">
                <span>1353</span>
            </div>
            <div  className="secondary">
                <span>30</span>
            </div>
        </li>    
    );
}

export default TableItem;